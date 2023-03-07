import {Component} from '@angular/core';
import {Article} from "../../models/article.model";

@Component({
  selector: 'gui-article',
  inputs: ['data', 'isStub'],
  templateUrl: './gui-article.component.html',
  styleUrls: ['./gui-article.component.scss']
})
export class GuiArticleComponent {
  data: Article = {
    author: "",
    category: "",
    fullContent: "",
    isPublished: false,
    shortContent: "",
    slug: "",
    tags: [],
    title: ""
  };

  isStub: boolean = false;
}
