import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewloadComponent } from './newload.component';

describe('NewloadComponent', () => {
  let component: NewloadComponent;
  let fixture: ComponentFixture<NewloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
