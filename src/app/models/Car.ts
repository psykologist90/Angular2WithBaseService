import {BaseModel} from "./BaseModel";
/**
 * Created by ecobos on 01/03/2017.
 */
export class Car implements BaseModel{

  constructor(public id: number) {

  }

  getCustomId(){
    return this.id * 100;
  }

}
