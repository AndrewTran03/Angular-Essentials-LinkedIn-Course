import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class MediaItemService {
    /*
    mediaItems: Array<any> = [
        {
            id: 1,
            name: 'Firebug',
            medium: 'Series',
            category: 'Science Fiction',
            year: 2010,
            watchedOn: 1294166565384,
            isFavorite: false
        },
        {
            id: 2,
            name: 'The Small Tall',
            medium: 'Movies',
            category: 'Comedy',
            year: 2015,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 3,
            name: 'The Redemption',
            medium: 'Movies',
            category: 'Action',
            year: 2016,
            watchedOn: null,
            isFavorite: false
        }, {
            id: 4,
            name: 'Hoopers',
            medium: 'Series',
            category: 'Drama',
            year: null,
            watchedOn: null,
            isFavorite: true
        }, {
            id: 5,
            name: 'Happy Joe: Cheery Road',
            medium: 'Movies',
            category: 'Action',
            year: 2015,
            watchedOn: 1457166565384,
            isFavorite: false
        }
    ];
    */

    constructor(private http: HttpClient) { }

    get(medium: string) {
        const getOptions = {
            params: { medium }
        };
        return this.http.get<MediaItemResponse>("mediaItems", getOptions)
            .pipe(
                map((response: MediaItemResponse) => { 
                    return response.mediaItems; 
                }),
                catchError(this.handleError)
            );
        //return this.http.get<MediaItemResponse>("mediaitems").pipe(map(response => { return response.mediaItems; }));
        //return this.mediaItems;
    }

    add(newMediaItem: MediaItem) {
        //this.mediaItems.push(newMediaItem);
        //return this.http.post('mediaitems', newMediaItem);
        return this.http.post('mediaitems', newMediaItem)
            .pipe(catchError(this.handleError));
    }

    remove(mediaItem: MediaItem) {
        /*
        const index = this.mediaItems.indexOf(mediaItem);
        if(index >= 0) {
            this.mediaItems.splice(index, 1);
        }
        */
        //return this.http.delete(`mediaitems/${mediaItem.id}`)
        return this.http.delete(`mediaitems/${mediaItem.id}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return throwError("A date error occurred. Please try again!");
    }
}

export interface MediaItem {
    id: number;
    name: string;
    medium: string;
    category: string;
    year: number | null;
    watchedOn: number | null;
    isFavorite: boolean
}

interface MediaItemResponse {
    mediaItems: MediaItem[]
}