import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'colorchange';
  theme :string = '';
  document: any;

  firstname = "ruchi";
  check = true;
  hoverColorVar: string = '';
  newcolor = 'cyan';

  changecolor(color:string){
    this.theme = color; 
    
  }

  getColor(){
    this.newcolor = 'white';
  }


}
