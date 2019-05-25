import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWalksPage } from './my-walks.page';

describe('MyWalksPage', () => {
  let component: MyWalksPage;
  let fixture: ComponentFixture<MyWalksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyWalksPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWalksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
