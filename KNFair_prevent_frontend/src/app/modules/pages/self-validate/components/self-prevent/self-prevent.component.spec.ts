import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfPreventComponent } from './self-prevent.component';

describe('SelfPreventComponent', () => {
  let component: SelfPreventComponent;
  let fixture: ComponentFixture<SelfPreventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfPreventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfPreventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
