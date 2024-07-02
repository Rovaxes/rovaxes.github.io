import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardProjectComponent } from '../../components/card-project/card-project.component';
import { ProjectModel } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CardProjectComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projects: Array<ProjectModel> = [
    new ProjectModel(
      'Level Up',
      'This is my take on a to-do list app built in Flutter. Create missions, gain experience, and level up! This application was used and took in best practices following the provider/consumer patterns',
      [
        'Dart',
        'Flutter',
        'Web Development',
        'Mobile Development',
        'Productivity',
        'UI/UX',
        'Data structures',
        'Front-end'
      ],
      'projects/levelUpSnap.png',
      'https://github.com/Rovaxes/flutter-todo-app',
      'https://rovaxes.github.io/flutter-todo-app/'
    ),
    new ProjectModel(
      'The Slums',
      'A 2D Endless Runner that utilizes C# scripts to dynamically spawn the environment and enemies to allow for a natural parallax scrolling effect. Players need to avoid or defeat enemies and travel as far as possible to achieve the highest score possible.',
      [
        'C#',
        'Unity',
        'Scripting',
        'Sprites',
        'Object Oriented Programming',
        'Data Structures',
        'Game development'
      ],
      'projects/slumsSnap.png',
      'https://github.com/Rovaxes/Unity_The_Slums',
      'https://rovaxes.itch.io/the-slums'
    ),
    new ProjectModel(
      'Push Over',
      'Indie game developed in Unity and C# where you play as a cube trying to survive for as long as possible. Players need to dodge the falling objects and once it has hit the floor they will be \'pushable\' and cleared away.',
      [
        'C#',
        'Unity',
        'Scripting',
        'Physics',
        'Object Oriented Programming',
        'Data Structures',
        'Game development'
      ],
      'projects/pushOverSnap.png',
      undefined,
      'https://rovaxes.itch.io/alpha-test'
    ),
    new ProjectModel(
      'LED Table',
      'This is my first experience and the gateway project that got me into engineering! It is an LED miniature table that uses infrared sensors to reactively light up the panels and play music built with an Arduino Duo.',
      [
        'Arduino',
        'C++',
        'Hardware/Electronics',
        'LEDs',
        'Soldering',
        'PCBs'
      ],
      'projects/ledTableSnap.png',
      '',
      'https://www.youtube.com/watch?v=ohMglQeuqRM'
    )
  ]


}
