import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagina-IS2-nueva';
  displayLink=true;
  onClick(){
    this.displayLink=false;
  }
}
