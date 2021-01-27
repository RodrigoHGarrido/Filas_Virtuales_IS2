import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { interval, timer, Subscriber } from 'rxjs'

@Component({
  selector: 'app-tabla-admin',
  templateUrl: './tabla-admin.component.html',
  styleUrls: ['./tabla-admin.component.css']
})
export class TablaAdminComponent implements OnInit {
  id_tienda;
  queue:any;
  desplegarFila:boolean;
  numPersonas;
  contadorPersonas:number;
  posiciones:any;
  mostrar:boolean;
  lat:number;
  lng:number;
  lat1:number;
  lng1:number;
  distancia:number;
  constructor(private http:HttpClient,private router:Router, private route:ActivatedRoute) { }

  async ngOnInit() {
    this.id_tienda= parseInt(this.route.snapshot.paramMap.get('id'));
    this.queue=await
    this.http.get('http://localhost:8000/clientes-en-fila/'+1).toPromise();//parece que hay que cambiar el 1 por id_tienda
    if(this.queue.data.rowCount==0){
      this.desplegarFila=false;
    }else{
      this.desplegarFila=true;
      this.numPersonas= this.queue.data.rowCount; 
    }
    const consulta = interval(5000)
    consulta.subscribe(()=>{
      this.mostrarClientes()
    });
  }

  async mostrarClientes(){
    this.posiciones=await
    this.http.get('http://localhost:8000/get/'+this.id_tienda).toPromise();
    if(this.posiciones.data.rowCount==0){
      this.mostrar=false;
      console.log('mal no se encontraron clientes en la fila o en prueba')
    }
    else{
        var i,j=0;
        for(i=0;i<this.posiciones.data.rowCount;i++){
          console.log('la cantidad de filas ',this.posiciones.data.rowCount)
          this.lat=(+this.posiciones.data.rows[i].latitud_cliente)/(180/Math.PI)
          this.lng=(+this.posiciones.data.rows[i].longitud_cliente)/(180/Math.PI)
          this.lat1=(+this.posiciones.data.rows[i].latitud)/(180/Math.PI)
          this.lng1=(+this.posiciones.data.rows[i].longitud)/(180/Math.PI)
          //console.log(this.lat,'|',this.lng,this.lat1,'|',this.lng1)
          this.distancia=3963.0*Math.acos( (Math.sin(this.lat)*Math.sin(this.lat1))+Math.cos(this.lat)*Math.cos(this.lat1)*Math.cos(this.lng1-this.lng) )
          this.distancia=this.distancia*1.609344
          console.log('La distancia es ',this.distancia)
          if(this.distancia<4){//esta en km
            j=j+1;
          }
        }
    }
    this.contadorPersonas=j;
    console.log('.aksnjdklsajd',this.contadorPersonas)
    this.mostrar=true;
  }
}

