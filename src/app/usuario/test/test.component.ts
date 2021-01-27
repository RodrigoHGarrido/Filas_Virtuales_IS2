import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  rut:any;
  lat:any;
  lng:any;
  constructor(private route:ActivatedRoute,private router:Router) { }
  ngOnInit() {
    this.rut=parseInt(this.route.snapshot.paramMap.get('rut'));   
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log(this.lat)
      });
    }
  }
  onClick(id){
    this.router.navigate(['app-form/'+id+'/'+this.rut+'/'+this.lat+'/'+this.lng]);
  }
  onClickFilas(id){
    this.router.navigate(['app-test2/'+this.rut+'/'+id]);
  }
  onClickQr(id){
    this.router.navigate(['app-qrcode/'+this.rut+'/'+id+'/'+this.lat+'/'+this.lng]);
    //ir a qrcode component donde en el init se hace la incercion y el codigo sera para mandar a resultado
  }
}
