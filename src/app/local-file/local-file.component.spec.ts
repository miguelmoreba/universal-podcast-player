import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalFileComponent } from './local-file.component';

describe('LocalFileComponent', () => {
  let component: LocalFileComponent;
  let fixture: ComponentFixture<LocalFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
