const variavel1 = "valor somente leitura";//declaração de variavel denominada variavel 1, com valor somente de leitura
var variavel2 = "valor editavel"; //declaração de variavel denominada variavel2, com valor editavel

try {
    variavel1 = "valor não permitido";//tentar fazer a variavel1 ficar com valor nao permitido
    console.log("A variavel1 foi alterada para: ", variavel1);
} catch (e) {
    console.error("ops! Ocorreu o erro: ", e);
}

try {
    variavel2 = "valor permitido";//variavel2 com valor nao permitido
    console.log("A variavel2 foi alterada para: ", variavel2);
} catch (e) {
    console.error("ops! Ocorreu o erro: ", e);
}
