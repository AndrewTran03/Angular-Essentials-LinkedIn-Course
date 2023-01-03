import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./category.list.pipe";
//import { FormsModule } from "@angular/forms";
//import { ReactiveFormsModule } from "@angular/forms";
//import { MediaItemFormComponent } from "./media-item-form.component";
import { MediaItemService } from "./media-item.service";
import { lookupListToken, lookupLists } from "./providers";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { MockXHRBackend } from "./mock-xhr-backend";
import { routing } from "./app.routing";
//import { NewItemModule } from "./new-item/new-item.module";
import { CategoryListComponent } from "./new-item/category-list.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        routing,
        //NewItemModule
        //FormsModule
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        CategoryListComponent,
        FavoriteDirective,
        CategoryListPipe
    ],
    providers: [
        { provide: lookupListToken, useValue: lookupLists },
        { provide: HttpXhrBackend, useValue: MockXHRBackend }
        //MediaItemService
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
