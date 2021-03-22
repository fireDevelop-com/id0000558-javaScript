import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSignupComponent } from './template-signup.component';

describe('TemplateSignupComponent', () => {
  let component: TemplateSignupComponent;
  let fixture: ComponentFixture<TemplateSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
