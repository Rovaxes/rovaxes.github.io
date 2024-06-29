import { ExpierenceModel } from "./expierence.model";

export class ExpierenceGroupModel {

    public company: String;
    public expierences: Array<ExpierenceModel>;

    constructor(company: string,  expierences: Array<ExpierenceModel>){
        this.company = company;
        this.expierences = expierences
    }

}