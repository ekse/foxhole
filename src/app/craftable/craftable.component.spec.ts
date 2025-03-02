import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftableComponent } from './craftable.component';

describe('AssetComponent', () => {
  let component: CraftableComponent;
  let fixture: ComponentFixture<CraftableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraftableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CraftableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
