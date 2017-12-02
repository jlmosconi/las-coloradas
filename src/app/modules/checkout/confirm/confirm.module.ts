import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmContainerComponent } from "./confirm.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ConfirmContainerComponent ],
    exports: [ ConfirmContainerComponent ]
})
export class ConfirmContainerModule {}