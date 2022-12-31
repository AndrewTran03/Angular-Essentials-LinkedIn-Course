import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { MediaItemService } from './media-item.service';
import { lookupListToken } from './providers';

@Component({
    selector: 'mw-media-item-form',
    templateUrl: './media-item-form.component.html',
    styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
    form!: FormGroup;

    constructor(
        private formBuilder: FormBuilder, 
        private mediaItemService: MediaItemService, 
        @Inject(lookupListToken) public lookupLists: any) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            medium: this.formBuilder.control('Movies'),
            name: this.formBuilder.control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            category: this.formBuilder.control(''),
            year: this.formBuilder.control('')
            //year: this.formBuilder.control('', this.yearValidator),
        });
    }

    //Custom Validator Not Working
    yearValidator(control: FormControl) {
        if (control.value.trim().length === 0) {
            return null;
        }
        const year = parseInt(control.value, 10);
        const minYear = 1800;
        const maxYear = 2500;
        if (year >= minYear && year <= maxYear) {
            return null;
        } else {
            //return { year: true };
            return {
                year: {
                    minYear: minYear,
                    maxYear: maxYear
                }
            }
        }
    }

    onSubmit(mediaItem: any) {
        console.log("Added: ", mediaItem);
        this.mediaItemService.add(mediaItem);
    }
}