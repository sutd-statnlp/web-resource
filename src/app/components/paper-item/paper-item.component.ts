import { Component, OnInit, Input } from '@angular/core';
import { IPaper } from '../../core';

@Component({
  selector: 'app-paper-item',
  templateUrl: './paper-item.component.html',
  styleUrls: ['./paper-item.component.scss']
})
export class PaperItemComponent implements OnInit {
  @Input() paper: IPaper;
  @Input() icon: string = 'ni ni-paper-diploma';

  constructor() { }

  ngOnInit() {
  }

}
