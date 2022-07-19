import { ControlsComponent } from './controls/controls';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import AppComponent from "./app.component";

@NgModule({
  declarations: [AppComponent, ControlsComponent],
  imports: [BrowserModule],
  bootstrap: [AppComponent],
})
export default class AppModule {}
