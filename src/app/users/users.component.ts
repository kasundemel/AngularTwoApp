import { Component, OnInit } from '@angular/core';
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[PostsService]
})
export class UsersComponent {

  name:string;
  email:string;
  address:address;
  hobby:string[];
  viewhobby:boolean;
  posts:Post[];


  constructor(private postsService:PostsService) {
      this.name="kasun";
      this.email="kasunc72@gmail.com";
      this.address={
        number:"100",
        street:"1St lane",
        city:"Colombo 05"
      }
      this.hobby=["cricket","football","baseball","volleyball"];

      this.postsService.getPosts().subscribe(posts=>{
          this.posts=posts
      });
  }

  viewHobby(){
      if(this.viewhobby == false){
          this.viewhobby=true;
      }
      else {
        this.viewhobby=false;
      }
  }
  addHobby(hobbies){
    this.hobby.push(hobbies);
  }

  deleteHobby(i){
    this.hobby.splice(i, 1);
  }


}


interface address{
    number:string;
    street:string;
    city:string;
}

interface Post{
    id:number;
    title:string;
    body:string;
}
