let questions = [
    {
        question: "Hány összetevőből áll a hagyományos Mojito koktél ?",    //1
        answers: ["5", "4", "6", "3"],
        correctAnswer: 0, 
    },
    {
        question: "Hány kalória van egy kiló csirkemellben ?",
        answers: ["1000 kcal", "1200 kcal", "1400 kcal", "1600 kcal"],      //2
        correctAnswer: 1
    },{
        question: "Felsoroltak közül melyik Gragas szövege?",
        answers: ["Gurulok mint a hordó", "Mesélek a bornak", "Nem csak a hasam nagy", "Igyunk egyet!"],        //3
        correctAnswer: 3,
          
    },
    {
        question: "Mennyi lesz az eredmény, ha 40-et elosztjuk a negyedével ?",         //4
        answers: ["10", "16", "4", "36.99"],
        correctAnswer: 2
    },
    {
        question: "Mennyi megközelítőleg ma a Bitcoin forintba ?",      //5
        answers: ["19.3M", "60M", "22.2M", "86M"],
        correctAnswer: 2
    },
    {
        question: "Ki énekelt arról hogy tölcsért csinál a kezéből ?",
        answers: ["Zalatnay Sarolta", "Katona Klári", "Kovács Kati", "Flipper Öcsi"],   //6
        correctAnswer: 0
    },
    {
        question: "Mennyibe kerül egy Souvenir Factory New AWP Dragon Lore ?",      //7
        answers: ["5M", "1-2M", "Kb 10M", "KB 25M"],
        correctAnswer: 3 
    },
    {
        question: "Hány szín van Madách Imre Az ember tragédiája cimű művében ?",       //8
        answers: ["9", "13", "15", "18"],
        correctAnswer: 2
    },
    {
        question: "Milyen Frédiről énekelt az Omega együttes ?",
        answers: ["Trombitás", "Verklis", "Üstdobos", "Flinstone"],     //9
        correctAnswer: 0,
    
    },
    {
        question: "Hol található a Balaton Múzeum?",
        answers: ["Keszthely", "Siófok", "Balatonfüred", "Fonyód"],     //10
        correctAnswer: 0
    },
    {
        question: "Melyik hónap 28 napos?", 
        answers: ["Február", "Január", "December", "az összes"],        //11
        correctAnswer: 3
    },
    {
        question: "Mit jelent a szlip szó ?",                           //12
        answers: ["Megállás", "Csúszás", "Bugyogás", "Slicc"],
        correctAnswer: 1
    },
    {
        question: "Milyen ruhadarab a burnusz?",
        answers: ["lábbeli", "köpeny", "nadrág", "turbán"],             //13
        correctAnswer: 1
    },
    {
        question: "Melyik nem labdajáték ?",
        answers: ["Futsal", "Vízilabda", "Curling", "Asztalitenisz"],           //14
        correctAnswer: 2
    },
    {
        question: "Melyik a helyes ?",
        answers: ["muszály", "aszály", "viszáj", "aszáj"],          //15
        correctAnswer: 1
    
    },
    {   
        question: "Hány 5 forintossal lehet kifizetni 365 forintot? ",          //16
        answers: ["93", "32", "73", "71"],
        correctAnswer: 2
    },
    {
        question: "Minek a mértékegysége a Röntgen?",
        answers: ["nyomás", "kapacitás", "besugárzási dózis", "energia"],           //17
        correctAnswer: 2
         
    },
    {
        question: "Melyik évben jelent meg a Need for Speed: Most Wanted ?",            //18
        answers: ["2003", "2004", "2005", "2006"],
        correctAnswer: 2
    },
    {
        question: "Melyik FIFA jelent meg először magyar szinkronnal ?",                //19
        answers: ["FIFA 04", "FIFA 07", "FIFA 10", "FIFA 14"],  
        correctAnswer: 1,
         
    },
    {
        question: "Mit jelent a 'kozmopolita' szó ?",
        answers: ["világpolgár", "vidéki lakos", "városi vezető", "természettudós"],                //20
        correctAnswer: 0
    },
    {
        question: "Melyik ország zászlaja látható a képen?",
        answers: ["Pakisztán", "Kazahsztán", "Ciprus", "Afganisztán"],            //21
        correctAnswer: 1,
        image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAA8CAMAAACac46aAAAAkFBMVEUAq8L/7C0AqsMAqcUAqMYAp8gApskApcsApMz/7Sp8wpqJxZQ5sbjq5kJduar/7iL/9QDK22Pi5Emv03X/8BWt0XuCxJXT31jb4k4AoNJmu6crrr1KtbG21XDX4FFrvaPB2GmNx5CjzYSlz4AAos+WyYxvv57z6jW412qZyoa/1m5Wt67M3Fzv6Dz37CiYx4+k9abpAAAEMklEQVRYheVZx5ajOhBVK4GFZEyU2xIiNWATPP//d0/uCaenV5LfOXgxtfECi1ulSrcKAP5JQRBjBOH+wK3K+nE57o5MmrJYkorvDkxl27Ay3h8YisKI68rQ3sDA3HoRXfcHJkne1HGsdr9qnHRNOhi9fz6db5Wpsmj3q6bpnMg2399ich0rna3qiaMQqP9R8XDWlGtzW3zfABUe6MD5iJ+NS55UW1t4ulihYA2FkmPR8oI8hUubpZRQ+qmNQBOeB9Ody7gUJS+wv9GQy4tuVNdjn1PsYz6XPUBBqND5mC9w9EZG7S3Z4uS2Ug9labsdk3feGyGSNtBzHSsvvT9fcpRj2hS3yv0kvAxEDh9zHB+sxAf2npa8904LOp9qut09fAzD7KRpGr/9krx/L06Lb4QhloFtGhfpfNWw7o+MyD+4FrnUF1ZwX+BCrEJWibPGkESncczfvsghkBv39vIZ6OtH716recTq0By+AuctKkvmGdi4K5vtcnbXF12MDP8y+O2wgrs/edIySqPB4xiPFv0NWIRR7RvWpOqjbr25AVt/QF2J7jvwFqams899egZJxuTSCqd0gi2CANE6At+Az7TjgdVLj+41n4gqSfvNhVdDnKsj4o2Y36e/gOMCp+kNguNQeaSz6ftz5sJAoAbpD0lhQOalj78C57z78Y4hNwk7OuOSJFmLZnLwMYpEu04ILkJqdP+ST3ETtqKxz5t7fXJODwucuAEDkhbTgWFFebwc8z/I8RZU5gOowNznrXQPL1P0xumqiWGHNBcU6nRgerE94jOwcoOj45xAZHURzexM0InIkrRzCS6opkKwqSWK8FOpYTHFeR6nDOtVhAAEIj+kSeZc8z3SCantwMHEEap0eVI64Muiwno8obZEtDBc3t1xHwWk7dbOxcdw7I1CeoIQB6m2oVEOWl5Odd9R2zmqD2WujUf9epTM1q1k4ujQUswmhbkOBUjHNDJR2QdHSCPbV2F6r90LiFeToFESYTKKmiI8BkmYLXVEa4RxlipI2BX4kFWvtqiKDVmON1ac2oIBF0sWIaGsOQaQtCLzuGjLQITczOxIBCBfG/tPxO9ytDZiQoDuNkYgwGXcIY8egcriQX20K/WByvQU2p9eSrnV83Sf1ov1E2Hz6MdBaHMafcgepKy9QBvYhIR8HVQYWHMhudwHP7oHL5JZetvN7seQ7X76wb1Upj9HCIiWW+/LuX4R+s6H0Nt+b43kVfUziLFeOA29h76nRpiHrzeTc64gClhuZfOeYcgzQ5sFXkatLu3QDnOcN/IxLPvKU2Pqw7GkkNt2XtdsAT5++i0/B/PBezD/PIssHSJPzKgP+b2K2H+l+Fi+DC9YvoDz7WqaF6yb8PqiBRtpXrRSBPLWiajaf4kK0/41a2Mqh4axF1z1yz4NgEhVBdP7fwx53eeff0r+Ay28X1jezmwgAAAAAElFTkSuQmCC",  
    },
    {
        question: "Melyik növény képezi a tequila alapanyagát ?",
        answers: ["Cukornád", "Kukorica", "Agávé", "Büza"],                //22
        correctAnswer: 2
    },
    {
        question: "Melyik híres játék Menuje látható ?",    //23
        answers: ["Age of Wonders", "Master of Magic ", "Heroes 3", "Heroes 4"],
        correctAnswer: 2, 
        image: "kep/h3.png"
    },
    {
        question: "Ki látható a képen ?",
        answers: ["The Egyptian God Cards", "Exodia", "Arceus", "Voltron"],      //24
        correctAnswer: 1,
        image: "kep/Exodia.png"
    },
    {
        question: "Melyik országban található a világ leghosszabb vasútvonala, a Transzszibériai vasút?",
        answers: ["Oroszország", "Transzibéria", "India", "Kína"],        //25
        correctAnswer: 0,
          
    },
    {
        question: "Mi India fizetőeszköze ?",         //26
        answers: ["Jen", "Peso", "Rúpa", "Dínár"],
        correctAnswer: 2
    },
    {
        question: "Melyik állat képes teljesen regenerálni a végtagjait ?",      //27
        answers: ["Gekko", "Axolotl", "Polip", "Kaméleon"],
        correctAnswer: 1
    },
    {
        question: "Melyik ország zászlaján szerepel a szarvasmarha ?",
        answers: ["Bhután", "Wales", "Nepál", "Andorra"],   //28
        correctAnswer: 3
    },
    {
        question: "Melyik tengeri szoros választja el Európát Afrikától?",      //29
        answers: ["Magellán-szoros", "Bering-szoros", "Gibraltári-szoros", "Boszporusz"],
        correctAnswer: 2 
    },
    {
        question: "Melyik bolygó rendelkezik a legnagyobb gravitációval ?",       //30
        answers: ["Szaturnusz", "Jupiter", "Föld", "Mars"],
        correctAnswer: 1
    },
    {
        question: "Melyik elem található a periódusos rendszer első helyén ?",
        answers: ["Oxigén", "Hidrogén", "Hélium", "Nitrogén"],     //31
        correctAnswer: 1,
    
    },
    {
        question: "Melyik az egyetlen madár, amelyik képes hátrafelé repülni?",
        answers: ["Albatrosz", "Kolibri", "Sólyom", "Kakukk"],     //32
        correctAnswer: 1
    },
    {
        question: "Melyik évben lépett trónra I. Erzsébet angol királynő?", 
        answers: ["1588", "1603", "1558", "1547"],        //33
        correctAnswer: 2
    },
    {
        question: "Melyik tenger van a legnagyobb területű a világon?",                           //34
        answers: ["Karib-tenger", "Égei-tenger", "Fülöp-tenger", "Fekete-tenger"],
        correctAnswer: 2
    },
    {
        question: "Melyik hős tud a legtöbb pajzsot generálni egyetlen képességgel?",
        answers: ["Lulu", "Janna", "Shen", "Mordekaiser"],             //35
        correctAnswer: 3
    },
    {
        question: "Melyik hős ultimate képessége sebezheti meg saját csapattársait?",
        answers: ["Yasuo", "Karthus", "Senna", "Kalista"],           //36
        correctAnswer: 3
    },
    {
        question: "Melyik hőssel tudod megölni magad ?",
        answers: ["Karthus", "Sion", "Zac", "Olaf"],          //37
        correctAnswer: 3
    
    },
    {   
        question: "Milyen állat a főszereplő a „Zootopia” című filmben ?",          //38
        answers: ["Nyúl", "Róka", "Medve", "Elefánt"],
        correctAnswer: 0
    },
    {
        question: "Melyik Disney karakter híres a „ússz és evezz” mondatáról?",
        answers: ["Nemo", "Pizsi", "Szenilla", "Protkó"],           //39
        correctAnswer: 2
         
    },
    {
        question: "Ki látható a képen ?",            //40
        answers: ["Taz", "Lilo", "Stitch", "Baymax"],
        correctAnswer: 2,
        image: "https://static.wikia.nocookie.net/disney/images/a/a8/Profile_-_Stitch.jpeg/revision/latest?cb=20190312072323"
    },
    {
        question: "Melyek az uradalom klasszikus részei?",                //41
        answers: ["Földesúri birtok, jobbágyfalu, mező, bérház", "Templom, piac, börtön, vásártér", "Szántóföld, erdő, legelő, vízimalom", "Földesúri birtok, jobbágyfalu, templom, mesteri ház"],  
        correctAnswer: 3,
         
    },
    {
        question: "Milyen lény található a képen ?",
        answers: ["Sirató", "Lopakodó", "Demogorgon", "Fúrija"],                //42
        correctAnswer: 0,
        image:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhj4CXDquFvzJuaKsSRz28A55Uk65DdUL33ssOGDhNTmmdHtj9nyXFC-zJdTfxW0y3XbKSChwMYKoMD1zQgAyS_sHdCxV0LvzKDdQRRbOiMkz5sAOJSOAsFWsrALp4iprFj1A838Rnxcqo/s1600/tumblr_nc5zle4Wpe1tzrw6to3_500.gif"
    },
    {
        question: "Melyik filmben szerepelt Gimli ?",
        answers: ["A hobbit", "A gyűrűk ura", "Trónok harca", "Herkules"],            //43
        correctAnswer: 1,
        image: "kep/gimli.png",  
    },
    {
        question: "Mi a Rigójancsi ?",
        answers: ["Egy jános nevű ember", "Egy növény", "Egy édesség féle", "Egy állat"],                //44
        correctAnswer: 2
    },
    {   
        question: "Melyik sportágban szerepel a 'hole in one' kifejezés?",          //44
        answers: ["Krikett", "Kosárlabda", "Tenisz", "Golf"],
        correctAnswer: 3
    },
    {
        question: "Melyik vitamin található legnagyobb mennyiségben a citrusfélékben?",
        answers: ["A-vitamin", "B12-vitamin", "C-vitamin", "D-vitamin"],           //45
        correctAnswer: 2
         
    },
    {
        question: "Milyen típusú állat a köztudatban ismert nevén 'dromedár' ?",            //46
        answers: ["Kutya", "Kígyó", "Teve", "Tehén"],
        correctAnswer: 2,
    },
    {
        question: "Melyik FNAF játékban jelent meg először Springtrap ? ",                //47
        answers: ["Fnaf 1", "Fnaf 2", "Fnaf 3", "Fnaf 4"],  
        correctAnswer: 2,
         
    },
    {
        question: "Melyik zenekar adta elő a „Bohemian Rhapsody” című dalt?",
        answers: ["Queen", "The Beatles", "Led Zeppelin", "The Rolling Stones"],                //48
        correctAnswer: 0,
    },
    {
        question: "Melyik évben indult el a Facebook?",
        answers: ["2002", "2004", "2006", "2008"],            //49
        correctAnswer: 1,
    },
    {
        question: "Melyik színész játszotta Tony Starkot a Marvel filmekben?",
        answers: ["Chris Hemsworth", "Chris Evans", "Mark Ruffalo", "Robert Downey Jr."],                //50
        correctAnswer: 3
    },
    {
        question: "Hányszor ad aki gyorsan ad?",
        answers: ["egyszersem", "egyszer", "kétszer", "tízszer"],                //51     HEREEREGEGEGEHEHERER
        correctAnswer: 2                                                
    },
    {
        question: "Ki/MI a kofa ?",
        answers: ["konyhabútor", "piaci árus", "trópusi növény", "ételízesítő"],      //52
        correctAnswer: 1
    },
    {
        question: "Melyik nem egy létező városrész Budapesten ?",
        answers: ["Terézváros", "Józsefváros", "Mártonváros", "Lipótváros"],        //53
        correctAnswer: 2,
          
    },
    {
        question: "Melyik nem halfajta az alábbiak közül ?",         //54
        answers: ["mara", "viza", "küsz", "amur"],
        correctAnswer: 0
    },
    {
        question: "Hogyan kérünk elnézést olaszul ?",      //55
        answers: ["Prego", "Scusi", "Grazie", "Bene"],
        correctAnswer: 1
    },
    {
        question: "Melyik fertőző betegség másik neve gümőkór ?",
        answers: ["szamárköhögés", "malária", "tuberkulózis", "kolera"],   //56
        correctAnswer: 2
    },
    {
        question: "Melyik nap tartjuk a nemzetközi nőnapot ?",      //57
        answers: ["június 1.", "február 14.", "március 8.", "május 5."],
        correctAnswer: 2 
    },
    {
        question: "Melyik magyar mese szereplője Lukrécia ?",       //58
        answers: ["Frakk, a macskák réme", "A Mézga család", "Kérem a következőt!", "Vuk"],
        correctAnswer: 0
    },
    {
        question: "Hogyan írjuk helyesen (faág) ?",
        answers: ["gaj", "gajj", "gally", "galy"],     //59
        correctAnswer: 2,
    
    },
    {
        question: "Milyen állat a nílusi varánusz?",
        answers: ["hüllő", "kétéltú", "hal", "emlős"],     //60
        correctAnswer: 0
    },
    {
        question: "Melyik ország fővárosa Oslo?", 
        answers: ["Hollandia", "Dánia", "Svédország", "Norvégia"],        //61
        correctAnswer: 3
    },
    {
        question: "Húsvét hétfő idén milyen napra esik/esett?",                           //62
        answers: ["szombat", "hétfő", "péntek", "Ezek közül egyik sem"],
        correctAnswer: 1
    },
    {
        question: "Melyik királyunk foglalta el Bécset?",
        answers: ["IV. Béla", "I. Mátyás", "II. Ulászló", "I. István"],             //63
        correctAnswer: 1
    },
    {
        question: "Hogyan folytadódik a mondás? Nesze semmi...",
        answers: ["ne halaszd holnapra", "sokra megy", "fogd meg jól!", "mint a kutya vacsorája"],           //64
        correctAnswer: 2
    },
    {
        question: "Miben segédkezik a bába ?",
        answers: ["házasságkötés", "gyerekszülés", "gonosz szellemek elűzésében", "főzés"],          //65
        correctAnswer: 1
    
    },
    {   
        question: "Melyik szó hiányzik a mondásból? ..., mint a fekekötő. ",          //66
        answers: ["iszik", "alszik", "mászik", "eszik"],
        correctAnswer: 0
    },
    {
        question: "Milyen égtáj NEM létezik?",
        answers: ["Délkelet", "Északkelet", "Keletnyugat", "Északnyugat"],           //67
        correctAnswer: 2
         
    },
    {
        question: "Mi az euró váltópénze?",            //68
        answers: ["Kopejka", "Penny", "Centime", "Cent"],
        correctAnswer: 3
    },
    {
        question: "Hány darab egy tucat ?",                //69
        answers: ["10", "12", "8", "14"],  
        correctAnswer: 1,
         
    },
    {
        question: "Mi történik azzal/mit csinál az aki akklimatizálódik ?",
        answers: ["fontoskodik", "elutazik", "megkomolyodik", "beilleszkedik"],                //70
        correctAnswer: 3
    },
    {
        question: "Az alábbi párosol közül melyik két karakter NEm kapcsolódik egymáshoz?",
        answers: ["Aladdin és Jázmin", "Stewie és Brian Griffin", "Han Solo és Leila hercegnő", "Micimackó és Bagira"],            //71
        correctAnswer: 3,  
    },
    {
        question: "Milyen rokoni kapcsolatban áll velem az egyik szülőm testvérének a gyermeke?",
        answers: ["nagybácsi/néni", "féltestvér", "unokatestvér", "mostohatestvér"],                //72
        correctAnswer: 2
    },
    {
        question: "Melyik szó jelentése 'átlós' ?",    //73
        answers: ["diagonális", "horizontális", "centrális", "vertikális"],
        correctAnswer: 0, 
    },
    {
        question: "Hány kereke van 3 monociklinek?",
        answers: ["3", "6", "9", "12"],      //74
        correctAnswer: 0,
    },
    {
        question: "Melyik létező római számjegy?",
        answers: ["I", "E", "A", "O"],        //75
        correctAnswer: 0,
          
    },
    {
        question: "Hány éves a Norvég Király ?",         //76
        answers: ["60", "92", "87", "66"],
        correctAnswer: 2
    },
    {
        question: "Hányszor kell megsebezni az enemyt hogy procoljon az electrocute?",      //77   af saevs
        answers: ["7", "3", "1", "2"],
        correctAnswer: 1
    },
    {
        question: "Hány gomb volt az 'adott' oldalon?",
        answers: ["18421", "11510", "15230", "15710"],   //78
        correctAnswer: 3
    },
    {
        question: "Melyik évben történt a Chernobyli katasztrófa?",      //79
        answers: ["1980", "1986", "1991", "1979"],
        correctAnswer: 1 
    },
    {
        question: "Melyik sportágban van a 'Grand Slam' kifejezés?",       //80
        answers: ["Kosárlabda", "Tenisz", "Labdarúgás", "Krikett"],
        correctAnswer: 1
    },
    {
        question: "Mi volt Albert Einsteinutols szava ?",
        answers: ["„A tudás nem mindíg hatalom”", "„Csak a vak fél a sötéttől amit hátrahagy”", "„Oh igen, már látom”", "Nem tudom"],     //81
        correctAnswer: 3,
    
    },
    {
        question: "Melyik meséből származik Flint Lockwood?",
        answers: ["Lecsó", "Derült égből fasírt", "A szárított gyümölcsök támadása", "Csibe joe"],     //82
        correctAnswer: 1,
        image:"https://vignette.wikia.nocookie.net/the-secret-world-of-the-animated-characters/images/4/4e/-1403110647.jpg/revision/latest?cb=20140618165727"
    },
    {
        question: "Melyik nép ünnepli a Diwali-t?", 
        answers: ["Kínai", "Japán", "Indiai", "Olasz"],        //83
        correctAnswer: 2
    },
    {
        question: "Az alábbi filmek közül melyikben NEM játszott Adam Sandler?",                           //84
        answers: ["Ne szórakozz zohánnal", "Pancserock", "Amerikai Pite", "Pixel"],
        correctAnswer: 2,
        image:"kep/adam.png"
    },
    {
        question: "Ki ő?",
        answers: ["Eli Vence", "Denzel Washington", "Samuel L. Jackson", "Morgan Freeman"],             //85
        correctAnswer: 3,
        image:"https://www.mafab.hu/static/profiles/2014p/293/04/272517_78.jpg"
    },
    {
        question: "Hol játszák Karma-t?",
        answers: ["Mid/Support/Top", "Jungle/Top", "ADC", "Top"],           //86
        correctAnswer: 0
    },
    {
        question: "Melyik CSGO map látható a képen ?",
        answers: ["Vertigo", "Overpass", "Dust2", "Office"],          //87
        correctAnswer: 3,
        image:"https://steamuserimages-a.akamaihd.net/ugc/789759519706418721/6A7954A84A888AEF83D5104AF005D9BD56EE9D69/"
    
    },
    {   
        question: "Melyik ország híres a tulipánjairól?",          //88
        answers: ["Hollandia", "Belgium", "Franciaország", "Olaszország"],
        correctAnswer: 0
    },
    {
        question: "Ki volt a híres amerikai polgárjogi aktivista, aki az 'Álmom van' beszédet mondta?",
        answers: ["Rosa Parks", "Malcolm X", "Martin Luther King Jr.", "Protkó"],           //89
        correctAnswer: 2
         
    },
    {
        question: "Melyik disney mese hercegnő ő ?",            //90
        answers: ["Raya", "Rapunzel", "Tiana", "Mulan"],
        correctAnswer: 2,
        image: "https://d2j6dbq0eux0bg.cloudfront.net/images/27404195/1446231333.jpg"
    },
    {
        question: "Mi a legnagyobb ismert élőlény a Földön?",                //91
        answers: ["Mammutfenyő", "Zsiráf", "Trópusi fa", "Óriás fűzfa"],  
        correctAnswer: 0,
         
    },
    {
        question: "Ki volt a híres angol író, aki a 'Pride and Prejudice' című könyvet írta?",
        answers: ["Jane Austen", "Emily Brontë", "Charles Dickens", "Virginia Woolf"],                //92
        correctAnswer: 0,
    },
    {
        question: "Ki ő ?",
        answers: ["Adriana Lima", "Palvin Barbara", "Irina Shayk", "Faragó Titanilla"],            //93
        correctAnswer: 1,
        image: "https://www.thefamouspeople.com/profiles/images/barbara-palvin-4.jpg",  
    },
    {
        question: "Ki ő ?",
        answers: ["Yeti", "Mike Wazowski", "Sullivan", "Randall Boggs"],                //94
        correctAnswer: 2,
        image:"https://tse2.mm.bing.net/th?id=OIP.oe5ygV_YmSjZl6Gg5kD01wHaI4&pid=Api&P=0&h=220"
    },
    {   
        question: "Ki volt a római istenek főnöke?",          //94
        answers: ["Jupiter", "Mars", "Apolló", "Neptunus"],
        correctAnswer: 0
    },
    {
        question: "Melyik növény adja a vaníliát?",
        answers: ["Levendula", "Rózsa", "Vaníliaorchidea", "Káposzta"],           //95
        correctAnswer: 2
         
    },
    {
        question: "Mi a neve a következő lénynek?",            //96
        answers: ["Kékszemű hósárkány", "Sky Dragon", "Ice Dragon", "Hószemű Kéksárkány"],
        correctAnswer: 0,
        image:"https://wallpapercave.com/wp/wp2772474.jpg"
    },
    {
        question: "Milyen nyelven beszélnek az emberek Argentínában ?",                //97
        answers: ["Argentín", "Portugál", "Spanyol", "Angol"],  
        correctAnswer: 2,
         
    },
    {
        question: "Milyen színű a híres 'Psychedelic' díszítésű brit autó?",
        answers: ["Többszínű", "Kék", "Fekete", "Fehér"],                //98
        correctAnswer: 0,
    },
    {
        question: "Melyik sportágban versenyeznek a Tour de France során ?",
        answers: ["Futball", "Kerékpározás", "Úszás", "Tenisz"],            //99
        correctAnswer: 1,
    },
    {
        question: "Hány epizódos a legelső Yu-Gi-Oh! (2004-ben megjelent)?",
        answers: ["32EP", "8EP", "224EP", "112EP"],                //100
        correctAnswer: 2
    },
];

questions = removeDuplicates(questions);

let currentQuestionIndex = 0;
let lives = 3; 

function startGame() {
    currentQuestionIndex = 0; 
    shuffleQuestions(questions); 
    kerdesekmegjelen();
    updateLives(); 
}

function removeDuplicates(array) {
    const uniqueQuestions = [];
    const seenQuestions = new Set();

    array.forEach(questionObj => {
        if (!seenQuestions.has(questionObj.question)) {
            uniqueQuestions.push(questionObj);
            seenQuestions.add(questionObj.question);
        }
    });

    return uniqueQuestions;
}

function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

function kerdesekmegjelen() {
    if (currentQuestionIndex >= questions.length) {
        ujjatek();
        return;
    }

    const questionElement = document.getElementById("question");
    const questionNumberElement = document.getElementById("questionNumber");
    const answerElements = [
        document.getElementById("answer0"),
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
    ];
    const imageElement = document.getElementById("questionImage");

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    questionNumberElement.innerText = `Kérdés ${currentQuestionIndex + 1} / ${questions.length}`;

    
    if (currentQuestion.image) {
        imageElement.src = currentQuestion.image;
        imageElement.style.display = "block";
    } else {
        imageElement.style.display = "none";
    }

    currentQuestion.answers.forEach((answer, index) => {
        const element = answerElements[index];
        element.innerText = answer;
        element.classList.remove("correct", "incorrect");
        element.style.pointerEvents = "auto";
        element.style.backgroundColor = "#ff00dd84";
        element.style.border = "5px ridge rgb(157, 72, 225)";
        element.style.display = "block";

        element.onclick = () => {
            checkAnswer(index);
        };
    });
}

function checkAnswer(selectedAnswerIndex) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;
    const answerElements = [
        document.getElementById("answer0"),
        document.getElementById("answer1"),
        document.getElementById("answer2"),
        document.getElementById("answer3"),
    ];

    answerElements.forEach(element => {
        element.style.pointerEvents = "none";
    });

    if (selectedAnswerIndex === correctAnswer) {
        document.getElementById(`answer${selectedAnswerIndex}`).style.backgroundColor = "limegreen";
        if (currentQuestionIndex === questions.length - 1) {
            endGame(true); 
        } else {
            setTimeout(() => {
                currentQuestionIndex++;
                kerdesekmegjelen();
            }, 1000);
        }
    } else {
        document.getElementById(`answer${selectedAnswerIndex}`).style.backgroundColor = "red";
        lives--; 
        updateLives(); 
        if (lives <= 0) {
            endGame(false); 
        } else {
            setTimeout(() => {
                currentQuestionIndex++;
                kerdesekmegjelen();
            }, 1000);
        }
    }
}

function updateLives() {
    const lifeElements = [
        document.getElementById("life1"),
        document.getElementById("life2"),
        document.getElementById("life3"),
    ];

    lifeElements.forEach((element, index) => {
        if (index < lives) {
            element.style.display = "inline"; 
        } else {
            element.style.display = "none"; 
        }
    });
}

function endGame(won) {
    if (won) {
        window.location.href = "gratulation.html";
    } else {
        window.location.href = "loser.html"; 
    }
}

function ujjatek() {
    lives = 3; 
    currentQuestionIndex = 0;
    startGame();
}

window.onload = function () {
    startGame(); 
};
