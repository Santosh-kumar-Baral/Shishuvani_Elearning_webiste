import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalAtoZComponent } from './capital-ato-z.component';

describe('CapitalAtoZComponent', () => {
  let component: CapitalAtoZComponent;
  let fixture: ComponentFixture<CapitalAtoZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapitalAtoZComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapitalAtoZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
