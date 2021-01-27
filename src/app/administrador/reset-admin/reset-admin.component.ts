import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-admin',
  templateUrl: './reset-admin.component.html',
  styleUrls: ['./reset-admin.component.css']
})
export class ResetAdminComponent implements OnInit {
  id_tienda;
  filaReiniciada:boolean;
  constructor(private http:HttpClient,private router:Router, private route:ActivatedRoute) { }
  
  ngOnInit(): void {
    this.filaReiniciada= false;
    this.id_tienda= parseInt(this.route.snapshot.paramMap.get('id'));
  }

  onClickReset(){
    this.http.delete<any>('http://localhost:8000/borrar-filas/'+ this.id_tienda,{  headers: new HttpHeaders({ 'Content-Type': 'application/json'})}).subscribe(
      (res ) =>{
        console.log(this.id_tienda);
        this.filaReiniciada= true;
      }
    )
    this.http.post<any>('http://localhost:8000/reiniciar-seq',{  headers: new HttpHeaders({ 'Content-Type': 'application/json'})}).subscribe(
      (res ) =>{
        this.reloadComponent();
      }
    )
  }
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/app-tabla-admin'+ this.id_tienda]);
  }
}
