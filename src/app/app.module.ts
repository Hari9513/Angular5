import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ColorBoxesComponent } from './color-boxes/color-boxes.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
{
  path: 'colorBoxes',
  component: MyComponentComponent
},
{
  path: 'flightDetails',
  component: TableComponent
},
{
  path: '**',
  redirectTo: 'home',
  pathMatch: 'full'

}];


@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ColorBoxesComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
