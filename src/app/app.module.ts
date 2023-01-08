import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CategoriesNavbarComponent } from './components/shared/categories-navbar/categories-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/shared/carousel/carousel.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatBadgeModule } from '@angular/material/badge';
import { AllproductsComponent } from './components/pages/allproducts/allproducts.component';
import { OneProductComponent } from './components/shared/one-product/one-product.component';
import { DetailsComponent } from './components/pages/details/details.component';
import { MatChipsModule } from '@angular/material/chips';
import { LoadingspinnerComponent } from './components/shared/loadingspinner/loadingspinner.component';
import { SearchComponent } from './components/pages/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { SanitizeUrlPipePipe } from './pipes/sanitize-url-pipe.pipe';
import { AboutComponent } from './components/pages/about/about.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { NotifierModule } from 'angular-notifier';
import { CartmodalcontentComponent } from './components/shared/cartmodalcontent/cartmodalcontent.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesNavbarComponent,
    CarouselComponent,
    HomepageComponent,
    AllproductsComponent,
    OneProductComponent,
    DetailsComponent,
    LoadingspinnerComponent,
    SearchComponent,
    LocationsComponent,
    SanitizeUrlPipePipe,
    AboutComponent,
    CartComponent,
    CartmodalcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule, HttpClientModule, MatCardModule, MatButtonModule, MatIconModule, MatBadgeModule, MatChipsModule, ReactiveFormsModule, NotifierModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
