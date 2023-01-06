import { AllproductsComponent } from './components/pages/allproducts/allproducts.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: "", component: HomepageComponent }, { path: "details/:id", component: DetailsComponent }, { path: "allproducts", component: AllproductsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
