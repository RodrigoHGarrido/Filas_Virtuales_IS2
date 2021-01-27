import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpClient ,HttpParams ,HttpHeaders} from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent implements OnInit {
  formdata;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      rut_cliente:new FormControl("",this.rutvalidation),
      contrasena:new FormControl("",this.convalidation)
      });
    }
    convalidation(formcontrol){
      if(formcontrol.value.length< 8){
        return {"contrasena" : true};
      }
    }
    rutvalidation(formcontrol){
      if(formcontrol.value.length<8){
        return {"rut":true};
      }
    }
  async onClickSubmit(){
    this.http.post<any>('http://localhost:8000/verificar-usuario',this.formdata.value,{  headers: new HttpHeaders({ 'Content-Type': 'application/json'})}).subscribe(
      (res ) =>{
        console.log(res.data.rowCount)
        if(res.data.rowCount>0){
          this.router.navigate(['/app-barra/'+res.data.rows[0].rut_cliente]);
        }else{
          location.reload();
        }
      }
    )
  }
}
