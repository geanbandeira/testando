//exercicio de um carro que deve respeitar as marchas
class Carro{
    constructor(velocidade, marcha){
        this.velocidade = 0;
        this.marcha = 0;
    }

    acelerar(){
        if(this.marcha === 0)
        console.log("O carro estah desligado");
        else if (this.marcha === 1){
            this.velocidade += 10;
        } else if(this.marcha === 2){
            this.velocidade += 20;
        } else if(this.marcha === 3){
            this.velocidade +=30;
        } else if(this.marcha === 4){
            this.velocidade += 40;
        } else if(this.marcha === 5){
            this.velocidade += 60;
        } else {
            console.log("Velocidade invalida, atensao no transito");
        }
        console.log(`A velocidade do carro eh ${this.velocidade}`);
    }

    frear(){
        if(this.velocidade > 0){
            this.velocidade-= 10;
            console.log(`A velocidade do carro eh ${this.velocidade}`);
        } else{
            console.log("O carro estah desligado");
        }
    }

    trocarMarcha(marcha){
        if(marcha => 0 && marcha <= 5){
            this.marcha = marcha;
            console.log(`Marcha atual eh ${this.marcha}`);
        }else{
            console.log("Marcha invalida");
        }
    }

    ligarCarro(){
        this.marcha = 1;
        console.log("O carro esta ligado");
    }

    desligarCarro(){
        this.marcha = 0;
        this.velocidade = 0;
        console.log("O carro estah desligado");


}
}

const meuCarro = new Carro();
meuCarro.ligarCarro();
meuCarro.trocarMarcha(1);
meuCarro.acelerar()
meuCarro.trocarMarcha(2);
meuCarro.acelerar();
meuCarro.frear();
meuCarro.desligarCarro();
