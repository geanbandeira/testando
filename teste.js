// Objeto que representa um Produto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
  
  // Método para calcular o preço total do produto
  Produto.prototype.calcularPrecoTotal = function() {
    return this.preco;
  };
  
  // Objeto que representa um CarrinhoDeCompras composto por produtos
  function CarrinhoDeCompras() {
    this.produtos = [];
  }
  
  // Método para adicionar um produto ao carrinho
  CarrinhoDeCompras.prototype.adicionarProduto = function(produto) {
    this.produtos.push(produto);
  };
  
  // Método para calcular o preço total do carrinho
  CarrinhoDeCompras.prototype.calcularPrecoTotal = function() {
    let total = 0;
    for (const produto of this.produtos) {
      total += produto.calcularPrecoTotal();
    }
    return total;
  };
  
  // Criando produtos
  const produto1 = new Produto('Camiseta', 40);
  const produto2 = new Produto('Calça', 50);
  const produto3 = new Produto('Chinelo', 30);
  
  // Criando um carrinho de compras
  const carrinho = new CarrinhoDeCompras();
  
  // Adicionando produtos ao carrinho
  carrinho.adicionarProduto(produto1);
  carrinho.adicionarProduto(produto2);
  carrinho.adicionarProduto(produto3);
  
  // Calculando o preço total do carrinho
  const precoTotal = carrinho.calcularPrecoTotal();
  console.log(`Preço total do carrinho: $${precoTotal}`);