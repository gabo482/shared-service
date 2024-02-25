import { Component } from '@angular/core';
import { DataserviceComponent } from '../../service/dataservice/dataservice.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ DataserviceComponent],
  template: `
    <p>
      <button (click)="updateData('New data!')">Update Shared Data</button>
    </p>
  `,
  styleUrl: './parent.component.css'
})

export class ParentComponent {
  constructor(private dataService:  DataserviceComponent) {}

  updateData(newData: string) {
    this.dataService.updateData(newData);
  }
}