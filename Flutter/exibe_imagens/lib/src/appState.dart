import 'package:flutter/material.dart';

class AppState extends State<App> {
  int numeroImagens = 0;
  String chaveAPI = "Bk9adIRTUxP2ucQpHBTRF5MAUw3cM7LYihr1R7airJ5hdHCV9yb1ghuu";

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Text('Numero de Imagens: $numeroImagens'),
        appBar: AppBar(title: const Text("estou no arq app.dart")),
        floatingActionButton: FloatingActionButton(
          onPressed: () {
            setState(() => numeroImagens++);
          },
          child: Icon(Icons.camera_alt),
        ),
      ),
    );
  }
}

class App extends StatefulWidget {
  @override
  State<App> createState() {
    return AppState();
  }
}
