import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent  implements OnInit {
  @Input() tituloNoticia: string="";
  @Input() apartado1: string="";
  @Input() apartado2: string=""
  @Input() apartado3: string=""

  constructor() { }

  ngOnInit() {}

}
