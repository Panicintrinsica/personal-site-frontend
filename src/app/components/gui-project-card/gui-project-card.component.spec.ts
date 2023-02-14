import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiProjectCardComponent } from './gui-project-card.component';
import {MatDialogModule} from "@angular/material/dialog";

describe('GuiProjectCardComponent', () => {
  let component: GuiProjectCardComponent;
  let fixture: ComponentFixture<GuiProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiProjectCardComponent ],
      imports: [ MatDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
