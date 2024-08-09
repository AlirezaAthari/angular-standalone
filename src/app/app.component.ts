import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MyStandaloneComponent } from './my-standalone-component/my-standalone-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyStandaloneComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'standalone-angular-project';
}
