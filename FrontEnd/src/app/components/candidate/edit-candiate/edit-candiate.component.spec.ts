import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCandiateComponent } from './edit-candiate.component';

describe('EditCandiateComponent', () => {
  let component: EditCandiateComponent;
  let fixture: ComponentFixture<EditCandiateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCandiateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCandiateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
