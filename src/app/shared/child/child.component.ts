import { Component, OnInit } from '@angular/core';
import { DataserviceComponent } from '../../service/dataservice/dataservice.component';


@Component({
  selector: 'app-child',
  standalone: true,
  imports: [DataserviceComponent],
  template: `
        <p>Shared data: {{ sharedData }}</p>
  `,
  styleUrl: './child.component.css'
})

export class ChildComponent  implements OnInit{
  sharedData: any;

  constructor(private dataService: DataserviceComponent) {}

  ngOnInit() {
    this.dataService.currentData.subscribe(data => this.sharedData = data);
  }
}



