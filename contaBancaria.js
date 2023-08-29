class ContaBancaria {
  constructor(proprietario, saldoInicial = 0) {
    this.proprietario = proprietario;
    this.saldo = saldoInicial;
  }

  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de $${valor} feito. Novo saldo: $${this.saldo}`);
    }
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de $${valor} feito. Novo saldo: $${this.saldo}`);
    } else {
      console.log("Saldo insuficiente ou valor inválido.");
    }
  }

  mostrarSaldo() {
    console.log(`Saldo da conta de ${this.proprietario}: $${this.saldo}`);
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(proprietario, saldoInicial = 0, taxaDeJuros) {
    super(proprietario, saldoInicial);
    this.taxaDeJuros = taxaDeJuros;
  }

  calcularJuros() {
    const juros = this.saldo * (this.taxaDeJuros / 100);
    this.depositar(juros);
    console.log(`Juros de $${juros.toFixed(2)} aplicados. Novo saldo: $${this.saldo}`);
  }
}

const conta1 = new ContaPoupanca("Alice", 1000, 2);
conta1.mostrarSaldo();
conta1.depositar(500);
conta1.sacar(200);
conta1.calcularJuros();

const conta2 = new ContaBancaria("Bob", 500);
conta2.mostrarSaldo();
conta2.depositar(200);
conta2.sacar(700);
conta2.mostrarSaldo();
