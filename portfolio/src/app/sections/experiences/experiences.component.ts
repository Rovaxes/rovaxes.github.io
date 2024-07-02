import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ExpierenceModel } from '../../models/expierence.model';
import { CommonModule, NgFor } from '@angular/common';
import { CardTerminalComponent } from '../../components/card-terminal/card-terminal.component';
import { ExpierenceGroupModel } from '../../models/expierence-group.model';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [NgFor, CardComponent, CardTerminalComponent, CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  expierences: Array<ExpierenceGroupModel> = [
    new ExpierenceGroupModel(
      'XTM Inc',
      [
        new ExpierenceModel(
          'Full Stack Developer',
          'XTM Inc',
          [
            'Design, develop, and maintain features for their products through web services and mobile/web applications.',
            'Partnered with product owners and designers to re-architect a multi-page web app from Vue.js to Flutter',
            'Built and maintained RESTful APIs using Python and FastAPI that serve over 40,997 active users.'
          ],
          [
            'Python',
            'FastAPI',
            'SQL',
            'PostgreSQL',
            'Flutter',
            'Vue.js',
            'Javascript',
            'HTML/CSS',
            'Git',
            'Kubernetes',
            'Docker/Containers',
            'Agile',
            'Scrum'
          ],
          new Date('2022-10-1')
        ),
        new ExpierenceModel(
          'Back-end Developer',
          'XTM Inc',
          [
            'Maintained and provided backend support for the different applications and services at the company, utilizing technologies like Python, FastAPI, and PostgreSQL.',
            'Aided in 2 client integrations with our APIs and developed features tailored to their needs, ensuring a seamless and successful experience.',
            'Part of the team to successfully develop and launch the Reverse ATM project in the Roger\'s Center and BMO Field Arena.'
          ],
          [
            'Python',
            'FastAPI',
            'SQL',
            'PostgreSQL',
            'Vue.js',
            'Javascript',
            'HTML/CSS',
            'Git',
            'Kubernetes',
            'Docker/Containers',
            'Agile',
            'Scrum'
          ],
          new Date('2021-01-1'),
          new Date('2021-08-1'),
        )
      ]
    ),
    new ExpierenceGroupModel(
      'Canadian Tire',
      [
        new ExpierenceModel(
          'Technology Associate - Cloud Developer',
          'Canadian Tire',
          [
            'Worked in a cross-functional team to deploy Synapse workspaces and provide Azure AD access through existing pipelines and terraform',
            'Aided in the migration/upgrade of the teams\' Azure AD access workflow'
          ],
          [
            'Terrafrom',
            'Powershell',
            'Azure',
            'Azure Devops',
            'Azure AD',
            'Cloud'
          ],
          new Date('2023-10-1'),
          new Date('2023-11-31'),
        ),
        new ExpierenceModel(
          'Technology Associate - Full-stack Developer',
          'Canadian Tire',
          [
            'Leveraged full-stack development tools like Angular and Java to seamlessly integrate new features and requests for FGL\'s and Mark\'s POS systems across 100s of stores in Canada.',
            'Developed and maintained automation tests using Selenium and Jenkins to reduce bugs and provide confidence before releases, pushing towards full coverage.'
          ],
          [
            'Angular',
            'Typescript/Javascript',
            'Java',
            'SQL',
            'Agile',
            'Scrum',
            'Selenium',
            'Testing',
            'Jenkins',
            'Restful APIs',
            'Jira',
            'Git',
            'Bitbucket'
          ],
          new Date('2023-02-01'),
          new Date('2023-10-01'),
        ),
        new ExpierenceModel(
          'Technology Associate - Web Developer',
          'Canadian Tire',
          [
            'Migrated over 10 features for an In-store e-commerce web application built in Angular to a new backend service.',
            'Enhanced code quality and maintainability by modularizing the codebase into separate libraries/packages for use across web services.',
            'Integrated contract testing at the company into their CI/CD pipelines using Node.js and Github actions, increasing code quality for their e-commerce services that help support over 1500 stores.'
          ],
          [
            'Angular',
            'Typescript/Javascript',
            'Node.js',
            'Agile',
            'Scrum',
            'Jenkins',
            'Jira',
            'Restful APIs',
            'Git'
          ],
          new Date('2022-06-01'),
          new Date('2023-02-01'),
        )
      ]
    ),
    new ExpierenceGroupModel(
      'Ontario Teacher\' Pension Plan',
      [
        new ExpierenceModel(
          'Programmer Analyst Intern',
          'Ontario Teacher\' Pension Plan',
          [
            'Provided software solutions to benefit the financial services industry, working on projects involving master data management, portfolio accounting, or DevOps.',
            'Deployed solutions ranging from Web services in C# for testing to Python scripts for automation tasks in the IT team.'
          ],
          [
            'C#',
            'Python',
            'Java',
            'Jenkins',
            'Urbancode Deploy',
            'EMS Queues',
            'Restful APIs',
            'Git',
            'Waterfall',
          ],
          new Date('2019-10-01'),
          new Date('2020-01-31'),
        )
      ]
    ),

  ]


  getLengthOfTime(startDate: Date, endDate?: Date): number {
    endDate = endDate != null ? endDate : new Date();

    return endDate.getMonth() - startDate.getMonth() +
      (12 * (endDate.getFullYear() - startDate.getFullYear())) + 1;
  }

  getLengthOfTimeAtCompany(expierences: Array<ExpierenceModel>): number {

    let totalLengthOfTime: number = 0;

    for (let expierence of expierences) {
      totalLengthOfTime = totalLengthOfTime + this.getLengthOfTime(expierence.fromDate, expierence.toDate);
    }

    return totalLengthOfTime / 12;

  }



}
