import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidationDetailPage } from './validation-detail.page';

describe('ValidationDetailPage', () => {
  let component: ValidationDetailPage;
  let fixture: ComponentFixture<ValidationDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
