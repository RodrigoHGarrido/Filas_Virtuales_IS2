import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpClient ,HttpParams ,HttpHeaders} from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-cajero',
  templateUrl: './login-cajero.component.html',
  styleUrls: ['./login-cajero.component.css']
})
export class LoginCajeroComponent implements OnInit {
  formdata;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      rut_cajero:new FormControl("",this.rutvalidation),
      contrasena:new FormControl("",this.convalidation)
      });
  }

  convalidation(formcontrol){
    if(formcontrol.value.length<9){
      return {"contrasena" : true};
    }
  }

  rutvalidation(formcontrol){
    if(formcontrol.value.length<9){
      return {"rut":true};
    }
  }

  async onClickSubmit(){
    this.http.post<any>('http://localhost:8000/verificar-cajero',this.formdata.value,{  headers: new HttpHeaders({ 'Content-Type': 'application/json'})}).subscribe(
      (res ) =>{
        console.log(res.data.rowCount)
        if(res.data.rowCount>0){
          this.router.navigate(['/app-barra-cajero/'+res.data.rows[0].id_tienda+'/'+res.data.rows[0].capacidad]);
        }else{
          location.reload();
        }
      }
    )
  }

}
