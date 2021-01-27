import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-barra-admin',
  templateUrl: './barra-admin.component.html',
  styleUrls: ['./barra-admin.component.css']
})
export class BarraAdminComponent implements OnInit {
  id;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id=parseInt(this.route.snapshot.paramMap.get('id'));
  }

  onClick(num){
    console.log(this.id);
    if(num==1){
      this.router.navigate(['/']);
    }else if(num==2){
      this.router.navigate(['app-tabla-admin/'+this.id]);
    }else if(num==3){
      this.router.navigate(['app-administrador']);
    }
  }

}
