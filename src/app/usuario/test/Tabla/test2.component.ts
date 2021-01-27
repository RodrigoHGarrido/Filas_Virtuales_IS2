import { Component, OnInit ,Input} from '@angular/core';
import { HttpClient ,HttpParams ,HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  ejemplo:any;
  columnsToDisplay=['id','nombre'];
  id:any;
  rut:any
  constructor(private http:HttpClient,private route: ActivatedRoute) { 
  }
  async ngOnInit() {
    this.id =parseInt(this.route.snapshot.paramMap.get('id'));
    this.rut =parseInt(this.route.snapshot.paramMap.get('rut'));
    console.log(this.id);
    this.ejemplo = await
    this.http.get('http://localhost:8000/prueba/'+this.id).toPromise();
  }
}
