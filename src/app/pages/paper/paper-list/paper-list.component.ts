import { Component, OnInit } from '@angular/core';
import { PaperService } from '../../../core';

@Component({
  selector: 'app-paper-list',
  templateUrl: './paper-list.component.html',
  styleUrls: ['./paper-list.component.scss']
})
export class PaperListComponent implements OnInit {
  papers: any;

  constructor(
    private paperService: PaperService
  ) { }

  ngOnInit() {
    this.papers = this.paperService.all();
  }

}
