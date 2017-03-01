import {BaseModel} from "../models/BaseModel";
/**
 * Created by ecobos on 01/03/2017.
 */
export interface IBaseModelFactory{
  createEntityFromDecodedJsonArray(any):BaseModel[];
  createEntity(any):BaseModel;
}
