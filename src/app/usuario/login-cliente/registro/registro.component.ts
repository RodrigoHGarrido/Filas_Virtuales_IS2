import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpClient ,HttpParams ,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formdata;
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      nombre:new FormControl(""),
      rut_cliente:new FormControl("",this.rutvalidation),
      contrasena:new FormControl("",this.convalidation),
      telefono:new FormControl("",this.telefonovalidation)
      });
  }
  convalidation(formcontrol){
    if(formcontrol.value.length<8){
      return {"contrasena" : true};
    }
  }
  rutvalidation(formcontrol){
    if(formcontrol.value.length<8){
      return {"rut":true};
    }
  }
  telefonovalidation(formcontrol){
    if(formcontrol.value.length<9){
      return{"numero_telefono":true}
    }
  }
  async onClickSubmit(){
    this.http.post<any>('http://localhost:8000/registrar-usuario',this.formdata.value,{  headers: new HttpHeaders({ 'Content-Type': 'application/json'})}).subscribe(
      (res ) =>{
        if(res==1){
          this.router.navigate(['/app-usuario']);
        }else{
          location.reload();
        }
      }
    )
  }
}
