import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { ContactComponent } from './contact/contact.component';
import { SecurityComponent } from './security/security.component';
import { SoftwareComponent } from './software/software.component';
import { DataCenterComponent } from './data-center/data-center.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
       
        ContactComponent,     
        SecurityComponent,
        SoftwareComponent,
        DataCenterComponent,
        AboutUsComponent,
        PageNotFoundComponent
    ]
})
export class SectionsModule { }
