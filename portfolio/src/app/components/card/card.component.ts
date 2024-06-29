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
  @Input() text: string = "I'm a software developer with over 4 years of expierence in the field and I am in love with development. Embark on a thrilling journey through the diverse landscape of my unique expierences and projects, and if you have any questions along the way please feel free to reach out!"


  





}
