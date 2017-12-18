import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
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
        .map((response:Response) => <Post[]>response.json().Zoneslist);
  }

  getPostResponse() {
    var header = new Headers();
    header.append('Content-type', 'application/json');
    let body = {"request":{"UserName":"9999988888","Password":"HYDCOPS@123","ImeiNumber":"869087022855008","DeviceId":"1","lat":"17.4012005","lang":"78.476371","CCTNSloginId":"","CCTNSPwd":""}};
        return this._http.post('http://220.225.38.123:8081/LogicShore.svc/SingleLogin', JSON.stringify(body), {
        headers:header
      }).map(res => res.json()).subscribe(data => {console.log(data)});
	}
}
