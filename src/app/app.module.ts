import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MovieModule } from "./movie/movie.module";
import { ApiService } from "./api/api.service";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, MovieModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule {}
