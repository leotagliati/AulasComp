import 'dart:io';
import 'dart:math';

enum Jogadas { pedra, papel, tesoura }

enum Jogadores { player, computador }
enum Situacoes {player, computador, empate}

void jogo() {
  var randomizer = Random();
  Jogadas? jogadaUsuario;
  int? escolha;

  while (escolha != 0) {
    exibeTela();

    var input = stdin.readLineSync();
    if (input == null || input.isEmpty) continue;

    escolha = int.tryParse(input);
    if (escolha == 0) {
      sair();
      return;
    }

    if (escolha == null || escolha < 1 || escolha > 3) {
      clear();
      print("Opção inválida, tente novamente!");
      sleep(Duration(seconds: 2));
    } else {
      jogadaUsuario = Jogadas.values[escolha - 1];
      Jogadas jogadaBot = Jogadas.values[randomizer.nextInt(3)];

      clear();
      print("SUA JOGADA: ${jogadaUsuario.name}\nCOMPUTADOR: ${jogadaBot.name}");
      Situacoes? vencedor = calculaResultado(jogadaUsuario, jogadaBot);

      if (vencedor == Situacoes.player) {
        print("PARABÉNS, VOCÊ VENCEU!");
      } else if (vencedor == Situacoes.computador) {
        print("VOCÊ PERDEU!");
      } else {
        print("EMPATE!");
      }

      sleep(Duration(seconds: 3));
      clear();
    }
  }
}

Situacoes? calculaResultado(Jogadas jogada1, Jogadas jogada2) {
  if (jogada1 == Jogadas.papel) {
    switch (jogada2) {
      case Jogadas.tesoura:
        return Situacoes.computador;
      case Jogadas.papel:
        return Situacoes.empate;
      case Jogadas.pedra:
        return Situacoes.player;
    }
  } else if (jogada1 == Jogadas.pedra) {
    switch (jogada2) {
      case Jogadas.tesoura:
        return Situacoes.player;
      case Jogadas.papel:
        return Situacoes.computador;
      case Jogadas.pedra:
        return Situacoes.empate;
    }
  } else if (jogada1 == Jogadas.tesoura) {
    switch (jogada2) {
      case Jogadas.tesoura:
        return Situacoes.empate;
      case Jogadas.papel:
        return Situacoes.player;
      case Jogadas.pedra:
        return Situacoes.computador;
    }
  }
  return null;
}

void exibeTela() {
  print("PEDRA PAPEL TESOURA GAME\nEscolha sua jogada:");
  print("Pedra[1]\nPapel[2]\nTesoura[3]\nSair[0]");
}

void sair() {
  clear();
  print("Saindo do jogo...");
}

void clear() {
  print("\x1B[2J\x1B[0;0H");
}
