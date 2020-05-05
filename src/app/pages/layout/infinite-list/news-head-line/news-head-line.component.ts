import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ngx-news-head-line',
  templateUrl: './news-head-line.component.html',
  styleUrls: ['./news-head-line.component.scss']
})
export class NewsHeadLineComponent implements OnInit {
  @Input() text: string;
  @Input() date: string;

  constructor() { }

  ngOnInit(): void {
  }

}
