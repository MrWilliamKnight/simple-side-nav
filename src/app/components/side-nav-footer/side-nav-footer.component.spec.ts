import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavFooterComponent } from './side-nav-footer.component';

describe('SideNavFooterComponent', () => {
  let component: SideNavFooterComponent;
  let fixture: ComponentFixture<SideNavFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
