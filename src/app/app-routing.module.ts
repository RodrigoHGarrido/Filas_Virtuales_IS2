import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './usuario/test/test.component';
import { Test2Component } from './usuario/test/Tabla/test2.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { BarraAdminComponent } from './administrador/barra-admin/barra-admin.component';
import { AdministradorComponent } from './administrador/administrador.component';
import {TablaAdminComponent} from './administrador/tabla-admin/tabla-admin.component'
import {FormComponent} from './usuario/form/form.component';
import {SeccionesComponent} from'./secciones/secciones.component';
import { ResultadoComponent } from './usuario/form/resultado/resultado.component';
import { BarraComponent } from './usuario/barra/barra.component';
import { FilasActualesComponent } from './usuario/filas-actuales/filas-actuales.component';
import { RegistroComponent } from './usuario/login-cliente/registro/registro.component';
import { CajeroComponent } from './cajero/cajero.component';
import { BarraCajeroComponent } from './cajero/barra-cajero/barra-cajero.component';
import { TablaCajeroComponent } from './cajero/tabla-cajero/tabla-cajero.component';
import { LoginCajeroComponent } from './cajero/login-cajero/login-cajero.component';
import { QrcodeComponent } from './usuario/qrcode/qrcode.component';
import { MapaComponent } from './usuario/mapa/mapa.component';
import { ResetAdminComponent } from './administrador/reset-admin/reset-admin.component';
import { LoginAdminComponent } from './administrador/login-admin/login-admin.component';
import { SiguienteClienteComponent } from './cajero/siguiente-cliente/siguiente-cliente.component';
const routes: Routes = [
{path:'',component:SeccionesComponent},
{path:'app-siguiente-cliente/:id/:capacidad',component:SiguienteClienteComponent},
{path:'app-registro',component:RegistroComponent},
{path:'app-barra/:rut',component:BarraComponent},
{path: 'app-tiendas/:rut', component:TestComponent},
{path:'app-test2/:rut/:id', component:Test2Component},
{path:'app-usuario',component:UsuarioComponent},
{path:'app-barra-admin/:id',component:BarraAdminComponent},
{path:'app-administrador',component:AdministradorComponent},
{path:'app-tabla-admin/:id',component:TablaAdminComponent},
{path:'app-form/:id/:rut/:lat/:lng',component:FormComponent},
{path:'app-filas-actuales/:rut',component:FilasActualesComponent},
{path:'app-resultado/:rut/:id_tienda',component:ResultadoComponent},
{path:'app-cajero', component:CajeroComponent},
{path:'app-barra-cajero/:id/:capacidad', component:BarraCajeroComponent},
{path:'app-tabla-cajero/:id/:capacidad', component:TablaCajeroComponent},
{path:'app-login-cajero', component:LoginCajeroComponent},
{path:'app-qrcode/:rut/:id_tienda/:lat/:lng',component:QrcodeComponent},
{path:'app-mapa/:rut',component:MapaComponent},
{path:'app-reset-admin/:id', component:ResetAdminComponent},
{path:'app-login-admin', component:LoginAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
