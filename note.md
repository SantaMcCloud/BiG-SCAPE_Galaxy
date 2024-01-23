Fragen die noch offen sind:
- Wie steht es mit den Cores muss/kann man diese begrenzen bzw. sollte man das tun? -> Core entfernen und Galaxy standart nehmen mti default
- Wie kann man den Output bestimmen wenn es sich nur um ein DIR handelt? -> Noch zu entscheiden -> Siehe GOOGLEDOCS 
- Man muss 5 Pfamm files zurverfügung stellen oder man macht das nur mit einer und nutzt dann hammscan auf diese ->  Entscheiden welche Variante besser ist! -> Nur die Hauptdatei machen

TODO:
- Testen wenn das Recipe geupdated ist (PRIO) -> Siehe GOOGLEDOC ->LÖSUNG!!!! 
- Issus schreiben für BiG-MAP 
- Letze Option einfügen -> domain_includelist.txt überschreiben mit eigener Datei -> schauen wie das geht und austesten (geht auch mit 1.1.6)
- Update die Help Texte jedes Argument
- Schreiben des Help Blocks 
    - Wichtig das man Formate angibt wenn man Datein selber schreiben muss
    - Infos und Links einfügen für Daten die man braucht (Pfamm)
    - Überlegen ob man die Grafik sowie Text von Git übernehmen

ERRORS COMMING FROM OPTIONS:
- domain_overlap_cutoff -> Wird nicht zum float gecastet wenn man diese Option nutzt!
    - Über Local run bestätig (siehe .log file) das dies nicht gemacht wird!
