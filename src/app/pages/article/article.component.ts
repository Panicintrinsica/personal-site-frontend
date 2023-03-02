import { Component } from '@angular/core';
import {ServerService} from "../../services/server.service";
import {Observable} from "rxjs";
import {Article} from "../../models/article.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  article$: Observable<Article> | undefined

  constructor(server: ServerService, route: ActivatedRoute) {

    route.paramMap.subscribe(params => {
      const slug = params.get('slug')

      if(slug){
        this.article$ = server.getArticle(slug)
      }

    });


  }

}
