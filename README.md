# Block Restrictions (WordPress Plugin)
Dieses Plugin ermöglicht es, erlaubte Blöcke innerhalb eines `core/group`-Blocks in WordPress gezielt einzuschränken – basierend auf dem zugewiesenen Block-Stil (z. B. `is-style-neuigkeit`). Zusätzlich wird der Stil **„Neuigkeit“** per Plugin registriert und im Editor auswählbar gemacht.

![Block Restrictions im Editor](./assets/editor_screenshot.png)
*Abbildung: Stil „Neuigkeit“ ist im Editor aktiv – nur bestimmte Blöcke sind erlaubt.*


## 🔧 Funktionen

- Einschränkung erlaubter Blöcke je nach Stilklasse (`is-style-…`)
- Automatische Registrierung benutzerdefinierter Block-Stile
- Kompatibel mit dem `core/group`-Block
- Keine Änderungen am Core notwendig
- Entwicklung mit `@wordpress/scripts`

## 🚀 Verwendung

1. Plugin in `wp-content/plugins/` ablegen
2. Block „Gruppe“ einfügen → Stil **„Neuigkeit“** wählen → nur bestimmte Blöcke erlaubt
