import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navs/home/home.component';
import { FeaturesComponent } from './navs/features/features.component';
import { PricingComponent } from './navs/pricing/pricing.component';
import { OrdenesComponent } from './features/ordenes/ordenes.component';
import { ProductosComponent } from './features/productos/productos.component';
import { CategoriasComponent } from './features/categorias/categorias.component';

const routes: Routes = [
  {
    path : '', 
    component : HomeComponent
  },
  {
    path : 'features', 
    component : FeaturesComponent,
    children : [
        {
          path : 'ordenes',
           component : OrdenesComponent
        },
        {
          path : 'productos',
           component : ProductosComponent
          },
        {
          path : 'categorias',
           component : CategoriasComponent
          }
      ],
  },
  {
    path : 'pricing', 
    component : PricingComponent
  }

];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule],
})
export class AppRoutingModule { }
