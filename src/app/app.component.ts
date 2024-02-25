import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './shared/parent/parent.component';
import { ChildComponent } from './shared/child/child.component'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent,ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'shared-service';
}
