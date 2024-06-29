import { Component, Input } from '@angular/core';
import { ProjectModel } from '../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {

  @Input() project: ProjectModel = new ProjectModel('N/A', 'N/A', [], '');

}
