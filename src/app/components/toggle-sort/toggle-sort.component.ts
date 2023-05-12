import { Component, EventEmitter, Output } from '@angular/core';

/**
 * ToggleSortComponent is responsible for displaying a toggle sort component.
 * It emits an event when the toggle value is changed.
 */
@Component({
  selector: 'app-toggle-sort',
  templateUrl: './toggle-sort.component.html',
  styleUrls: ['./toggle-sort.component.scss'],
})
export class ToggleSortComponent {
  /*
   * Event emitter for the toggle value change event.
   * Emits the selected value when the toggle value is changed.
   */
  @Output() valueChange = new EventEmitter<string>();

  /**

  * Event handler for the sort toggle change event.
  * Emits the selected value when the toggle value is changed.
  * @param event - The change event object.
*/
  sortToggleEventHandler(event: any) {
    this.valueChange.emit(event);
  }
}
