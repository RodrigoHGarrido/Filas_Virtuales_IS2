import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-barra-cajero',
  templateUrl: './barra-cajero.component.html',
  styleUrls: ['./barra-cajero.component.css']
})
export class BarraCajeroComponent implements OnInit {
  id;
  capacidad;
  constructor(private route:ActivatedRoute,private router:Router, private http:HttpClient) { }

  ngOnInit(){
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.capacidad=parseInt(this.route.snapshot.paramMap.get('capacidad'));
  }

  onClick(numero){
    console.log(this.capacidad);
    if(numero==1){
      this.router.navigate(['/']);
    }else if(numero==2){
      this.router.navigate(['app-tabla-cajero/'+this.id+'/'+this.capacidad]);
    }else if(numero==3){
      this.router.navigate(['app-cajero']);
    }else if(numero==4){
      this.router.navigate(['app-siguiente-cliente/'+this.id+'/'+this.capacidad]);
    }else if(numero==5){
      this.http.get('http://localhost:8000/borrar-cliente-actual/'+this.id).toPromise();
    location.reload();
    }
  }

  
}
