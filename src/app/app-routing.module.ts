import { SearchComponent } from './components/pages/search/search.component';
import { AllproductsComponent } from './components/pages/allproducts/allproducts.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsComponent } from './components/pages/locations/locations.component';

const routes: Routes = [{ path: "", component: HomepageComponent },
{ path: "details/:id", component: DetailsComponent },
{ path: "allproducts", component: AllproductsComponent },
{ path: "search/:query", component: SearchComponent }, {
  path: "locations", component: LocationsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
