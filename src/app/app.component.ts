import { Component, OnInit } from '@angular/core';
import { AppModel } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 aadharNum:string='';
  appModel:AppModel=new AppModel;
  title = 'maps';
  ngOninit():void{

  }
  getLocation():void{

  }
}
