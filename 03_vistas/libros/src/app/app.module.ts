import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { FormulariosModule } from './formularios/formularios.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormulariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
