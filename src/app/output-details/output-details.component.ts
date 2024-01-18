import { Component, Input, OnInit } from '@angular/core';
import { FormData } from '../models/Form';

@Component({
  selector: 'output-details',
  templateUrl: './output-details.component.html',
  styleUrl: './output-details.component.css'
})
export class OutputDetailsComponent implements OnInit {
  
  @Input()
  outputData: FormData;

  ngOnInit(){}
}
