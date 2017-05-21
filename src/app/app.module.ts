import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { App } from './components/app.component';

import { routing } from './routes/app.routing';

// import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  bootstrap: [App],
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    routing
  ]
})
export class AppModule { }
