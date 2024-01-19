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

  details: any;

  ngOnInit() {
    this.details = [
      {
        name: "Full Name",
        data: this.outputData.firstName + " " + this.outputData.lastName
      },
      {
        name: "Hostel",
        data: this.outputData.hostel
      },
      {
        name: "Room No.",
        data: this.outputData.roomNo
      },
      {
        name: "Email",
        data: this.outputData.email
      },
      {
        name: "Mobile No.",
        data: this.outputData.mobile
      },
      {
        name: "Food Type",
        data: this.outputData.foodType
      },
      {
        name: "Performances",
        data: this.outputData.performances
      },
      {
        name: "Others",
        data: this.outputData.others
      },
    ]
  }
}
