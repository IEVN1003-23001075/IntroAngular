import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import {FormsModule} from '@angular/forms'
import { HeoresList } from './heroes/heroes-list/heroes-list';
 
@NgModule({
  declarations: [App, heroesList],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}