import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { HttpClient ,HttpParams ,HttpHeaders} from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  rut:any;
  id_tienda:any;
  lat:any;
  lng:any;
  constructor(private http:HttpClient,private router:Router, private route:ActivatedRoute,private datePipe: DatePipe) { }
  formatDate(date=new Date()){
    return this.datePipe.transform(date,'HH:mm:ss');
  }
  ngOnInit() {
    this.rut=parseInt(this.route.snapshot.paramMap.get('rut'));
    this.id_tienda=parseInt(this.route.snapshot.paramMap.get('id'));
    this.lat=this.route.snapshot.paramMap.get('lat');
    this.lng=this.route.snapshot.paramMap.get('lng');
    console.log(this.lat)
    console.log(this.lng)
    this.http.post<any>('http://localhost:8000/ingresar-fila/'+this.rut+'/'+this.id_tienda+'/'+this.formatDate()+'/'+this.lat+'/'+this.lng,{  headers: new HttpHeaders({ 'Content-Type': 'application/json'})}).subscribe(
      (res ) =>{
        this.router.navigate(['/app-resultado/'+this.rut+'/'+this.id_tienda]);
      }
    )
  }
  
}
