import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { SecurityComponent } from './sections/security/security.component';
import { SoftwareComponent } from './sections/software/software.component';
import { DataCenterComponent } from './sections/data-center/data-center.component';
import { AboutUsComponent } from './sections/about-us/about-us.component';
import { ContactComponent } from './sections/contact/contact.component';
import { PrivacyPolicyComponent } from './sections/privacy-policy/privacy-policy.component';
import { PageNotFoundComponent} from './sections/page-not-found/page-not-found.component';


const routes: Routes =[
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: '#/**',          component: PageNotFoundComponent},
    { path: 'home',          component: ComponentsComponent },
    { path: 'security',      component: SecurityComponent  },
    { path: 'software',      component: SoftwareComponent },
    { path: 'contact',       component: ContactComponent },
    { path: 'datacenter',    component:  DataCenterComponent },
    { path: 'aboutUs',       component: AboutUsComponent },
    { path: 'privacy',       component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
