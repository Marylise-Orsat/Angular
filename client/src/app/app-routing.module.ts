import { MessagesWritingComponent } from './messaging/messages-writing/messages-writing.component';
import { MessagesListComponent } from './messaging/messages-list/messages-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

// on définit nos routes
// ce qui est entre "" est le chemin du routing
const ROUTES = [
  {
    path: "", component: DashboardComponent,
  },
  {
    path: "inbox", component: MessagesListComponent,
  },
  {
    path: "create-message", component: MessagesWritingComponent,
  }
] as Routes;

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
