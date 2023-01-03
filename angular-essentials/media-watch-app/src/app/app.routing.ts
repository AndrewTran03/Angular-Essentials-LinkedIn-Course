import { Routes, RouterModule } from "@angular/router";
//import { MediaItemFormComponent } from "./media-item-form.component";
import { MediaItemListComponent } from "./media-item-list.component";

const appRoutes: Routes = [
    //{ path: "add", component: MediaItemFormComponent},
    {
        path: "add", 
        loadChildren: () => import("./new-item/new-item.module").then(m => m.NewItemModule)
    },
    { path: ":medium", component: MediaItemListComponent },
    { path: "", pathMatch: "full", redirectTo: "all" }
];

export const routing = RouterModule.forRoot(appRoutes);
