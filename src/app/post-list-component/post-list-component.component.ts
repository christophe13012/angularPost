import { Component, OnInit, Input } from "@angular/core";
import { SaveService } from "./../services/save.service";

@Component({
  selector: "app-post-list-component",
  templateUrl: "./post-list-component.component.html",
  styleUrls: ["./post-list-component.component.scss"]
})
export class PostListComponentComponent implements OnInit {
  posts: any[];
  constructor(private saveService: SaveService) {}

  ngOnInit() {
    this.posts = this.saveService.posts;
  }
}
