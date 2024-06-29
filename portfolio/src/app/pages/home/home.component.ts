import { Component } from '@angular/core';
import { AboutComponent } from '../../sections/about/about.component';
import { ExperiencesComponent } from '../../sections/experiences/experiences.component';
import { ProjectsComponent } from '../../sections/projects/projects.component';
import { CommonModule } from '@angular/common';
import { LandingComponent } from '../../sections/landing/landing.component';
import { ContactComponent } from '../../sections/contact/contact.component';
import { FooterComponent } from '../../sections/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LandingComponent, AboutComponent, ExperiencesComponent, ProjectsComponent, ContactComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
