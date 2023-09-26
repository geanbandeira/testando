import Contact from './contactModule.js';

class ContactsApp {
  constructor() {
    this.contacts = [];
  }

  adicionarContato(nome, email) {
    const novoContato = new Contact(nome, email);
    this.contacts.push(novoContato);
  }

  listarContatos() {
    console.log('Lista de Contatos:');
    this.contacts.forEach((contato, index) => {
      console.log(`Contato ${index + 1}:`);
      contato.exibir();
    });
  }
}

const minhaAgenda = new ContactsApp();
minhaAgenda.adicionarContato('João', 'joao@email.com');
minhaAgenda.adicionarContato('Maria', 'maria@email.com');

minhaAgenda.listarContatos();
