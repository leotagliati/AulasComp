import 'dart:math';

bool verifyList(List<int> numbers) {
  List<int> numbersUsed = [];
  for (var number in numbers) {
    if (numbersUsed.contains(number)) {
      return false;
    } else {
      numbersUsed.add(number);
    }
  }
  return true;
}

List<int> generateGame() {
  List<int> gameList = [];

  var gerador = Random();
  for (var i = 0; i < 6; i++) {
    gameList.add(1 + gerador.nextInt(60));
  }
  gameList.sort();
  return gameList;
}

void showScore(List<int> userList, List<int> gameList)
{
  for (var i = 0; i < 6; i++) {
    if(userList[i])
  }
}
