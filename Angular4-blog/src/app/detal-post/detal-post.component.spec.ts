import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalPostComponent } from './detal-post.component';

describe('DetalPostComponent', () => {
  let component: DetalPostComponent;
  let fixture: ComponentFixture<DetalPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
