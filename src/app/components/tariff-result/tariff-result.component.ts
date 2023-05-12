import { Component, OnInit } from '@angular/core';
import { Tariff } from 'src/app/models/tariff.model';
import { TariffService } from 'src/app/services/tariff.service';

/**
 * TariffResultComponent is responsible for displaying the tariff result.
 * It retrieves the tariffs from the TariffService and provides sorting functionality.
 */

@Component({
  selector: 'app-tariff-result',
  templateUrl: './tariff-result.component.html',
  styleUrls: ['./tariff-result.component.scss'],
})
export class TariffResultComponent implements OnInit {
  tariffs: any;
  filteredTariffs: Tariff[];
  
  constructor(private tariffService: TariffService) {}

  ngOnInit() {
    this.loadTariffs();
  }

  /**
   * Loads the tariffs asynchronously from the TariffService.
   */
  async loadTariffs() {
    this.tariffs = await this.tariffService.getTariffs();
    this.filteredTariffs = this.tariffs;
  }
  /**
   * Event handler for the sort toggle change event.
   * Sorts the tariffs based on the selected sort option.
   * @param event - The change event object.
   */
  sortToggleEventHandler(event: any) {
    const sortOption = event.value;
    this.sortTariffs(sortOption);
  }

  /**
   * Sorts the tariffs based on the selected sort option.
   * @param option - The selected sort option.
   */
  sortTariffs(option: any) {
    switch (option) {
      case 'upload':
        {
          this.filteredTariffs = this.tariffs.sort((a: any, b: any) => {
            const tariffA = a.uploadSpeed;
            const tariffB = b.uploadSpeed;
            return this.compare(tariffA, tariffB);
          });
        }
        break;
      case 'download':
        {
          this.filteredTariffs = this.tariffs.sort((a: any, b: any) => {
            const tariffA = a.downloadSpeed;
            const tariffB = b.downloadSpeed;
            return this.compare(tariffA, tariffB);
          });
        }
        break;
      case 'price':
        {
          this.filteredTariffs = this.tariffs.sort((a: any, b: any) => {
            const tariffA = a.price;
            const tariffB = b.price;
            return this.compare(tariffA, tariffB);
          });
        }
        break;
    }
  }

  /**
   * Compares two items for sorting purposes.
   * @param itemA - The first item to compare.
   * @param itemB - The second item to compare.
   * @returns A value indicating the comparison result (-1, 0, 1).
   */
  compare(itemA: any, itemB: any) {
    let comparison = 0;
    if (itemA > itemB) {
      comparison = 1;
    } else if (itemA < itemB) {
      comparison = -1;
    }
    return comparison;
  }
}
