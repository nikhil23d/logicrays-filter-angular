import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFrontendComponent } from './filter-frontend.component';

describe('FilterFrontendComponent', () => {
  let component: FilterFrontendComponent;
  let fixture: ComponentFixture<FilterFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
