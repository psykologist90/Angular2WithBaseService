/**
 * Created by ecobos on 01/03/2017.
 */
import {Injectable} from "@angular/core";
import {CarFactory} from "../factories/CarFactory";
import {BaseService} from "./BaseService";
import {HttpClient} from "./HttpClient";

@Injectable()
export class CarService extends BaseService {

  constructor(http: HttpClient, carFactory: CarFactory) {
    super(carFactory, '/assets/cars.json', http);
  }

}
