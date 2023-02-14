import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profile} from '../models/profile.model';
import {Skill} from "../models/skill.model";
import {Project} from "../models/project.model";
import {environment} from "../../environments/environment";
import {Article} from "../models/article.model";
import {Education} from "../models/education.model";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private API = environment.apiURL

  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]>{
    return this.http.get<Article[]>(`${this.API}/articles`)
  }

  getProfile(): Observable<Profile>{
    return this.http.get<Profile>(`${this.API}/profile`)
  }

  getSkillsByName(): Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.API}/skills`)
  }

  getSkillsByLevel(): Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.API}/skills/byLevel`)
  }

  getProjects(): Observable<Project[]>{
    return this.http.get<Project[]>(`${this.API}/projects`)
  }

  getEducation(): Observable<Education[]>{
    return this.http.get<Education[]>(`${this.API}/education`)
  }


}
