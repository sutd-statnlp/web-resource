import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { PaperService } from '../../../core';

@Component({
  selector: 'app-paper-detail',
  templateUrl: './paper-detail.component.html',
  styleUrls: ['./paper-detail.component.scss']
})
export class PaperDetailComponent implements OnInit {
  id: string;
  paper: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paperService: PaperService,
    private sanitizer: DomSanitizer
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.paper = this.paperService.get(this.id);
  }

  sanitizeResourceUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
