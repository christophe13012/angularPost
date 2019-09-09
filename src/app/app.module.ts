import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { SaveService } from "./services/save.service";
import { AppComponent } from "./app.component";
import { PostListComponentComponent } from "./post-list-component/post-list-component.component";
import { PostListItemComponentComponent } from "./post-list-item-component/post-list-item-component.component";
import { FormsModule } from "@angular/forms";
import { FormComponent } from "./form/form.component";
import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

const appRoutes: Routes = [
  { path: "posts", component: PostListComponentComponent },
  { path: "form", component: FormComponent },
  { path: "", component: PostListComponentComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    FormComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [SaveService],
  bootstrap: [AppComponent]
})
export class AppModule {}
