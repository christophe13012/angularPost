import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "blog";
  posts: Posts[];

  constructor() {
    this.posts = [
      {
        title: "Titre du 1er post",
        content:
          "Dolor esse commodo esse adipisicing reprehenderit ea occaecat sit.",
        loveIts: 2,
        created_at: new Date()
      },
      {
        title: "2ieme post",
        content: "Id ea incididunt deserunt eu Lorem.",
        loveIts: -3,
        created_at: new Date()
      },
      {
        title: "3ieme post",
        content: "Sit deserunt enim veniam exercitation id aliquip non culpa.",
        loveIts: 0,
        created_at: new Date()
      }
    ];
  }
}

export class Posts {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
}
