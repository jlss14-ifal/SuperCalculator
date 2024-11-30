import { BaseEntity } from "./../model/BaseEntity";
import { Group } from "./../model/Group";

function exportGroupToJSON(group: Group<BaseEntity>): any {
    return {
        id: group.id,
        name: group.name,
        dateCreated: group.dateCreated,
        subgroup: group.subgroup.map(subgroup => 
            subgroup instanceof Group 
                ? exportGroupToJSON(subgroup) 
                : { 
                    id: subgroup.id, 
                    name: subgroup.name, 
                    dateCreated: subgroup.dateCreated, 
                    value: (subgroup as any).value 
                }
        )
    };
}

export function exportToJSON(groups: Group<BaseEntity>[]): string {
    const jsonData = groups.map(group => exportGroupToJSON(group));
    return JSON.stringify(jsonData, null, 2);
}
