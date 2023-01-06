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
    LoadingspinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule, HttpClientModule, MatCardModule, MatButtonModule, MatIconModule, MatBadgeModule, MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
