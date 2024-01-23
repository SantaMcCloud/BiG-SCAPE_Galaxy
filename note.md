Fragen die noch offen sind:
- Wie steht es mit den Cores muss/kann man diese begrenzen bzw. sollte man das tun? -> Core entfernen und Galaxy standart nehmen mti default
- Wie kann man den Output bestimmen wenn es sich nur um ein DIR handelt? -> Noch zu entscheiden -> Siehe GOOGLEDOCS 
- Man muss 5 Pfamm files zurverfügung stellen oder man macht das nur mit einer und nutzt dann hammscan auf diese ->  Entscheiden welche Variante besser ist! -> Nur die Hauptdatei machen
- Option --verbose lässt dasd programm mehr details printen das in eine log datei und als output geben?

TODO:
- Testen wenn das Recipe geupdated ist (PRIO) -> Siehe GOOGLEDOC ->LÖSUNG!!!! 
- Issus schreiben für BiG-MAP
- änderung der mibig optionen da man nur eine nutzen kann wenn man einen nehme will!!
- Letze Option einfügen -> domain_includelist.txt überschreiben mit eigener Datei -> schauen wie das geht und austesten (geht auch mit 1.1.6)
- Update die Help Texte jedes Argument
- Schreiben des Help Blocks 
    - Wichtig das man Formate angibt wenn man Datein selber schreiben muss
    - Infos und Links einfügen für Daten die man braucht (Pfamm)
    - Überlegen ob man die Grafik sowie Text von Git übernehmen

ERRORS COMMING FROM OPTIONS:
- domain_overlap_cutoff -> Wird nicht zum float gecastet wenn man diese Option nutzt!
    - Über Local run bestätig (siehe .log file) das dies nicht gemacht wird!
    - Comment im RP geschriebend as es gefixt wird noch vor dem neuen release, wenn sie es machen

WORKING OPTIONS:
- label works fine 
- exclude and include works fine 
- verbose geht (man kann jederzeit das > [filename] setzen egal wo)
- cores geht bzw wird ignoriert -> wird über Galaxy geregt
- include_singletons geht -> kein error bekommen
- min_bgc_size sollte gehen -> kein error bekommen
- mix geht -> kein error bekommen
- no_classify geht -> kein error bekommen
- banned_classes geht -> kein error bekommen
- clans-off geht -> kein error bekommen
- cutoffs geht -> kein error bekommen
- hybrids-off geht -> kein error bekommen
- force_hmmscan geht -> kein error bekommen
- mibig geht -> kein error bekommen
- skip_ma -> kein error bekommen
- mibig21 geht -> kein error bekommen
- mibig14 geht -> kein error bekommen
- mibig13 geht -> kein error bekommen
- clan_cutoff geht -> kein error bekommen -> geteste!
- anchorfile geht -> kein error bekommen
- domain_includelsit geht -> kein error bekommen
- mode geht -> kein error bekommen


