import { MathNode, simplify } from "mathjs"

export function sum(a: number, b: number): number {
    const operation: MathNode = simplify(`${a} + ${b}`)
    const output: number = Number(operation.toString())
    if (isNaN(output))
        throw new Error("Output is NaN.")

    return output;
}

export function formatSum(numbers: number[]): string {
    const result = numbers.reduce((acc, num) => sum(acc, num), 0);

    // Cria os componentes do cálculo
    const components = numbers.map((num, index) => ({
        label: num <=  0 ? '' : '+', value: num.toString()
    })).concat({ label: result <=  0 ? '' : '= +', value: result.toString() });

    // Calcula o comprimento máximo para alinhamento
    const maxLen = Math.max(...components.map(c => c.label.length + c.value.length));

    // Formata cada componente alinhando os números
    let formattedComponents = components.map(c =>
        `${c.label}${c.value}`.padStart(maxLen + 1, ' ')
    );
    
    const last = formattedComponents.pop()

    const antelast = `${'-'.repeat(maxLen + 2)}`
    formattedComponents.push(antelast)

    if (last !== undefined)
        formattedComponents.push(last)

    // Monta o cálculo formatado
    const formattedCalculation = "\n" + formattedComponents.join('\n');

    return formattedCalculation;
}
