import { Component, OnInit } from '@angular/core';
import { HttpClient ,HttpParams ,HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tabla-cajero',
  templateUrl: './tabla-cajero.component.html',
  styleUrls: ['./tabla-cajero.component.css']
})
export class TablaCajeroComponent implements OnInit {
  ejemplo:any;
  columnsToDisplay=['id','nombre'];
  id:any;
  capacidad:any;
  lleno:boolean;
  constructor(private http:HttpClient,private route: ActivatedRoute) { }

  async ngOnInit() {
    this.id =parseInt(this.route.snapshot.paramMap.get('id'));
    this.capacidad=parseInt(this.route.snapshot.paramMap.get('capacidad'));
    console.log(this.id);
    this.ejemplo = await
    this.http.get('http://localhost:8000/prueba/'+this.id).toPromise();
    if(this.ejemplo.data.rows[0].cantidad == this.capacidad){
      this.lleno = true;
    }else{
      this.lleno = false;
    }
  }

}
