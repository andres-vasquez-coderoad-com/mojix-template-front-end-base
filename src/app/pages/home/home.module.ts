import { NgModule } from "@angular/core";
import { ApiService } from "../../api/api.service";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ApiService]
})
export class HomeModule {}
