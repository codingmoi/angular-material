import { NgModule } from '@angular/core';
import { 
    MatToolbarModule,
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatButtonModule,
    MatMenuModule
} from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatMenuModule
    ],
    exports: [
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatButtonModule,
        MatMenuModule
    ]
})
export class MaterialModule { }