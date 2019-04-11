'use strict';

var rubriques = [{
    title : '1ère journée', 
    gazette : 'Tres belle première journée, le promu Burek Sa Sirom arrache le point du match nul face à l’expérimenté Mr tu Connais, grâce à sont très bon mercato hivernal. Malgré sa force offensive impressionnante, La Lorraine est Grenat est stoppée dès la première journée par tes fessées et son son duo d’attaque d’une efficacité clinique. Quant à elle, l’Ohèèème sécurise les 3 points face au RC Strasbourg-Palette, bien parti pour être la lanterne rouge de cette édition. Enfin, le Dinamo Sveti Stjepan atomise l’AMD Football Club pour se placer en première place de la Ligue, place qu’il ne devrait logiquement plus quitter jusqu’à la fin du championnat.'},
{
    title : '2ème journée',
    gazette : 'A cause d’un problème d’impression, la gazette MPG n’est publiée qu’aujourd’hui. Veuillez nous en excuser. Au programme le week end dernier, le Tes Fessées a mangé le promu burek sa sirom sur un but de Thauvin et Bahoken, et ce malgré l’utilisation du bonus Zahia pour ce dernier. Sans doute le manque d’expérience de l’élite. L’Ohèèème poursuit tranquillement sa série, en allant gagner d’une courte tête chez Mr. Tu Connais. Il faudra encore compter sur l’Ohèèème cette année messieurs. La Lorraine est Grenat se débarrasse facilement de l’AMD FC et son banc trop peu fourni. Enfin le Dinamo Sveti Stjepan reste invaincu grâce à cette superbe victoire 2-1 sur le RCSBP (avec tout de même un but de Oudin, et un but MPG de Ocampos). Le DSS reste donc 1er de la Ligue et affrontera LLG ce week end, ce qui sera sans doute le choc du week end, à suivre dimanche soir à 21h sur A1.'
},
{
    title : '3ème journée',
    gazette : 'Lendemain de défaite difficile pour le Dinamo Sveti Stjepan, qui perd sa place de leader pour la première fois de la saison. L’affiche du week end a tenu toutes ses promesses notamment grâce à 2 magnifiques doublés de Mbappé et Oudin, mais ce diable de Gelson Martins a clos le score en faveur de LLG. L’Ohèèème s’empare de la première place grâce à une valise superbement utilisée (et un très bon mercato hivernal) face au tes fessées. La direction du tes fessées a déjà posé un ultimatum à l’entraîneur après avoir engrangé seulement 4 points en 3 journées, bilan beaucoup trop maigre par rapport à l’ambition européenne que s’est fixé le club en début de saison. 1er point engrangé pour l’AMD Football Club au terme d’un match très disputé contre Burek sa sirom, le promu a décidément du mal à décoller, et réalise des matchs plutôt flap-flap. La direction de Burek sa sirom recherche déjà un successeur à Julien Duval, trop inexpérimenté, mais le manque de moyens financiers empêche les dirigeants de rêver. Enfin, le RCSP connaît sa première victoire grâce à un match maîtrisé face à Mr Tu Connais. La victoire a été fêtée comme il se doit, d’après les tabloïds strasbourgeois, l’entraîneur Julien Gesthieumeroihjleerwexiouedsjllererr à été retrouvé ce matin inerte, sur un banc du centre ville.'
},
{
    title : '4ème journée',
    gazette : 'Quelle journée de football messieurs! À commencer par la large victoire de LLG face à une piètre équipe du RCSBP, dépassée sur tous les plans de jeu. Elle se rassurera comme elle peut avec ce but MPG de Sanson, qui sauve les meubles. Ce dernier voit la zone rouge se rapprocher, tandis que LLG s’empare de la première place du classement. Tandis que le tef coule, le tes fessées, lui, s’envole et corrige Mr. Tu Connais, avec à noter un but de Dossevi, qui en soit est une performance et constitue un motif de victoire. Mr. Tu Connais est bon dernier avec un seul point en 4 matches et la pire différence de buts de la ligue. Le tes fessées réalise lui une très belle opération et monte sur la troisième marche du podium. L’expérimenté Dinamo Sveti Stjepan est freiné par le promu Burek Sa Sirom, dans un match que Pierre Menés aurait qualifié de nul à chier (1-1 avec un csc, bref un bon match de merde). Enfin, terrible désillusion pour l’Ohèèème, qui pensait avoir fait le plus dur après ce but de Ballotelli, mais c’était sans compter le doublé de Dembelé et la superbe valise utilisée par l’AMD football club, qui en profite pour signer sa première victoire de la saison. Merci messieurs, et rendez-vous ce week-end pour la 5ème journée de cette passionnante Ligue des Champions du Monde.'
},
{
    title : '5ème journée',
    gazette : 'Mais que cette Ligue est passionnante messieurs. Rebondissements, suspens, remontadas, il y aura eu de tout ce week end. À commencer par cet incroyable et passionnant 0-0, offert encore une fois par Burek Sa Sirom (un peu à l’image de son week end donc). Toujours aucune victoire pour ce dernier. Pendant ce temps, LLG perd sa place de leader au profit de l’Ohèèème, qui se défait du Dinamo Sveti Stjepan (putain Flo je sais pas comment t’as fait pour le gagner celui là j’ai la haine le lundi matin mais nique sa mère putain). La course à la première place est passionnante avec les 3 premières équipes qui se tiennent en seulement 2 points. Le Tes Fessées s’est effectivement débarrassé facilement du RCSBP, malgré un but de ce fdp de lyonnais de Briand. Enfin, LE match prolifique du week end nous est offert par Mr Tu Connais et l’AMD FC. Un superbe 3-3, mais les 2 équipes n’arriveront pas à se départager. Mr Tu Connais reste bon dernier avec seulement 2 points glanés. A suivre le week end prochain: l’affrontement au sommet entre LLG et l’Ohèèème (allez les gars faites nous un bon match nul histoire qu’il reste un peu de suspens).'
},
{
    title : '6ème journée',
    gazette : 'Il s’en est passé des choses ce week-end. Marche pour le climat, gilets jaunes, Macron qui s’adjuge 24h de repos au ski. Mais tout ça on s’en branle, parce que c’est en Ligue des Champions du Monde qu’il y a eu du spectacle. À commencer par Mr Tu Connais détruit, humilié, exterminé, anéanti, liquidé, supprimé, massacré, ravagé, étouffé, dissout, écrasé, annihilé, brisé, pulvérisé, ruiné, bousillé, dévasté par le Dinamo Sveti Stjepan, beaucoup trop fort, brillant, éblouissant, éclatant, resplendissant, talentueux, vigoureux. C’est encore une fois l’inévitable Oudin qui avait scoré, but auquel ce sont ajoutées 3 petites pépites MPG. Le DSS remonte sur la 3ème marche du podium, tandis que Mr Tu Connais encaisse sa plus grosse défaite de la saison, mais surtout sa 4ème défaite en 6 journées, et toujours aucune victoire... L’AMDFC s’impose lourdement face au Tes Fessées, celle là on l’avait pas vu venir. Un 4-1 sans utiliser aucun bonus, c’est propre, c’est solide, bravo. Il faudra décidément se méfier de l’AMDFC dans la course à la 2ème ou 3ème place. Il est l’archétype de l’équipe qui se qualifie de justesse pour une Coupe d’Europe pour ensuite être éliminé au 6eme match de poule, sur un csc litigieux à la 95eme, en décembre, sous -20 degrés en Russie. LA surprise du week end nous vient du promu Burek Sa Sirom, qui s’impose tranquillement face à l’expérimenté mais malchanceux RCSBP (et hop une petite valise!). Première victoire de la saison pour BSS, qui est sur une très belle série sans défaite  (3 matchs nuls et 1 victoire) et revient à 3 points seulement du podium. Le RCSBP, quant à lui, dégringole dans les bas fonds du classement, il n’a pas pris 1 point depuis 3 journées. Espérons pour lui que les blessés reviennent vite. Enfin, l’affiche du week-end n’a pas déçue et nous a offert un suspens haletant, avec à la fin une victoire de l’Ohèèème sur le fil grâce à son supersub ROOOOOOOBEEEEEEERT BEEEEERIIIIIIIIIĆ. LALALALALALALAAAAAAAA ROOOOOOOOBEEEEEERT BEEEEERIIIIIIIIIĆ, LALALALALALALAAAAAAAA ROOOOOOOOBEEEEEEERT BEEEEEEERIIIIIIIIĆ. L’Ohèèème s’envole en tête du classement, prenant 4 points d’avance sur son poursuivant. Pour le champion en titre LLG, la saison s’annonce plus compliquée que prévue, il subit là sa première défaite et voit le DSS et le tes fessées se rapprocher dangereusement (les 3 équipes se tiennent en seulement 1 point). A noter qu’avec cette victoire l’Ohèèème récupère le précieux, mais bon ça c’est pareil tout le monde s’en branle. Tout repose sur Burek Sa Sirom le week end prochain, pour relancer un peu de suspens dans la Ligue des Champions du Monde.'
},
{
    title : '7ème journée',
    gazette : 'Les journées se suivent et ne se ressemblent pas en Ligue des Champions du Monde. Ce week-end nous a encore offert des frissons, des larmes (de joie ou de déception), du suspens, et bien évidemment du spectacle. À commencer par cet INCROYABLE 0-0 entre le RCSBP et l’AMDFC, à couper le souffle. C’est une boutade évidemment, rien à se mettre sous la dent, à part ce superbe coup de maître du coach Miller, plaçant Da Costa (auteur d’un doublé) sur le banc. On repassera donc pour le spectacle. Au classement, l’AMDFC reste dans le ventre mou, mais devra encore batailler pour éviter la relégation, tandis que le RCSBP réalise une très mauvaise opération et se retrouve lanterne rouge. Mais bon, Neymar retrouvera bientôt la compétition (LOOOOOL). La bataille des mal classés s’annonce bien plus passionnante que celle du titre. L’Ohèèème s’est imposé tranquillement à domicile contre Burek Sa Sirom, qui malgré un but sauvant les apparences, n’a jamais vraiment existé dans les duels. Non, miser sur un triplé de Mollet n’est pas une bonne stratégie. L’Ohèèème a désormais 5 points d’avance sur son poursuivant, et à le temps de voir venir. À ce rythme là, l’Ohèèème sera champion à 10 journées de la fin, et se fera éliminer en 8èmes de finale de LdC l’année prochaine. La surprise du week-end nous vient de Mr Tu Connais, qui obtient sa première victoire de la saison, 2-0, face à LLG, à la lutte pour le podium. Une valise superbement utilisée couplée à un but MPG de ce bon vieux Hilton, terminé, merci messieurs. Mr Tu Connais quitte enfin la dernière place du classement, tandis que LLG perd sa place de dauphin, au profit du Tes Fessées. Enfin, terrible désillusion pour le Dinamo Sveti Stjepan, qui après avoir mené 2-0, se fait rattraper pour perdre 4-3 sur le fil. Prendre 3 buts MPG, que le football est cruel. Les joueurs et les supporters sont abattus. Les dirigeants ont posé un ultimatum à l’entraîneur, qui ne remplit clairement pas les objectifs fixés en début de saison. Le match de ce week end face à l’AMDFC sera déterminant dans cette reconquête. Le match à suivre du week end sera le déplacement de LLG sur la pelouse du Tes Fessées. La chance sourira t-elle encore au Tes Fessées ? Éric s’il te plaît encule le.'
},
{
    title : '8ème journée',
    gazette : 'Superbe acte VIII de la Ligue des Champions du Monde ce week-end, qui restera sans conteste celui de la révolte des mal classés. Performance historique de Mr Tu Connais, qui inflige une manita à Burek Sa Sirom. Mr Tu Connais enchaîne donc avec une 2ème victoire d’affilée et est bien parti pour se sauver. Le plan mis en place par Totodej en début de saison semble désormais porter ses fruits, les joueurs sont en confiance et les résultats sont là. Les Caraï United do Portugal (les ultras du club) ont même envahi la pelouse pour célébrer la plus grosse victoire de l’histoire du club. Quant à Burek Sa Sirom, il retrouve sa place de dernier du classement (a cause d’une différence de but qui ferait même pâlir Guingamp). Malheureusement pour les dirigeants, le changement de coach opéré lors du dernier mercato n’a rien changé, ce dernier semble sans solutions. Soyons tout de même indulgents avec coach Duval, qui n’effectue que sa première saison dans l’élite. LA surprise du week-end, le tremblement de terre dans le monde du football, le coup de théâtre dans cette Ligue, l’incroyable retournement de situation, le tournant de ce championnat, c’est la victoire du RCSBP face au leader. La rigueur tactique de coach Hër Gerhüstraminër a fait mouche, une victoire étriquée, 1-0, grâce à une défense de fer (une valise encore une fois magnifiquement utilisée, et le premier but de Dante de la saison). Le RCSBP quitte la dernière place du classement, mais reste tout de même avant dernier, à égalité de points avec BSS. Ce dernier se consolera tout de même en récupérant le précieux (non j’déconne on s’en bat les couilles c’est de la merde). L’Ohèèème reste leader mais voit les poursuivants se rapprocher. Ce diable de Tes Fessées que plus rien ni personne ne semble arrêter. Après avoir terrassé le Dinamo Sveti Stjepan le week end dernier, il enchaîne et bat 1-0 à domicile LLG. Très bonne série pour le Tes Fessées contre des concurrents directs. À noter la victoire du Tes Fessées tout en encaissant une valise, bravo coach Konton. Néanmoins, soyons objectifs, le Tes Fessées jouit d’une chance de cocu (nous ne reparlerons pas du match de la semaine dernière), et affronte LLG lorsque Mbappé est sur le banc, Gelson Martins est muet, et Fekir est absent. Cette citation d’un grand penseur de notre temps résume parfaitement ce que tout le monde pense du Tes Fessées: “La manière dont tu comptes en dit long sur c’que t’as brassé, la manière dont tu pompes en dit long sur c’que t’as sucé”. Enfin, le DSS nous a encore réservé du spectacle ce week-end. Le coach jouait gros après l’énorme déconvenue du week-end dernier. Sa tactique était parfaite, les joueurs étaient impliqués, mais cela n’a pas suffit pour s’imposer, et le DSS repart seulement avec le point du match nul. 3 buts MPG, c’est le tarif habituel pour le DSS. Ce match nul permet tout de même au DSS de se hisser sur la 3ème marche du podium, à égalité avec LLG mais avec une différence de buts favorable. C’est donc la crise du côté du LLG. Le champion en titre qui se retrouve quatrième (même pas européen). Les tabloïds prédisent déjà un changement d’entraîneur avant la prochaine journée. En tout cas, coach flapflap devra prouver qu’il mérite sa place dès le week end prochain face à l’AMDFC. Le Tes Fessées enchaînera t-is avec sa chance de cocu ? Le DSS prendra t-is encore 3 buts MPG ? L’Ohèèème conservera t-il sa place de leader ? Burek Sa Sirom se sauvera t-il ? Rendez-vous le week-end prochain pour encore plus de spectacle.'
}];

var teams = [
    {name: 'Julien Duval', image: 'images/duval.png', player: 'Burak sa siron', stade: 'Le Four', gardiens: [{name: 'Subasic', club: 'Monaco'}, {name: 'Maignan', club: 'Lille'}, {name: 'Koffi', club: 'Lille'}], defenseurs: [{name: 'Fabio', club: 'Nantes'}, {name: 'Thomas', club: 'Angers'}, {name: 'Mendy', club: 'Lyon'}, {name: 'Suárez', club: 'Montpellier'}, {name: 'Pablo', club: 'Bordeaux'}, {name: 'Dubois', club: 'Lyon'}, {name: 'Abdelhamid', club: 'Reims'}, {name: 'Debuchy', club: 'Saint-Etienne'}, {name: 'Gelin', club: 'Rennes'}],milieux: [{name: 'NDombele', club: 'Lyon'}, {name: 'Rabio', club: 'Paris'}, {name: 'Fofana', club: 'Strasbourg'}, {name: 'Jonathan Ikone', club: 'Lille'}, {name: 'Thiago Maia', club: 'Lille'}, {name: 'Skhiri', club: 'Montpellier'}, {name: 'Mollet', club: 'Montpellier'}, {name: 'Tait', club: 'Angers'}, {name: 'Prcic', club: 'Strasbourg'}], attaquants: [{name: 'Rafael Leão', club: 'Lille'}, {name: 'Depay', club: 'Lyon'}, {name: 'Said', club: 'Dijon'}, {name: 'Roux', club: 'Guimgamp'}, {name: 'Jordan Siebatcheu', club: 'Rennes'}]},
    {name: 'Julien Geltzenlichter', image: 'images/julien.png', player: 'RC Stras-Bourg-Palette', stade: 'Bobo',gardiens: [{name: 'Kawashima', club: 'Strasbourg'}, {name: 'Kamara', club: 'Strasbourg'}, {name: 'Koubek', club: 'Rennes'}, {name: 'Diallo', club: 'Rennes'}, {name: 'Badiashile', club: 'Rennes'}], defenseurs: [{name: 'Glik', club: 'Monaco'}, {name: 'Fontaine', club: 'Reims'}, {name: 'Aguilar', club: 'Montpellier'}, {name: 'Pallois', club: 'Nantes'}, {name: 'Baysse', club: 'Caen'}, {name: 'Dante', club: 'Nice'}, {name: 'Denayer', club: 'Lyon'}, {name: 'Engels', club: 'Reims'}, {name: 'Koundé', club: 'Bordeaux'}],milieux: [{name: 'Martin', club: 'Strasbourg'}, {name: 'Bourigeaud', club: 'Rennes'}, {name: 'Rony Lopes', club: 'Monaco'}, {name: 'Grenier', club: 'Rennes'}, {name: 'M\'Vila', club: 'Saint Etienne'}, {name: 'Sanson', club: 'Marseille'}, {name: 'Luiz Gustavo', club: 'Marseille'}], attaquants: [{name: 'Neymar', club: 'Paris'}, {name: 'Mothiba', club: 'Strasbourg'}, {name: 'Briand', club: 'Bordeaux'}, {name: 'Diony', club: 'Saint Etienne'}]},
    {name: 'Florian Servant', image: 'images/florian.png', player: 'Ohèèème', stade: 'stadion u Marseilleu', gardiens: [{name: 'Sels', club: 'Strasbourg'}, {name: 'Mandanda', club: 'Marseille'}], defenseurs: [{name: 'Landre', club: 'Nîmes'}, {name: 'Pavlovic', club: 'Angers'}, {name: 'Le Tallec', club: 'Montpellier'}, {name: 'Zeki Çelik', club: 'Lille'}, {name: 'Subotic', club: 'Saint Etienne'}, {name: 'Oyongo', club: 'Montpellier'}],milieux: [{name: 'Sissoko', club: 'Strasbourg'}, {name: 'Bamba', club: 'Lille'}, {name: 'Boschilia', club: 'Nantes'}, {name: 'Thomasson', club: 'Strasbourg'}, {name: 'Capelle', club: 'Angers'}, {name: 'Cafaro', club: 'Reims'}], attaquants: [{name: 'Suk Hyun-Jun', club: 'Reims'}, {name: 'Balotelli', club: 'Marseille'}, {name: 'Cavani', club: 'Paris'}, {name: 'Kamano', club: 'Bordeaux'}, {name: 'Beric', club: 'Saint Etienne'}]},
    {name: 'Quentin Isach', image: 'images/quentin.png', player: 'tes fessées', stade: 'nothing to loose', gardiens: [{name: 'Anthony Lopes', club: 'Lyon'}, {name: 'Gorgelin', club: 'Lyon'}, {name: 'Ruffier', club: 'Saint Etienne'}], defenseurs: [{name: 'Thiago Silva', club: 'Paris'}, {name: 'Rami', club: 'Marseille'}, {name: 'Perrin', club: 'Saint Etienne'}, {name: 'Jullien', club: 'Toulouse'}, {name: 'Marcelo', club: 'Lyon'}, {name: 'Amian', club: 'Toulouse'}, {name: 'Kehrer', club: 'Paris'}, {name: 'Hamari Traoré', club: 'Rennes'}, {name: 'Gabriel Silva', club: 'Saint Etienne'}],milieux: [{name: 'Thauvin', club: 'Marseille'}, {name: 'Dossevi', club: 'Toulouse'}, {name: 'Sankharé', club: 'Bordeaux'}, {name: 'Sangaré', club: 'Toulouse'}, {name: 'Rongier', club: 'Nantes'}, {name: 'Thiago Mendes', club: 'Lille'}, {name: 'Cyprien', club: 'Nice'}, {name: 'Lienard', club: 'Strasbourg'}], attaquants: [{name: 'Bahoken', club: 'Angers'}, {name: 'Falcao', club: 'Monaco'}, {name: 'Laborde', club: 'Montpellier'}, {name: 'Ripart', club: 'Nîmes'}, {name: 'Kalifa Coulibaly', club: 'Nantes'}, {name: 'Kalu', club: 'Bordeaux'}]},
    {name: 'Eric Thomas', image: 'images/eric.png', player: 'La Lorraine est Grenat', stade: 'Nancy crevards Arena', gardiens: [{name: 'Carrasso', club: 'Reims'}, {name: 'Mendy', club: 'Reims'}], defenseurs: [{name: 'Ballo-Toure', club: 'Monaco'}, {name: 'Shoji', club: 'Toulouse'}, {name: 'Djiku', club: 'Caen'}, {name: 'Soumaoro', club: 'Lille'}, {name: 'Sidibe', club: 'Monaco'}, {name: 'Jemerson', club: 'Monaco'}],milieux: [{name: 'Sliti', club: 'Dijon'}, {name: 'Fajr', club: 'Caen'}, {name: 'Eysseric', club: 'Nantes'}, {name: 'Aouar', club: 'Lyon'}, {name: 'Lopez', club: 'Marseille'}, {name: 'Golovin', club: 'Monaco'}], attaquants: [{name: 'Majeed Waris', club: 'Nantes'}, {name: 'Gradel', club: 'Toulouse'}, {name: 'Mbappé', club: 'Paris'}, {name: 'Fekir', club: 'Lyon'}, {name: 'Gelson Martins', club: 'Monaco'}, {name: 'Grandsir', club: 'Strasbourg'}]},
    {name: 'Miller Djiofack', image: 'images/miller.png', player: 'AMD FOOTBALL CLUB', stade: 'Arena', gardiens: [{name: 'Areola', club: 'Paris'}, {name: 'Buffon', club: 'Paris'}], defenseurs: [{name: 'Dani Alves', club: 'Paris'}, {name: 'Kimpembe', club: 'Paris'}, {name: 'Marquinhos', club: 'Paris'}, {name: 'Bernat', club: 'Paris'}, {name: 'Koné', club: 'Strasbourg'}, {name: 'Congré', club: 'Montpellier'}],milieux: [{name: 'Draxler', club: 'Paris'}, {name: 'Paredes', club: 'Paris'}, {name: 'Verrati', club: 'Paris'}, {name: 'Di María', club: 'Paris'}, {name: 'Fàbregas', club: 'Monaco'}, {name: 'Choupo-Moting', club: 'Paris'}, {name: 'Hamouma', club: 'Saint Etienne'}, {name: 'Tameze', club: 'Nice'}, {name: 'Nkunku', club: 'Paris'}, {name: 'Kwon Chang-Hoon', club: 'Dijon'}, {name: 'Sarr', club: 'Marseille'}], attaquants: [{name: 'Niang', club: 'Rennes'}, {name: 'Sanogo', club: 'Toulouse'}, {name: 'Thuram', club: 'Guimgamp'}, {name: 'Dembele', club: 'Lyon'}, {name: 'Ganago', club: 'Nice'}, {name: 'Cornet', club: 'Lyon'}, {name: 'Nuno da Costa', club: 'Strasbourg'}, {name: 'Cornelius', club: 'Bordeaux'}]},
    {name: 'Thomas Dejardins', image: 'images/thomas.png', player: 'Mr Tu Connais', stade: 'Bravo TotoDej', gardiens: [{name: 'Bernardoni', club: 'Nîmes'}, {name: 'Valette', club: 'Nîmes'}], defenseurs: [{name: 'José Fonte', club: 'Lille'}, {name: 'Hilton', club: 'Montpellier'}, {name: 'Briancon', club: 'Nîmes'}, {name: 'Amavi', club: 'Marseille'}, {name: 'Martinez', club: 'Strasbourg'}, {name: 'Pedro Mendes', club: 'Montpellier'}],milieux: [{name: 'Khazri', club: 'Saint Etienne'}, {name: 'Xeka', club: 'Lille'}, {name: 'Adrien Silva', club: 'Monaco'}, {name: 'Ben Arfa', club: 'Rennes'}, {name: 'Gnahore', club: 'Amiens'}, {name: 'Payet', club: 'Marseille'}], attaquants: [{name: 'Pepe', club: 'Lille'}, {name: 'Ajorque', club: 'Strasbourg'}, {name: 'Traoré', club: 'Lyon'}, {name: 'Thioub', club: 'Nîmes'}]},
    {name: 'Baptiste Liguori', image: 'images/baptiste.png', player: 'Dinamo Sveti Stjepan', stade: 'Geoffroy Guichardovic', gardiens: [{name: 'Boucher', club: 'Angers'}, {name: 'Butelle', club: 'Angers'}], defenseurs: [{name: 'Meunier', club: 'Paris'}, {name: 'Lala', club: 'Strasbourg'}, {name: 'Kolodziejczak', club: 'Saint Etienne'}, {name: 'Da Silva', club: 'Rennes'}, {name: 'Atal', club: 'Nice'}, {name: 'Traoré', club: 'Angers'}],milieux: [{name: 'Chambost', club: 'Saint Etienne'}, {name: 'Oudin', club: 'Reims'}, {name: 'Coco', club: 'Guimgamp'}, {name: 'Saint-Maximin', club: 'Nice'}, {name: 'Cabella', club: 'Saint Etienne'}, {name: 'Benkhedim', club: 'Saint Etienne'}, {name: 'Ocampos', club: 'Marseille'}], attaquants: [{name: 'Delort', club: 'Montpellier'}, {name: 'Sarr', club: 'Rennes'}, {name: 'Casimir Ninga', club: 'Caen'}, {name: 'Júlio Tavarez', club: 'Dijon'}, {name: 'Remy', club: 'Lille'}]}
]

var menu = [{name: 'Gazettes', liClass: 'gazettes'},
        {name: 'Participants', liClass: 'participants'}, 
        {name: 'Equipes', liClass: 'equipes'}, 
        {name: 'Classement', liClass: 'classement'}
    ];

var showNavBar = document.querySelector('nav ul');
for(var i = 0; i < menu.length; i++){
    showNavBar.innerHTML += '<li class="' + menu[i].liClass + '">' + menu[i].name + '</li>';
}

var show = document.querySelector('.show');
var showParticipants = document.querySelector('.showParticipants');
var showClassement = document.querySelector('.showClassement');
var showEquipes = document.querySelector('.showEquipes');
var gazettes = document.querySelector('.gazettes');
var participants = document.querySelector('.participants');
var equipes = document.querySelector('.equipes');
var classement = document.querySelector('.classement');
var selectTeam = document.querySelector('.showEquipes .dropDownList');
var showTable = document.querySelector('.showEquipes table tbody');
var showName = document.querySelector('.showName');


gazettes.addEventListener('click', news);
function news(){
    show.style.display = 'block';
    showParticipants.style.display = 'none';
    showEquipes.style.display = 'none';
    showClassement.style.display = 'none';
    show.innerHTML = '';
    window.scrollTo(500, 0);

    if(rubriques[0].title === '1ère journée'){
        rubriques = rubriques.reverse();
    }
    for(var i = 0; i < rubriques.length; i++){
        show.innerHTML += '<section><h3>' + rubriques[i].title + '</h3><p>' + rubriques[i].gazette + '</p></section>' ;
    }
}
news();

participants.addEventListener('click', users);
function users(){
    show.style.display = 'none';
    showParticipants.style.display = 'flex';
    showEquipes.style.display = 'none';
    showClassement.style.display = 'none';
    showParticipants.innerHTML = '';
    window.scrollTo(500, 0);

    for(var i = 0; i < teams.length; i++){
        showParticipants.innerHTML += '<div class="players"><img src="' + teams[i].image + '"><p>' + teams[i].name + '</p><p>' + teams[i].player + '</p><button data-user="' + teams[i].player + '">Effectif</button></div>';
    }

    var buttons = document.querySelectorAll('.showParticipants .players button');
    for(var i = 0; i < buttons.length; i++){
        var button = buttons[i];
        button.addEventListener('click', eachUser);
    }
}

function eachUser(){
    var dataUser = this.getAttribute('data-user');
    team();
    for(var i = 0; i < teams.length; i++){
        if(teams[i].player === dataUser){ 
            selectTeam.style.display = 'none';
            showName.innerHTML = '<h3>' + teams[i].player + '</h3><p>Stade :<br>' + teams[i].stade + '</p>';
            window.scrollTo(500, 0);
            showPlayers(teams[i].gardiens,'G');
            showPlayers(teams[i].defenseurs,'D');
            showPlayers(teams[i].milieux,'M');
            showPlayers(teams[i].attaquants,'A');          
        }    
    }    
}

equipes.addEventListener('click', team);
function team(){
    show.style.display = 'none';
    showParticipants.style.display = 'none';
    showEquipes.style.display = 'block';
    showClassement.style.display = 'none';
    showTable.innerHTML = '';
    selectTeam.style.display = 'block';
    selectTeam.innerHTML = '<option value="-">-</option>';
    showName.innerHTML = '';
    window.scrollTo(500, 0);

    for(var i = 0; i < teams.length; i++){
        selectTeam.innerHTML += '<option value="' + teams[i].player + '">' + teams[i].player + '</option>';
    }
    selectTeam.addEventListener('change', eachTeam);
}

function eachTeam(){
    var dataTeam = this.value;
    showTable.innerHTML = '';
    for(var i = 0; i < teams.length; i++){
        if(teams[i].player === dataTeam){ 
            showName.innerHTML = '<h4>Stade :<br>' + teams[i].stade + '</h4>';
            showPlayers(teams[i].gardiens,'G');
            showPlayers(teams[i].defenseurs,'D');
            showPlayers(teams[i].milieux,'M');
            showPlayers(teams[i].attaquants,'A');          
        }    
    }    
} 

function showPlayers(array,a){
    for(var y = 0; y < array.length; y++){
        showTable.innerHTML += '<tr><td>' + a + '</td><td>' + array[y].name + '</td><td>' + array[y].club + '</td></tr>'; 
    }
}

classement.addEventListener('click', ranking);
function ranking(){
    show.style.display = 'none';
    showParticipants.style.display = 'none';
    showEquipes.style.display = 'none';
    showClassement.style.display = 'block';
    window.scrollTo(500, 0);

}

