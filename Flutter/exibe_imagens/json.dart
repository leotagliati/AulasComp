import 'dart:convert';

void main() {
  var pessoaJson = '{"nome": "ana", "idade": 18}';
  var pessoa = jsonDecode(pessoaJson);
  print(pessoa.nome);
}
