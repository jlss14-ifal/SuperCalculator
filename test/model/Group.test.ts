import { Calculation } from "../../src/model/Calculation";
import { Group } from "../../src/model/Group";
import { exportToCSV } from "../../src/util/exportToCSV";
import { exportToJSON } from "../../src/util/exportToJSON";

describe('Group and Calculation', () => {
    it('Deve criar um grupo e adicionar subgrupos e cálculos', () => {
        const calc = new Calculation('1', 'Calculation 1', "100-10");
        const subGroup = new Group<Calculation>('2', 'Subgroup 1');
        subGroup.addSubgroup(calc);
        
        const mainGroup = new Group<Group<Calculation>>('3', 'Main Group');
        mainGroup.addSubgroup(subGroup);

        expect(mainGroup.id).toBe('3');
        expect(mainGroup.name).toBe('Main Group');
        expect(mainGroup.subgroup.length).toBe(1);
        expect(mainGroup.subgroup[0].id).toBe('2');
        expect(mainGroup.subgroup[0].name).toBe('Subgroup 1');
        expect((mainGroup.subgroup[0] as Group<Calculation>).subgroup[0].id).toBe('1');
        expect((mainGroup.subgroup[0] as Group<Calculation>).subgroup[0].name).toBe('Calculation 1');
        expect((mainGroup.subgroup[0] as Group<Calculation>).subgroup[0].value).toBe("100-10");
    });

    it('Deve exportar dados corretamente para CSV', () => {
        const calc = new Calculation('1', 'Calculation 1', "100-11");
        const subGroup = new Group<Calculation>('2', 'Subgroup 1');
        subGroup.addSubgroup(calc);

        const mainGroup = new Group<Group<Calculation>>('3', 'Main Group');
        mainGroup.addSubgroup(subGroup);

        const csv = exportToCSV([mainGroup]);
        const expectedCSV = 'Grupo,Subgrupo,Conta,Valor\nMain Group,Subgroup 1,Calculation 1,100-11\n';
        expect(csv).toBe(expectedCSV);
    });

    it('Deve exportar dados corretamente para JSON', () => {
        const calc = new Calculation('1', 'Calculation 1', "100-12");
        const subGroup = new Group<Calculation>('2', 'Subgroup 1');
        subGroup.addSubgroup(calc);

        const mainGroup = new Group<Group<Calculation>>('3', 'Main Group');
        mainGroup.addSubgroup(subGroup);

        const json = exportToJSON([mainGroup]);
        const expectedJSON = JSON.stringify([
            {
                id: '3',
                name: 'Main Group',
                dateCreated: mainGroup.dateCreated,
                subgroup: [
                    {
                        id: '2',
                        name: 'Subgroup 1',
                        dateCreated: subGroup.dateCreated,
                        subgroup: [
                            {
                                id: '1',
                                name: 'Calculation 1',
                                dateCreated: calc.dateCreated,
                                value: "100-12"
                            }
                        ]
                    }
                ]
            }
        ], null, 2);
        expect(json).toBe(expectedJSON);
    });
});