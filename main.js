'use strict';

var rubriques = [{
    title : '1ère journée',
    date : '11/02/2019', 
    gazette : 'Tres belle première journée, le promu Burek Sa Sirom arrache le point du match nul face à l’expérimenté Mr tu Connais, grâce à sont très bon mercato hivernal. Malgré sa force offensive impressionnante, La Lorraine est Grenat est stoppée dès la première journée par tes fessées et son son duo d’attaque d’une efficacité clinique. Quant à elle, l’Ohèèème sécurise les 3 points face au RC Strasbourg-Palette, bien parti pour être la lanterne rouge de cette édition. Enfin, le Dinamo Sveti Stjepan atomise l’AMD Football Club pour se placer en première place de la Ligue, place qu’il ne devrait logiquement plus quitter jusqu’à la fin du championnat.'},
{
    title : '2ème journée',
    date : '20/02/2019',
    gazette : 'A cause d’un problème d’impression, la gazette MPG n’est publiée qu’aujourd’hui. Veuillez nous en excuser. Au programme le week end dernier, le Tes Fessées a mangé le promu burek sa sirom sur un but de Thauvin et Bahoken, et ce malgré l’utilisation du bonus Zahia pour ce dernier. Sans doute le manque d’expérience de l’élite. L’Ohèèème poursuit tranquillement sa série, en allant gagner d’une courte tête chez Mr. Tu Connais. Il faudra encore compter sur l’Ohèèème cette année messieurs. La Lorraine est Grenat se débarrasse facilement de l’AMD FC et son banc trop peu fourni. Enfin le Dinamo Sveti Stjepan reste invaincu grâce à cette superbe victoire 2-1 sur le RCSBP (avec tout de même un but de Oudin, et un but MPG de Ocampos). Le DSS reste donc 1er de la Ligue et affrontera LLG ce week end, ce qui sera sans doute le choc du week end, à suivre dimanche soir à 21h sur A1.'
},
{
    title : '3ème journée',
    date : '25/02/2019',
    gazette : 'Lendemain de défaite difficile pour le Dinamo Sveti Stjepan, qui perd sa place de leader pour la première fois de la saison. L’affiche du week end a tenu toutes ses promesses notamment grâce à 2 magnifiques doublés de Mbappé et Oudin, mais ce diable de Gelson Martins a clos le score en faveur de LLG. L’Ohèèème s’empare de la première place grâce à une valise superbement utilisée (et un très bon mercato hivernal) face au tes fessées. La direction du tes fessées a déjà posé un ultimatum à l’entraîneur après avoir engrangé seulement 4 points en 3 journées, bilan beaucoup trop maigre par rapport à l’ambition européenne que s’est fixé le club en début de saison. 1er point engrangé pour l’AMD Football Club au terme d’un match très disputé contre Burek sa sirom, le promu a décidément du mal à décoller, et réalise des matchs plutôt flap-flap. La direction de Burek sa sirom recherche déjà un successeur à Julien Duval, trop inexpérimenté, mais le manque de moyens financiers empêche les dirigeants de rêver. Enfin, le RCSP connaît sa première victoire grâce à un match maîtrisé face à Mr Tu Connais. La victoire a été fêtée comme il se doit, d’après les tabloïds strasbourgeois, l’entraîneur Julien Gesthieumeroihjleerwexiouedsjllererr à été retrouvé ce matin inerte, sur un banc du centre ville.'
},
{
    title : '4ème journée',
    date : '06/03/2019',
    gazette : 'Quelle journée de football messieurs! À commencer par la large victoire de LLG face à une piètre équipe du RCSBP, dépassée sur tous les plans de jeu. Elle se rassurera comme elle peut avec ce but MPG de Sanson, qui sauve les meubles. Ce dernier voit la zone rouge se rapprocher, tandis que LLG s’empare de la première place du classement. Tandis que le tef coule, le tes fessées, lui, s’envole et corrige Mr. Tu Connais, avec à noter un but de Dossevi, qui en soit est une performance et constitue un motif de victoire. Mr. Tu Connais est bon dernier avec un seul point en 4 matches et la pire différence de buts de la ligue. Le tes fessées réalise lui une très belle opération et monte sur la troisième marche du podium. L’expérimenté Dinamo Sveti Stjepan est freiné par le promu Burek Sa Sirom, dans un match que Pierre Menés aurait qualifié de nul à chier (1-1 avec un csc, bref un bon match de merde). Enfin, terrible désillusion pour l’Ohèèème, qui pensait avoir fait le plus dur après ce but de Ballotelli, mais c’était sans compter le doublé de Dembelé et la superbe valise utilisée par l’AMD football club, qui en profite pour signer sa première victoire de la saison. Merci messieurs, et rendez-vous ce week-end pour la 5ème journée de cette passionnante Ligue des Champions du Monde.'
},
{
    title : '5ème journée',
    date : '11/03/2019',
    gazette : 'Mais que cette Ligue est passionnante messieurs. Rebondissements, suspens, remontadas, il y aura eu de tout ce week end. À commencer par cet incroyable et passionnant 0-0, offert encore une fois par Burek Sa Sirom (un peu à l’image de son week end donc). Toujours aucune victoire pour ce dernier. Pendant ce temps, LLG perd sa place de leader au profit de l’Ohèèème, qui se défait du Dinamo Sveti Stjepan (putain Flo je sais pas comment t’as fait pour le gagner celui là j’ai la haine le lundi matin mais nique sa mère putain). La course à la première place est passionnante avec les 3 premières équipes qui se tiennent en seulement 2 points. Le Tes Fessées s’est effectivement débarrassé facilement du RCSBP, malgré un but de ce fdp de lyonnais de Briand. Enfin, LE match prolifique du week end nous est offert par Mr Tu Connais et l’AMD FC. Un superbe 3-3, mais les 2 équipes n’arriveront pas à se départager. Mr Tu Connais reste bon dernier avec seulement 2 points glanés. A suivre le week end prochain: l’affrontement au sommet entre LLG et l’Ohèèème (allez les gars faites nous un bon match nul histoire qu’il reste un peu de suspens).'
},
{
    title : '6ème journée',
    date : '18/03/2019',
    gazette : 'Il s’en est passé des choses ce week-end. Marche pour le climat, gilets jaunes, Macron qui s’adjuge 24h de repos au ski. Mais tout ça on s’en branle, parce que c’est en Ligue des Champions du Monde qu’il y a eu du spectacle. À commencer par Mr Tu Connais détruit, humilié, exterminé, anéanti, liquidé, supprimé, massacré, ravagé, étouffé, dissout, écrasé, annihilé, brisé, pulvérisé, ruiné, bousillé, dévasté par le Dinamo Sveti Stjepan, beaucoup trop fort, brillant, éblouissant, éclatant, resplendissant, talentueux, vigoureux. C’est encore une fois l’inévitable Oudin qui avait scoré, but auquel ce sont ajoutées 3 petites pépites MPG. Le DSS remonte sur la 3ème marche du podium, tandis que Mr Tu Connais encaisse sa plus grosse défaite de la saison, mais surtout sa 4ème défaite en 6 journées, et toujours aucune victoire... L’AMDFC s’impose lourdement face au Tes Fessées, celle là on l’avait pas vu venir. Un 4-1 sans utiliser aucun bonus, c’est propre, c’est solide, bravo. Il faudra décidément se méfier de l’AMDFC dans la course à la 2ème ou 3ème place. Il est l’archétype de l’équipe qui se qualifie de justesse pour une Coupe d’Europe pour ensuite être éliminé au 6eme match de poule, sur un csc litigieux à la 95eme, en décembre, sous -20 degrés en Russie. LA surprise du week end nous vient du promu Burek Sa Sirom, qui s’impose tranquillement face à l’expérimenté mais malchanceux RCSBP (et hop une petite valise!). Première victoire de la saison pour BSS, qui est sur une très belle série sans défaite  (3 matchs nuls et 1 victoire) et revient à 3 points seulement du podium. Le RCSBP, quant à lui, dégringole dans les bas fonds du classement, il n’a pas pris 1 point depuis 3 journées. Espérons pour lui que les blessés reviennent vite. Enfin, l’affiche du week-end n’a pas déçue et nous a offert un suspens haletant, avec à la fin une victoire de l’Ohèèème sur le fil grâce à son supersub ROOOOOOOBEEEEEEERT BEEEEERIIIIIIIIIĆ. LALALALALALALAAAAAAAA ROOOOOOOOBEEEEEERT BEEEEERIIIIIIIIIĆ, LALALALALALALAAAAAAAA ROOOOOOOOBEEEEEEERT BEEEEEEERIIIIIIIIĆ. L’Ohèèème s’envole en tête du classement, prenant 4 points d’avance sur son poursuivant. Pour le champion en titre LLG, la saison s’annonce plus compliquée que prévue, il subit là sa première défaite et voit le DSS et le tes fessées se rapprocher dangereusement (les 3 équipes se tiennent en seulement 1 point). A noter qu’avec cette victoire l’Ohèèème récupère le précieux, mais bon ça c’est pareil tout le monde s’en branle. Tout repose sur Burek Sa Sirom le week end prochain, pour relancer un peu de suspens dans la Ligue des Champions du Monde.'
},
{
    title : '7ème journée',
    date : '05/04/2019',
    gazette : 'Les journées se suivent et ne se ressemblent pas en Ligue des Champions du Monde. Ce week-end nous a encore offert des frissons, des larmes (de joie ou de déception), du suspens, et bien évidemment du spectacle. À commencer par cet INCROYABLE 0-0 entre le RCSBP et l’AMDFC, à couper le souffle. C’est une boutade évidemment, rien à se mettre sous la dent, à part ce superbe coup de maître du coach Miller, plaçant Da Costa (auteur d’un doublé) sur le banc. On repassera donc pour le spectacle. Au classement, l’AMDFC reste dans le ventre mou, mais devra encore batailler pour éviter la relégation, tandis que le RCSBP réalise une très mauvaise opération et se retrouve lanterne rouge. Mais bon, Neymar retrouvera bientôt la compétition (LOOOOOL). La bataille des mal classés s’annonce bien plus passionnante que celle du titre. L’Ohèèème s’est imposé tranquillement à domicile contre Burek Sa Sirom, qui malgré un but sauvant les apparences, n’a jamais vraiment existé dans les duels. Non, miser sur un triplé de Mollet n’est pas une bonne stratégie. L’Ohèèème a désormais 5 points d’avance sur son poursuivant, et à le temps de voir venir. À ce rythme là, l’Ohèèème sera champion à 10 journées de la fin, et se fera éliminer en 8èmes de finale de LdC l’année prochaine. La surprise du week-end nous vient de Mr Tu Connais, qui obtient sa première victoire de la saison, 2-0, face à LLG, à la lutte pour le podium. Une valise superbement utilisée couplée à un but MPG de ce bon vieux Hilton, terminé, merci messieurs. Mr Tu Connais quitte enfin la dernière place du classement, tandis que LLG perd sa place de dauphin, au profit du Tes Fessées. Enfin, terrible désillusion pour le Dinamo Sveti Stjepan, qui après avoir mené 2-0, se fait rattraper pour perdre 4-3 sur le fil. Prendre 3 buts MPG, que le football est cruel. Les joueurs et les supporters sont abattus. Les dirigeants ont posé un ultimatum à l’entraîneur, qui ne remplit clairement pas les objectifs fixés en début de saison. Le match de ce week end face à l’AMDFC sera déterminant dans cette reconquête. Le match à suivre du week end sera le déplacement de LLG sur la pelouse du Tes Fessées. La chance sourira t-elle encore au Tes Fessées ? Éric s’il te plaît encule le.'
},
{
    title : '8ème journée',
    date : '08/04/2019',
    gazette : 'Superbe acte VIII de la Ligue des Champions du Monde ce week-end, qui restera sans conteste celui de la révolte des mal classés. Performance historique de Mr Tu Connais, qui inflige une manita à Burek Sa Sirom. Mr Tu Connais enchaîne donc avec une 2ème victoire d’affilée et est bien parti pour se sauver. Le plan mis en place par Totodej en début de saison semble désormais porter ses fruits, les joueurs sont en confiance et les résultats sont là. Les Caraï United do Portugal (les ultras du club) ont même envahi la pelouse pour célébrer la plus grosse victoire de l’histoire du club. Quant à Burek Sa Sirom, il retrouve sa place de dernier du classement (a cause d’une différence de but qui ferait même pâlir Guingamp). Malheureusement pour les dirigeants, le changement de coach opéré lors du dernier mercato n’a rien changé, ce dernier semble sans solutions. Soyons tout de même indulgents avec coach Duval, qui n’effectue que sa première saison dans l’élite. LA surprise du week-end, le tremblement de terre dans le monde du football, le coup de théâtre dans cette Ligue, l’incroyable retournement de situation, le tournant de ce championnat, c’est la victoire du RCSBP face au leader. La rigueur tactique de coach Hër Gerhüstraminër a fait mouche, une victoire étriquée, 1-0, grâce à une défense de fer (une valise encore une fois magnifiquement utilisée, et le premier but de Dante de la saison). Le RCSBP quitte la dernière place du classement, mais reste tout de même avant dernier, à égalité de points avec BSS. Ce dernier se consolera tout de même en récupérant le précieux (non j’déconne on s’en bat les couilles c’est de la merde). L’Ohèèème reste leader mais voit les poursuivants se rapprocher. Ce diable de Tes Fessées que plus rien ni personne ne semble arrêter. Après avoir terrassé le Dinamo Sveti Stjepan le week end dernier, il enchaîne et bat 1-0 à domicile LLG. Très bonne série pour le Tes Fessées contre des concurrents directs. À noter la victoire du Tes Fessées tout en encaissant une valise, bravo coach Konton. Néanmoins, soyons objectifs, le Tes Fessées jouit d’une chance de cocu (nous ne reparlerons pas du match de la semaine dernière), et affronte LLG lorsque Mbappé est sur le banc, Gelson Martins est muet, et Fekir est absent. Cette citation d’un grand penseur de notre temps résume parfaitement ce que tout le monde pense du Tes Fessées: “La manière dont tu comptes en dit long sur c’que t’as brassé, la manière dont tu pompes en dit long sur c’que t’as sucé”. Enfin, le DSS nous a encore réservé du spectacle ce week-end. Le coach jouait gros après l’énorme déconvenue du week-end dernier. Sa tactique était parfaite, les joueurs étaient impliqués, mais cela n’a pas suffit pour s’imposer, et le DSS repart seulement avec le point du match nul. 3 buts MPG, c’est le tarif habituel pour le DSS. Ce match nul permet tout de même au DSS de se hisser sur la 3ème marche du podium, à égalité avec LLG mais avec une différence de buts favorable. C’est donc la crise du côté du LLG. Le champion en titre qui se retrouve quatrième (même pas européen). Les tabloïds prédisent déjà un changement d’entraîneur avant la prochaine journée. En tout cas, coach flapflap devra prouver qu’il mérite sa place dès le week end prochain face à l’AMDFC. Le Tes Fessées enchaînera t-is avec sa chance de cocu ? Le DSS prendra t-is encore 3 buts MPG ? L’Ohèèème conservera t-il sa place de leader ? Burek Sa Sirom se sauvera t-il ? Rendez-vous le week-end prochain pour encore plus de spectacle.'
},
{
    title : '9ème journée',
    date : '15/04/2019',
    gazette : 'Une page de légende s’est encore écrite cette semaine en Ligue des Champions du Monde. Entre désillusions, déculottées, joie, tristesse, spectacle et ennui, notre spécialiste vous décrypte ce week end de foot dans notre brève hebdomadaire. Et une, et deux, et trois victoires de suite pour Mr Tu Connais, qui décidément ne s’arrête plus. Une victoire de prestige, 6-1, face au leader du classement. Coach totodej et son équipe enchaînent donc avec un total de 13 buts marqués et 1 but encaissé seulement lors des 3 dernières rencontres. Assurément l’équipe en forme du championnat. Une statue de coach totodej, ou tinderinho comme le surnommaient les petits du quartier, est en préparation. Elle devrait être érigée cette semaine sur la place principale de Lisbonne, et sur la stèle seront inscrits les mots suivants: “C’était trop facile”. Bon dernier il y a 3 semaines, totodej se retrouve dans le ventre mou du classement, mais seulement à 3 points du podium, qu’il va, à n’en pas douter, essayer de chatouiller. Cependant terrible désillusion pour l’Ohèèème, qui semblait filer tout droit vers le titre, mais à l’image du PSG ce week end, n’a pas su concrétiser et à même subit une déculottée. L’Ohèèème encaisse un second revers consécutif, et voit son avance sur ses poursuivants fondre: plus qu’1 petit point d’avance sur le deuxième. En attendant le match décisif du week end prochain entre le premier et le deuxième. Ce week end de football nous a également réservé un match spectaculaire entre LLG et l’AMDFC: 8-1 à l’arrivée, avec 7 buts MPG encaissés. Superbe performance de l’AMDFC qui pulvérise le record de buts MPG encaissés lors d’un seul et même match, jusqu’ici détenu par le Dinamo Sveti Stjepan. 3 total dos, une défense à 3,5 de moyenne, et un gardien a 2,5, ca ne pardonne pas ... Mais attention, arrivera-t-il à réitérer cette performance face à Burek Sa Sirom le week end prochain ? LLG reprend donc la 3ème place et met fin à sa série très flapflap de 3 défaites de suite. Le coach nancéien a su trouver les ressources dans son effectif pour s’imposer ce week end. Résultat plutôt inattendu du côté de Burek Sa Sirom qui accroche le Tes Fessées à domicile, 1-1, les 2 équipes repartent avec un point. Ce diable de Prcić a surgit pour BSS, tandis que la pépite Kalifa Koulibaly a égalisé pour le Tes Fessées. Le Tes Fessées a eu du mal dans la finition, à l’image de coach Konton ce week end. Ce petit point permet tout de même à u Tes Fessées de se rapprocher de l’Ohèèème, qui n’est plus qu’à une petite unité devant. Burek Sa Sirom reste quant à lui bon dernier, à égalité tout de même avec le RCSBP. Cette première saison dans l’élite est décidément très compliquée pour Burek Sa Sirom, c’est le problème de ces petits clubs sans budget, trop forts pour la division 2, mais trop faibles pour la Ligue des Champions du Monde. Les tribunes se désemplissent, les joueurs n’ont plus de motivation, le staff n’a plus de solutions ... Espérons pour coach Duval que la fin de saison soit plus prolifique. Enfin, et parce qu’on a quand même notre quota de bons matches de merde en Ligue des Champions du Monde, la purge du week end nous a été offerte par le RCSBP et le DSS, qui se séparent sur un 0-0. Rien à se mettre sous la dent. En meme temps c’est vrai qu’avec un duel d’attaque Rémy - Tavares - Delort face à Briand - Diony, il ne fallait pas s’attendre à grand chose. A noter tout de même que la performance incroyable de DSS, qui n’a pas pris de but MPG ce week end. On serait presque déçus. Coach Her Geltzenlïchër est führieux (allez elle est pas mal quand même) après cette énième déception et attend toujours que l’infirmerie se désemplisse pour montrer qu’il peut quand même accrocher la 6eme place. Le DSS est donc éjecté du podium et se retrouve 4ème, avec Mr Tu Connais qui revient très fort derrière. Maigre consolation pour le RCSBP, qui conserve le précieux. C’est tout pour ce week end messieurs, rendez-vous le week end prochain pour encore plus de folie. Le sprint final s’annonce passionnant.'
},
{
    title : '10ème journée',
    date : '22/04/2019',
    gazette : 'Le sommet “Chine + 17” a fait le tour des médias croates la semaine dernière mais a finalement été éclipsé par cette rocambolesque 10eme journée de la Ligue des Champions du Monde. 2 groupes distincts se détachent désormais: le podium, et le reste. Cette Ligue reste encore une fois passionnante, comme le titre la Une de Slobodna Dalmacija ce lundi matin. Le match des mal classés (RCSBP contre Mr Tu Connais), nous a offert un spectaculaire 2-2, où Luis Gustavo et Sanson ont répondu à Martinez et Khazri (a noter une superbe picouze bien utilisée sur Sanson par coach Hër Gërüstraminër). Le RCSBP est toujours dernier, mais point positif, il n’a pas perdu depuis 4 matches, et il CONSERVE LE PRÉCIEUX C’EST INCROYABLE !! Mr Tu Connais est quant à lui freiné dans sa folle remontada, et devra patienter un peu avant de subtiliser la 4ème place au Dinamo Sveti Stjepan. Le 2ème match des mal classés s’est terminé par une victoire nette et sans bavure de Burek Sa Sirom. Et oui, le promu tient peut être là sa victoire de référence, le tournant de sa saison. Grâce à joli coup de patte de Saïd et Mollet (heyheyhey), BSS quitte la zone de relegation et s’offre un peu d’air. En revanche ça sent le roussi pour l’AMDFC qui n’a plus qu’1 petit point d’avance sur la lanterne rouge RCSBP. Terrible désillusion pour le Dinamo Sveti Stjepan, qui peine à sortir de la crise: battu 5-3 à domicile par La Lorraine est Grenat après avoir mené 3-1. Mais bon voila, 4 buts dimanche soir (ntm Éric putain). On commencerait presque à s’y être habitué. Seulement 2 points glanés en 4 matches, le DSS déçoit et n’atteint clairement pas les objectifs fixés en début de saison. La direction réfléchit déjà à un remplaçant au coach Liguori, qui n’a clairement pas l’âme d’un manager, et se laisse imposer ses choix par son équipe. LLG quant à lui se réveille, après avoir enchaîné 3 défaites, il recolle à seulement 1 point du 2ème. Ce qui devrait nous offrir un sprint final passionnant. Enfin, le sommet du week-end n’aura pas déçu. Les 2 titans de cette Ligue s’affrontaient pour la place de leader. Et c’est le Tes Fessées qui en est sorti vainqueur, grâce au doublé de la petite pépite Kalifa Koulibaly. Coach Konton a remercié son joueur et lui a glissé un petit clin d’œil lors de la conférence de presse: il a dit “félicitations” aux journalistes en Africain. Magnifique exemple. Et c’est la dégringolade pour l’Ohèèème, qui ne gagne plus depuis 3 matches. Avec 5 points d’avances à 6 journées de la fin, l’Ohèèème à fait ce qu’on appelle désormais une Steven Gerrard. Les 3 premiers se tiennent désormais en 3 points, et les 5 derniers en 3 points également. La lutte pour le titre comme pour la non-relegation sera passionnante. Rendez-vous le week-end prochain, et très bonne semaine à tous.'
},
{
    title : '11ème journée',
    date : '03/05/2019',
    gazette : 'Messieurs, la Ligue des Champions du Monde est encore loin d’avoir rendue son verdict. Avec désormais seulement 3 matches à jouer, ca se resserre plus que jamais en haut du classement, les autres sont à la traine. Seuls les 3 premiers peuvent encore prétendre au titre. Pour les autres, les espoirs de titre semblent quasiment envolés, et on se bat plutôt pour ne pas finir dernier, place actuellement occupée par l’irrésistible RCSBP. Commençons ce résumé par la bonne nouvelle de cette journée: le réveil, ENFIN, du Dinamo Sveti Stjepan, qui après 4 matches sans victoire, retrouve des couleurs et s’impose 5-2 à l’extérieur, sur la pelouse du Burek Sa Sirom. Un superbe triplé de la pépite Youssef Atal lui permet d’assurer la victoire face à un Burek Sa Sirom qui est décidément plus occupé à jouer à Quiz Planet. Le bilan n’est pas si mauvais que ça pour le promu, duquel on n’attendait pas grand chose, mais qui réussi tout de même à accrocher la 6eme place, et avec un peu de chance pourrait accrocher la 4ème place en fin de saison. En revanche le Dinamo Sveti Stjepan retombe sur terre et abandonne ses rêves de titre. Les dirigeants ont revu les objectifs annoncés en début d’année. Maintenant c’est clair: le DSS vise la 3ème place. La Lorraine est Grenat est prévenue ! La confrontation entre l’Ohèèème et l’AMDFC nous a offert un match prolifique: 6-3 à l’arrivée, score logique. À noter le doublé de Robert Berić la pépite slovène. L’Ohèèème est toujours deuxième au classement et met plus que jamais la pression sur le premier. L’AMDFC est avant dernier, et devra se battre jusqu’au bout s’il ne veut pas voir le RCSBP, plein de fougue et d’envie (ET AVEC LE RETOUR DE NEYMAR !!!!), lui passer devant. Superbe coup de stratégie réalisé encore une fois par le maître en la matière: coach KONTON, qui perdait 1-0 le mercredi soir mais réussi à inverser la tendance avec ce superbe doublé de Falcao et un but MPG de Thiago Mendes, c’est parfait, c’est superbe. Toutefois, la pépite Koulibaly est restée muette cette semaine, pas de remerciements en africain donc. Le Tes Fessées conserve donc logiquement sa première place tandis que Mr tu Connais, après avoir enchaîné 4 matches sans défaites, se voit stoppé net, et voit ses rêves d’accrocher le podium probablement s’envoler. Meme si la saison n’est pas terminée, les dirigeants de Mr Tu Connais estiment que coach Totodej a été à la hauteur de sa mission et de ses objectifs. La direction se séparera seulement du directeur sportif, qui avait décidé de miser 93M€ sur Khazri et 72M€ sur Pépé. Ouais, il avait pas le nez hyper fin celui là. Enfin, le dernier match de cette journée nous a offert du suspens également. On a longtemps cru que le RCSBP allait s’imposer sur la pelouse de LLG grâce à ce diable de Briand (c’est surtout un fdp de lyonnais), mais la fougue et l’envie de coach Hër Gerüstraminër n’a pas suffit. LLG s’impose sur le fil grâce à but MPG d’un autre fdp de lyonnais: Nabil Fekir. LLG reste donc 3ème, au contact des 2 premiers, et surtout à la lutte pour le titre, et le RCSBP reste dernier. L’info de la journée, c’est la perte du précieux du RCSBP, récupéré par LLG après sa victoire. Le RCSBP n’a donc plus aucune consolation, il devra accrocher la sixième ou septième place s’il ne veut pas se faire chambrer jusqu’à la fin de sa vie. On a désormais 3 groupes distincts: les 3 premiers qui se tiennent en 3 points, et lutteront pour le titre. Les 4 derniers, qui se tiennent en 4 points, et lutteront pour ne pas finir dernier. Et enfin, le Dinamo Sveti Stjepan, seul entre les 2 groupes, qui n’a plus rien à jouer, mais pour qui le calendrier va être compliqué en jouant les 2 premiers sur les 3 dernières journées. Messieurs, accrochez-vous, la Ligue des Champions du Monde rendra bientôt son verdict: le sprint final est lancé.'
},
{
    title : '12ème journée',
    date: '06/05/2019',
    gazette : 'Pâques, 1er Mai, Pentecôte, Ascension, 8 Mai, mais pas de jours fériés en Ligue des Champions du Monde. On prend les mêmes et on recommence, quel régal ce week end encore une fois: le sprint final est lancé, et certains y ont déjà laissé des plumes ! Mais commençons par la superbe purge du week end, offerte conjointement par l’AMDFC et Mr Tu Connais: un magnifique 0-0, rien à se mettre sous la dent si ce n’est la bonne utilisation du Chapron rouge par l’AMD, lui permettant de virer Ajorque. On soulignera également la performance de Mr Tu Connais, qui n’aura pas réussi à marquer contre une équipe n’ayant que 3 défenseurs, et pas de gardien. Sur le plan comptable, les 2 équipes repartent avec le point du match, ce qui ne fait les affaires de personne: Mr Tu Connais dégringole à la sixième place, et l’AMDFC s’accroche à sa 7eme place, grâce à la défaite du RCSBP. Après s’être réveillés en milieu de championnat, ces 2 là vont avoir du mal dans le sprint final: comme chaque année Mr Tu Connais a du mal dans la conclusion, tandis que l’AMDFC aimerait tenter des choses, mais est rappelé à l’ordre par la maison. Le RCSBP était plein d’espoir ce week end, avec le retour de sa star Neymar, qui a marqué pour son retour, mais cela n’a pas suffit face au leader du championnat, le Tes Fessées, qui colle 3 buts au RCSBP, notamment grâce à la pépite Koulibaly. Pas de changement donc pour ces 2 équipes, le Tes Fessées reste premier et se rapproche du titre, et le RCSBP reste dernier et se rapproche de la relégation. C’est malheureusement le problème de ces équipes à petit budget, trop fortes pour la Ligue 2, mais trop faibles pour la Ligue des Champions du Monde. Allez, plus qu’un an à tenir, et on devrait revoir le RCSBP dans l’élite. Le Dinamo Sveti Stjepan continue sur sa lancée et inflige une belle manita au 2ème du championnat: l’Ohèèème. Inexistant sur ce match, l’Ohèèème perd des points dans la lutte pour le titre et voit le Tes Fessées s’envoler vers le sacre. Les dirigeants du DSS se réjouissent de la superbe performance du coach Ligouli et de ses joueurs, et annonce clairement qu’ils se bâteront jusqu’au bout pour la 2ème place. Seul point noir pour le DSS: une valise très mal utilisée, puisque l’Ohèèème n’a mis aucun but. Le DSS est toujours 4ème, a 2 points du podium, et l’Ohèèème toujours 2ème, à 5 points du 1er. Enfin, la surprise de ce week end nous vient du promu Burek Sa Sirom, qui va gagner à l’arrachée sur la pelouse de LLG. Un match plein de rebondissements, remporté 4-3 par coach Duval et ses joueurs, qui reprennent le précieux par la même occasion. LLG aura des regrets après ce match, où son adversaire s’impose notamment grâce à un csc de Ballo-Touré. LLG s’accroche à sa 3ème place mais voit le DSS se rapprocher fortement. Superbe opération pour Burek Sa Sirom, qui quitte les bas fonds du classement pour s’installer à une plus honorable 5ème place. Il sera tout de même compliqué d’aller viser plus haut, le podium étant à 6 points. Plus que 2 journées avant que la Ligue des Champions du Monde rende son verdict, avec un match passionnant à suivre la semaine prochaine: Ohèèème - LLG, le Tes Fessées sera t-is sacré champion dès la semaine prochaine ?'
}];

var teams = [
    {name: 'Julien Duval', points: '14', games: '14', victories: '4', nuls: '5', defeats: '6', goals: '-10', image: 'images/duval.png', player: 'Burek sa sirom', stade: 'Le Four', gardiens: [{name: 'Subasic', club: 'Monaco'}, {name: 'Maignan', club: 'Lille'}, {name: 'Koffi', club: 'Lille'}], defenseurs: [{name: 'Fabio', club: 'Nantes'}, {name: 'Thomas', club: 'Angers'}, {name: 'Mendy', club: 'Lyon'}, {name: 'Suárez', club: 'Montpellier'}, {name: 'Pablo', club: 'Bordeaux'}, {name: 'Dubois', club: 'Lyon'}, {name: 'Abdelhamid', club: 'Reims'}, {name: 'Debuchy', club: 'Saint-Etienne'}, {name: 'Gelin', club: 'Rennes'}],milieux: [{name: 'NDombele', club: 'Lyon'}, {name: 'Rabio', club: 'Paris'}, {name: 'Fofana', club: 'Strasbourg'}, {name: 'Jonathan Ikone', club: 'Lille'}, {name: 'Thiago Maia', club: 'Lille'}, {name: 'Skhiri', club: 'Montpellier'}, {name: 'Mollet', club: 'Montpellier'}, {name: 'Tait', club: 'Angers'}, {name: 'Prcic', club: 'Strasbourg'}], attaquants: [{name: 'Rafael Leão', club: 'Lille'}, {name: 'Depay', club: 'Lyon'}, {name: 'Said', club: 'Dijon'}, {name: 'Roux', club: 'Guimgamp'}, {name: 'Jordan Siebatcheu', club: 'Rennes'}]},
    {name: 'Julien Geltzenlichter', points: '15', games: '14', victories: '3', nuls: '3', defeats: '7', goals: '-5', image: 'images/julien.png', player: 'RC Stras-Bourg-Palette', stade: 'Bobo', gardiens: [{name: 'Kawashima', club: 'Strasbourg'}, {name: 'Kamara', club: 'Strasbourg'}, {name: 'Koubek', club: 'Rennes'}, {name: 'Diallo', club: 'Rennes'}, {name: 'Badiashile', club: 'Rennes'}], defenseurs: [{name: 'Glik', club: 'Monaco'}, {name: 'Fontaine', club: 'Reims'}, {name: 'Aguilar', club: 'Montpellier'}, {name: 'Pallois', club: 'Nantes'}, {name: 'Baysse', club: 'Caen'}, {name: 'Dante', club: 'Nice'}, {name: 'Denayer', club: 'Lyon'}, {name: 'Engels', club: 'Reims'}, {name: 'Koundé', club: 'Bordeaux'}],milieux: [{name: 'Martin', club: 'Strasbourg'}, {name: 'Bourigeaud', club: 'Rennes'}, {name: 'Rony Lopes', club: 'Monaco'}, {name: 'Grenier', club: 'Rennes'}, {name: 'M\'Vila', club: 'Saint Etienne'}, {name: 'Sanson', club: 'Marseille'}, {name: 'Luiz Gustavo', club: 'Marseille'}], attaquants: [{name: 'Neymar', club: 'Paris'}, {name: 'Mothiba', club: 'Strasbourg'}, {name: 'Briand', club: 'Bordeaux'}, {name: 'Diony', club: 'Saint Etienne'}]},
    {name: 'Florian Servant', points: '25', games: '14', victories: '8', nuls: '1', defeats: '5', goals: '-2', image: 'images/florian.png', player: 'Ohèèème', stade: 'stadion u Marseilleu', gardiens: [{name: 'Sels', club: 'Strasbourg'}, {name: 'Mandanda', club: 'Marseille'}], defenseurs: [{name: 'Landre', club: 'Nîmes'}, {name: 'Pavlovic', club: 'Angers'}, {name: 'Le Tallec', club: 'Montpellier'}, {name: 'Zeki Çelik', club: 'Lille'}, {name: 'Subotic', club: 'Saint Etienne'}, {name: 'Oyongo', club: 'Montpellier'}],milieux: [{name: 'Sissoko', club: 'Strasbourg'}, {name: 'Bamba', club: 'Lille'}, {name: 'Boschilia', club: 'Nantes'}, {name: 'Thomasson', club: 'Strasbourg'}, {name: 'Capelle', club: 'Angers'}, {name: 'Cafaro', club: 'Reims'}], attaquants: [{name: 'Suk Hyun-Jun', club: 'Reims'}, {name: 'Balotelli', club: 'Marseille'}, {name: 'Cavani', club: 'Paris'}, {name: 'Kamano', club: 'Bordeaux'}, {name: 'Beric', club: 'Saint Etienne'}]},
    {name: 'Quentin Isach', points: '32', games: '14', victories: '10', nuls: '2', defeats: '2', goals: '14', image: 'images/quentin.png', player: 'tes fessées', stade: 'nothing to loose', gardiens: [{name: 'Anthony Lopes', club: 'Lyon'}, {name: 'Gorgelin', club: 'Lyon'}, {name: 'Ruffier', club: 'Saint Etienne'}], defenseurs: [{name: 'Thiago Silva', club: 'Paris'}, {name: 'Rami', club: 'Marseille'}, {name: 'Perrin', club: 'Saint Etienne'}, {name: 'Jullien', club: 'Toulouse'}, {name: 'Marcelo', club: 'Lyon'}, {name: 'Amian', club: 'Toulouse'}, {name: 'Kehrer', club: 'Paris'}, {name: 'Hamari Traoré', club: 'Rennes'}, {name: 'Gabriel Silva', club: 'Saint Etienne'}],milieux: [{name: 'Thauvin', club: 'Marseille'}, {name: 'Dossevi', club: 'Toulouse'}, {name: 'Sankharé', club: 'Bordeaux'}, {name: 'Sangaré', club: 'Toulouse'}, {name: 'Rongier', club: 'Nantes'}, {name: 'Thiago Mendes', club: 'Lille'}, {name: 'Cyprien', club: 'Nice'}, {name: 'Lienard', club: 'Strasbourg'}], attaquants: [{name: 'Bahoken', club: 'Angers'}, {name: 'Falcao', club: 'Monaco'}, {name: 'Laborde', club: 'Montpellier'}, {name: 'Ripart', club: 'Nîmes'}, {name: 'Kalifa Coulibaly', club: 'Nantes'}, {name: 'Kalu', club: 'Bordeaux'}]},
    {name: 'Eric Thomas', points: '24', games: '14', victories: '7', nuls: '3', defeats: '4', goals: '12', image: 'images/eric.png', player: 'La Lorraine est Grenat', stade: 'Nancy crevards Arena', gardiens: [{name: 'Carrasso', club: 'Reims'}, {name: 'Mendy', club: 'Reims'}], defenseurs: [{name: 'Ballo-Toure', club: 'Monaco'}, {name: 'Shoji', club: 'Toulouse'}, {name: 'Djiku', club: 'Caen'}, {name: 'Soumaoro', club: 'Lille'}, {name: 'Sidibe', club: 'Monaco'}, {name: 'Jemerson', club: 'Monaco'}],milieux: [{name: 'Sliti', club: 'Dijon'}, {name: 'Fajr', club: 'Caen'}, {name: 'Eysseric', club: 'Nantes'}, {name: 'Aouar', club: 'Lyon'}, {name: 'Lopez', club: 'Marseille'}, {name: 'Golovin', club: 'Monaco'}], attaquants: [{name: 'Majeed Waris', club: 'Nantes'}, {name: 'Gradel', club: 'Toulouse'}, {name: 'Mbappé', club: 'Paris'}, {name: 'Fekir', club: 'Lyon'}, {name: 'Gelson Martins', club: 'Monaco'}, {name: 'Grandsir', club: 'Strasbourg'}]},
    {name: 'Miller Djiofack', points: '11', games: '14', victories: '2', nuls: '5', defeats: '7', goals: '-15', image: 'images/miller.png', player: 'AMD FOOTBALL CLUB', stade: 'Arena', gardiens: [{name: 'Areola', club: 'Paris'}, {name: 'Buffon', club: 'Paris'}], defenseurs: [{name: 'Dani Alves', club: 'Paris'}, {name: 'Kimpembe', club: 'Paris'}, {name: 'Marquinhos', club: 'Paris'}, {name: 'Bernat', club: 'Paris'}, {name: 'Koné', club: 'Strasbourg'}, {name: 'Congré', club: 'Montpellier'}],milieux: [{name: 'Draxler', club: 'Paris'}, {name: 'Paredes', club: 'Paris'}, {name: 'Verrati', club: 'Paris'}, {name: 'Di María', club: 'Paris'}, {name: 'Fàbregas', club: 'Monaco'}, {name: 'Choupo-Moting', club: 'Paris'}, {name: 'Hamouma', club: 'Saint Etienne'}, {name: 'Tameze', club: 'Nice'}, {name: 'Nkunku', club: 'Paris'}, {name: 'Kwon Chang-Hoon', club: 'Dijon'}, {name: 'Sarr', club: 'Marseille'}], attaquants: [{name: 'Niang', club: 'Rennes'}, {name: 'Sanogo', club: 'Toulouse'}, {name: 'Thuram', club: 'Guimgamp'}, {name: 'Dembele', club: 'Lyon'}, {name: 'Ganago', club: 'Nice'}, {name: 'Cornet', club: 'Lyon'}, {name: 'Nuno da Costa', club: 'Strasbourg'}, {name: 'Cornelius', club: 'Bordeaux'}]},
    {name: 'Thomas Dejardins', points: '16', games: '14', victories: '4', nuls: '4', defeats: '6', goals: '1', image: 'images/thomas.png', player: 'Mr Tu Connais', stade: 'Bravo TotoDej', gardiens: [{name: 'Bernardoni', club: 'Nîmes'}, {name: 'Valette', club: 'Nîmes'}], defenseurs: [{name: 'José Fonte', club: 'Lille'}, {name: 'Hilton', club: 'Montpellier'}, {name: 'Briancon', club: 'Nîmes'}, {name: 'Amavi', club: 'Marseille'}, {name: 'Martinez', club: 'Strasbourg'}, {name: 'Pedro Mendes', club: 'Montpellier'}],milieux: [{name: 'Khazri', club: 'Saint Etienne'}, {name: 'Xeka', club: 'Lille'}, {name: 'Adrien Silva', club: 'Monaco'}, {name: 'Ben Arfa', club: 'Rennes'}, {name: 'Gnahore', club: 'Amiens'}, {name: 'Payet', club: 'Marseille'}], attaquants: [{name: 'Pepe', club: 'Lille'}, {name: 'Ajorque', club: 'Strasbourg'}, {name: 'Traoré', club: 'Lyon'}, {name: 'Thioub', club: 'Nîmes'}]},
    {name: 'Baptiste Liguori', points: '18', games: '14', victories: '5', nuls: '3', defeats: '6', goals: '5', image: 'images/baptiste.png', player: 'Dinamo Sveti Stjepan', stade: 'Geoffroy Guichardovic', gardiens: [{name: 'Boucher', club: 'Angers'}, {name: 'Butelle', club: 'Angers'}], defenseurs: [{name: 'Meunier', club: 'Paris'}, {name: 'Lala', club: 'Strasbourg'}, {name: 'Kolodziejczak', club: 'Saint Etienne'}, {name: 'Da Silva', club: 'Rennes'}, {name: 'Atal', club: 'Nice'}, {name: 'Traoré', club: 'Angers'}],milieux: [{name: 'Chambost', club: 'Saint Etienne'}, {name: 'Oudin', club: 'Reims'}, {name: 'Coco', club: 'Guimgamp'}, {name: 'Saint-Maximin', club: 'Nice'}, {name: 'Cabella', club: 'Saint Etienne'}, {name: 'Benkhedim', club: 'Saint Etienne'}, {name: 'Ocampos', club: 'Marseille'}], attaquants: [{name: 'Delort', club: 'Montpellier'}, {name: 'Sarr', club: 'Rennes'}, {name: 'Casimir Ninga', club: 'Caen'}, {name: 'Júlio Tavarez', club: 'Dijon'}, {name: 'Remy', club: 'Lille'}]}
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

var title = document.querySelector('header h1');
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
var showRanking = document.querySelector('.showClassement table tbody');

title.addEventListener('click', news);
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
        show.innerHTML += '<section><h3>' + rubriques[i].title + '</h3><h4>' + rubriques[i].date + '</h4><p>' + rubriques[i].gazette + '</p></section>' ;
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
    
    var sorted = teams.slice().sort(function(a,b){
        
        if(b.points - a.points){
            return b.points - a.points
        }
          if(b.points === a.points){
            return b.victories - a.victories; 
        }
        
    })
    showRanking.innerHTML = '';
    
    for(var i = 0 ;i < sorted.length; i++){
        showRanking.innerHTML += '<tr><td>' + (i + 1) + '</td><td>' + sorted[i].player + '</td><td>' + sorted[i].points + '</td><td>' + sorted[i].games + '</td><td>' + sorted[i].victories + '</td><td>' + sorted[i].nuls + '</td><td>' + sorted[i].defeats + '</td><td>' + sorted[i].goals + '</td></tr>'; 
    }
}

