import { BaseEntity } from "./BaseEntity";

export class Calculation implements BaseEntity {
    id: string;
    name: string;
    dateCreated: Date;
    value: string;

    constructor(id: string, name: string, value: string) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.dateCreated = new Date();
    }
}
