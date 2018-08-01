import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownsettingsComponent } from './dropdownsettings.component';

describe('DropdownsettingsComponent', () => {
  let component: DropdownsettingsComponent;
  let fixture: ComponentFixture<DropdownsettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownsettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownsettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
