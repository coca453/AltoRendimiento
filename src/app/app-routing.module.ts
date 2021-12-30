import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FotogaleriaComponent } from './pages/fotogaleria/fotogaleria.component';
import { VideotecaComponent } from './pages/videoteca/videoteca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'quienes-somos', component: QuienesComponent, pathMatch: 'full' },
  { path: 'servicios', component: ServiciosComponent, pathMatch: 'full' },
  { path: 'articulos', component: ArticulosComponent, pathMatch: 'full' },
  { path: 'libros', component: LibrosComponent, pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent, pathMatch: 'full' },
  { path: 'fotogaleria', component: FotogaleriaComponent, pathMatch: 'full' },
  { path: 'videoteca', component: VideotecaComponent, pathMatch: 'full' },
  { path: 'contacto', component: ContactoComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
