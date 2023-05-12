import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { of } from 'rxjs';
import { TariffService } from 'src/app/services/tariff.service';
import { ToggleSortComponent } from '../toggle-sort/toggle-sort.component';

import { TariffResultComponent } from './tariff-result.component';

describe('TariffResultComponent', () => {
  let component: TariffResultComponent;
  let fixture: ComponentFixture<TariffResultComponent>;
  let mockTariffService: jasmine.SpyObj<TariffService>;

  beforeEach(async () => {
    const tariffServiceMock = {
      getTariffs: jasmine
        .createSpy('getTariffs')
        .and.returnValue(Promise.resolve([])),
    };

    await TestBed.configureTestingModule({
      declarations: [TariffResultComponent, ToggleSortComponent],
      imports: [MatButtonToggleModule],
      providers: [{ provide: TariffService, useValue: tariffServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(TariffResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
