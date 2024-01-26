Fragen die noch offen sind:
- Option --verbose lässt das programm mehr details printen das in eine log datei und als output geben?
- Option im wrapper einfügen das nur die MIBiG files als input genommen werden?

TODO:
- Update des recipe wenn release da ist
- Test erzeugen wenn man Outputs bekommt
- Outputs machen -> siehe GOOGLEDOC 
    - dir html_content
    - index.html -> erhalte ich als datei
    - dir networks_files
- Update die Help Texte jedes Argument
    - Pfamm nur noch mit Pfam-A.hmm angeben 
    - parameter überprüfen ob alle grenzen richtig sind und alle eingetragen sind was es an parameter gibt
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
- Did PR for fixing the import to make the recipe working + comment in the PR for fixing the option [-d | --domain_overlap_cutoff]  -> ANSWER: They will wait till i push the fixes and merge it then.
- Removed Core param and add this as deafult together with \${GALAXY_SLOTS: -6}
- Add hmmpress into command line since we only let the Pfam-A.hmm to be uplaoded. 
- Did test all possible options -> right now there is one option which doesnt work at all and some other options which enter a error if not enough data is inputed
- Include the var [genbankDict] as argument for the function [parseHmmScan] did fix the error (look at the mibig.log file) 
- Fix [-d | --domain_overlap_cutoff] with anotate the type in the parse function (parse of the args). -> Evreything works fine then look in domain_overlap_cutoff.log for details
- did test if the options [query_bgc] and [anchorfile] works in the way i implement it -> they do work (note: didnt done it with the fix .py) 
- commit the 2 fixes of 3 and ask about the last error maybe there is a way of fixing it. Also they can merge it now so i can start doing the rest
- chage the wrappe para for mibig since we only can use 1 version of it. test 2 different inputs both works fine with the local wrapper!
- include the last option and the test show it was correct how i implement it so now you can use with the wrappe the option [domain_inlcudelist]