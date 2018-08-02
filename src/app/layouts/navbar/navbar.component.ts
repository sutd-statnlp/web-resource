import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  groups: any;
  discussions: any;

  constructor() {
    this.groups = [
      {
        name: 'SIG Neural'
      },
      {
        name: 'SIG Parsing'
      },
      {
        name: 'SIG Rep Learning'
      },
      {
        name: 'SIG FSM'
      }
    ]
    this.discussions = [
      {
        title: 'SIG Neural Meeting Minutes',
        sub: `Presentation of paper "Attention is All You Need" by Zhang Yan. Second half of the architecture has been discussed about the architecture.`,
      },
      {
        title: 'SIG Parsing Meeting Minutes',
        sub: `We discussed the paper on constituency parsing using structure-label system and provably optimal dynamic oracles.`
      }
    ]
   }

  ngOnInit() {
  }

}
