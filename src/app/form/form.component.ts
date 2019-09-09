import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { SaveService } from "./../services/save.service";
import { Subscription } from "rxjs/Subscription";
import { Router } from "@angular/router";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent implements OnInit {
  posts: any[];
  postSubscription: Subscription;
  constructor(private saveService: SaveService, private router: Router) {}

  ngOnInit() {
    this.postSubscription = this.saveService.postSubject.subscribe(
      (posts: any[]) => {
        this.posts = posts;
      }
    );
    this.saveService.emitPosts();
  }

  onSubmit(form: NgForm) {
    const title = form.value["title"];
    const content = form.value["content"];
    this.saveService.addPost(title, content);
    this.router.navigate(["/posts"]);
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }
}
