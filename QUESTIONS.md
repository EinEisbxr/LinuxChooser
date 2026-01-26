# Fragenkatalog - Linux Chooser

*Alle Fragen in deutscher Sprache*

---

## Kategorie 1: Deine Erfahrung

### Q1: Linux-Erfahrung
**Frage:** Hast du schon einmal Linux benutzt?

**Optionen:**
- Nein, noch nie
- Ich hab's mal kurz ausprobiert
- Ja, ich nutze es gelegentlich
- Ja, ich bin erfahrener Linux-Nutzer

**Impact:** beginner_friendly, terminal_comfort

---

### Q2: Computer-Komfort
**Frage:** Wie wohl fühlst du dich generell am Computer?

**Optionen:**
- Ich nutze nur das Nötigste (Browser, E-Mail)
- Ich komme gut zurecht, aber bin kein Techie
- Ich kann die meisten Probleme selbst lösen
- Ich liebe es, tief in technische Details einzutauchen

**Impact:** beginner_friendly, terminal_comfort, maintenance_tolerance

---

### Q3: Problemlösung
**Frage:** Wenn etwas am Computer nicht funktioniert, was machst du?

**Optionen:**
- Ich frage jemanden um Hilfe
- Ich google das Problem und folge Anleitungen
- Ich probiere verschiedene Lösungen aus, bis es klappt
- Ich analysiere das Problem und finde selbst die Lösung

**Impact:** beginner_friendly, terminal_comfort

---

## Kategorie 2: Wie du deinen Computer nutzt

### Q4: Hauptnutzung
**Frage:** Wofür nutzt du deinen Computer hauptsächlich? (Mehrfachauswahl möglich)

**Optionen:**
- Surfen, Videos schauen, Social Media
- Office-Arbeit (Dokumente, Tabellen, Präsentationen)
- Gaming
- Programmieren / Softwareentwicklung
- Kreative Arbeit (Bildbearbeitung, Videobearbeitung, Musik)
- Streaming / Content Creation

**Impact:** gaming_focus, use_case weighting

---

### Q5: Gaming-Intensität (wenn Gaming ausgewählt)
**Frage:** Wie wichtig ist Gaming für dich?

**Optionen:**
- Ich spiele gelegentlich ein paar Casual Games
- Gaming ist ein wichtiger Teil meiner Freizeit
- Gaming ist mein Hauptgrund, den Computer zu nutzen
- Ich bin Profi-Gamer / Streamer

**Impact:** gaming_focus

---

### Q6: Spezifische Spiele - Problematische (wenn Gaming wichtig)
**Frage:** Spielst du eines dieser Spiele regelmäßig?

*Diese Spiele haben Probleme mit Linux wegen Anti-Cheat:*

**Optionen (Mehrfachauswahl):**
- Valorant
- League of Legends
- Fortnite
- Call of Duty: Warzone
- PUBG
- Apex Legends
- Destiny 2
- Rainbow Six Siege
- Keines davon

**Impact:** DEAL_BREAKER oder gaming_compatibility warning

---

### Q7: Andere beliebte Spiele (wenn Gaming)
**Frage:** Welche dieser Spiele spielst du? (Mehrfachauswahl)

**Optionen:**
- Counter-Strike 2
- Minecraft
- GTA V
- The Witcher 3
- Cyberpunk 2077
- Elden Ring
- Baldur's Gate 3
- Hogwarts Legacy
- Andere Steam-Spiele
- Keines davon

**Impact:** gaming_focus (positive - diese funktionieren!)

---

## Kategorie 3: Software-Abhängigkeiten

### Q8: Office-Software
**Frage:** Wie nutzt du Office-Programme?

**Optionen:**
- Ich brauche kein Office
- Google Docs / Online-Tools reichen mir völlig
- LibreOffice wäre okay, Hauptsache es funktioniert
- Ich MUSS Microsoft Office haben (Arbeit/Studium erfordert es)

**Impact:** software_dependency, honest_warning

---

### Q9: Adobe Creative Suite
**Frage:** Nutzt du Adobe-Programme (Photoshop, Premiere, Illustrator, etc.)?

**Optionen:**
- Nein, nutze ich nicht
- Ja, aber ich wäre offen für Alternativen (GIMP, DaVinci, Inkscape)
- Ja, und ich brauche genau diese Programme für meine Arbeit

**Impact:** software_dependency, honest_warning

---

### Q10: Weitere Software
**Frage:** Gibt es Software, ohne die du nicht arbeiten kannst?

**Optionen:**
- Nein, ich bin flexibel
- Ja, aber ich würde Alternativen ausprobieren
- Ja, und es gibt keine Alternative (bitte spezifizieren)

**Impact:** software_dependency

---

## Kategorie 4: Was dir wichtig ist

### Q11: Stabilität vs. Neuheit
**Frage:** Was klingt besser für dich?

**Optionen:**
- Mein Computer soll zuverlässig laufen - neue Features sind mir egal
- Eine gute Balance aus Stabilität und aktueller Software
- Ich will immer die neuesten Features, auch wenn mal was nicht funktioniert
- Ich will bleeding-edge - ich kann mit Problemen umgehen

**Impact:** stability_preference

---

### Q12: Anpassbarkeit
**Frage:** Wie wichtig ist dir, dass du alles anpassen kannst?

**Optionen:**
- Mir ist das egal - Hauptsache es funktioniert
- Ein bisschen anpassen wäre nett (Farben, Hintergrund)
- Ich möchte schon einiges ändern können (Menüs, Leisten, Verhalten)
- Ich will ALLES kontrollieren können!

**Impact:** customization_desire, DE_preference

---

### Q13: Optik-Präferenz
**Frage:** Was spricht dich mehr an?

**Optionen:**
- Klassisch und vertraut (wie Windows)
- Modern und aufgeräumt (wie macOS)
- Minimalistisch - weniger ist mehr
- Einzigartig und auffällig

**Impact:** windows_familiarity, mac_familiarity, DE_preference

---

### Q14: Datenschutz
**Frage:** Wie wichtig ist dir Datenschutz?

**Optionen:**
- Ist mir nicht so wichtig
- Schon wichtig, aber ich mache keine besonderen Vorkehrungen
- Sehr wichtig - ich achte darauf, was ich installiere
- Extrem wichtig - ich brauche maximale Anonymität

**Impact:** privacy_focus

---

### Q15: Updates und Wartung
**Frage:** Wie stehst du zu System-Updates?

**Optionen:**
- Soll automatisch im Hintergrund passieren
- Ich klicke gerne "Update", aber mehr will ich nicht tun
- Ich schaue mir gerne an, was aktualisiert wird
- Ich will volle Kontrolle über jeden Update-Vorgang

**Impact:** maintenance_tolerance, stability_preference

---

## Kategorie 5: Aussehen und Bedienung

### Q16: Taskleiste/Dock
**Frage:** Wo möchtest du deine geöffneten Programme sehen?

**Optionen:**
- Unten, wie bei Windows
- Oben und/oder seitlich, wie bei macOS
- Ist mir egal, Hauptsache praktisch
- Ich will das selbst entscheiden können

**Impact:** DE_preference (Cinnamon/KDE vs GNOME/Pantheon)

---

### Q17: Startmenü
**Frage:** Wie möchtest du Programme starten?

**Optionen:**
- Klassisches Startmenü mit Kategorien
- App-Übersicht mit Suche
- Ich tippe lieber den Namen und drücke Enter
- Eine Kombination aus allem

**Impact:** DE_preference

---

### Q18: Fenster-Management
**Frage:** Wie arbeitest du mit mehreren Fenstern?

**Optionen:**
- Ich maximiere meistens ein Fenster
- Ich ordne Fenster gerne nebeneinander an
- Ich hätte gerne automatisches Fenster-Anordnen (Tiling)
- Ich nutze virtuelle Desktops / Arbeitsbereiche

**Impact:** DE_preference (COSMIC, i3 für Tiling)

---

## Kategorie 6: Hardware

### Q19: GPU-Hersteller
**Frage:** Welche Grafikkarte hast du?

**Optionen:**
- AMD
- NVIDIA
- Intel (integriert)
- Ich weiß es nicht
- Ich habe sowohl NVIDIA als auch Intel (Laptop)

**Impact:** nvidia_support, distro weighting (Pop!_OS NVIDIA ISO)

---

### Q20: Geräteart
**Frage:** Auf welchem Gerät möchtest du Linux nutzen?

**Optionen:**
- Desktop-PC
- Laptop
- Gaming-Handheld (Steam Deck, ROG Ally, etc.)
- Sehr alter Computer (>10 Jahre)

**Impact:** laptop_support, resource_constraints, Bazzite für Handhelds

---

### Q21: Touchscreen (wenn Laptop/Tablet)
**Frage:** Hat dein Gerät einen Touchscreen?

**Optionen:**
- Ja
- Nein
- Weiß ich nicht

**Impact:** touch_support, DE_preference (GNOME gut für Touch)

---

## Kategorie 7: Community und Support

### Q22: Hilfe holen
**Frage:** Wenn du Hilfe brauchst, wo suchst du?

**Optionen:**
- Ich frage Freunde/Familie
- Ich suche im Internet nach Lösungen
- Ich frage in Foren/Communities
- Ich lese lieber die offizielle Dokumentation

**Impact:** community_importance, documentation_quality weighting

---

### Q23: Sprache
**Frage:** In welcher Sprache möchtest du Hilfe finden?

**Optionen:**
- Deutsch ist mir wichtig
- Englisch ist auch okay
- Nur Englisch ist auch kein Problem

**Impact:** community weighting (größere englische Community)

---

## Kategorie 8: Spezielle Bedürfnisse

### Q24: Streaming/Content Creation
**Frage:** Streamst du oder erstellst du Content?

**Optionen:**
- Nein
- Ja, gelegentlich als Hobby
- Ja, regelmäßig/professionell

**Impact:** use_case, Nobara/Pop!_OS weighting

---

### Q25: Programmierung
**Frage:** Programmierst du?

**Optionen:**
- Nein
- Ja, als Hobby oder zum Lernen
- Ja, professionell

**Impact:** use_case, Fedora/Pop!_OS/EndeavourOS weighting

---

### Q26: Server/Self-Hosting
**Frage:** Möchtest du auch Server-Software laufen lassen (Docker, VMs, etc.)?

**Optionen:**
- Nein / Ich weiß nicht was das ist
- Vielleicht später mal
- Ja, das ist mir wichtig

**Impact:** use_case, terminal_comfort

---

## Deal-Breaker Logik

### Wenn Valorant/LoL/Fortnite/CoD ausgewählt:
**Zeige Warnung:**
> "Achtung: [Spielname] funktioniert leider nicht auf Linux wegen des Anti-Cheat-Systems.
> Du könntest Linux trotzdem nutzen und für diese Spiele Windows als Dual-Boot behalten.
> Möchtest du fortfahren?"

**Optionen:**
- Ja, ich würde Dual-Boot einrichten
- Nein, dann ist Linux nichts für mich
- Ich würde auf das Spiel verzichten

---

## Abschluss-Frage

### Q27: Offenheit
**Frage:** Wie offen bist du für Neues?

**Optionen:**
- Ich will, dass alles so ähnlich wie möglich zu meinem jetzigen System ist
- Ich bin offen für kleine Änderungen
- Ich freue mich auf etwas Neues!
- Ich will eine komplett neue Erfahrung

**Impact:** all preferences slightly adjusted

---

## Scoring-Attribute Mapping

| Attribut | Fragen |
|----------|--------|
| beginner_friendly | Q1, Q2, Q3 |
| stability_preference | Q11, Q15 |
| gaming_focus | Q4, Q5, Q6, Q7 |
| privacy_focus | Q14 |
| customization_desire | Q12 |
| windows_familiarity | Q13 |
| mac_familiarity | Q13 |
| terminal_comfort | Q1, Q2, Q3 |
| maintenance_tolerance | Q2, Q15 |
| DE_preference | Q12, Q13, Q16, Q17, Q18 |
| nvidia_support | Q19 |
| touch_support | Q21 |
| resource_constraints | Q20 |
| software_dependency | Q8, Q9, Q10 |
| gaming_compatibility | Q6, Q7 |

---

*Fragen-Version 1.0 - Januar 2026*
