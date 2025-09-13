import 'package:flutter/material.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(title: const Text("estou no arq app.dart")),
        floatingActionButton: FloatingActionButton(
          onPressed: () => print("clickou"),
          child: Icon(Icons.camera_alt),
        ),
      ),
    );
  }
}
