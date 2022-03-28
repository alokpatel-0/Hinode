import { Component, Input, OnInit } from '@angular/core';
import { records } from '../shared/models/cardData';

import { CardScreenService } from 'src/app/shared/services/card-screen.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() data!: records;
  @Input() shopId!: records;
  constructor(private cardservice: CardScreenService) {}

  ngOnInit(): void {}

  
}
