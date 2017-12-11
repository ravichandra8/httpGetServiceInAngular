import { Component, OnInit } from '@angular/core';
import {PostService} from './postservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[PostService]
})
export class HomePage implements OnInit{
    ZonesData:Post[];
  constructor(private _postService: PostService){

   }

   ngOnInit(){
     this._postService.getPosts().subscribe(posts => {
       console.log("test");
       console.log(posts);
       this.ZonesData=posts.Zoneslist;

     });


}

}
