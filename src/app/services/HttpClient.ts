/**
 * Created by ecobos on 01/03/2017.
 */
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class HttpClient {
  private http;
  private baseUrl: string;
  private tenantId: string;

  constructor(http: Http) {
    this.http = http;
    this.baseUrl = "";
    this.tenantId = "localhost";
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
  }

  get(url: string) {
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    }).map(this.extractData)
      .catch(this.handleError);
  }

  deleteC(url: string) {
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers
    }).map(this.extractData)
      .catch(this.handleError);
  }

  deleteWithData(url: string, data: any) {
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(url, {
      headers: headers,
      body: JSON.stringify(data)
    }).map(this.extractData)
      .catch(this.handleError);
  }

  post(url: string, data: any) {
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, JSON.stringify(data), {
      headers: headers
    }).map(this.extractData)
      .catch(this.handleError);
  }

  put(url: string, data: any) {
    url = this.baseUrl + url;
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, JSON.stringify(data), {
      headers: headers
    }).map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let string = res.text();
    let body = JSON.parse(string);
    return body.data || {};
  }

  private handleError(res: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    // debugger;
    let string = res.text();
    let body = JSON.parse(string);
    let error = body || {};
    let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(error);
  }
}
