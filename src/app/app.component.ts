import { Component } from '@angular/core';
import {CarService} from "./services/CarService";
import {Car} from "./models/Car";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public cars: Car[] = [];
  public error: any = null;

  constructor(private carService: CarService){

  }

  getCars():void{
    this.carService.getAll().subscribe(
      cars=> this.cars = cars as Car[],
      error=> this.error = error
    );
  }

  title = 'app works!';
}
