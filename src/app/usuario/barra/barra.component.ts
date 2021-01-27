import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {
  rut:any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.rut=parseInt(this.route.snapshot.paramMap.get('rut'));

  }
  onClick(numero){
    if(numero==1){
      this.router.navigate(['app-tiendas/'+this.rut]);
    }else if(numero==2){
      this.router.navigate(['app-filas-actuales/'+this.rut]);
    }else if(numero==3){
      this.router.navigate(['/']);
    }else if(numero==4){
    this.router.navigate(['app-mapa/'+this.rut])
    }
  }

}
