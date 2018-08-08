import { Component, OnInit } from '@angular/core';
import { PaperService, IPaper } from '../../../core';

@Component({
  selector: 'app-paper-list',
  templateUrl: './paper-list.component.html',
  styleUrls: ['./paper-list.component.scss']
})
export class PaperListComponent implements OnInit {
  papers: IPaper[];
  searchText: string;
  paperKeywords: string[];

  constructor(
    private paperService: PaperService
  ) {
    this.searchText = '';
  }

  ngOnInit() {
    this.paperService.all()
      .subscribe(items => this.papers = items);

    this.paperService.getKeywords()
      .subscribe(items => this.paperKeywords = items);
  }

  searchModelEvent(text: string) {
    this.searchText = text;
  }

  isSearching(): boolean {
    return this.searchText.trim() !== '';
  }
}
