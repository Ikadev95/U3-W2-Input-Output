import { Component } from '@angular/core';
import { iResponse } from '../../Models/response';
import { Post } from '../../Models/post';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {
  post: Post[] = [];
  ngOnInit(){ // caricamento del componente
    fetch('./assets/db.json')
    .then((res)=><Promise<iResponse>>res.json())
    .then((dati)=>{
      console.log(dati.posts);

      for ( let i = 0 ; i < dati.posts.length; i++){
        if (dati.posts[i].active === true){
          this.post.push(dati.posts[i]);
        }
      }
     console.log(this.post)

    })
    .catch((err)=>{console.log(err)})
  }
}
