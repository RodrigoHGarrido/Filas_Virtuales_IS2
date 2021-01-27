import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import { BarraComponent } from './usuario/barra/barra.component';
import {MatTableModule} from '@angular/material/table';
import { TestComponent } from './usuario/test/test.component';
import { Test2Component } from './usuario/test/Tabla/test2.component';
import {MatCardModule} from '@angular/material/card';
import { UsuarioComponent } from './usuario/usuario.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { BarraAdminComponent } from './administrador/barra-admin/barra-admin.component'
import { TablaAdminComponent } from './administrador/tabla-admin/tabla-admin.component';
import { FormComponent } from './usuario/form/form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SeccionesComponent } from './secciones/secciones.component';
import {LoginClienteComponent} from './usuario/login-cliente/login-cliente.component';
import { ResultadoComponent } from './usuario/form/resultado/resultado.component';
import { DatePipe } from '@angular/common';
import { FilasActualesComponent } from './usuario/filas-actuales/filas-actuales.component';
import { RegistroComponent } from './usuario/login-cliente/registro/registro.component';
import { CajeroComponent } from './cajero/cajero.component';
import { BarraCajeroComponent } from './cajero/barra-cajero/barra-cajero.component';
import { TablaCajeroComponent } from './cajero/tabla-cajero/tabla-cajero.component';
import { LoginCajeroComponent } from './cajero/login-cajero/login-cajero.component';
import { QrcodeComponent } from './usuario/qrcode/qrcode.component';
import { MapaComponent } from './usuario/mapa/mapa.component';
import { QRCodeModule } from 'angularx-qrcode';
import { AgmCoreModule } from '@agm/core';
import { ResetAdminComponent } from './administrador/reset-admin/reset-admin.component';
import { LoginAdminComponent } from './administrador/login-admin/login-admin.component';
import { SiguienteClienteComponent } from './cajero/siguiente-cliente/siguiente-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    TestComponent,
    Test2Component,
    UsuarioComponent,
    AdministradorComponent,
    BarraAdminComponent,
    TablaAdminComponent,
    FormComponent,
    SeccionesComponent,
    ResultadoComponent,
    LoginClienteComponent,
    FilasActualesComponent,
    RegistroComponent,
    CajeroComponent,
    BarraCajeroComponent,
    TablaCajeroComponent,
    LoginCajeroComponent,
    QrcodeComponent,
    MapaComponent,
    ResetAdminComponent,
    LoginAdminComponent,
    SiguienteClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule, 
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    ReactiveFormsModule,
    QRCodeModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDL-3MBWI0ZwmMantoE82xdLoLosBjK_ic"
    })
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
