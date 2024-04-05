const formProduto = document.getElementById('form-produto');
const tabelaProdutos = document.getElementById('tabela-produtos');
const btnNovoProduto = document.getElementById('btn-novo-produto');

let produtos = [];

function adicionarProduto(produto) {
  produtos.push(produto);

  tabelaProdutos.innerHTML = '';

  const linha = document.createElement('thead');

  const thNome = document.createElement('th');
  const thDescricao = document.createElement('th');
  const thDisponivel = document.createElement('th');
  const thValor = document.createElement('th');

  thNome.textContent = 'Nome';
  thDescricao.textContent = 'Descrição';
  thDisponivel.textContent = 'Disponível para Venda';
  thValor.textContent = 'Valor';

  linha.appendChild(thNome);
  linha.appendChild(thDescricao);
  linha.appendChild(thDisponivel);
  linha.appendChild(thValor);

  tabelaProdutos.appendChild(linha);

  produtos.forEach((produto) => {
    const linha = document.createElement('tr');
    const colunaNome = document.createElement('th');
    const colunaValor = document.createElement('th');
    const colunaDescricao = document.createElement('th');
    const colunaDisponivel = document.createElement('th');

    colunaNome.textContent = produto.nome;
    colunaDescricao.textContent = produto.descricao;
    colunaDisponivel.textContent = produto.disponivel;
    colunaValor.textContent = `R$ ${produto.valor}`;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaDescricao);
    linha.appendChild(colunaDisponivel);
    linha.appendChild(colunaValor);

    tabelaProdutos.appendChild(linha);
  });
}

formProduto.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;
  const valor = parseFloat(document.getElementById('valor').value);
  const disponivel = document.getElementById('disponivel').value;

  const produto = {
    nome,
    descricao,
    disponivel,
    valor
  };
  adicionarProduto(produto);
});
