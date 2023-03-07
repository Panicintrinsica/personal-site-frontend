import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BiographyComponent } from './pages/biography/biography.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GuiNavbarComponent } from './components/gui-navbar/gui-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { GuiProjectCardComponent } from './components/gui-project-card/gui-project-card.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { GuiFooterComponent } from './components/gui-footer/gui-footer.component';
import {MatDialogModule} from '@angular/material/dialog';
import {ProjectDetailsDialogComponent} from './pages/projects/project-details-dialog.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ResumeComponent} from './pages/resume/resume.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {NgxSmartModalModule} from "ngx-smart-modal";
import {CdkDrag, CdkDragHandle, CdkDropList} from "@angular/cdk/drag-drop";
import { ArticleComponent } from './pages/article/article.component';
import {MarkdownModule} from "ngx-markdown";
import { GuiArticleComponent } from './components/gui-article/gui-article.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BiographyComponent,
    ProjectsComponent,
    GuiNavbarComponent,
    GuiProjectCardComponent,
    GuiFooterComponent,
    ProjectDetailsDialogComponent,
    ResumeComponent,
    ArticleComponent,
    GuiArticleComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatTabsModule,
        MatSidenavModule,
        MatIconModule,
        MatDialogModule,
        HttpClientModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatExpansionModule,
        MatCheckboxModule,
        NgxSmartModalModule.forRoot(),
        MarkdownModule.forRoot(),
        CdkDropList,
        CdkDrag,
        CdkDragHandle,
        ReactiveFormsModule
    ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
