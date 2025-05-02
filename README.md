# Block Restrictions (WordPress Plugin)
Dieses Plugin ermöglicht es, erlaubte Blöcke innerhalb eines `core/group`-Blocks in WordPress gezielt einzuschränken – basierend auf dem zugewiesenen Block-Stil (z. B. `is-style-neuigkeit`). Zusätzlich wird der Stil **„Neuigkeit“** per Plugin registriert und im Editor auswählbar gemacht.

![Block Restrictions im Editor](./assets/editor_screenshot.png)
*Abbildung: Stil „Neuigkeit“ ist im Editor aktiv – nur bestimmte Blöcke sind erlaubt.*


## Funktionen

- Einschränkung erlaubter Blöcke je nach Stilklasse (`is-style-…`)
- Automatische Registrierung benutzerdefinierter Block-Stile
- Kompatibel mit dem `core/group`-Block
- Keine Änderungen am Core notwendig
- Entwicklung mit `@wordpress/scripts`

## Verwendung

1. Plugin in `wp-content/plugins/` ablegen
2. Block „Gruppe“ einfügen → Stil **„Neuigkeit“** wählen → nur bestimmte Blöcke erlaubt

<br><br><br><br><br>
# Kurze Entwickleranleitung

Kurzanleitung zur lokalen Weiterentwicklung des Plugins.

## 1. Projekt einrichten

Lade das Plugin herunter:
Auf „Code → Download ZIP“ klicken und das Plugin entpacken.

## 2. WordPress (Docker) starten

Nutze wp-env für eine lokale WordPress-Umgebung.
Öffne ein Terminal (macOS, Linux) oder PowerShell / Git Bash (Windows):
```bash
npx @wordpress/env start
```
Das Plugin liegt dabei in wp-content/plugins/.

## 3. Abhängigkeiten installieren und entwickeln
```bash
cd /pfad/zu/deinem/plugin  #navigiere zu deinem Plugin.
npm install                #lädt benötigte Node-Modules
npm start                  # startet den Watch-Modus für /src
```
Änderungen in src/ werden automatisch nach build/ geschrieben.

## 4. Build für Live-Einsatz
```bash
npm run build
```
Erzeugt einen optimierten, produktionsfertigen Build im Ordner build/.

## 5. Welche Dateien werden benötigt?

Für den produktiven Einsatz im WordPress-Plugin-Verzeichnis werden nur die folgenden Bestandteile benötigt:

- `build/` (vom Build-Prozess generiert)
- `block.json`
- PHP-Dateien (z. B. `plugin.php`, `render.php`, etc.)
- CSS-Dateien (z. B. `style.css`, `editor.css`)
- Optional: `assets/` (z. B. für Bilder oder Icons)

Nicht erforderlich (und typischerweise ausgeschlossen):

- `node_modules/`
- `src/`
- `.git/`
- `.gitignore`
- `package.json`, `package-lock.json`
- `.editorconfig`, `.eslintrc.js` usw.

Diese Dateien sind nur für die Entwicklung relevant und sollten nicht ins produktive WordPress-Setup kopiert werden.
