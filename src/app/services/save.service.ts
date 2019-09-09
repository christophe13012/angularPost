import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Post } from "../Models/Post.model";

@Injectable({
  providedIn: "root"
})
export class SaveService {
  postSubject = new Subject<Post[]>();
  posts: Post[] = [
    new Post(
      0,
      "titre",
      "Dolor esse commodo esse adipisicing reprehenderit ea occaecat sit",
      2,
      new Date()
    ),
    new Post(
      1,
      "2ieme post",
      "Id ea incididunt deserunt eu Lorem.",
      -3,
      new Date()
    ),
    new Post(
      2,
      "3ieme post",
      "Sit deserunt enim veniam exercitation id aliquip non culpa.",
      0,
      new Date()
    )
  ];

  emitPosts() {
    this.postSubject.next([...this.posts]);
  }

  constructor() {}

  addPost(title, content) {
    const post = new Post(this.posts.length, title, content, 0, new Date());
    this.posts.push(post);
    this.emitPosts();
  }

  deletePost(id) {
    this.posts = this.posts.filter(post => post.id != id);
    this.emitPosts();
    console.log(this.posts);
  }
}
