import { Injectable } from '@angular/core'
import { Api } from './api'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class UserService {
  private pathAdd: string = '/add-user'
  private pathGet: string ='/get-user'

  constructor(private api: Api){

  }

  getUser() : Observable<any> {
    return this.api
      .get(this.pathGet)
  }

  saveUser(user) : Observable<any> {
    return this.api
      .post(this.pathAdd, user)
  }

}
