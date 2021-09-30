import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './navs/home/home.component';
import { FeaturesComponent } from './navs/features/features.component';
import { PricingComponent } from './navs/pricing/pricing.component';
import { AppRoutingModule } from './app-routing.module';
import { OrdenesComponent } from './features/ordenes/ordenes.component';
import { ProductosComponent } from './features/productos/productos.component';
import { CategoriasComponent } from './features/categorias/categorias.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NuevoComponent } from './features/nuevo/nuevo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    PricingComponent,
    OrdenesComponent,
    ProductosComponent,
    CategoriasComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
