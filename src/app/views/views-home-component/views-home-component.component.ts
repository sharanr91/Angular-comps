import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home-component',
  templateUrl: './views-home-component.component.html',
  styleUrls: ['./views-home-component.component.css']
})
export class ViewsHomeComponentComponent implements OnInit {

  stats = [
    { value: 22, label: "# of Users" },
    { value: 90000, label: "Revenue" },
    { value: 459, label: "Reviews" }
  ]

  items = [
    { image: 'assets/images/couch.jpeg', title: "Couch", description: "Fantastic couch to sit on " },
    { image: 'assets/images/dresser.jpeg', title: "Dresser", description: "This is a great dresser to put stuff" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
