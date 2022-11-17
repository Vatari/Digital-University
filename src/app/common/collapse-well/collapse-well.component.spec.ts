import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseWellComponent } from './collapse-well.component';

describe('CollapseWellComponent', () => {
  let component: CollapseWellComponent;
  let fixture: ComponentFixture<CollapseWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollapseWellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollapseWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
