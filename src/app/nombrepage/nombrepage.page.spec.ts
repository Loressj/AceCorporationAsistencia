import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular'; // Asegúrate de importar IonicModule si estás usando Ionic

import { NombrepagePage } from './nombrepage.page';

describe('NombrepagePage', () => {
  let component: NombrepagePage;
  let fixture: ComponentFixture<NombrepagePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NombrepagePage],
      imports: [IonicModule.forRoot()] // Agrega IonicModule aquí si usas Ionic
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(NombrepagePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

