import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "categoryList",
    pure: true
})
export class CategoryListPipe implements PipeTransform { 
    transform(mediaItems: any[]): string {
        const categories: any[] = [];
        mediaItems.forEach(mediaItem => {
            if(categories.indexOf(mediaItem.category) <= -1) {
                categories.push(mediaItem.category);
            }
        });
        return categories.join(", ").concat("\n");
    }
}
