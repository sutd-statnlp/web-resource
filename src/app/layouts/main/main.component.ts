import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  title: string
  constructor() {
    this.title  = "web-resource"
   }

  ngOnInit() {
  }

}
