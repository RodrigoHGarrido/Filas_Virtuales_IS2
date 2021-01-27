import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  displayLink=true;
  constructor() { }
  onClick(){
    this.displayLink=false;
  }
  ngOnInit() {
  }

}
