import { BaseEntity } from "./BaseEntity";
import { Calculation } from "./Calculation";

export class Group<T extends BaseEntity> implements BaseEntity {
    id: string;
    name: string;
    subgroup: T[];
    dateCreated: Date;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.subgroup = [];
        this.dateCreated = new Date();
    }

    addSubgroup(subgroup: T) {
        this.subgroup.push(subgroup);
    }
}

