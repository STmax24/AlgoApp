import { BookOpen, Calculator, Brain, List, Play, CheckCircle, AlertTriangle, SortAsc, LayoutGrid, Truck, Coins } from 'lucide-react';

// --- TEIL 1: THEORIE DATEN ---
const THEORY_DATA = [
  {
    id: "th_1",
    title: "1. Grundlagen & Algorithmus-Begriff",
    icon: BookOpen,
    content: `
**Was ist ein Algorithmus?**
Eine eindeutige Handlungsvorschrift zur Lösung eines Problems. Er besteht aus endlich vielen, wohldefinierten Einzelschritten.

**Die 4 Schritte (Kainz-Schema):**
1. **Problem verstehen:** Was ist gegeben (Input)? Was ist gesucht (Output)? Welche Rahmenbedingungen gibt es?
2. **Theorie finden:** Wie löse ich das logisch/mathematisch? (Formel suchen, Ablauf im Kopf durchspielen).
3. **Struktogramm:** Grafische Darstellung nach DIN 66261 (Nassi-Shneiderman). Das ist der "Bauplan".
4. **Codieren:** Übersetzung in eine Sprache (z.B. Java).

**Zettelregeln (Das Modell für Anfänger):**
* **Variablen** sind Zettel, auf denen *genau ein* Wert steht.
* **Zuweisung (<-)**: Alten Wert radieren, neuen schreiben.
* **Vergleich:** Du hast nur zwei Hände. Du kannst immer nur zwei Zettel gleichzeitig vergleichen.
    `
  },
  {
    id: "th_2",
    title: "2. Eigenschaften (Prüfungsstoff!)",
    icon: CheckCircle,
    content: `
**1. Determiniertheit (Das Ergebnis):**
Bei gleicher Eingabe kommt STETS das gleiche Ergebnis raus.
* *Beispiel:* 2 + 2 = 4 (Determiniert).
* *Gegenbeispiel:* Würfeln (Ergebnis zufällig) -> NICHT determiniert.

**2. Determinismus (Der Weg):**
Der Weg der Abarbeitung ist immer gleich. Keine Zufallsentscheidung im Pfad.
* *Gegenbeispiel:* "Wenn Zufall > 5 gehe links". Der Weg variiert -> NICHT deterministisch.

**3. Terminierung:**
Der Algorithmus kommt nach endlich vielen Schritten zum Ende (keine Endlosschleife).
    `
  },
  {
    id: "th_3",
    title: "3. Arrays (Listen & Matrizen)",
    icon: List,
    content: `
**KAINZ REGEL #1:** Arrays beginnen IMMER bei Index 0.
* Erstes Element: array[0]
* Letztes Element: array[länge - 1]
* **Fehler:** Zugriff auf array[länge] -> Absturz!

**2D Arrays (Matrizen):**
Zugriff: matrix[zeile][spalte].
Durchlauf: Zwei verschachtelte Schleifen (Außen: Zeile, Innen: Spalte).
    `
  },
  {
    id: "th_4",
    title: "4. Schleifen (Loops)",
    icon: Play,
    content: `
**1. Zählschleife (FOR):**
Anzahl der Wiederholungen ist VORHER bekannt.
* *Bsp:* "Laufe 10 mal", "Für jedes Element im Array".

**2. Kopfgesteuert (WHILE):**
Anzahl unbekannt. Bedingung VORHER prüfen. Kann 0 mal laufen.
* *Bsp:* "Solange Guthaben > 0".

**3. Fußgesteuert (DO-WHILE):**
Bedingung NACHHER prüfen. Läuft MINDESTENS 1 mal.
* *Bsp:* "Passwort eingeben, bis es stimmt".
    `
  },
  {
    id: "th_5",
    title: "5. Sortieren",
    icon: SortAsc,
    content: `
**Bubble Sort (Tauschen):**
Vergleicht Nachbarn. Größtes Element "blubbert" nach rechts. Viele Täusche.

**Insertion Sort (Einfügen):**
Wie Kartenspielen. Nimm nächste Karte, suche Platz im sortierten Teil, schiebe Rest zur Seite, füge ein.
    `
  }
];
// --- TEIL 2: AUFGABEN (BASICS & LOGIK) ---
const TASKS_PART_1 = [
  // MODUL 1: BASICS
  {
    id: "m1_1", module: "1. Grundlagen", title: "Der Zapfen", diff: 1,
    text: "Eingabe einer Zahl. Multipliziere sie mit 2, 3... bis 9. Teile das Ergebnis dann durch 2, 3... bis 9. Das Ergebnis muss wieder die Ursprungszahl sein.",
    solution_steps: ["Eingabe Z", "FOR i=2 bis 9: Z = Z * i; Ausgabe Z", "FOR k=2 bis 9: Z = Z / k; Ausgabe Z"],
    trace: [{l:1, v:"Start: 3"}, {l:2, v:"*2=6"}, {l:2, v:"*3=18"}, {l:2, v:"*4=72"}]
  },
  {
    id: "m1_2", module: "1. Grundlagen", title: "Kleines 1x1", diff: 1,
    text: "Geben Sie das kleine 1x1 vollständig aus.",
    solution_steps: ["FOR i=1..10", "  FOR j=1..10", "    Ausgabe i*j", "  Neue Zeile"],
    trace: [{l:1, v:"i=1"}, {l:2, v:"1*1=1"}, {l:2, v:"1*2=2"}]
  },
  {
    id: "m1_3", module: "1. Grundlagen", title: "Zugfahrt (Stütz)", diff: 2,
    text: "250km, 80km/h. 4 Stopps. 1. Stopp 10min, jeder weitere +10%. Berechne Gesamtreisezeit.",
    solution_steps: ["Fahrzeit = (250/80)*60", "stopp = 10", "sum = 0", "FOR i=1..4: sum+=stopp; stopp*=1.1", "Total = Fahrzeit + sum"],
    trace: [{l:1, v:"Fahr: 187.5"}, {l:4, v:"Stopp1: 10"}, {l:4, v:"Stopp2: 11"}]
  },
  {
    id: "m1_4", module: "1. Grundlagen", title: "Die Uhr", diff: 2,
    text: "Simuliere eine Uhr (00:00:00 bis 23:59:59) mit verschachtelten Schleifen.",
    solution_steps: ["FOR h=0..23", " FOR m=0..59", "  FOR s=0..59", "   Ausgabe h:m:s"],
    trace: [{l:1, v:"00:00:00"}, {l:3, v:"00:00:01"}]
  },
  // MODUL 2: LOGIK
  {
    id: "m2_1", module: "2. Logik", title: "Herr Huber (Bücher)", diff: 2,
    text: "4 Jahre, 43 Bücher. Produkt 6720. 4. Jahr = 5 * 1. Jahr. Wie viele Bücher pro Jahr?",
    solution_steps: ["FOR j1=1..43", " FOR j2=1..43", "  FOR j3=1..43", "   j4=5*j1", "   IF Sum==43 && Prod==6720 -> Treffer"],
    trace: [{l:1, v:"Test 1,1,1,5"}, {l:5, v:"Falsch"}, {l:5, v:"Treffer"}]
  },
  {
    id: "m2_2", module: "2. Logik", title: "Münzen Rätsel", diff: 3,
    text: "Karli, Fredi, Gerda, Liese (je 20 Münzen). Jeder legt mehr als Vorgänger. (K+F)%3==0 und (G+L)>8*(K+F).",
    solution_steps: ["FOR k=1..20", " FOR f=k+1..20", "  FOR g=f+1..20", "   FOR l=g+1..20", "    IF Bedingungen erfüllt -> count++"],
    trace: [{l:1, v:"k=1, f=2..."}, {l:5, v:"Check Modulo"}]
  },
  {
    id: "m2_3", module: "2. Logik", title: "Der König & Gefangene", diff: 3,
    text: "111 Zellen. 1. Durchgang alle auf. 2. jede 2. zu. 3. jede 3. umschalten... 66 Durchgänge.",
    solution_steps: ["Array zellen[112] (false=zu)", "FOR d=1..66", " FOR z=d; z<=111; z+=d", "  zellen[z] = !zellen[z]", "Ausgabe alle true"],
    trace: [{l:2, v:"Runde 1: Alle auf"}, {l:2, v:"Runde 2: 2,4,6... zu"}]
  },
  {
    id: "m2_4", module: "2. Logik", title: "Piraten Beute", diff: 2,
    text: "Rotbart > 2*Sven. Sven > Harkan+4. Jeder > 25 Dublonen. Finde alle Kombinationen.",
    solution_steps: ["FOR h=26..Max", " FOR s=h+5..Max", "  FOR r=2*s+1..Max", "   Ausgabe Kombi"],
    trace: [{l:1, v:"Harkan 26"}, {l:2, v:"Sven 31"}]
  },
  {
    id: "m2_5", module: "2. Logik", title: "Retourgeld (2025)", diff: 3,
    text: "Münzen: 20c(5.74g), 50c(7.8g), 1€(7.5g), 2€(8.5g). Zielbetrag mit geringstem Gewicht finden.",
    solution_steps: ["Brute Force Kombinationen", "Check Betrag == Ziel", "Check Gewicht < Min", "Update Min"],
    trace: [{l:1, v:"Kombi prüfen"}, {l:3, v:"Gewicht berechnen"}, {l:4, v:"Neues leichtestes"}]
  },
  // MODUL 3: ARRAYS
  {
    id: "m3_1", module: "3. Arrays", title: "Minima (2024)", diff: 2,
    text: "11x11 Matrix. Zähle Zeilen, wo das Minimum der Zeile genau in Spalte 0 steht.",
    solution_steps: ["FOR z=0..10", " min=mat[z][0]", " FOR s=1..10", "  IF mat[z][s]<min -> min neu", " IF idx==0 -> count++"],
    trace: [{l:2, v:"Zeile 0"}, {l:4, v:"Kleineres gefunden"}]
  },
  {
    id: "m3_2", module: "3. Arrays", title: "Fitness Matrix", diff: 2,
    text: "Matrix[7][4] (Tage x Übungen). Berechne Spaltensummen.",
    solution_steps: ["FOR u=0..3", " sum=0", " FOR t=0..6", "  sum+=mat[t][u]", " Ausgabe sum"],
    trace: [{l:1, v:"Übung 1"}, {l:3, v:"Summiere Tage"}]
  },
  {
    id: "m3_3", module: "3. Sortieren", title: "Insertion Sort (Detail)", diff: 2,
    text: "Sortiere [5, 3, 7, 4, 1] mit Insertion Sort. Zeige Verschiebungen.",
    solution_steps: ["Start: [5,3,7,4,1]", "Nimm 3: <5? Ja -> [3,5,7,4,1]", "Nimm 7: <5? Nein -> Bleibt", "Nimm 4: <7? <5? -> [3,4,5,7,1]"],
    trace: [{l:1, v:"Start"}, {l:2, v:"3 eingeschoben"}]
  },
  {
    id: "m3_4", module: "3. Sortieren", title: "Bubble Sort (Detail)", diff: 1,
    text: "Sortiere [4, 8, 12, 3, 2, 6] mit Bubble Sort.",
    solution_steps: ["Vergleiche 4-8 (ok)", "8-12 (ok)", "12-3 (Tausch!)", "Wiederhole"],
    trace: [{l:1, v:"4,8,3,12..."}, {l:2, v:"Tausch 12-3"}]
  },
  {
    id: "m3_5", module: "3. Arrays", title: "Verflixte 7", diff: 3,
    text: "7x7 Matrix füllen bis Diagonale Zahlen 1-7 enthält (unsortiert).",
    solution_steps: ["WHILE !fertig", " Fülle Matrix", " Check Diagonale", " Wenn 1-7 drin -> Stop"],
    trace: [{l:1, v:"Versuch 1"}, {l:4, v:"Fehlt 5"}]
  },
  {
    id: "m3_6", module: "3. Arrays", title: "Matrizen Suche", diff: 2,
    text: "100x100 Matrix (Zufall 1-1000). Suche Zahlen 1-100 durch zufälliges Raten.",
    solution_steps: ["FOR i=1..100 (Suchzahlen)", " WHILE !gefunden", "  Rate Zeile/Spalte", "  IF Treffer -> Versuche speichern"],
    trace: [{l:2, v:"Suche 1..."}, {l:3, v:"Gefunden nach 45 Versuchen"}]
  }
];
// --- TEIL 3: PRÜFUNGS-AUFGABEN (KOMPLEX) ---
const TASKS_PART_2 = [
  {
    id: "m4_1", module: "4. Prüfungen", title: "Konzertsaal (ZT 2025)", diff: 3,
    text: "Rechteckiger Saal (r x s). 50% zufällig belegen ('X'). Keine Doppelbelegung! Ausgabe Plan + Statistik pro Reihe.",
    solution_steps: [
      "Eingabe r, s. Max = (r*s)/2",
      "WHILE belegt < Max",
      "  z = Zufall, s = Zufall",
      "  IF saal[z][s] == 0 (Frei)",
      "    saal[z][s] = 'X', belegt++",
      "Statistik: Zeilenweise durchlaufen und 'X' zählen"
    ],
    trace: [{l:2, v:"Belegt: 0"}, {l:4, v:"Platz belegt? Skip"}, {l:4, v:"Frei? Setzen"}, {l:6, v:"Statistik: Reihe 1 = 2"}]
  },
  {
    id: "m4_2", module: "4. Prüfungen", title: "Flugzeug Check-in (2024)", diff: 3,
    text: "30 Reihen, 6 Sitze. Jeder 5. Passagier ist VIP und überschreibt Plätze. Andere müssen freien Platz suchen.",
    solution_steps: [
      "FOR p = 1 bis N",
      "  Wähle Platz z, s",
      "  IF p % 5 == 0 (VIP)",
      "    Setze Platz (Überschreiben erlaubt)",
      "  ELSE",
      "    IF Platz frei -> Setzen",
      "    ELSE -> Warten"
    ],
    trace: [{l:1, v:"p=1 (Normal)"}, {l:6, v:"Frei -> OK"}, {l:1, v:"p=5 (VIP)"}, {l:4, v:"Besetzt -> Verdrängt!"}]
  },
  {
    id: "m4_3", module: "4. Prüfungen", title: "Baumschule (2023)", diff: 3,
    text: "5000m². Äpfel(10m²), Birnen(7m²), Kirschen(8m²). Mind. 10 je Sorte. Kosten minimieren (A:5€, B:7€, K:8€).",
    solution_steps: [
      "FOR a = 10 bis 500",
      "  FOR b = 10 bis 700",
      "    FOR k = 10 bis 600",
      "      Fläche = a*10 + b*7 + k*8",
      "      IF Fläche <= 5000 AND ErtragBed == OK",
      "        Kosten berechnen. Wenn kleiner als Min -> Merken."
    ],
    trace: [{l:4, v:"Fläche: 4900 (OK)"}, {l:5, v:"Ertrag passt"}, {l:6, v:"Kosten 2500 -> Neues Min"}]
  },
  {
    id: "m4_4", module: "4. Prüfungen", title: "Spediteur (2020)", diff: 2,
    text: "X Tonnen. LKW 40t, 25t, 10t. Minimiere Leerstand.",
    solution_steps: ["Eingabe X", "Loops über alle LKW Typen", "Kapazität berechnen", "Wenn Kap >= X -> Leerstand berechnen", "Wenn Leerstand < Min -> Merken"],
    trace: [{l:4, v:"Kap 40 >= 33"}, {l:5, v:"Leerstand 7"}]
  },
  {
    id: "m4_5", module: "4. Prüfungen", title: "Eroberung (Spiel)", diff: 2,
    text: "17 Spieler, 36 Felder. Wer zuerst 3 Felder hat gewinnt. Würfeln (z,s).",
    solution_steps: ["Array besitz[36]", "WHILE kein Sieger", "  Spieler würfelt z, s", "  IF Feld frei -> Nimm es", "  IF Spieler hat 3 Felder -> Sieg"],
    trace: [{l:3, v:"Spieler 1 nimmt Feld 5"}, {l:3, v:"Spieler 2 nimmt Feld 8"}, {l:5, v:"Spieler 1 hat 3 -> Sieg"}]
  },
  {
    id: "m4_6", module: "4. Prüfungen", title: "Zahlenpaare (2021)", diff: 2,
    text: "10x10 Brett mit Zahlen 100..1. Finde 10 Paare wo z2 % z1 == 0.",
    solution_steps: ["Fülle Brett", "WHILE treffer < 10", " Wähle zufällig z1, z2", " IF z2 % z1 == 0 -> Treffer++, Pos speichern"],
    trace: [{l:3, v:"Paar 10, 5 -> Treffer"}, {l:3, v:"Paar 3, 7 -> Kein Treffer"}]
  },
  {
    id: "m4_7", module: "4. Prüfungen", title: "Steine Sammeln", diff: 2,
    text: "36 Felder, 3 Steine je. Spieler nehmen weg bis leer.",
    solution_steps: ["Init Array[36]=3", "WHILE Steine > 0", " Wähle Feld", " IF Steine dort > 0 -> Nimm Stein, Gesamtsteine--"],
    trace: [{l:2, v:"Feld 5: 3->2"}, {l:2, v:"Gesamt: 107"}]
  },
  {
    id: "m4_8", module: "4. Prüfungen", title: "Zimmer Verteilung (2025)", diff: 2,
    text: "Paula(!gerade), Klara(durch 3), Romana(3-stellig). Finde Kombis.",
    solution_steps: ["FOR zimmerPaula...", " FOR zimmerKlara...", "  FOR zimmerRomana...", "   IF p%2!=0 && k%3==0 && r>=100 -> Treffer"],
    trace: [{l:2, v:"Prüfung läuft..."}]
  },
  {
    id: "m4_9", module: "4. Prüfungen", title: "Getränkemarkt", diff: 2,
    text: "Prüfe ob Menge in 0.3, 0.5, 0.8 Becher passt (Restlos).",
    solution_steps: ["Eingabe Menge", "Check mit Modulo/Rest", "IF Rest fast 0 -> Passt"],
    trace: [{l:1, v:"Menge 1.6 -> Passt (2x0.8)"}]
  },
  {
    id: "m4_10", module: "4. Prüfungen", title: "Hasen halten zusammen", diff: 1,
    text: "Zähle Hasenarten im Array.",
    solution_steps: ["FOR i=0 bis länge", " IF Art==Feldhase -> f++", " IF Art==Schneehase -> s++"],
    trace: [{l:1, v:"Hase 1: Feld"}, {l:2, v:"f=1"}]
  },
  {
    id: "m4_11", module: "4. Prüfungen", title: "Apfelernte", diff: 2,
    text: "Ernte in Kisten (100, 50, 20, 10) verpacken ohne Anbruch.",
    solution_steps: ["Rest = Ernte", "K100 = Rest / 100", "Rest = Rest % 100", "K50 = Rest / 50...", "Ausgabe Kisten und Übrig"],
    trace: [{l:1, v:"456 Äpfel"}, {l:2, v:"4x100"}, {l:3, v:"Rest 56"}, {l:4, v:"1x50, Rest 6"}]
  },
  {
    id: "m4_12", module: "4. Prüfungen", title: "Einbrecher (Greedy)", diff: 2,
    text: "Kapazität 789. Werte {500, 200, 100, 20, 1}. Maximiere Wert.",
    solution_steps: ["Sortiere Werte absteigend", "WHILE Kapazität > 0", " Nimm größten passenden Wert", " Kapazität verringern"],
    trace: [{l:3, v:"Nimm 500"}, {l:4, v:"Rest 289"}, {l:3, v:"Nimm 200"}, {l:4, v:"Rest 89"}]
  },
  {
    id: "m4_13", module: "4. Prüfungen", title: "Bunte Würfel", diff: 1,
    text: "100x würfeln (Rot, Blau, Grün). Wenn (R+B)%G == 0 -> Punkte.",
    solution_steps: ["FOR i=1..100", " Würfle r,b,g", " IF (r+b)%g == 0 -> Punkte += (r+b)", "Ausgabe Punkte"],
    trace: [{l:1, v:"Wurf: 5,5,2"}, {l:3, v:"10%2==0 -> Punkte+10"}]
  },
  {
    id: "m4_14", module: "4. Prüfungen", title: "Um den Berg", diff: 2,
    text: "Anita (55m/min) links, Fred (75m/min) rechts. Kreis 6000m. Wann Treffen?",
    solution_steps: ["Dist = 6000", "posA=0, posF=0", "WHILE (posA+posF < Dist)", " min++, posA+=55, posF+=75"],
    trace: [{l:3, v:"Min 1: 130m"}, {l:3, v:"Min 40: Treffen"}]
  },
  {
    id: "m4_15", module: "4. Prüfungen", title: "Wer macht Abwasch", diff: 1,
    text: "10 Kugeln (1-10). 3 Ziehen. Minimum muss abwaschen.",
    solution_steps: ["Ziehe k1, k2, k3", "Min(k1,k2,k3) ermitteln", "Ausgabe Verlierer"],
    trace: [{l:1, v:"3, 8, 1"}, {l:2, v:"Min = 1"}]
  },
  {
    id: "m4_16", module: "4. Prüfungen", title: "Balkenwaage", diff: 3,
    text: "Gewicht mit 7kg, 4kg, 1kg Stücken ausgleichen. Alle Kombis.",
    solution_steps: ["Eingabe Gewicht", "FOR anz7...", " FOR anz4...", "  FOR anz1...", "   IF Summe == Gewicht -> Ausgabe"],
    trace: [{l:1, v:"23kg"}, {l:5, v:"3x7 + 0x4 + 2x1 -> OK"}]
  }
];

// --- ZUSAMMENFÜHRUNG (EXPORT) ---
export const DATABASE = {
  theory: THEORY_DATA,
  tasks: [...TASKS_PART_1, ...TASKS_PART_2]
};
