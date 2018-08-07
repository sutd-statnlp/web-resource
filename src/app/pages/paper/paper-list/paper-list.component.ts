import { Component, OnInit } from '@angular/core';
import { PaperService } from '../../../core';

@Component({
  selector: 'app-paper-list',
  templateUrl: './paper-list.component.html',
  styleUrls: ['./paper-list.component.scss']
})
export class PaperListComponent implements OnInit {
  papers: any;
  searchText: string;
  paperKeywords: string[];

  constructor(
    private paperService: PaperService
  ) {
    this.searchText = '';
  }

  ngOnInit() {
    this.papers = this.paperService.all();
    this.paperKeywords = this.paperService.getKeywords();
  }

  searchModelEvent(text: string) {
    this.searchText = text;
  }

  isSearching(): boolean {
    return this.searchText.trim() !== '';
  }
}
