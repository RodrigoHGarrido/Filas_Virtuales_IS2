import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { interval, timer, Subscriber } from 'rxjs'
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
// iconos http://kml4earth.appspot.com/icons.html
export class MapaComponent implements OnInit {
  lat;
  lng;
  rut;
  tiendas:any;

  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { 
    this.rut=parseInt(this.route.snapshot.paramMap.get('rut'));
  }
  async ngOnInit() {
    this.tiendas = await
    this.http.get('http://localhost:8000/tiendas').toPromise();
    console.log(this.tiendas.data.rows)
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
    

    const contador = interval(10000);//esto hace que cada 10 segundos se mande la posicion del cliente
    contador.subscribe((n)=>{
      console.log(`El contador es ${n}`)
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          console.log(`lat:${this.lat} | lng:${this.lng}`)
          //esto es para actualizar la posicion del cliente
          this.http.post<any>('http://localhost:8000/send/'+this.rut+'/'+this.lat+'/'+this.lng,{  headers: new HttpHeaders({ 'Content-Type': 'application/json'})}).subscribe()
        });
      }
    });

  }
  ClickInfo(event){
    console.log(event)
  }
  ClickMarkerInfo(event){
    console.log(event)
  }
}



