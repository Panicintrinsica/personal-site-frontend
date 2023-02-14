import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import {HttpClientModule} from "@angular/common/http";
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxSmartModalModule} from "ngx-smart-modal";
let loader: HarnessLoader;

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResumeComponent
      ],
      imports: [
        HttpClientModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatExpansionModule,
        MatCheckboxModule,
        BrowserAnimationsModule,
        NgxSmartModalModule.forRoot()
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ResumeComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
