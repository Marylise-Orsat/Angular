import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifsComponent } from './notifs/notifs.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessagesWritingComponent } from './messages-writing/messages-writing.component';



@NgModule({
  declarations: [
    NotifsComponent,
    MessagesListComponent,
    MessagesWritingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MessagingModule { }
