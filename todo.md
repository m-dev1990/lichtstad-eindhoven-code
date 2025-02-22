(A) $2 #* @VIEW +/UI/Tuner/Onderwerp voorbij laten bewegen
(A) $1 #+ @STYLE +/UI/Tuner/Onderwerp meer marge
(A) $1 #* @STYLE +/UI/Tuner/Onderwerp groter {cm:2024-11-26}
(A) $1 #* @VIEW +/UI/Tuner/Onderwerp tekst binnen box {cm:2024-11-26}
(A) $3 #+ @USE +/UI/Tuner i verbergen bij geen informatie
(A) $2+1 #* @USE +/UI/Foto foto resize bij scherm resize {cm:2024-11-26}
(A) $2+2 #* @STYLE +/UI/Foto niet laden in foute formaat van img {cm:2024-11-26}
(A) @DATA +Data/Architectuur dag {cm}
    (A) @DATA +Data/Architectuur dag 2
    (A) @DATA +Data/Architectuur dag 3
    (A) @DATA +Data/Architectuur dag Evoluon
    (A) @DATA +Data/Fotoos dag 2
    (A) @DATA +Data/Fotoos dag 3
    (A) @DATA +Data/Fotoos dag Evoluon
(A) @PHOTO +Fotoos selectie dag Evoluon
(A) $1 #+ @VIEW +/UI icon: lamp emoji
(A) $1 #+ @VIEW +/UI/Tuner style information panel active {cm:2024-11-26}
$1 (A) #* @VIEW fix icon plus and minus
(B) $2 #+ @USE +/UI/Tuner/Selectiester klikken
(B) $1 #+ @USE +/UI/Tuner/Selectiester voor klik aangeven
(B) $4 #+ @VIEW +/UI/Tuner/Informatiepaneel
(B) $4 #= +/UI Split up component {cm:2024-11-22}
(B) $1 #* @STYLE +/UI/Tuner fix minus icon position
(B) $1 #+ @STYLE +/UI use TGL font and change font sizes {cm:2025-01-25}
(B) $1 #+ @STYLE +/UI/Informatiepaneel use boxes for information and tuner
(B) $2 #+ @VIEW +/UI foto niet achter onderste balk
(B) $2 #+ @USE photo index in url {cm:2024-11-25}
$1 (B) #+ @USE +/URL url /foto/1
$1 (B) @VIEW +/UI/Informatiepaneel information panel maak styling {cm:2024-11-26}
$1 (B) @VIEW +/UI/Informatiepaneel information panel top bar floats for categories {cm:2024-11-26}
(C) $0 #+ @USE +/UI/Tuner cursor hand voor te klikken onderdelen {cm:2024-09-04}
(C) $1 #+ @USE +/UI/Tuner/Informatiepaneel uitklappen
(C) $1 #+ @USE +/UI klikken voor volgende
(D) $2 #+ @VIEW +/UI/Strijp Strijp = S/T/R: STRIJP S/T/R onderstrepen
(D) $2 #+ @VIEW +/UI/Strijp is Philips: Philips embleem
#+ @STYLE Achtergrondkleuren oude radio {cm:2024-11-22}
#* @USE Selectiester juist positioneren (niet voorbij einde) {cm:2024-11-22}
#* @USE +/UI/Tuner niet verbergen bij hover {cm:2024-11-22}
$3 #+ @STYLE +/UI blauwe stijl {cm:2025-01-25}
$8 #+ @DATA +/Data/Architectuur opsplitsen in onderdelen {cm:2025-01-25}
$4 #+ @DATA +/Data/Architectuur cleanup format data
$4 #+ @DATA +/Data/Architectuur split up in multiple "maak" {cm:2025-01-25}
$1 #. @INFO download 
    https://www.yumpu.com/nl/document/view/19764164/cultuurhistorische-verkenning-hoofdgebouw-technische-
    https://www.yumpu.com/nl/document/view/27354560/cultuurhistorische-verkenning-matrix-en-de-hal-technische-
$1 (X) #+ @USE +/URL photo index in url index 1
$1 (X) @VIEW +/UI/Informatiepaneel information panel maak external link ->
$5 (X) #+ @DATA TUe object for all buildings
(Y) $4 #+ @VIEW +/UI/Informatiepaneel uitleg Strijp/TU/e/Philips-iconen bij hover
(Y) $2 #+ @STYLE +/UI/Badge badge kleiner
(Y) $1 #+ @STYLE +/UI/Badge badge korter
(Y) $2 #= split bottom panel => BottomPanel + Tuner
$2 (Y) #+ @DATA rename ontwerper to maker for kunstwerk {cm:2025-01-25}
(Z) $2 #+ @USE +/UI/Tuner niet verbergen bij vastzetten met bolleke {h}
    (Z) $2 #+ @USE +/UI/Tuner niet verbergen bij vastzetten met bolleke
    (Z) $4+2 #+ @USE +/UI/Foto Foto verkleinen bij vastzetten met bolleke
(Z) $5 #+ @STYLE +/UI witte stijl
    (Z) $3 #+ @STYLE +/UI witte stijl
    (Z) $2 #+ @VIEW +/UI lamp
(Z) $32 @VIEW information box line to subject on photo
$8 (Z) #+ @DATA split maak in ontwerp + maak
$8 (Z) #+ @DATA Philips object
    # - Afkorting oud fabrieksgebouw (vb. RK, SDM, VK, EE, EF, EH...)
$8 (Z) #+ @DATA Strijp R object
    # property veld
$1 (Y) #+ @DATA gebouw object aanmaken voor Driegebouwenplan en refereren als object
$1 (Y) #+ @DATA gebouw object aanmaken voor BLOK complex en refereren als object
$4 (Y) #+ @DATA namen: { naam: string }|{afkorting: string}|{bijnaam: string}
$4 (Y) Kunstvorm: muurschildering, glasraam, beeld, fontein
$2 (B) #= color variables for border 2
$1 (B) #* correct position ... button
$2 (B) #* correct line for Renovatie
$2 (B) #= move index property in view model
$2 (B) #~ add onderwerp viewmodel type
$2 (B) #* @STYLE onderste beschrijving-join-lijn vanuit onderwerp box is te veel naar links door Philips-logo als de box klein is.
$2 (B) #* @STYLE STRIJP out of box when name too long
    # foto/38
$2 (B) #* @STYLE STRIJP margin when name too long
    # foto/44
$2 (B) #* @DATA Glasgebouw/Glasgebouw (SWA)
    => Glasgebouw
$2 (B) #* @DATA Vertical Forest => Verticaal Bos (Bosco Verticale)
$2 (B) #* @DATA in foto beschrijving: Verticaal bos => Verticaal Bos (Bosco Verticale)
$2 (B) #* @DATA in foto beschrijving: Verticaal Bos => Verticaal Bos (Bosco Verticale)
$4 (C) #* @STYLE join-lijn niet in het midden
$2 (B) #* @STYLE bij scherm kleiner dan 800px foto niet meer verkleinen
$2 (B) #* @STYLE renovatie-streep volledige breedte box
$2 (B) #* @STYLE marge TU/e
$2 (B) #* @STYLE TU/e niet achter Philips-embleem
$2 (B) #* @DATA Van_Abbe-museum met nieuwbouw
$16 (B) #* intro/outro met fade-in/fade-out van licht naar site/van site naar licht
    Badge HET EIND
$4 (B) #> @VIEW Bakeliet-achtergrond goed laden
$2 (B) #* @VIEW Slashes verwijderen in laden foto's
$8 (B) #+ @VIEW Selectie-ster
$2 (B) #+ @VIEW Photo container full size for clicking area