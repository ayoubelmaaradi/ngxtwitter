/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Personal / Commercial License.
 * See LICENSE_PERSONAL / LICENSE_COMMERCIAL in the project root for license information on type of purchased license.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from './http.service';
import {delay, map} from 'rxjs/operators';


@Injectable()
export class TwitterService {
  private readonly apiController: string = 'api/twitter';
  private TOTAL_PAGES: number = 70;

  constructor(private api: HttpService) {
  }
  // @params page: number, pageSize: number
  load(): Observable<any> {
   // const startIndex = ((page - 1) % this.TOTAL_PAGES) * pageSize;
    return this.api
      .get(`${this.apiController}/top_tweets`);
      // .pipe(
      //   // map(news => news.splice(startIndex, pageSize)),
      //   delay(1500),
      // );
  }

  getTopTweets(): Observable<any> {
    return this.api.get(`${this.apiController}/top_tweets`);
      // .pipe(
      //   delay(15000),
      // );
  }

  getNewsHeadLines(): Observable<any> {
    return this.api.get(`${this.apiController}/latest_news`);
  }

  searchQuery(keyword: string): Observable<any> {
    return this.api.get(`${this.apiController}/search?keyword=${keyword}`);
  }

  delete(id: number): Observable<boolean> {
    return this.api.delete(`${this.apiController}/${id}`);
  }

  add(item: any): Observable<any> {
    return this.api.post(this.apiController, item);
  }

  updateCurrent(item: any): Observable<any> {
    return this.api.put(`${this.apiController}/current`, item);
  }

  update(item: any): Observable<any> {
    return this.api.put(`${this.apiController}/${item.id}`, item);
  }
}
