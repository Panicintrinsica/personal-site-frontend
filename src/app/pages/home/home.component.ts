import { Component, OnInit } from '@angular/core';
import {ServerService} from "../../services/server.service";
import {map, Observable} from "rxjs";
import {Article} from "../../models/article.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  article$: Observable<Article[]>
  page$: Observable<Number | void>

  pages: number = 0;


  constructor(private server: ServerService, private route: ActivatedRoute) {
    let page

    this.route.paramMap.subscribe((params) => {
      page = params.get('page')
    })

    this.page$ = server.getArticlePageCount()
      .pipe(
        map(count => {
          this.pages = count / 5
        } )
      )

    if(page){
      this.article$ = server.getArticlePage(page)
    } else {
      this.article$ = server.getArticles()
    }
  }

  ngOnInit(): void {
  }

}
