Fragen die noch offen sind:
- Option --verbose lässt das programm mehr details printen das in eine log datei und als output geben?

MERKEN:
- Fix von mibigs options: [genbankDict] zu [parseHmmScan] als Argument geben

TODO:
- Update des recipe wenn eine antwort kommt
- Option [query_bgc] anschauen und maybe fixen
- neuen PR machen bzw alten überarbeteiten mit den neuen fixen -> Rücksprache halten davor mit Paul
- Test erzeugen wenn man Outputs bekommt
- änderung der mibig optionen da man nur eine nutzen kann wenn man einen nehme will!!
- Outputs machen
- Domaintable and Anchor file checken ob es so geht im Wrapper
- Letze Option einfügen -> domain_includelist.txt überschreiben mit eigener Datei -> schauen wie das geht und austesten (geht auch mit 1.1.6)
- Update die Help Texte jedes Argument
    -Pfamm nur noch mit Pfam-A.hmm angeben 
- Schreiben des Help Blocks 
    - Wichtig das man Formate angibt wenn man Datein selber schreiben muss
    - Infos und Links einfügen für Daten die man braucht (Pfamm)
    - Überlegen ob man die Grafik sowie Text von Git übernehmen

ERRORS COMMING FROM OPTIONS:
- domain_overlap_cutoff -> Wird nicht zum float gecastet wenn man diese Option nutzt!
    - Über Local run bestätig (siehe .log file) das dies nicht gemacht wird!
    - Comment im RP geschriebend as es gefixt wird noch vor dem neuen release, wenn sie es machen
- mibig optionen bekommen ein Error dies liegt drana das die function 'parseHmmScan' aufgerufen wird
    - Man rutscht in den Bereich wo der Error auftaucht wenn die .domtable keine domains enthält
    - Nach Traceback globale var genbankDict ist zu diesem Punkt nicht definiert
    - genbankDict wird vor der Function definiert definiert und auch gefüllt mit Inhalt
    => möglicher fix wenn man genbankDict an die Funktion übergibt als argument -> Local austesten

WORKING OPTIONS [Nur einlzeln getetst und geschaut ob das Programm durchläuft]:
- label
    - getestet
- exclude and include
    getestet
- verbose geht (man kann jederzeit das > [filename] setzen egal wo) 
    - getestet
- cores geht bzw wird ignoriert
    - wird über Galaxy geregt
- include_singletons geht 
    - kein error bekommen 
        - getestet
- min_bgc_size sollte gehen    
    - kein error bekommen 
        - getestet
- mix geht 
    - kein error bekommen 
        - getestet
- no_classify geht 
    - kein error bekommen 
        - geteste
- banned_classes geht 
    - kein error bekommen 
        - getestet aber nicht mit jedem einzelnen Input
- clans-off geht 
    - kein error bekommen 
        - getestet
- cutoffs geht 
    - kein error bekommen 
        - getestet
- hybrids-off geht 
    - kein error bekommen 
        - getestet
- force_hmmscan geht 
    - kein error bekommen 
        - getestet
- mibig geht 
    - erorr bekommen siehe .log file 
        -getestest aber es kann zu fehler führen wenn gewisse .domtabel nix gefunden wird [maybe weil man es einzeln benutzt hat]
- skip_ma 
    - kein error bekommen 
        - getestet
- mibig21 geht 
    - erorr bekommen siehe .log file 
        - getestest aber es kann zu fehler führen wenn gewisse .domtabel nix gefunden wird [maybe weil man es einzeln benutzt hat]
- mibig14 geht 
    - erorr bekommen siehe .log file
        - getestest aber es kann zu fehler führen wenn gewisse .domtabel nix gefunden wird [maybe weil man es einzeln benutzt hat]
- mibig13 
    - erorr bekommen siehe .log file 
        - getestest aber es kann zu fehler führen wenn gewisse .domtabel nix gefunden wird [maybe weil man es einzeln benutzt hat]
- clan_cutoff geht 
    - kein error bekommen 
        - getestet
- anchorfile geht 
    - kein error bekommen 
        - getestet und nimmt die ausgewählte datei
- domain_includelsit geht 
    - kein error bekommen 
        - getestet 
- mode geht 
    - kein error bekommen 
        - getestet alle 3 modes gehen durch
- query_bgc 
    - error bekommen siehe .log file  
        - getestet nimmt die Datei die ausgewählt an jeodch kommt es zu einem Keyerror bis jetzt noch nicht danach geschaut!
- domain_overlap_cutoff 
    - error 
        - garnicht möglich, input wird als string gecastet nicht als float

DONE:
- Did PR for fixing the import to make the recipe working + comment in the PR for fixing the option [-d | --domain_overlap_cutoff] -> NO ANSWER YET (23.01)
- Removed Core param and add this as deafult together with \${GALAXY_SLOTS: -6}
- Add hmmpress into command line since we only let the Pfam-A.hmm to be uplaoded. 
- Did test all possible options -> right now there is one option which doesnt work at all and some other options which enter a error if not enough data is inputed
- Include the var [genbankDict] as argument for the function [parseHmmScan] did fix the error (look at the mibig.log file) 
- Fix [-d | --domain_overlap_cutoff] with anotate the type in the parse function (parse of the args). -> Evreything works fine then look in domain_overlap_cutoff.log for details

