import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingContainerComponent } from "./shipping.component";

@NgModule({
    imports: [ CommonModule ],
    declarations: [ ShippingContainerComponent ],
    exports: [ ShippingContainerComponent ]
})
export class ShippingContainerModule {}