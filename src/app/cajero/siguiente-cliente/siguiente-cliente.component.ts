import { Component, OnInit, AbstractType } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-siguiente-cliente',
  templateUrl: './siguiente-cliente.component.html',
  styleUrls: ['./siguiente-cliente.component.css']
})
export class SiguienteClienteComponent implements OnInit {
  datos:any;
  datos2:any;
  id:any;
  capacidad:any;
  mostrarError:boolean;
  constructor(private http:HttpClient, private route:ActivatedRoute) { 
    
  }

  async ngOnInit() {
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.capacidad=parseInt(this.route.snapshot.paramMap.get('capacidad'));
    this.datos=await
    this.http.get('http://localhost:8000/siguiente-cliente/'+this.id).toPromise();
    if(this.datos.data.rowCount==0){
      this.mostrarError=true;
    }else{
      this.mostrarError=false;
    }
  }
  onClick(){
    this.http.get('http://localhost:8000/borrar-cliente-actual/'+this.id).toPromise();
    location.reload();
  }

}
