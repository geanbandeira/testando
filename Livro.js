class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
    this.emprestado = false;
    this.dataDevolucao = null;
  }

  emprestar() {
    if (!this.emprestado) {
      this.emprestado = true;
      const dataDevolucao = new Date();
      dataDevolucao.setDate(dataDevolucao.getDate() + 14); // Devolução em 14 dias
      this.dataDevolucao = dataDevolucao;
      console.log(`Livro "${this.titulo}" emprestado.`);
    } else {
      console.log(`O livro "${this.titulo}" já está emprestado.`);
    }
  }

  devolver() {
    if (this.emprestado) {
      this.emprestado = false;
      this.dataDevolucao = null;
      console.log(`Livro "${this.titulo}" devolvido.`);
    } else {
      console.log(`O livro "${this.titulo}" não estava emprestado.`);
    }
  }
}

class Biblioteca {
  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
    console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
  }

  listarLivros() {
    console.log("Lista de Livros na Biblioteca:");
    this.livros.forEach((livro) => {
      const status = livro.emprestado ? `Emprestado até ${livro.dataDevolucao.toDateString()}` : "Disponível";
      console.log(`- "${livro.titulo}" por ${livro.autor} (${status})`);
    });
  }
}

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);
const livro2 = new Livro("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997);

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

livro1.emprestar();
livro2.emprestar();

biblioteca.listarLivros();
