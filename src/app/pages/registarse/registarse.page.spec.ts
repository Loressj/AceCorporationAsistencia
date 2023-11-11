import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RegistarsePage } from './registarse.page';

describe('RegistarsePage', () => {
  let component: RegistarsePage;
  let fixture: ComponentFixture<RegistarsePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistarsePage],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(RegistarsePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

