import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient ,HttpParams ,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  rut:any;
  ejemplo:any;
  id_tienda:any;
  esconderError:boolean;
  constructor(private http:HttpClient,private route:ActivatedRoute) { }
  
  async ngOnInit() {
    this.rut =parseInt(this.route.snapshot.paramMap.get('rut'));
    this.id_tienda=parseInt(this.route.snapshot.paramMap.get('id_tienda'));
    console.log(this.rut)
    this.ejemplo =await
    this.http.get('http://localhost:8000/cliente/'+this.rut+'/'+this.id_tienda).toPromise();
    if(this.ejemplo.data.rowCount==0){
      console.log("No pudo ingresar a la fila ");
      this.esconderError=true;
    }else{
      console.log("pasó");
      this.esconderError=false;
    }
 }
}
