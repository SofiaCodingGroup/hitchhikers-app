import { Injectable } from '@angular/core'
import { Http, Headers,  Response, HttpModule } from '@angular/http'
import { Observable } from 'rxjs/Observable'

import { Config } from '../index'

import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/throw'



@Injectable()
export class Api {
  private applicationJson:string = 'application/json'
  private headers: Headers = new Headers({
    'Content-type' : this.applicationJson,
    'Accept' : this.applicationJson
  })
  private apiUrl: string = `${Config.API}/api`



  constructor(private http: Http) {

  }

  private getJson(response: Response){
    return response.json()
  }
  private checkForErrors(response: Response){
    if ( response.status >= 200 && response.status <= 300){
      return response
    } else {
      let error = new Error(response.statusText)
      error['response'] = response
      console.log(error)
      throw error
    }
  }

  get(path: string) : Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`,
      { headers : this.headers })
      .map(this.checkForErrors)
      .catch(err => Observable.throw(err))
      .map(this.getJson)
  }

  post(path: string, data) {
    path = `${this.apiUrl}${path}`
    return this.http.post(path, JSON.stringify(data), { headers: this.headers })
      .map(this.checkForErrors)
      .catch(err => Observable.throw(err))
      .map(this.getJson);
  }

  delete(path: string): Observable<any>{
    path = `${this.apiUrl}${path}`
    return this.http.delete(path, { headers: this.headers })
      .map(this.checkForErrors)
      .catch(err => Observable.throw(err))
      .map(this.getJson)
  }
}
