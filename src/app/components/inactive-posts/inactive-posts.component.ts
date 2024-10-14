import { Component } from '@angular/core';
import { Post } from '../../Models/post';
import { iResponse } from '../../Models/response';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  post: Post[] = [];
  ngOnInit(){ // caricamento del componente
    fetch('./assets/db.json')
    .then((res)=><Promise<iResponse>>res.json())
    .then((dati)=>{
      console.log(dati.posts);

      for ( let i = 0 ; i < dati.posts.length; i++){
        if (dati.posts[i].active === false){
          this.post.push(dati.posts[i]);
        }
      }
     console.log(this.post)

    })
    .catch((err)=>{console.log(err)})
  }
}
