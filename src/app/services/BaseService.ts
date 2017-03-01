import {IBaseModelFactory} from "../factories/IBaseModelFactory";
import {BaseModel} from "../models/BaseModel";
import {Observable} from "rxjs";
import {HttpClient} from "./HttpClient";
/**
 * Created by ecobos on 01/03/2017.
 */
export abstract class BaseService{

  protected factory: IBaseModelFactory;
  protected baseUrl: string;
  protected http: HttpClient;

  constructor(factory: IBaseModelFactory, baseUrl: string, http: HttpClient){
    this.factory = factory;
    this.http = http;
    this.baseUrl = baseUrl;
  }

  public getAll ():Observable<BaseModel[]>{
    return this.http.get(this.baseUrl).map(
      response => this.parseResponse(this.factory, response)
    );
  }

  parseResponse = (factory: IBaseModelFactory, response:any):BaseModel[] => {
    return factory.createEntityFromDecodedJsonArray(response);
  }
}
