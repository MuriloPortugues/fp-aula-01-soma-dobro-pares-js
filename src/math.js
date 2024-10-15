/**
 * Módulo para implementar funções matemáticas.
 */

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem funcional com o modelo map/reduce.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesFuncional(numeros){
    // TODO: Insira seu código funcional aqui
    return numeros
        .filter(num => num % 2 === 0) // seleciona números pares
        .map(num => num * 2)          // dobra o valor de cada um
        .reduce((acc, num) => acc + num, 0); // soma todos os valores dobrados
}

/**
 * Realiza a soma do dobro do valor de cada número par em um vetor de números.
 * A função deve ser implementada utilizando a abordagem estruturada (procedural) convencional.
 * @param {Array} numeros vetor com os números desejados
 */
function somaDobroNumerosParesProcedural(numeros){
    // TODO: Insira seu código estruturado aqui
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {  // verifica se é par
            soma += numeros[i] * 2;  // dobra o valor e acumula
        }
    }
    return soma;
}
export { somaDobroNumerosParesFuncional, somaDobroNumerosParesProcedural };
