import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  rut:any;
  id_tienda:any;
  nombre_tienda:any;
  lat:any;
  lng:any;
  public myAngularxQrCode: string = null;
  constructor(private route:ActivatedRoute,private router:Router) {
    this.myAngularxQrCode = 'Your QR code data ';
  }
  ngOnInit() {
    this.id_tienda=parseInt(this.route.snapshot.paramMap.get('id_tienda'));//tiene que ser el nombre que le puse en el app-routing.module.ts
    this.rut=parseInt(this.route.snapshot.paramMap.get('rut'));
    this.lat=this.route.snapshot.paramMap.get('lat');
    this.lng=this.route.snapshot.paramMap.get('lng');
    console.log(this.lat)
    this.myAngularxQrCode="http://localhost:4200/app-form/"+this.id_tienda+"/"+this.rut+"/"+this.lat+"/"+this.lng;
    console.log("el rut es ",this.rut," la id de la tienda es ",this.id_tienda);
    if(this.id_tienda == '1') this.nombre_tienda = 'Farmacia Salcobrand';
    if(this.id_tienda == '2') this.nombre_tienda = 'Supermercado Lider';
  }

}
