import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiFooterComponent } from './gui-footer.component';

describe('GuiFooterComponent', () => {
  let component: GuiFooterComponent;
  let fixture: ComponentFixture<GuiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
