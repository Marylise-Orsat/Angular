import { MessagesListComponent } from './messages-list/messages-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesWritingComponent } from './messages-writing/messages-writing.component';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MessagesWritingComponent, MessagesListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NbInputModule,
    NbButtonModule,
    NbCardModule,
    HttpClientModule
  ],
  exports: [MessagesWritingComponent, MessagesListComponent]
})
export class MessagingModule { }
