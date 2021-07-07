import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifsComponent } from './notifs/notifs.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessagesWritingComponent } from './messages-writing/messages-writing.component';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    NbCardModule
  ],
  exports: [ ]
})
export class MessagingModule { }
