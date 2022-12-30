import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FreeapiService } from "./services/freeapi.service";
import { AppComponent } from "./app.component";
import { FilterFrontendComponent } from "./filter-frontend/filter-frontend.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, FilterFrontendComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [FreeapiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
