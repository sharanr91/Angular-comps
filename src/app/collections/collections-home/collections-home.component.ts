import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data: Array<object> = [
    { name: "sharan", age: 28, job: "developer" },
    { name: "rithika", age: 28, job: "plant-doctor" },
    { name: "buddi", age: 2, job: "just-playing" }
  ]

  headers: Array<object> = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "job", label: "Job" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
