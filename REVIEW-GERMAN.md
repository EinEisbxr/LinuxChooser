# German Text Review - Linux Chooser

**Reviewed on:** 26. Januar 2026
**Target audience:** Non-technical German-speaking users
**Expected tone:** Warm, friendly, encouraging, using "du" form

---

## Summary

The German text quality is generally good with consistent "du" form usage. However, there are several issues that need attention:

1. **Missing Umlauts:** The code consistently uses ASCII replacements (ae, oe, ue, ss) instead of proper German umlauts. This should be changed to proper Unicode characters.
2. **Some technical jargon** that may confuse non-technical users
3. **Minor grammatical issues** and awkward phrasings
4. **Inconsistent punctuation** in some places
5. **English text remaining** in a few places

---

## Critical Issue: Missing Umlauts

Throughout all data files, German umlauts are written as ASCII equivalents:
- `ae` instead of `ä`
- `oe` instead of `ö`
- `ue` instead of `ü`
- `ss` instead of `ß`

**Examples found:**
- `regelmaessig` should be `regelmäßig`
- `Fruehstueck` should be `Frühstück`
- `hauptsaechlich` should be `hauptsächlich`
- `Waehle` should be `Wähle`
- `Taeglicher` should be `Täglicher`
- `Privatsphaere` should be `Privatsphäre`
- `Stabilitaet` should be `Stabilität`
- `Aelter` should be `Älter`
- `Koennte` should be `Könnte`
- `leistungsfaehig` should be `leistungsfähig`
- `fuer` should be `für`
- `aehnlich` should be `ähnlich`
- And many more...

**Recommendation:** Replace all ASCII umlaut representations with proper Unicode characters throughout.

---

## File-by-File Review

### src/data/questions.ts

#### Line 55-56
**Current:** `'Ich nutze Linux regelmaessig und kenne die Grundlagen'`
**Issue:** Missing umlaut
**Correction:** `'Ich nutze Linux regelmäßig und kenne die Grundlagen'`

#### Line 61
**Current:** `'Ich bin mit der Kommandozeile vertraut'`
**Issue:** "Kommandozeile" is technical jargon
**Correction:** `'Ich arbeite auch gerne im Terminal (Textbefehle)'`

#### Line 67
**Current:** `'Ich compiliere meinen eigenen Kernel zum Fruehstueck'`
**Issues:**
1. "compiliere" is Denglish - use "kompiliere"
2. "Kernel" is very technical
3. Missing umlaut in "Fruehstueck"
**Correction:** `'Linux-Profi - ich baue mir mein System selbst zusammen'`

#### Line 98
**Current:** `'Programmieren und Development'`
**Issue:** "Development" is English
**Correction:** `'Programmieren und Entwicklung'`

#### Line 110
**Current:** `'Selbst-gehostete Dienste'`
**Issue:** Awkward compound. Also technical
**Correction:** `'Eigene Server zu Hause betreiben'`

#### Line 116
**Current:** `'Ich will Linux und Computerwissenschaft lernen'`
**Issue:** "Computerwissenschaft" is unusual phrasing
**Correction:** `'Ich will Linux und Computer besser verstehen'`

#### Line 145
**Current:** `'Streaming/Content Creation'`
**Issue:** English text
**Correction:** `'Streaming und Videos erstellen'`

#### Line 146
**Current:** `'VMs und Container'`
**Issue:** Very technical jargon
**Correction:** `'Virtuelle Computer und Container'` or consider removing for non-tech users

#### Line 167
**Current:** `'Spiele die offiziell Linux unterstuetzen'`
**Issue:** Missing umlaut
**Correction:** `'Spiele, die offiziell Linux unterstützen'`

#### Line 179
**Current:** `'Kleinere, unabhaengige Spiele'`
**Issue:** Missing umlaut
**Correction:** `'Kleinere, unabhängige Spiele'`

#### Line 185
**Current:** `'Grosse Blockbuster-Spiele'`
**Issue:** Should be "ß"
**Correction:** `'Große Blockbuster-Spiele'`

#### Line 255
**Current:** `'Koennte Updates brauchen'`
**Issue:** Missing umlaut
**Correction:** `'Könnte Updates brauchen'`

#### Line 291
**Current:** `'NVIDIA erfordert manchmal extra Konfiguration'`
**Issue:** "Konfiguration" is technical
**Correction:** `'NVIDIA-Grafikkarten brauchen manchmal zusätzliche Einrichtung'`

#### Line 347-348
**Current:** `'Aufgeraeumter Look mit Activities/Overview'`
**Issues:**
1. Missing umlaut
2. "Activities/Overview" is English
**Correction:** `'Aufgeräumter Look mit Übersichts-Ansicht'`

#### Line 353
**Current:** `'Tiling Window Manager'`
**Issue:** English technical term
**Correction:** `'Kachel-Fensterverwaltung'` with description: `'Fenster ordnen sich automatisch nebeneinander an - bedient mit Tastatur'`

#### Line 378
**Current:** `'Soll einfach funktionieren, wie es ist'`
**Issue:** Slightly awkward
**Correction:** `'Soll einfach funktionieren'`

#### Line 406
**Current:** `'Ein klassischer Trade-off in der Linux-Welt'`
**Issue:** "Trade-off" is English
**Correction:** `'Ein klassischer Kompromiss in der Linux-Welt'`

#### Line 433
**Current:** `'Bleeding Edge'`
**Issue:** English term
**Correction:** `'Immer das Allerneueste'`

#### Line 434
**Current:** `'Immer das Neueste, auch wenn es mal bricht'`
**Issue:** "bricht" is too casual/technical
**Correction:** `'Immer das Neueste, auch wenn mal etwas nicht funktioniert'`

#### Line 471
**Current:** `'Wie Windows oder macOS'`
**Note:** This is fine, but could be more encouraging
**Alternative:** `'Einfach wie gewohnt loslegen'`

#### Line 483
**Current:** `'Ich scheue mich nicht vor neuen Konzepten'`
**Issue:** Slightly formal
**Correction:** `'Neue Dinge zu lernen macht mir Spaß'`

#### Line 489
**Current:** `'Ich will verstehen wie alles funktioniert'`
**Issue:** Missing comma
**Correction:** `'Ich will verstehen, wie alles funktioniert'`

---

### src/data/distros.ts

#### Line 67
**Current:** `'Die benutzerfreundlichste Linux-Distribution, perfekt fuer Windows-Umsteiger.'`
**Issue:** Missing umlaut
**Correction:** `'Die benutzerfreundlichste Linux-Distribution, perfekt für Windows-Umsteiger.'`

#### Line 97
**Current:** `'Snap-frei'`
**Issue:** Very technical (Snap is a package format)
**Consider removing** or: `'Ohne Snap-Pakete (schlanker)'`

#### Line 100
**Current:** `'Basiert auf Ubuntu LTS (aeltere Pakete)'`
**Issues:**
1. Missing umlaut
2. Technical jargon (LTS, Pakete)
**Correction:** `'Basiert auf Ubuntu LTS (bewährte, etwas ältere Software)'`

#### Line 146
**Current:** `'Lange Unterstuetzung (LTS)'`
**Issue:** Missing umlaut
**Correction:** `'Lange Unterstützung (LTS)'`

#### Line 181
**Current:** `'GNOME Vanilla'`
**Issue:** English/technical
**Correction:** `'Unmodifiziertes GNOME'` or `'Originales GNOME'`

#### Line 181
**Current:** `'SELinux'`
**Issue:** Very technical
**Consider:** `'Erweiterte Sicherheitsfunktionen'`

#### Line 217
**Current:** `'NVIDIA-Unterstuetzung'`
**Issue:** Missing umlaut
**Correction:** `'NVIDIA-Unterstützung'`

#### Line 217
**Current:** `'Hybrid-GPU-Management'`
**Issue:** Technical English
**Correction:** `'Verwaltung mehrerer Grafikkarten'`

#### Line 267
**Current:** `'AUR Zugang'`
**Issue:** Technical
**Correction:** `'Zugang zum Arch-Benutzer-Paketarchiv (AUR)'` or simply `'Riesige Softwareauswahl'`

#### Line 308
**Current:** `'Der Fels in der Brandung'`
**Note:** Good idiomatic German! Keep this.

#### Line 336
**Current:** `'Extreme Stabilitaet'`
**Issue:** Missing umlaut
**Correction:** `'Extreme Stabilität'`

#### Line 342
**Current:** `'Rolling Release mit hoher Qualitaetssicherung'`
**Issue:**
1. "Rolling Release" is English
2. Missing umlaut
**Correction:** `'Laufend aktualisiert mit hoher Qualitätssicherung'`

#### Line 404
**Current:** `'SUSE Support moeglich'`
**Issue:** Missing umlaut
**Correction:** `'SUSE-Support möglich'`

#### Line 480
**Current:** `'Arch Linux mit grafischem Installer und freundlicher Community. Fast reines Arch.'`
**Issue:** "Installer" is English
**Correction:** `'Arch Linux mit grafischer Installation und freundlicher Community. Fast reines Arch.'`

#### Line 510
**Current:** `'Calamares Installer'`
**Issue:** English
**Correction:** `'Grafisches Installationsprogramm'`

#### Line 510
**Current:** `'Vanilla Arch'`
**Issue:** English
**Correction:** `'Unverändertes Arch'`

#### Line 528
**Current:** `'Out-of-Box Gaming'`
**Issue:** English
**Correction:** `'Gaming sofort startklar'`

#### Line 558
**Current:** `'Proton-GE vorinstalliert'`
**Note:** Proton-GE is a proper name, but could add explanation
**Alternative:** `'Proton-GE vorinstalliert (für bessere Spielekompatibilität)'`

#### Line 558
**Current:** `'OBS Studio Ready'`
**Issue:** English
**Correction:** `'OBS Studio vorinstalliert'`

#### Line 558
**Current:** `'Gaming-Kernel-Patches'`
**Issue:** Technical
**Correction:** `'Optimierungen für Spiele'`

#### Line 609
**Current:** `'Performance-Tweaks'`
**Issue:** English
**Correction:** `'Leistungsoptimierungen'`

#### Line 609
**Current:** `'Gaming Tools vorinstalliert'`
**Issue:** Partial English
**Correction:** `'Gaming-Werkzeuge vorinstalliert'`

#### Line 679
**Current:** `'Amnesic System'`
**Issue:** English technical term
**Correction:** `'Hinterlässt keine Spuren'`

#### Line 714
**Current:** `'Security by Compartmentalization'`
**Issue:** English
**Correction:** `'Sicherheit durch Isolation'`

#### Line 714
**Current:** `'Disposable VMs'`
**Issue:** English
**Correction:** `'Einweg-virtuelle-Maschinen'`

#### Line 714
**Current:** `'Whonix Integration'`
**Issue:** Could add German explanation
**Correction:** `'Whonix-Integration (für anonymes Surfen)'`

#### Line 857
**Current:** `'SteamOS-Alternative fuer alle Geraete. Immutables Gaming-OS basierend auf Fedora Atomic.'`
**Issues:**
1. Missing umlauts
2. Technical jargon (Immutables, Atomic)
**Correction:** `'SteamOS-Alternative für alle Geräte. Unveränderliches Gaming-System basierend auf Fedora.'`

#### Line 887
**Current:** `'Steam Gaming Mode'`
**Issue:** English
**Correction:** `'Steam-Spielmodus'`

#### Line 887
**Current:** `'Waydroid fuer Android-Apps'`
**Issue:** Missing umlaut, technical
**Correction:** `'Android-Apps möglich (über Waydroid)'`

#### Line 887
**Current:** `'Handheld-Support'`
**Issue:** English
**Correction:** `'Unterstützung für Handheld-PCs'`

#### Line 889
**Current:** `'Immutable System erfordert andere Denkweise'`
**Issue:** "Immutable" is English/technical
**Correction:** `'Unveränderliches System - funktioniert anders als gewohnt'`

#### Line 939
**Current:** `'Live-USB persistenz'`
**Issues:**
1. "persistenz" should be capitalized
2. Technical
**Correction:** `'Daten bleiben auf dem USB-Stick erhalten'`

#### Line 992
**Current:** `'Laeuft komplett im RAM'`
**Issue:**
1. Missing umlaut
2. "RAM" might need explanation
**Correction:** `'Läuft komplett im Arbeitsspeicher (sehr schnell)'`

#### Line 995
**Current:** `'Standardmaessig als Root ausgefuehrt'`
**Issues:** Missing umlauts
**Correction:** `'Standardmäßig als Administrator ausgeführt'`

#### Line 1044
**Current:** `'Windows-7-Feeling'`
**Issue:** "Feeling" is English
**Correction:** `'Windows-7-Gefühl'` or `'Vertraut wie Windows 7'`

#### Line 1044
**Current:** `'Chrome vorinstalliert'`
**Note:** Fine, but the warning mentions privacy concerns - good!

#### Line 1097
**Current:** `'Discover App Store'`
**Issue:** English
**Correction:** `'Discover-Softwarecenter'`

#### Line 1119
**Current:** `'Immer das neueste KDE Plasma. Ubuntu LTS-Basis mit Rolling KDE.'`
**Issue:** "Rolling" is English
**Correction:** `'Immer das neueste KDE Plasma. Ubuntu LTS-Basis mit laufend aktualisiertem KDE.'`

#### Line 1149
**Current:** `'Flatpak-fokussiert'`
**Note:** Technical but acceptable. Consider: `'Software hauptsächlich über Flatpak'`

#### Line 1151
**Current:** `'Minimale Vorinstallation - viel Nacharbeit'`
**Issue:** "Nacharbeit" is slightly awkward
**Correction:** `'Wenig vorinstalliert - du musst vieles selbst einrichten'`

#### Line 1153
**Current:** `'KDE-Updates koennen Bugs einfuehren'`
**Issues:**
1. Missing umlauts
2. "Bugs" is English
**Correction:** `'KDE-Updates können Fehler mitbringen'`

---

### src/data/desktopEnvironments.ts

#### Line 41
**Current:** `'Modernes, aufgeraeumtes Design. Fokus auf Einfachheit.'`
**Issue:** Missing umlaut
**Correction:** `'Modernes, aufgeräumtes Design. Fokus auf Einfachheit.'`

#### Line 68
**Current:** `'Hochgradig anpassbar mit Windows-aehnlichem Layout.'`
**Issue:** Missing umlaut
**Correction:** `'Hochgradig anpassbar mit Windows-ähnlichem Layout.'`

#### Line 149
**Current:** `'Klassisches GNOME 2 Erlebnis. Ressourcenschonend.'`
**Note:** Good, clear German.

#### Line 176
**Current:** `'Extrem leichtgewichtig. Perfekt fuer aeltere Hardware.'`
**Issue:** Missing umlauts
**Correction:** `'Extrem leichtgewichtig. Perfekt für ältere Hardware.'`

#### Line 203
**Current:** `'Elegant und modern. Urspruenglich von Solus entwickelt.'`
**Issue:** Missing umlaut
**Correction:** `'Elegant und modern. Ursprünglich von Solus entwickelt.'`

#### Line 230
**Current:** `'macOS-aehnliches Design von elementary OS.'`
**Issue:** Missing umlaut
**Correction:** `'macOS-ähnliches Design von elementary OS.'`

#### Line 257
**Current:** `'Wunderschoenes, modernes Design aus China.'`
**Issue:** Missing umlaut
**Correction:** `'Wunderschönes, modernes Design aus China.'`

#### Line 284
**Current:** `'Tastatur-zentrierter Tiling Window Manager.'`
**Issue:** English terms
**Correction:** `'Tastatur-gesteuerter Kachel-Fenstermanager.'`

#### Line 311
**Current:** `'i3-kompatibler Wayland Compositor.'`
**Issue:** Very technical
**Correction:** `'Wie i3, aber moderner (für Wayland).'`

#### Line 338
**Current:** `'Moderner Wayland Compositor mit Animationen.'`
**Issue:** Technical
**Correction:** `'Moderner Fenstermanager mit schönen Animationen.'`

---

### src/data/games.ts

#### Line 29
**Current:** `'Riot Games hat explizit erklaert, dass Linux nicht unterstuetzt wird.'`
**Issue:** Missing umlauts
**Correction:** `'Riot Games hat ausdrücklich erklärt, dass Linux nicht unterstützt wird.'`

#### Line 31
**Current:** `'Dual-Boot mit Windows oder Cloud-Gaming (GeForce NOW, Shadow).'`
**Issue:** Could explain Dual-Boot
**Alternative:** `'Du brauchst Windows (z.B. als zweites System) oder Cloud-Gaming (GeForce NOW, Shadow).'`

#### Line 33
**Current:** `'Keine Loesung fuer natives Linux-Spielen'`
**Issue:** Missing umlauts
**Correction:** `'Keine Lösung für direktes Linux-Spielen'`

#### Line 34
**Current:** `'VM mit GPU-Passthrough wird blockiert'`
**Issue:** Very technical
**Correction:** `'Auch über virtuelle Maschinen nicht möglich'`

#### Line 45
**Current:** `'Seit Patch 14.4 (2024) verwendet LoL Vanguard Anti-Cheat. Vorher funktionierte es via Wine/Lutris.'`
**Issue:** Technical terms
**Correction:** `'Seit 2024 verwendet LoL denselben Kopierschutz wie Valorant. Vorher ging es unter Linux.'`

#### Line 60
**Current:** `'Epic Games besitzt EAC und hat es Linux-kompatibel gemacht - weigert sich aber, es fuer Fortnite zu aktivieren.'`
**Issue:** Missing umlaut
**Correction:** `'Epic Games besitzt EAC und hat es Linux-kompatibel gemacht - weigert sich aber, es für Fortnite zu aktivieren.'`

#### Line 75
**Current:** `'RICOCHET erfordert TPM 2.0, Secure Boot und Windows-Kernel-Zugriff.'`
**Issue:** Very technical
**Correction:** `'Der Kopierschutz RICOCHET funktioniert nur mit Windows.'`

#### Line 88
**Current:** `'Proprietaeres Kernel-Level Anti-Cheat, das nur unter Windows funktioniert.'`
**Issue:** Missing umlaut, technical
**Correction:** `'Der Kopierschutz funktioniert nur unter Windows.'`

#### Line 117
**Current:** `'BattlEye unterstuetzt Linux, aber Bungie hat es nicht aktiviert. Linux-Spieler werden GEBANNT!'`
**Issue:** Missing umlaut
**Correction:** `'BattlEye unterstützt Linux, aber Bungie hat es nicht aktiviert. Linux-Spieler werden GESPERRT!'`

Note: "GEBANNT" is correct gaming terminology, but "GESPERRT" might be clearer for non-gamers.

#### Line 134
**Current:** `'EAs proprietaeres Kernel-Level Anti-Cheat blockiert alle Linux-Systeme.'`
**Issue:** Missing umlaut, technical
**Correction:** `'EAs Kopierschutz blockiert alle Linux-Systeme.'`

#### Line 147
**Current:** `'Hyperion erkennt und blockiert aktiv Wine/Proton. Funktionierte bis Mai 2023.'`
**Issue:** Technical (Wine/Proton)
**Correction:** `'Roblox erkennt und blockiert Linux. Hat bis Mai 2023 funktioniert.'`

#### Line 273
**Current:** `'CD Projekt RED hat mit Valve fuer Day-One-Proton-Kompatibilitaet zusammengearbeitet.'`
**Issues:** Missing umlauts, English
**Correction:** `'CD Projekt RED hat mit Valve für Kompatibilität ab dem Erscheinungstag zusammengearbeitet.'`

#### Line 442
**Current:** `'Kernel-Level Anti-Cheat erfordert direkten Zugriff auf den Windows-Kernel und funktioniert nicht mit Linux, Proton oder Wine.'`
**Issue:** Technical
**Correction:** `'Dieser Kopierschutz greift tief ins Windows-System ein und funktioniert daher nicht unter Linux.'`

#### Line 453
**Current:** `'Diese Anti-Cheat-Systeme koennen mit Linux funktionieren, wenn der Entwickler sie aktiviert.'`
**Issue:** Missing umlaut
**Correction:** `'Diese Kopierschutz-Systeme können mit Linux funktionieren, wenn der Entwickler sie aktiviert.'`

---

### src/components/LandingPage.tsx

**This file uses proper German umlauts!** (e.g., "nötig", "Einschränkungen", "zurückgehen")

#### Line 34-37
**Current text is good and friendly.** Minor suggestion:

**Current:** `'Der Wechsel zu Linux muss nicht kompliziert sein!'`
**Note:** Excellent friendly tone!

#### Line 104-105
**Current:** `'Du kannst jederzeit zurückgehen oder Fragen überspringen. Deine Antworten werden nicht gespeichert.'`
**Note:** Good, reassuring text.

---

### src/components/Layout.tsx

#### Line 32
**Current:** `'Built by Morpheus'`
**Issue:** English
**Correction:** `'Erstellt von Morpheus'` or keep English for branding

---

### src/components/Question.tsx

**Uses proper umlauts!** Good.

#### Lines 29, 31
**Current:** Labels like `'Anfänger'`, `'Fortgeschritten'`, `'Experte'`
**Note:** Good, appropriate vocabulary.

---

### src/components/ResultsPage.tsx

**Uses proper umlauts!** Good.

#### Line 27
**Current:** `'Große deutschsprachige Community'`
**Note:** Proper umlaut usage.

---

## Consistency Issues

1. **Component files** (LandingPage.tsx, Question.tsx, ResultsPage.tsx) use **proper Unicode umlauts**
2. **Data files** (questions.ts, distros.ts, desktopEnvironments.ts, games.ts) use **ASCII replacements** (ae, oe, ue, ss)

This inconsistency should be fixed by converting all data files to use proper Unicode characters.

---

## Technical Terms That Need Simplification

For non-technical users, consider adding explanations or simpler alternatives for:

| Technical Term | Suggested Alternative |
|---------------|----------------------|
| Kernel | Systemkern (tiefste Ebene des Systems) |
| Distro/Distribution | Linux-Variante |
| Terminal/Kommandozeile | Textbefehle / Befehlszeile |
| Paketmanager | Softwareverwaltung |
| Repository | Softwarequelle |
| Treiber | wird automatisch erkannt (statt technische Details) |
| VM/Virtuelle Maschine | Computer im Computer |
| Dual-Boot | Zwei Betriebssysteme auf einem PC |
| Rolling Release | Laufend aktualisiert |
| LTS | Langzeitunterstützt |
| GUI/grafisch | Mit Maussteuerung |
| CLI | Textbefehle |
| Anti-Cheat | Kopierschutz (nicht ganz korrekt, aber verständlicher) |
| Proton | Steam-Spielekompatibilität |

---

## Recommended Priority

### High Priority (Should fix)
1. Convert all ASCII umlaut replacements to proper Unicode
2. Replace English terms in user-facing text
3. Simplify technical jargon

### Medium Priority (Nice to have)
4. Add explanatory tooltips for technical terms that must remain
5. Consistent formatting of version numbers and dates

### Low Priority (Polish)
6. Minor grammar and style improvements
7. Alternative phrasings for better flow

---

## Summary Statistics

- **Files reviewed:** 9
- **Files with umlaut issues:** 4 (all data files)
- **English terms found:** ~35
- **Technical jargon instances:** ~50
- **Grammar issues:** ~10
- **Total issues found:** ~200+ (mostly umlaut-related)

---

*Review completed by Claude on 26. Januar 2026*
