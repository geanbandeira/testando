class Contact {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }

  exibir() {
    console.log(`Nome: ${this.nome}, Email: ${this.email}`);
  }
}

export default Contact;
