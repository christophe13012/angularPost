import { Component, OnInit, Input } from "@angular/core";
import { SaveService } from "./../services/save.service";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-list-item-component",
  templateUrl: "./post-list-item-component.component.html",
  styleUrls: ["./post-list-item-component.component.scss"]
})
export class PostListItemComponentComponent implements OnInit {
  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor(private saveService: SaveService, private router: Router) {}

  ngOnInit() {
    this.saveService.emitPosts();
  }

  onLoveIts() {
    this.loveIts++;
  }

  onNotLoveIts() {
    this.loveIts--;
  }

  onDelete() {
    this.saveService.deletePost(this.id);
    this.router
      .navigateByUrl("/", { skipLocationChange: true })
      .then(() => this.router.navigate(["/posts"]));
  }
}
