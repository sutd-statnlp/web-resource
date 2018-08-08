import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { PaperService, IPaper } from '../../../core';

@Component({
  selector: 'app-paper-detail',
  templateUrl: './paper-detail.component.html',
  styleUrls: ['./paper-detail.component.scss']
})
export class PaperDetailComponent implements OnInit {
  paper: IPaper;
  id: string;
  nextId: string;
  previousId: string;

  constructor(
    private route: ActivatedRoute,
    private paperService: PaperService,
    private sanitizer: DomSanitizer
  ) {
    route.params.subscribe(() => this.initialize());
  }

  ngOnInit() {
    this.initialize();
  }

  initialize() {
    let id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    this.paper = this.paperService.get(id);
    this.previousId = this.paperService.getPreviousID(id);
    this.nextId = this.paperService.getNextID(id);
  }

  sanitizeResourceUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
