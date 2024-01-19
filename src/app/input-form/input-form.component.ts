import { AfterViewInit, Component, ElementRef, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormData } from '../models/Form';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  
  performancesList = [
    {
      id: "ke_singing",
      name: "KE Hall Singing",
    },
    {
      id: "jh_singing",
      name: "Jonas Hall Singing",
    },
    {
      id: "kj_singing",
      name: "KE & Jonas Combine Singing",
    },
    {
      id: "ke_dancing",
      name: "KE Hall Dancing",
    },
    {
      id: "jh_dancing",
      name: "Jonas Hall Dancing",
    },
    {
      id: "kj_dancing",
      name: "KE & Jonas Combine Dancing",
    },
    {
      id: "other",
      name: "Others",
    },
    {
      id: "none",
      name: "Not Interested",
    },
  ]

  @Output()
  outputFormData: EventEmitter<FormData> = new EventEmitter<FormData>();
  
  formData: FormData = {
    firstName: "",
    lastName: "",
    hostel: "",
    roomNo: 0,
    email: "",
    mobile: "",
    foodType: "",
    performances: [],
    others: "",
  }

  @ViewChild('fName') fName: ElementRef;
  @ViewChild('lName') lName: ElementRef;
  @ViewChild('hostel') hostel: ElementRef;
  @ViewChild('roomNo') roomNo: ElementRef;
  @ViewChild('email') email: ElementRef;
  @ViewChild('mobile') mobile: ElementRef;
  @ViewChild('foodType') foodType: ElementRef;
  @ViewChildren('performances', {read: ElementRef}) performances: QueryList<ElementRef>;
  @ViewChild('others') others: ElementRef;
  
  saveData() {
    this.formData.firstName = this.fName.nativeElement.value;
    this.formData.lastName = this.lName.nativeElement.value;
    this.formData.hostel = this.hostel.nativeElement.value;
    this.formData.roomNo = this.roomNo.nativeElement.value;
    this.formData.email = this.email.nativeElement.value;
    this.formData.mobile = this.mobile.nativeElement.value;
    this.formData.foodType = this.foodType.nativeElement.value;
    this.formData.others = this.others.nativeElement.value;

    const checkedPerformances = this.performances.filter(checked => checked.nativeElement.checked)
    
    checkedPerformances.map((p) => {
      this.formData.performances.push(p.nativeElement.value)
    })    

    this.outputFormData.emit(this.formData)
  }
}
