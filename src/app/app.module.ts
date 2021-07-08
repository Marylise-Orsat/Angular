import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './templates/navigation/navigation.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderComponent } from './templates/header/header.component';
import { ContentComponent } from './templates/content/content.component';
import { TemplatesModule } from './templates/templates.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TemplatesModule
  ],
  providers: [],
  bootstrap: [ContentComponent, HeaderComponent, FooterComponent, NavigationComponent]
})
export class AppModule { }
