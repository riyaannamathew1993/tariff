import { Injectable } from '@angular/core';
import { Tariff } from '../models/tariff.model';

/**
 * TariffService is responsible for retrieving tariff data.
 * It provides a method to fetch tariffs asynchronously.
 */

@Injectable({
  providedIn: 'root',
})
export class TariffService {
  /**
   * An array of mocked tariff data.
   */
  private mockedData: Tariff[] = [
    {
      id: 1,
      name: 'Tariff 1',
      downloadSpeed: 100,
      uploadSpeed: 200,
      benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
      price: 300,
    },
    {
      id: 2,
      name: 'Tariff 2',
      downloadSpeed: 50,
      uploadSpeed: 50,
      benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
      price: 3200,
    },
    {
      id: 3,
      name: 'Tariff 3',
      downloadSpeed: 200,
      uploadSpeed: 100,
      benefits: ['Tariff Benefit 1', 'Tariff Benefit 2', 'Tariff Benefit 3'],
      price: 2300,
    },
    {
      id: 4,
      name: 'Tariff 4',
      downloadSpeed: 120,
      uploadSpeed: 220,
      benefits: ['Tariff Benefit 1', 'Tariff Benefit 2'],
      price: 1800,
    },
    {
      id: 5,
      name: 'Tariff 5',
      downloadSpeed: 240,
      uploadSpeed: 150,
      benefits: ['Tariff Benefit 1', 'Tariff Benefit 2'],
      price: 2300,
    },
  ];
  constructor() {}

  /**
   * Retrieves the tariffs asynchronously.
   * Simulates an asynchronous API call with a 1-second delay.
   * @returns A promise that resolves to the array of tariffs.
   */
  getTariffs() {
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockedData);
      }, 1000); // Simulating a 1-second delay
    });
  }
}
