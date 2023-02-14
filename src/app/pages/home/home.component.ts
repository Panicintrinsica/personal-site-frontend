import { Component, OnInit } from '@angular/core';
import {ServerService} from "../../server.service";
import {Observable, Subscription} from "rxjs";
import {Article} from "../../models/article.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  article$: Observable<Article[]>

  constructor(private server: ServerService) {
    this.article$ = server.getArticles()
  }

  ngOnInit(): void {
  }

}
