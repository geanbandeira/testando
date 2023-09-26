import { adicionarTarefa, listarTarefas, limparTarefas } from './taskModule.js';

// Adicionando tarefas
adicionarTarefa('Fazer compras');
adicionarTarefa('Estudar JavaScript');
adicionarTarefa('Passear com o cachorro');

// Listando tarefas
console.log('Tarefas pendentes:');
console.log(listarTarefas());

// Limpando a lista de tarefas
limparTarefas();
console.log('Tarefas após limpeza:');
console.log(listarTarefas());
