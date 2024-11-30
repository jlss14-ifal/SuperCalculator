import { BaseEntity } from "./../model/BaseEntity";
import { Group } from "./../model/Group";

function exportGroupToCSV(group: Group<BaseEntity>, parentNames: string): string {
    let csv = "";
    group.subgroup.forEach(subgroup => {
        const currentNames = `${parentNames},${subgroup.name}`;
        if (subgroup instanceof Group) {
            csv += exportGroupToCSV(subgroup, currentNames);
        } else {
            csv += `${parentNames},${subgroup.name},${(subgroup as any).value ?? ""}\n`;
        }
    });
    return csv;
}

export function exportToCSV(groups: Group<BaseEntity>[]): string {
    let csv = "Grupo,Subgrupo,Conta,Valor\n";
    groups.forEach(group => {
        csv += exportGroupToCSV(group, group.name);
    });
    return csv;
}
