import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CardType } from '../../enums/CardType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  CardType = CardType;

  welcomeTitle: string = 'Welcome to my portfolio!'
  welcomeText: string = "I'm a software developer with over 4 years of expierence in the field and I am in love with development. Embark on a thrilling journey through the diverse landscape of my unique experiences and creations, and if you have any questions along the way please feel free to reach out!"

  portraitPicture: string = 'portrait.jpeg';
  showcaseOnePicture: string = '/projects/pushOverSnap.png'
  showcaseTwoPicture: string = '/projects/slumsSnap.png'

}
