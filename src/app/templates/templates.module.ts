import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import {SlideMenuModule} from 'primeng/slidemenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SlideMenuModule,
    BrowserAnimationsModule
  ]
})
export class TemplatesModule { }
