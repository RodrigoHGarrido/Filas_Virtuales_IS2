import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  formdata;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.formdata=new FormGroup({
      rut_admin:new FormControl("",this.rutvalidation),
      contrasena:new FormControl("",this.convalidation)
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

  async onClickSubmit(){
    this.http.post<any>('http://localhost:8000/verificar-admin',this.formdata.value,{  headers: new HttpHeaders({ 'Content-Type': 'application/json'})}).subscribe(
      (res ) =>{
        console.log(res.data.rowCount)
        if(res.data.rowCount>0){
          this.router.navigate(['/app-barra-admin/'+res.data.rows[0].id_tienda]);
        }else{
          location.reload();
        }
      }
    )
  }

}