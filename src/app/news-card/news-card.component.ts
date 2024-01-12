import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
})
export class NewsCardComponent  implements OnInit {
  @Input() titulo: string="";
  @Input() descripcion: string="";
  @Input() imagen: string=""

  constructor() { }

  ngOnInit() {}

}