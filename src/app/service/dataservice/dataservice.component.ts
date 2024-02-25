import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


@Component({
  selector: 'app-dataservice',
  standalone: true,
  imports: [],
  template: `
    <p>
      dataservice works!
    </p>
  `,
  styleUrl: './dataservice.component.css'
})


export class DataserviceComponent {
  private data = new BehaviorSubject<string>('');
  currentData = this.data.asObservable();

  updateData(newData: string) {
    this.data.next(newData);
  }
}




