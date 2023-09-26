let tasks = [];

function adicionarTarefa(tarefa) {
  tasks.push(tarefa);
}

function listarTarefas() {
  return tasks;
}

function limparTarefas() {
  tasks = [];
}

export { adicionarTarefa, listarTarefas, limparTarefas };
