# Codegerüst
63681 Fachpraktikum Programmiersysteme


## Entwicklungsumgebung

Um den Codegerüst zum Laufen zu bringen, brauchen Sie die Laufzeitumgebung `Node.js`. Das Projekt basiert auf Angular 18.

Die Liste von kompatiblen `Node.js` Versionen finden Sie [hier](https://angular.dev/reference/versions). Offizielle Angular Anweisungen zur Einrichtung der Entwicklungsumgebung finden Sie [hier](https://angular.dev/tools/cli/setup-local).


## Dokumentation

Die Seitenelementen sind überwiegend mithilfe von CSS Flexbox ausgerichtet. Hilfreiche Unterlagen zum layouten mit Flexbox finden Sie [hier](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

Das Projekt enthält die folgenden Bibliotheken:

### Angular Material

Enthält Komponenten für Benutzeroberflächen. Die [Dokumentation](https://material.angular.io/components/categories) enthält viele Codebeispiele.

### Angular Material Icons

Ermöglicht durch die `<mat-icon>` Komponente alle Material Ikonen zu nutzen.
* [Dokumentation](https://material.angular.io/components/icon/overview)
* [Liste von Ikonen](https://fonts.google.com/icons)

### RxJs

Vereinfacht die Verarbeitung von asynchron auftauchenden Ereignissen. 
* [Dokumentation](https://rxjs.dev/guide/overview) 


## Dateiformate

### Logdateien

Das "Event log" Modul der [I ❤ Petri Nets](https://www.fernuni-hagen.de/ilovepetrinets/) Website aus dem FaPra SoSe 2022 kann Logdateien im `.xes` Format, sowie in dem Format der I ❤ Petri Nets Seite erstellen und bearbeiten.

Das Projekt enthält drei Beispieldateien die dasselbe Log in unterschiedlichen Formaten enthalten. Alle Beispieldateien befinden sich unter [src/reference-models/logs](./src/reference-models/logs). Die Dateien kann man mit folgenden Tools öffnen:
* ILPN `.log` Datei - mit dem "Event log" Modul aus FaPra SoSe 2022 der [I ❤ Petri Nets](https://www.fernuni-hagen.de/ilovepetrinets/) Website
* `.xes` Datei - mit dem "Event log" Modul aus FaPra SoSe 2022 der [I ❤ Petri Nets](https://www.fernuni-hagen.de/ilovepetrinets/) Website. Halten Sie sich an den [Standard](https://www.xes-standard.org/)  
* im-viz Datei - plaintext den man in das Eingabefeld des [Inductive miner visualizers](https://im-viz.informatik.uni-mannheim.de/) der Uni Mannheim eingeben kann

### Petri-Netze

Sie finden eine Beispiel `.json` Petri-Netz Datei in dem `assets` Ordner - [src/assets/example.json](./src/assets/example.json)

Zusätzlich enthält das Projekt vier Referenzmodelle die dasselbe Petri-Netz in unterschiedlichen Formaten enthalten. Alle Referenzdateien befinden sich unter [src/reference-models/petri-netze](./src/reference-models/petri-netze). Die Dateien kann man mit folgenden Tools öffnen:
* ILPN `.json` Datei - mit beliebigem Modul aus FaPra WiSe 2023/24 der [I ❤ Petri Nets](https://www.fernuni-hagen.de/ilovepetrinets/) Website
* ILPN `.txt` Datei - mit dem "show a Petri net" Modul der [I ❤ Petri Nets](https://www.fernuni-hagen.de/ilovepetrinets/) Website
* WoPeD Datei - mit dem [Workflow Petri Net Designer](https://woped.dhbw-karlsruhe.de/?page_id=22)
* Petriflow Datei - mit dem [Netgrif Application Builder](https://next.builder.netgrif.cloud/modeler)


## Inductive miner

[Inductive miner visualizer](https://im-viz.informatik.uni-mannheim.de/) der Uni Mannheim

Eine Implementierung des Inductive miners finden Sie auch im [ProM](https://promtools.org/) unter dem Namen "Mine Petri net with Inductive Miner"
