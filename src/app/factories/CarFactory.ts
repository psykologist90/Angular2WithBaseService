import {Car} from "../models/Car";
import {IBaseModelFactory} from "./IBaseModelFactory";
import {Injectable} from "@angular/core";
/**
 * Created by ecobos on 01/03/2017.
 */
@Injectable()
export class CarFactory implements IBaseModelFactory {

  public createEntityFromDecodedJsonArray(entityArray:any): Car[]{
    let cars :Car[] = [];
    entityArray.forEach(entity =>{
      cars.push(this.createEntity(entity));
    });
    return cars;
  }


  public createEntity(entity:any) : Car{
    return new Car(entity.id);
  }
}
