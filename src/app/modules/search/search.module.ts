import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from "./search.routes";
import { SearchContainerComponent } from "./search.component";
// import { SearchModule } from "../../components/search/search.module";

@NgModule({
    imports: [ 
        CommonModule,
        routing,
        // SearchModule
    ],
    declarations: [ SearchContainerComponent ],
    exports: [ SearchContainerComponent ]
})
export class SearchContainerModule {}