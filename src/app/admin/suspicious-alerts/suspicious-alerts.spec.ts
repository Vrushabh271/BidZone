import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuspiciousAlerts } from './suspicious-alerts';

describe('SuspiciousAlerts', () => {
  let component: SuspiciousAlerts;
  let fixture: ComponentFixture<SuspiciousAlerts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspiciousAlerts],
    }).compileComponents();

    fixture = TestBed.createComponent(SuspiciousAlerts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
