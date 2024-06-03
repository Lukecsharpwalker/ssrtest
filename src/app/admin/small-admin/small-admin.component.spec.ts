import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallAdminComponent } from './small-admin.component';

describe('SmallAdminComponent', () => {
  let component: SmallAdminComponent;
  let fixture: ComponentFixture<SmallAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
