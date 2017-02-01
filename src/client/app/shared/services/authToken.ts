import { Injectable } from '@angular/core'
import { Api } from './api'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class AuthTokenService {
  private pathAdd: string = '/add-user'
  private pathGet: string ='/get-user'

  constructor(private api: Api){

  }

  getToken() : Observable<any> {
    return this.api
      .get(this.pathGet)
  }

  saveToken(token) : Observable<any> {
    return this.api
      .post(this.pathAdd, token)
  }

}
