import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardType } from '../../enums/CardType';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() type: CardType = CardType.text;
  @Input() bottomAlignImage: boolean = false;
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() text: string = '';


  





}
