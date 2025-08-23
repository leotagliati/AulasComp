import 'dart:math';

void main() {
  //   print("Hello world");

  //   // for-----------------------------------------
  //   for (var i = 0; i < 10; i++) {}

  //   // foreach-----------------------------------------
  //   const nomes = ['Jose', 'Ana'];
  //   for (String nome in nomes) {
  //     print(nome);
  //   }

  //   // do while-----------------------------------------
  //   int i = 0;
  //   do {
  //     print(i);
  //     i++;
  //   } while (i < 10);

  //   // enums-----------------------------------------
  //   print(DiaSemana.values);
  //   DiaSemana dia = DiaSemana.quarta;
  //   print(dia.name);
  //   switch (dia) {
  //     case DiaSemana.segunda:
  //       print("bora filho");
  //       break;
  //     case DiaSemana.quarta:
  //       print("quartinha");
  //       break;
  //     default:
  //         print("que dia que é?");
  //   }

  // // input output-----------------------------------------
  //   stdout.writeln("Digite seu nome");
  //   final nome = stdin.readLineSync();
  //   stdout.writeln("oi, $nome");

  // Randomizer
  var gerador = new Random();
  print(gerador.nextInt(10)); // [0, n-1]
  print(gerador.nextDouble()); // [0.0, 0.9]
}

enum DiaSemana { segunda, terca, quarta, quinta, sexta }

void funcionar() {}
