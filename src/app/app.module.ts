import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ColorBoxesComponent } from './color-boxes/color-boxes.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { SubjectService } from './subject.service';

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
  path: 'form',
  component: FormComponent
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
    TableComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
