import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListaPersonaggiComponent } from './pages/lista-personaggi/lista-personaggi.component';
import { FormPersonaggiComponent } from './pages/form-personaggi/form-personaggi.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BatmanInterceptor } from './interceptors/superheroes.interceptor';
import { DettaglioPersonaggiComponent } from './pages/dettaglio-personaggi/dettaglio-personaggi.component';
import { AntiBatmanPipe } from './pipes/anti-batman.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaPersonaggiComponent,
    FormPersonaggiComponent,
    DettaglioPersonaggiComponent,
    AntiBatmanPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BatmanInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
