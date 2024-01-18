import { Component } from '@angular/core';
import { FormData } from './models/Form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  outputData?: FormData;

  setOPData(data: FormData) {
    this.outputData = {...data}
  }
}
