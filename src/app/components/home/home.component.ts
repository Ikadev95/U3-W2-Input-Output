import { Component } from '@angular/core';
import { Post } from '../../Models/post';
import { iResponse } from '../../Models/response';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  post: Post[] = [];
  titleHeader: string = "";
  bodyHeader: string = "";
  tagsHeader: Array<string> = []
  ngOnInit(){ // caricamento del componente
    fetch('./assets/db.json')
    .then((res)=><Promise<iResponse>>res.json())
    .then((dati)=>{
      //console.log(dati.posts);
      this.titleHeader = dati.posts[0].title
      this.bodyHeader = dati.posts[0].body
      this.tagsHeader = dati.posts[0].tags

      for ( let i = 1 ; i < 5; i++){
        this.post.push(dati.posts[i]);
      }
     // console.log(this.post[0].title)

    })
    .catch((err)=>{console.log(err)})
  }
}

