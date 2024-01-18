import { Component } from '@angular/core';

@Component({
  selector: 'input-form',
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css'
})
export class InputFormComponent {
  performances = [
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
}
