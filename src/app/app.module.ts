import { RecaptchaModule } from 'ng-recaptcha';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { MiembroStaffComponent } from './pages/quienes/miembro-staff/miembro-staff.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ArticulosComponent } from './pages/articulos/articulos.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { LibroComponent } from './pages/libros/libro/libro.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { ClienteComponent } from './pages/clientes/cliente/cliente.component';
import { FotogaleriaComponent } from './pages/fotogaleria/fotogaleria.component';
import { VideotecaComponent } from './pages/videoteca/videoteca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { ClienteService } from './services/cliente.service';
import { FraseService } from './services/frase.service';
import { LibroService } from './services/libro.service';
import { ArticuloService } from './services/articulo.service';
import { VideoService } from './services/video.service';
import { ContactoService } from './services/contacto.service';
import { FotogaleriaService } from './services/fotogaleria.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [

    AppComponent,
    HomeComponent,
    QuienesComponent,
    MiembroStaffComponent,
    ServiciosComponent,
    ArticulosComponent,
    LibrosComponent,
    LibroComponent,
    ClientesComponent,
    ClienteComponent,
    FotogaleriaComponent,
    VideotecaComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AlertModule.forRoot(),
    RecaptchaModule.forRoot(),
    PaginationModule.forRoot(),
  ],

  providers: [

    ClienteService,
    FraseService,
    LibroService,
    ArticuloService,
    VideoService,
    ContactoService,
    FotogaleriaService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
