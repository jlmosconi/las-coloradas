import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoResultsFoundComponent } from "./no-results-found.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ NoResultsFoundComponent ],
    exports: [ NoResultsFoundComponent ]
})
export class NoResultsFoundModule {}