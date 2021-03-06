import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {map} from "rxjs/operator/map";



@Injectable()
export class PostsService {

  constructor(private http:Http) {

  }

  getPosts(){
      return this.http.get("https://jsonplaceholder.typicode.com/posts").map(res=>res.json());
  }

}
