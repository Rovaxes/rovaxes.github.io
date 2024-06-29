export class ProjectModel {

    public name: string;
    public description: string;
    public skills: Array<string>;
    public image: string;
    public github?: string;
    public demo?: string;

    constructor(projectName: string, description: string, skills: Array<string>, image: string, github?: string, demo?: string){
        this.name = projectName;
        this.description = description
        this.skills = skills;
        this.image = image;
        this.github = github;
        this.demo = demo;
    }

}