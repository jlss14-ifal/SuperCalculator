import { MathNode, simplify } from "mathjs"

export function div(a: number, b: number): number {
    const operation: MathNode = simplify(`${a} / ${b}`)
    const output: number = Number(operation.toString())
    if (isNaN(output))
        throw new Error("Output is NaN.")

    return output;
}

export function formatDiv(numbers: number[]): string {
    if (numbers.length !== 2) {
        throw new Error('Esta função aceita exatamente dois números para divisão.');
    }

    const [dividend, divisor] = numbers;
    const result = div(dividend, divisor);

    // Formata os componentes da divisão
    const dividendStr = `${dividend <= 0 ? '' : '+'}${dividend}`;
    const divisorStr = `| ${divisor <= 0 ? '' : '+'}${divisor}`;
    const resultStr = `|= ${result <= 0 ? '' : '+'}${result}`;

    // Calcula o comprimento máximo para alinhamento
    const maxLen = Math.max(dividendStr.length, divisorStr.length, resultStr.length);

    // Formata a string final
    const formattedCalculation = `
${dividendStr} ${divisorStr}
${'-'.repeat((dividendStr.length + divisorStr.length + 2))}
${' '.repeat(dividendStr.length + 1) + resultStr}`;

    return formattedCalculation;
}

