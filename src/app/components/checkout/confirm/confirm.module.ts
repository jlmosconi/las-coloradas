import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from "./confirm.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ConfirmComponent ],
    exports: [ ConfirmComponent ]
})
export class ConfirmModule {}