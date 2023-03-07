import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiArticleComponent } from './gui-article.component';

describe('GuiArticleComponent', () => {
  let component: GuiArticleComponent;
  let fixture: ComponentFixture<GuiArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuiArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuiArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
