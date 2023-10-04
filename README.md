# Codegerüst
63681 Fachpraktikum Programmiersysteme

## Umgebung

Um den Codegerüst zum Laufen zu bringen, muss man `Node.js` und `npm` installieren. Das Projekt basiert auf Angular 16.

Die Liste von kompatiblen Versionen findet man [hier](https://angular.io/guide/versions). Offizielle Angular Anweisungen zur Entwicklungsumgebung findet man [hier](https://angular.io/guide/setup-local).

## Bibliotheken

Das Projekt enthält die folgenden Bibliotheken:

### Angular Material

Enthält Komponenten für Benutzeroberflächen. Die [Dokumentation](https://material.angular.io/components/categories) enthält viele Codebeispiele.

### Angular Material Icons

Ermöglicht durch die `<mat-icon>` Komponente alle Material Ikonen zu nutzen.
* [Dokumentation](https://material.angular.io/components/icon/overview)
* [Liste von Ikonen](https://fonts.google.com/icons)

### Angular Flex Layout

Vereinfacht die Arbeit mit CSS `flex-box` Eigenschaften.
* [Demo](https://tburleson-layouts-demos.firebaseapp.com/#/docs)

### RxJs

Vereinfacht die Verarbeitung von asynchron auftauchenden Ereignissen. 
* [Dokumentation](https://rxjs.dev/guide/overview)

## Petri-Netz Dateiformat

Sie finden ein Beispiel .json Petri-Netz Datei in dem `assets` Ordner - [src/assets/example.json](./src/assets/example.json)

Das Projekt enthält auch drei Referenzmodelle die dasselbe Petri-Netz in anderen Formaten enthalten. Alle Referenzdateien befinden sich unter [src/reference-models](./src/reference-models). Die Dateien kann man mit folgenden Tools öffnen:
* ILPN Datei - die [I ❤ Petri Nets](https://www.fernuni-hagen.de/ilovepetrinets/petrinets/index.html) Webseite
* WoPeD Datei - das [Workflow Petri Net Designer](https://woped.dhbw-karlsruhe.de/?page_id=22)
* Petriflow Datei - das [Netgrif Application Builder](https://builder.netgrif.com/modeler)
