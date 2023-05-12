import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ToggleSortComponent } from './toggle-sort.component';

describe('ToggleSortComponent', () => {
  let component: ToggleSortComponent;
  let fixture: ComponentFixture<ToggleSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleSortComponent],
      imports: [MatButtonToggleModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value when sort toggle changes', () => {
    const expectedValue = 'upload';
    let emittedValue: string | undefined;
    component.valueChange.subscribe((value: string) => {
      emittedValue = value;
    });
    component.sortToggleEventHandler(expectedValue);
    expect(emittedValue).toBe(expectedValue);
  });
});
