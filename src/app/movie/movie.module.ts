import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MovieComponent } from "./movie.component";
import { IonicPageModule } from "ionic-angular";

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, IonicPageModule.forChild(MovieComponent)],
  exports: [MovieComponent]
})
export class MovieModule {}
