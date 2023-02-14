import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiNavbarComponent } from './gui-navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";

describe('GuiNavbarComponent', () => {
  let component: GuiNavbarComponent;
  let fixture: ComponentFixture<GuiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule
      ],
      declarations: [ GuiNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
