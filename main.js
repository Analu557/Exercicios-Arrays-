// Exercícios Práticos - Arrays em JavaScript
// -------------------------------------------
// Objetivo: Praticar os métodos push, pop, shift, unshift, length e splice

// EXERCÍCIO 01 - Criando e exibindo um array
// Crie um array com três nomes e exiba o array e seu tamanho no console.
// Método sugerido: length
let nomes = ['Eliane', 'Ana', 'Maria'];
console.log(nomes);
console.log("O tamanho do Array nomes é: " + nomes.length);

// EXERCÍCIO 02 - Adicionando elementos ao final
// Adicione dois nomes ao final do array criado anteriormente.
// Método sugerido: push
nomes.push('Ana', 'Luiza');
console.log("Após adicionar ao final:", nomes);

// EXERCÍCIO 03 - Inserindo no início
// Adicione um nome no início do array.
// Método sugerido: unshift
nomes.unshift('Ana');
console.log("Após adicionar no início:", nomes);

// EXERCÍCIO 04 - Removendo o último
// Remova o último nome do array e exiba o nome removido e o array restante.
// Método sugerido: pop
let removidoFinal = nomes.pop();
console.log("Nome removido do final:", removidoFinal);
console.log("Array atual:", nomes);

// EXERCÍCIO 05 - Removendo o primeiro
// Remova o primeiro nome do array e exiba o nome removido e o array restante.
// Método sugerido: shift
let removidoInicio = nomes.shift();
console.log("Nome removido do início:", removidoInicio);
console.log("Array atual:", nomes)
;
// EXERCÍCIO 06 - Removendo e adicionando elementos
// Crie um array com cinco frutas. Remova duas frutas a partir da segunda posição e adicione duas novas frutas no lugar.
// Método sugerido: splice
let frutas = ['Maçã', 'Banana', 'Uva', 'Pera', 'Manga'];
frutas.splice(1, 2, 'Abacaxi', 'Morango'); // Remove 2 a partir do índice 1 e adiciona 2
console.log("Frutas após splice:", frutas);

// EXERCÍCIO 07 - Exibindo o tamanho do array
// Exiba o tamanho do array de frutas após a alteração.
// Método sugerido: length
console.log("Tamanho do array de frutas:", frutas.length);
// EXERCÍCIO 08 - Criando um histórico de páginas
// Crie um array chamado historico e simule acessos às páginas "home", "sobre" e "contato".
// Método sugerido: push
let historico = [];
historico.push('home');
historico.push('sobre');
historico.push('contato');
console.log("Histórico de páginas:", historico);

// EXERCÍCIO 09 - Removendo o último acesso do histórico
// Remova o último acesso do histórico e exiba "Saída da página: contato".
// Método sugerido: pop
let ultimaPagina = historico.pop();
console.log("Saída da página:", ultimaPagina);
console.log("Histórico atualizado:", historico);

// EXERCÍCIO 10 - Alterando elementos
// Crie um array de quatro cores e troque a terceira cor por "azul-marinho".
// Método sugerido: splice
let cores = ['vermelho', 'verde', 'amarelo', 'roxo'];
cores.splice(2, 1, 'azul-marinho'); // Troca a terceira cor
console.log("Cores atualizadas:", cores);