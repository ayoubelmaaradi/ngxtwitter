import {Component, OnInit} from '@angular/core';
import {NewsService} from '../news.service';
import {TwitterService} from '../../../@core/service/twitter.service';

@Component({
  selector: 'ngx-infinite-list',
  templateUrl: 'infinite-list.component.html',
  styleUrls: ['infinite-list.component.scss'],
  providers: [TwitterService, NewsService],
})
export class InfiniteListComponent implements OnInit {


  firstCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  secondCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  thirdCard = {
    news: [],
    placeholders: [],
    loading: false,
    pageToLoadNext: 1,
  };
  pageSize = 10;
  newsHeadLine = {
    'text': '',
    'date': '',
  };
  query: string;

  constructor(private newsService: NewsService, private twitterService: TwitterService) {
  }

  searchQuery() {
    this.twitterService.searchQuery(this.query).subscribe(data => {
      this.thirdCard.news = data;
    });
  }

  loadNext(cardData) {
    if (cardData.loading) {
      return;
    }
    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    // this.twitterService.getTopTweets()
    //   .subscribe(nextNews => {
    //     console.log(nextNews)
    //     cardData.placeholders = []; // was push (... news)
    //     cardData.news = nextNews;
    //     cardData.loading = false;
    //     cardData.pageToLoadNext++;
    //   });
  }

  ngOnInit(): void {
    // this.twitterService.getTopTweets().subscribe(data => {
    //   this.firstCard.news = data;
    // });
    if (!this.query) {
      this.query = 'stock,finance';
      this.twitterService.searchQuery(this.query).subscribe(data => {
        console.log(data),
          this.firstCard.news = data;
      });
    }
    this.twitterService.getNewsHeadLines().subscribe(data => {
      // console.log(data),
        this.secondCard.news = data;
    });
  }
}
