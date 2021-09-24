import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PodcastUrlComponent } from './podcast-url.component';

describe('PodcastUrlComponent', () => {
  let component: PodcastUrlComponent;
  let fixture: ComponentFixture<PodcastUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastUrlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
