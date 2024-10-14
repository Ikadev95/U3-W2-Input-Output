import { Component, Input } from '@angular/core';
import { Post } from '../../Models/post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrl: './single-post.component.scss'
})
export class SinglePostComponent {
  @Input() singlePost!:Post


}
