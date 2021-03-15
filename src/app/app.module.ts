
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import Treeview component Module
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent }  from './app.component';

@NgModule({
  //declaration of Treeview module into NgModule
  imports:      [ BrowserModule, TreeViewModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }