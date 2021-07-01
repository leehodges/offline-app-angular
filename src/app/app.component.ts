import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Post[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=e87d04bb91f28a1bb981bd4236e09b48&language=en-US&page=1')
      .subscribe(fetchedPosts => (this.posts = fetchedPosts['results']));

  }
}
