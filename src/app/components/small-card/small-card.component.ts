import { Component, Input, OnInit } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  cardImg:string = '';
  @Input()
  cardDate:string = '';
  @Input()
  cardTitle:string = '';
  @Input()
  Id:string = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
