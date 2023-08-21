import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddNumberComponent } from './components/add-number.component';
import { ListNumberComponent } from './components/list-number.component';
import { NumberImageComponent } from './components/number-image.component';

const appRoutes: Routes = [
  //{ path: '', component: NumberImageComponent },
  { path: 'num/:num', component: NumberImageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddNumberComponent,
    ListNumberComponent,
    NumberImageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
