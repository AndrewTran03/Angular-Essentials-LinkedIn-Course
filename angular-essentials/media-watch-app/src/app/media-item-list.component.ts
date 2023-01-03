import { Component, OnInit } from '@angular/core';
import { MediaItemService, MediaItem } from './media-item.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'mw-media-item-list',
    templateUrl: './media-item-list.component.html',
    styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
    medium = '';
    mediaItems!: MediaItem[];

    constructor(private mediaItemService: MediaItemService,
        private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        //this.getMediaItems(this.medium);
        this.activatedRoute.paramMap
            .subscribe((paramMap: any) => {
                let medium: string = paramMap.get("medium");
                if(medium.toLowerCase() === "all") {
                    medium = "";
                }
                this.getMediaItems(medium);
            });
    }

    onMediaItemDelete(mediaItem: MediaItem) {
        //this.mediaItemService.remove(mediaItem);
        this.mediaItemService.remove(mediaItem)
            .subscribe(() => {
                this.getMediaItems(this.medium);
            });
    }

    //GET HTTP Call DOES NOT CURRENTLY WORK - ERROR Received by Console: 'this.backend.handle is not a function'
    getMediaItems(medium: any) {
        this.medium = medium;
        this.mediaItemService.get(medium)
            .subscribe(mediaItems => {
                this.mediaItems = mediaItems;
            });
    }
}