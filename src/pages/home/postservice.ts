import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Post} from './post';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
@Injectable()
export class PostService {
  private postsUrl = 'http://220.225.38.123:8081/LogicShore.svc/GetZoneslistbyDist?District=2060';

  constructor(private _http: Http){

  }

  getPosts(): Observable<Post[]>{
    return this._http.get(this.postsUrl)
        .map(res => res.json());
  }
}
