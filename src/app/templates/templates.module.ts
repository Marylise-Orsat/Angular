import { MessagesListComponent } from './../messaging/messages-list/messages-list.component';
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
    MessagesListComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ]
})
export class TemplatesModule { }
