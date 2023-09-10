import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestConstructionComponent } from './test-construction.component';

describe('TestConstructionComponent', () => {
  let component: TestConstructionComponent;
  let fixture: ComponentFixture<TestConstructionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestConstructionComponent]
    });
    fixture = TestBed.createComponent(TestConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
