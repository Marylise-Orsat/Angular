import { MessagingModule } from './../messaging/messaging.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ContentComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MessagingModule
  ]
})
export class TemplatesModule { }
