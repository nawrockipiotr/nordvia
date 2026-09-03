# Nordvia — czytnik studium przypadku

Jednoplikowy czytnik kejsu „Nordvia" dla studentów Wydziału Zarządzania UW.
Otwiera się dwuklikiem z dysku, działa bez internetu i bez instalacji.

## Pliki

| plik | do czego |
|---|---|
| `index.html` | **gotowy czytnik** — jeden samowystarczalny plik (8,4 MB), wszystko w środku |
| `Czytnik Nordvia.dc.html` | źródło do dalszej pracy (wymaga `dane.js`, `logo-*.png`, `baner-terminal.png`) |
| `kejs.json` / `dane.js` | treść kejsu: 16 rozdziałów, 11 załączników, 20 rysunków |
| `logo-wz-uw.png`, `logo-csri.png` | logotypy WZ UW i Centrum Innowacji Odpowiedzialnych Społecznie |
| `baner-terminal.png` | zdjęcie w główce |
| `sw.js`, `manifest.webmanifest`, `ikona-*.png` | tryb offline i dodanie do ekranu głównego (tylko przy wdrożeniu na serwer) |

## Publikacja

**Rozdanie studentom pliku** — wyślij sam `index.html` (Basecamp, Kampus, mail). Nic więcej nie jest potrzebne.

**GitHub Pages** — wgraj całe repozytorium, w ustawieniach włącz Pages z gałęzi `main`, katalog `/`. Adres `…/index.html` otworzy czytnik; przy tej ścieżce włącza się też bufor offline i można dodać czytnik do ekranu głównego telefonu.

Uwaga: w wersji rozdawanej jako plik z dysku bufor offline (`sw.js`) się nie uruchamia — i nie musi, bo cały czytnik jest w jednym pliku.

## Co czytnik potrafi

- **Plan zajęć** wprost z załącznika I: 12 spotkań (tryb dzienny) albo 6 bloków (zaoczny), z czasem czytania i liczbą poleceń; wybór trybu zapamiętany.
- **Postęp czytania** — pasek przy rozdziale, „zostało ~7 min", ręczne oznaczanie przeczytania, zerowanie w ustawieniach.
- **Powrót do miejsca** — czytnik pamięta, gdzie skończyłeś, i tam wraca.
- **Załączniki podlinkowane w treści** — każda wzmianka „załącznik D" jest odnośnikiem, u góry rozdziału lista przywołanych załączników, powrót jednym przyciskiem.
- **Dane do rachunku** — przy każdej tabeli „Kopiuj" (wkleja się w Excelu jako komórki) i „CSV" (średnik, UTF-8), pod rozdziałem „Pobierz dane rozdziału"; rysunki do pobrania jako PNG i do powiększenia w dwóch skalach.
- **Szukanie** po rozdziałach i załącznikach wraz z treścią, ze zdaniem kontekstu.
- **Czytanie** — trzy stopnie tekstu, motyw jasny i ciemny, dymki pomocy do wyłączenia.
- **Ochrona treści** — tekst rozdziałów zabezpieczony przed kopiowaniem (dane w tabelach nie), opcjonalna zasłona przy utracie ogniska okna.
- **Druk** — arkusz drukowy dla pojedynczego rozdziału.

## Aktualizacja treści

Treść jest w `kejs.json`. Po zmianie podmień plik i przebuduj `index.html` — źródłem jest `Czytnik Nordvia.dc.html`. Struktura danych: `meta`, `czesc_wstepna`, `firma`, `rozdzialy[]` (`tresc.H`), `zalaczniki[]`, `rysunki{}`.

Treść odpowiada dokumentowi `Nordvia - kejs dla studentow.docx`: śródtytuły, tabele, rysunki i polecenia sprawdzone rozdział po rozdziale.
