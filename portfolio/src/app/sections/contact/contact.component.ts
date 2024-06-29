import { Component } from '@angular/core';
import { AvatarComponent } from '../../components/avatar/avatar.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  connectMessage: string = "Get in touch if you’re excited by what you see and you’d like to discuss potential collaborations, ideas or just want to say ‘Hi!’."
  emailInfo: string = "mailto:dennisphet@gmail.com?Subject=Connect Now"
  linkedinInfo: string = "https://www.linkedin.com/in/dennis-phetsomphou/"
}
