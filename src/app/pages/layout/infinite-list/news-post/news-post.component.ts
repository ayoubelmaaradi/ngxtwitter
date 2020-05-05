import { Component, Input } from '@angular/core';

import { NewsPost } from '../../news.service';
import {Tweet} from "../../../../@core/model/Tweet";

@Component({
  selector: 'ngx-news-post',
  templateUrl: 'news-post.component.html',
})
export class NewsPostComponent {

  @Input() post: string;
  @Input() date: string;
}
