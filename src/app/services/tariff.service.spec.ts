import { TestBed } from '@angular/core/testing';

import { TariffService } from './tariff.service';

describe('TariffService', () => {
  let service: TariffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TariffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve tariffs asynchronously', async () => {
    const tariffs = await service.getTariffs();

    expect(tariffs).toBeDefined();
    expect(Array.isArray(tariffs)).toBe(true);
  });
});
