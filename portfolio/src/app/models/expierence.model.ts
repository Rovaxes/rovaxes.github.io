export class ExpierenceModel {

    public roleName: string;
    public company: string;
    public descriptions: Array<string>;
    public skills: Array<string>;
    public fromDate: Date;
    public toDate?: Date;
    public logo?: string;
    public image?: string;

    constructor(roleName: string, company: string, descriptions: Array<string>, skills: Array<string>, fromDate: Date, toDate?: Date){
        this.roleName = roleName;
        this.company = company;
        this.descriptions = descriptions
        this.skills = skills;
        this.fromDate = fromDate;
        this.toDate = toDate;
    }

}