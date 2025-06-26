import { Project, Track, Clip, Playlist } from '../types';

export const musicProjects: Project[] = [
  {
    id: '1',
    title: 'Naïf',
    titleImageUrl: '/public/ressources/image/naif.png',
    releaseDate: '2025-08-15',
    coverUrl: '/public/ressources/cover/pochette_naif.jpg',
    type: 'ep',
    streamingLinks: {
      spotify: 'https://open.spotify.com/album/example',
      appleMusic: 'https://music.apple.com/album/example',
      youtubeMusic: 'https://music.youtube.com/playlist/example',
      deezer: 'https://deezer.com/album/example',
      tidal: 'https://tidal.com/album/example',
      soundcloud: 'https://soundcloud.com/example/album',
    },
    ecrit:'Aulia',
    prod:'Peril, Vinh, Amé',
    mix:'Amé',
    master:'Neptunes',
    remerciement:'Elyo',
    cover:'Aulia miniature',
    label:'La lame et les outils',
    streamingEmbedLinks: {
    appleMusic: '',
    spotify: '',
    deezer:'',

},
    tracks: [
      {
        id: '1-1',
        title: 'À qui?',
        duration: '3:45',
        audioUrl: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3',
        lyrics: `
J'songe à quitter cette terre 
J'suis sur le front et j'songe à quitter cette guerre

Il m'faut un gilet par balle, et que la vie se laisse faire
J'ai brisé ma lame, j'ai déchiré mes textes

J'ai fait pleurer madame v’nez admirer la bête
J'ai tout fait mécra, j'ai attisé la braise

À qui j'essaie d'plaire?

J'ai habillé mes peines,pour y cacher la larme
J'ai écouté mes pairs, j'y ai pas trouver ma place
avoir les mains sales, pour avoir les mains pleines
Parle-moi d'rêves, épargne moi l'cash

Car j'sais, moi aussi j'veux la vue sur cette mer
Mais je veux voir plus loin, voir plus simple 
Pourtant j'continue à m'imbiber de stress 
J'continue à m'abimer, à viser l'Everest 

À qui j'essaie de plaire ?

J’ai besoin d’naïveté
`,
      },
      {
        id: '1-2',
        title: "Je l'sais",
        duration: '4:12',
        audioUrl: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3',
        lyrics: `
Chaque jour j'fais la même chose 
J'sais même plus quoi en penser
Des pulsions et des névroses 
Ont tellement mit en danger je l'sais

Je l'sais

Et j'peux plus réparer les ponts 
Tout s’déchire sous les coutures
Réfugié dans la pénombre 
À quel point Ce monde est foutu je l'sais

Ce monde est foutu je l'sais

Loin de moi, loin de moi
Vos regards m'ont changé je les veux loin de moi
Prends c'que t'as à prendre mais prends soin de toi

Loin de moi, loin de moi
Pourquoi tout cacher garder la vérité loin de moi
Le temps fera son boulot, ca fera ça de moins
Oh ça fera ça de moins

Oh oh oh
Je me suis retrouvé dans des lieux où je ne m'attendais pas
Le monde est moins bruyant dans ses bras
L'absence a rapproché tandis que le temps sépare

Oh oh oh
Ne comptez pas sur moi ça fait un moment que j'fais semblant d'être là
Les poings serrés, c'est sans espoir
Mais sa douce voix me répète André ne t'en fais pas

Dis moi ce que tu veux
Dis moi ce que tu sais
J’ai besoin de t’entendre s’il te plaît parle moi

Dis moi ce que tu veux
Dis moi ce que tu sais
J’ai besoin de t’entendre j’t’en supplie parle moi


Je l'sais je l'sais
Plus rien n'sera pareil tout a changé même les saisons

Je l'sais j'l'sais je l'sais
Si j'ai mal c'est qu'j'ai fait mal, chaque chose arrive pour une raison

Je l'sais je l'sais
J'ai beau douter j'suis pas défini par mes songes

 je l'sais je l'sais je l’sais
J'realiserai que je n'sais rien dès l'instant où j'rentre à la maison

Oh oh oh
Je me suis retrouvé dans des lieux où je ne m'attendais pas
Le monde est moins bruyant dans ses bras
L'absence a rapproché tandis que le temps sépare

Oh oh oh
Ne comptez pas sur moi ça fait un moment que j'fais semblant d'être là
Les poings serrés, c'est sans espoir
Mais sa douce voix me répète André ne t'en fais pas

Dis moi ce que tu veux
Dis moi ce que tu sais
J’ai besoin de t’entendre s’il te plaît parle moi

Dis moi ce que tu veux
Dis moi ce que tu sais
J’ai besoin de t’entendre j’t’en supplie parle moi
`,
      },
      {
        id: '1-3',
        title: 'Retirer le pansement',
        duration: '3:58',
        audioUrl: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3',
        lyrics: `
Quelques temps dans mes pensées
Remplacer les pansements 
J'entends des voix manigancer
Pourquoi le vide est si tentant?

J'ai eu c'que j'attendais
Mais J'ai pas choisi cet embranchement 
C'est quoi d'se voir comme un étranger ?
C'est quoi d'être pris pour un pansement ?

Qui vivra s'en voudra, j'perd c'que j'ai à perdre 
J'ai pris du temps pour moi, c'était le mieux à faire

Loin de, loin de, loin de ce qui faisait c'que j'étais 
l'environnement où j'étais 

Il m'reste quelques idées dans la tête
Aucune conviction dont j'suis sûr
J'suis jamais tout seul dans ma merde
Y'a quelques noiraudes dans mes murs

J'ai que mes clés dans mes poches,
J'crois qu'j'ai pas les yeux devant les trous
Tout mon ressenti dans mes notes
Y'a plus rien sur mes joues

J'voulais retirer le pansement 

J'voulais retirer le pansement 

J'voulais retirer le pansement 

Mais la plaie n'a pas guérie 

Mais la plaie n’a pas guérie

J'ai pas l'habitude de décevoir 
Donc J'prends à cœur quand ça vient d'mes proches
J'me dis qu'j'vais changer dès ce soir 
Mais j'suis comme cette putain d'époque

J'ai jamais rêvé d'un miracle, J'ai toujours espéré le pire, 
Pour m'pousser à bouger, 
S'lever un jour et avouer tout c'que j'ai jamais voulu m'dire

Bloqué dans la routine j'tiens plus à grand chose
Si ce n'est une barre de bus
J'm'efforce de garder mon rêve éveillé à chaque phase de plus

Il m'reste quelques idées dans la tête
Une seule conviction dont j'suis sûr
J'suis jamais tout seul dans ma merde
Y'a quelques noiraudes dans mes murs

Y'a plus mes clés dans mes poches,
J'crois qu'j'ai pas les yeux devant les trous
J'ai tout vomi devant mes proches
Y'a plus rien sur mes joues

J'voulais retirer le pansement 

J'voulais retirer le pansement 

J'voulais retirer le pansement 

Mais la plaie n'a pas guérie 

Mais la plaie n'a pas guérie, j'veux gratter la croûte gros c'est terrible 
J'vagabonde comme un teille à la dérive

Oh la plaie n'a pas guérie, je le sais je vis mieux dans le déni 
Mais c'est pas comme ça qu'ça va s'embellir

Retirer le pansement, se blesser après 
Les blessures soignent et les temps changent mais que fait la peine?

Oh que fait la

J’en veux encore
Encore
Et encore
C’est que l’début
C’est pas fini, non
C’est pas fini
Non c’est pas fini
`,
      },
      {
        id: '1-4',
        title: 'Dormin',
        duration: '3:58',
        audioUrl: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3',
        lyrics: `
J'attends patiemment l'jour où j'me reconnaîtrai plus dans ces morceaux 
Des tâches sur les molaires et des douleurs dans les dorsaux
Une caresse sur la joue, une tapote sur le dos
Une larme récupérée sur l'doigt

Des mots égoïstes et insensés mais il fallait qu'ça sorte
Y'a plus aucune tacte quand la franchise fait parler d'la sorte
Fallait qu'ca sorte mais c'était avant d'mordre qu'fallait aboyer
J'sais c'que c'est d'pas vouloir soigner

Arrivé à un point tu trouves du réconfort dans l'échec
Mon monde est fade, à croire que j'aime quand c'est sec
J'met pas d'beurre dans mes pâtes, et j'met pas d'sauce dans mon riz
J'ai des vieux souvenirs et d'nouvelles odeurs dans mon lit

Le manque la joie la haine tout se cache sous nos pulls sombres

L'isolement ne fait que renforcer les pulsions

Une année d’plus ou moins dis moi qu'est-ce que ça changera 

J'comptais les jours comme quand j'étais petit en cances-va


J'ai besoin d'ressentir tout c'qui m'arrive
Alors je reste sobre dans les soirées 
Présent mais distant, il m'reste des souvenirs
Et y'a peu d'choses pour m'en séparer

Et dans les toilettes j'ai jeté les traitements 
Je m'éloigne continuellement d'ma mère elle veut être près d'moi
L'absence à créé le manque, j'reviendrai après un peu d'entraînement 
T'facon tout c'que j’ai fuis n'est pas très loin

Ne t'en fais pas, on finira par s'en sortir
Le regard vers le bas sur la corniche
Je n'arrive plus à savourer je n'arrive plus à dormir
Depuis que Wander est devenu Dormin

Et je le sais 
Toutes ces craintes ne me définissent pas

Mais Que faire
Quand L'environnement vampirise l'âme 

Quand les branches se brisent et que la ville est terne
Pitié ramenez moi à c’qui m'est cher

J'suis parti mais qu'en partie, J'représente pour mes camés
Voyager avec Chadi et faire du son avec Amé
C'qui manque c'est pas l'envie, mais j'peux l'jurer j'arrête jamais
Il m'reste des promesses à tenir, et quelques bails à réparer 

J'avais besoin d'changer pour moi, besoin changer pour eux
Ce soir c'est moi j'suis tout bleu, parce que le ciel est tout noir
J'avais les yeux fermés cherchant le bout du couloir
Faire changer les choses ma gueule bien sûr qu'j'ai ce pouvoir 
`,
      },
      {
        id: '1-5',
        title: '20h07 (feat. Amé)',
        duration: '3:58',
        audioUrl: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3',
        lyrics: `
Il est 20h07, les voisins dépeindent leurs scène de ménage
Je sais rien d'c'que j'fais, j'fais comme hier et demain j'le refait, c'est minable

Je sais qu'je m'égare, des souvenirs enfermées dans le sel de mes larmes
Le ciel se dégage, j'manie les mots j'suis pas fier de mes actes

J'ai banalisé la mort, la violence et l'abus
Y'a plus rien qui pourrait m'étonner

J'ai réussi à tuer un cactus 
Évidemment J'ouvre jamais les volets 

J'peux niquer ma voix pour un son, mon temps pour des sous et ma santé pour trouver le courage

 J'peux niquer ma vie si j'm'écoute 
J'peux niquer ma vie si j'm'écoute pas


Le temps passe, tout a changé, j’suis plus le même

Et si demain on flambe on fait avec

J’suis déjà loin, c’est mort plus d’retour en arrière

Bitch ce soir j'ai mal a la tête 
Je m'en fiche de t'voir j'n'irai pas à la fête 
Soir-ce j'vais cher-mar, j'vais chialer ou j'vais chill 'vec du son
J'veux m'exiler du monde

Trop matrixé par vos regards, vos jugements je n'suis pas moi même 
Quand je dis qu'ça va gros c'est parfois vrai
J'capterai la situation qu'trois mois après 

Tout ça c'est un mal pour un bien 
C'est la fin d'un chapitre c'est un mal pour un bien
Y'a des jours où j'le sais et des jours où ça repart pour un rien

J'me regarde à la 3eme personne et c'est pas beau
J'suis l'iceberg sur le trajet d'mon paquebot
Mes projets, mes carrières à la dérive 
J'fais du son dans 10 ans j'fais des tableaux 

J'ressens l'manque de sommeil
J'veux pas créer de personnage
J'échange jamais de message 
Avec ceux focus qu’sur l'oseille 

J'veux voir le reste d'la planète 
Marre de soulever des palettes
Pour l'instant j'règle les traumas
J'essaie de finir la tape

La mentale de la daronne les couilles de la daronne 
À part des coups j'ai rien pris de mon père 
Accroché à un rebord, attaché à des paroles 
Comme tous ceux qui s'voyaient pas vivre à long terme

Maintenant ça s'améliore, maintenant ça dépends de moi
J'ai tellement changé en deux mois
J'suis mort dans le 1 j'reviendrai dans le 3
J'ai tellement changé en deux mois

J'lui souris de façade mais j'suis mort au fond
J'crois qu'j'ai jamais trouvé un d'mes morceaux bons
Ça doit être pour ça que j'm'en fous de ma promo
J'emmerde les humains et j'dis steuplé aux robots

Ma soeur ne m'a pas vu grandir, j'vois pas grandir ma nièce
Dans mon coeur il y'a des gens partis, mais j'ai agrandi la pièce

Le temps passe, tout a changé, j’suis plus le même

Et si demain on flambe on fait avec

J’suis déjà loin, c’est mort plus d’retour en arrière

`,
      },
      {
        id: '1-6',
        title: 'Hauru',
        duration: '3:58',
        audioUrl: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3',
        lyrics: `
Chaque jour est différent, j'suis dans l'bon train 
J'suis dans la musique qui s'fait sans contraintes 
Pari sur moi c'est du trente contre un
J'suis un branleur qui s'prend en main

J’suis jeune et intestable, pas très stable
La money et oim sur la kisscam
Mais j'ai trop d'empathie pour les p'tits scams
Et j'ai bien trop d'love pour un disstrack

Hyperactif j'évite le sucre
Et j'perds le nord donc je vise le sud
J'fais un couplet d'batard et puis j'le suppr’
Il pleut pas jaune gros j'vous pisse dessus

Une grosse layette à ces enculés sur un piédestal
C'est la compèt du plus détestable 
J'veux voir du blanc et du bleu quand les caisses crames

Il fait froid froid dans la ville
Froid froid même les beau jours
J'garde le même coeur qu'Hauru

Ah il fait froid froid dans la ville
Froid qu'importe l'horaire 
J'abrite Calcifer sous la polaire

Il fait froid froid dans la ville
Froid froid même les beau jours
J'garde le même coeur qu'Hauru

Il fait froid froid dans la ville
Froid qu'importe l'horaire 
J'abrite calcifer sous la polaire

J'me suis fait tout frais, je me sens pas beau
J'suis entre le clou et le marteau 
J'suis entre la planche et le couperet

Mais dès que je le peux, j't'emmenerai la haut
Apprécier la verdure, observer les oiseaux 
Mais continuer d'emmerder les fachos

Han, le projet est naïf à souhait je m'en fous
J'ai besoin d'ça, je me tue assez dans c'trou
Devinez pourquoi
Je ne suis pas l'même devant vous

J'le redis j'aime pas vos regard d'escrocs 
J'en ai pas fini un j'suis sur 4 jet-pro
J'pourrai être le prince de ma ville
Ou être celui qui retarde le metro

Lessgo

Il fait froid froid dans la ville
Froid froid même les beau jours 
J'garde le même coeur qu'Hauru 

Fait froid froid dans la ville
Froid qu'importe l'horaire 
J'abrite Calcifer sous la polaire 

Il fait froid froid dans la ville
Froid froid même les beau jours
J'garde le même coeur qu'Hauru

Ici Toute l'année c'est hiver
Un jour Il faudrait s'y faire
Ouhoho
`,
      },
    ],
  },
  {
    id: '2',
    title: 'Hellebore Noire',
    titleImageUrl: '/public/ressources/image/hellebore_noire.png',
    releaseDate: '2024-07-03',
    coverUrl: '/public/ressources/cover/pochette_hellebore_noire.png',
    type: 'ep',
    streamingLinks: {
      spotify: '',
      appleMusic: '',
      youtubeMusic: 'https://www.youtube.com/watch?v=nE2AZZeJKnQ&list=PLV4hVbMxWokBAXdkgHFI770hokkwbDNoJ',
      deezer: '',
      tidal: '',
      soundcloud: 'https://soundcloud.com/example/ep',
    },
    ecrit:'Aulia',
    prod:'Osmar Milito, Hozan Yamamoto, Minako Yoshida, Eulàlia, Strawberry Path, Akai Tori, Yuji Ohno et Inuyasha',
    mix:'Amé',
    master:'Neptunes',
    remerciement:'',
    cover:'Mouton noire',
    label:'La lame et les outils',
    streamingEmbedLinks: {
    appleMusic: '',
    spotify: '',
    deezer:'',
},
    tracks: [
           {
         id: '2-1',
        title: 'Eclipse',
        duration: '3:19',
        audioUrl: '/public/ressources/music/Hellebore_Noire/1.eclipse.wav',
        lyrics: `
Les nuits sont courtes les jours s'entassent

Là où on stagne

Il s'est retrouvé tout en bas

C'est pas les pleurs qui vont l'sauver

Il s'est retrouvé tout en bas

Il observe les pétales s'envoler

Les pétales de l'hellébore noire


Un goût de sang sur les lèvres
On m'dit qu'le temps tue les rêves
J'dois raviver la flamme avant que je l'éteigne

Le temps tue les rêves, mais j'crois qu'ils sont déjà mort
Cet environnement me vide d'ma force
Il est 3 heure je fixe la porte


J'en savais trop et j'en parlais pas
J'étais en face des signes, j'les remarquais pas
J'suis confronté aux peurs que j'regardais pas


Donnez moi le monde j'aurai pas assez d'place
J'aurai pas assez d'time, je n'aime pas cette life
J'le répéterai encore et encore

Les vagues m'emportent, les vents me guident
J'suis pas à la mosquée les vendredis
J'ai la tête pleine et le ventre vide
D'où vient ce truc qui me prend au tripes?

Évidemment qu'j'suis n'importe qui 
J'ai peur d'la mort comme j'ai peur d'la vie

J'dessine un sourire naïf sur une fenêtre embuée
Le temps va l’effacer
J'suis à l'origine de c'qui est parti en fumée
Bref le passé est passé

J'm'attends au pire donc j'anticipe plus
J'ai pas l'insouciance d'un p'tit qui fume
J'commence par hasard ça n'en finit plus
Je suis à la fois la flamme et celui qui brûle

Je ne sais plus
Je ne sais plus 
J'ai jamais su
C'que j'vais faire du reste de ma vie
J'fonce dans le mur, 
Parce que j'ai pas les couilles de viser la vitre

Je m'en sort avec quelques coups dans l'dos j’me dégoute en m'écoutant trop
on m'esquive du regard comme un fou dans l'trom

J'ai fermé des plaies en en ouvrant d'autres
J’remets tout en cause j’vais tout foutre en l'air
Et j'm'en irai en claquant la porte comme un courant d'air

Derrière moi les enfers devant moi le brouillard
J'entends du bruit dans le couloir 
J'fais face à mes peurs mais j'suis toujours ce trouillard 
Mon bourreau s'approche avec une faux et un foulard

Mais j'suis toujours pas prêt moi
J'veux plus faire parti des proies
Face à chaque épreuve je me bats mais 
Après chaque bataille le morale décroît

Si j'arrête il me reste quoi?
J'suis plus souriant que je laisse croire
Mais c'soir, cette fois
La peur a éclipsé l'espoir

J'passe la nuit à méditer
J'passe ma vie à m’négliger
Tout c'temps à hésiter
Le silence blesse pas moins que la vérité

`,
      },
      {
        id: '2-2',
        title: 'Reste lucide',
        duration: '2:49',
        audioUrl: '/public/ressources/music/Hellebore_Noire/2.reste_lucide.wav',
        lyrics: `
Je ne veux pas de la vie de qui qu'ce soit
J'ai les proches j'ai la santé, pourtant j'suis triste ce soir
D'habitude la musique me soigne 

Mais qu'est ce que tu fiche? Reste lucide
Tes phantasmes ont des airs de suicide
J'guette le ciel, y'a presque plus d'signes
P'tetre j'hallucine, reste lucide

reste lucide, reste lucide 
reste lucide, reste lucide


J’mets de l'eau sur mon visage, et j'frotte 
Très fort
Comme si en ouvrant les yeux le monde se déformerait
Comme si je lavais mes bizarres et mes torts

Le miroir est brisé, le reflet net
À l'image de ce que je suis,
Ou ce que je fuis
Et je pose mes yeux sur une fleure ébène
Je lui donne l'engrais que mon coeur héberge
J'ai peur de l'échec, refaire mes erreurs serait bête, mais l'histoire se répète

On se ressemble et on diffère
Comme solidaire et solitaire
Tu penses beaucoup, t'es d'ceux qui s'taisent
dans tes yeux tout tes mots qui s’perdent

J'suis pas avide du cash, t'es pas avide du cash
Fait ce qui t'plait j'maitrise pas la vie qu'tu m'cache
Ni le talent, et le fric qu'tu gâche

Ma confiance en moi dans une fissure d'âme
Gava à qui tu parles?
Ça fait des années j'm'y habitues pas
J'suis pas à l'abri d'une balle

reste lucide, reste lucide 
reste lucide, reste lucide

J'déplace le bordel du fauteuil, j'ouvre les store pour le pot d'fleur
Entouré par tous mes posters, j'ai comme l'impression qu'ils m'observent 
J'en deviens austère 

Je fais mes lacets, j'mets une casquette mais y'a pas d'soleil
Je ne ressens pas l’sommeil
J'mets les bracelets, un écouteur dans chaque oreille

Aucune sécurité, j'ai désactivé l'alarme
J'ai essuyé la larme
Mon visage se reflète dans la lame
Lâche ça, les écoute pas c'est qu'une idée

Ressens-tu la pression? 
J'ai l'impression d'avoir un serpent qui remonte jusqu'à la gorge
Je pense à des choses qui n'ont aucun rapport

J'pense à ma mère, j'pense à ma mort
C'est pas la peine, j'en ai pas la force
C'est deux mondes opposés que sépare la porte 

Suis-je donc un faible qui parle d'abord
Agis jamais, j’bâtis ma peine

Elle est immense je
Devais être silencieux
Mais je claque la porte
`,
      },
      {
        id: '2-3',
        title: 'Hellébore Noire',
        duration: '4:46',
        audioUrl: '/public/ressources/music/Hellebore_Noire/3.hellebore_noire.wav',
        lyrics: `
J'suis déjà loin
loin du boucan les voix se mêlent au silence
J'suis loin, bien loin de mes confidents

Mais j'dois laisser derrière moi ce qui est derrière moi
Mais j'veux les enlacer, les embrasser pour une dernière fois 
C'est pas la même manière, mais c'est l'même choix
J'laisse mourir des liens une énième fois
Et quand je l'ai vu la dernière fois

Elle m'a dit t'es magique
Elle m'a dit qu'on est inséparables
J'ai pas su quoi dire, ni réagir j'me suis dit c'est la vie,
J'veux pas mais je sais qu'on devait passer par là 

Mes actions sont p'tetre dues à ce qui m'est arrivé jadis
T'facon le pire est à venir,

J'ai aiguisé la mine, quitté l’confort, j'sais pas si c'est l'bon choix, 
J'suis au pied d'la montagne j'peux viser la cime

J'suis gris et couvert comme le ciel de Paris
Les dents mal alignés, des dizaine de caries 
J'ai des qualités j'dois en tirer partie
J'ai trop guetté la fenêtre, donc j'ai brisé la vitre

Quitté ma ville, quitté l'asile 

Une belle jeune pousse, mais les pieds des passants ont abîmés la tige
Je m'éloigne des sentiers battus, là où j'ai pris mes racines

Cherche pas les motifs, j'pourrai pas t'les citer
Je ne sais même pas si j'pouvais décider
Tellement j'ai hésité, tellement j'ai hésité 

...
"
Le libre arbitre est une illusion aussi longtemps
Que l'on pense être la cause de nos agissements

L'être humain est capable de se rendre compte qu'il subit des influences qui vont orienter ses choix et ses actions 
Et cette conscience qu'il appelle la raison, elle fait toute la différence
Car c'est par la raison que l'homme accède à la liberté 
"


J'ai passé des frontières pour pas que la routine ne me rattrape
Loin des contraintes et des paperasses 
Loin du confort mais c'est pas grave

Je me déconnecte, et j'reconnecte ‘vec des humains,
J'parle pas leurs langues mais ces échanges me font du bien

J'ai falsifié l'affectif, mes goûts et mes émotions tellement d'fois
Je me sentais fictif, dans l'apparence comme si j'avais des bords noirs
J'ai pris du cash et une hellébore noire
Puis j'y suis aller, Le trajet sera long, 
Accompagne moi ô douce hellébore noire
Accompagne moi

Je m’sens bien
Mon autre vie m'attends 
Je profite de l'instant
Le fantôme est sorti de la chambre

J’me sens bien
Douce hellébore noire


C'est un voyage, c'est pas un suicide social,
J'apprécie ce qui nous entoure
Je m'y retrouve
Et j'm’y sens bien
`,
      },
      {
        id: '2-4',
        title: 'Parapluie',
        duration: '3:06',
        audioUrl: '/public/ressources/music/Hellebore_Noire/4.parapluie.wav',
        lyrics: `
Construit sur des erreurs, j'regrette plus les mots dit
J'leur souhaite le meilleur, au fond j'veux les maudire
J'ai ramené cette fleure, je devais te l'offrir
J'ai oublié mes pleurs, oublié nos rires

J'écris au papier j'ai jeté mon téléphone
38 appels manqués, venaient des 4 mêmes personnes
Un vieux viens m'parler, pour m'dire qu'les efforts
Qu'il a fait, sont vains, et qu'tout ce qu'on fait l'désole

J'l’écoute à moitié,car l'vieux est médisant
J'le laisse aboyer, puis je prends mes distances 
Et j'pars sans au revoir il s'met à pleuvoir

J'vais où le vent me guide
J'vais là où mes jambes me traînent
J'suis parti un vendredi 
J'sais pas si je rentrerai

Mais je prends le risque
Quitte à c'qu'on me perde


Les saisons défilent
Les plaies sont recousues
J'ai rompu des liens
J'ai fait des coups d'pute

J'interprète les signes
Je sais bien qu'on est foutus
J'ai donné du mien
J'ai pas eu c'que j'ai voulu

Les saisons défilent
Les plaies sont recousues
J'ai rompu des liens
J'avoue j'ai fait des coups d'pute

J'interprète les signes
Je sais bien qu'on est foutus
J'ai donné du mien
J'ai pas eu c'que j'ai voulu


C'était soit l'ennui, soit la fuite
J'sais que c'était lâche
Plus rien m'paralyse
Ni ne guide mes pas
J’m'éloigne d’leur paradis
Il m'reste un peu d'place
sous l'parapluie
En dessous d'mon parapluie
Il m'reste un peu de place...

Sous le parapluie
`,
      },
      {
        id: '2-5',
        title: 'Bad ending',
        duration: '3:59',
        audioUrl: '/public/ressources/music/Hellebore_Noire/5.bad_ending.wav',
        lyrics: `
C'est comme ça que ça fini?
L'hellébore noire s'met à faner
Ai-je atteint ma limite
Vais-je rejoindre les damnés

Je ne vois plus le temps passer
Tant mieux si on m'a remplacé
J'endure, je me sens plus
Et c'est pas la faute du vent glacé 

J'ai entassé tout mes souvenirs d'enfant 
Et mes espoirs d'antan, dans c'grand panier
La p'tite voix veut l'enflammer
Petite enfoirée

L'esprit est toujours calfeutré
Dans mon corps, j'suis aveuglé
Mais assez fort pour m'donner le droit d'pleurer

Le ciel s'allume, mon monde s'éteint 
Mais je m'en fous
T'façon je préfère les mauvaises fins

Plus rien n'importe, j'ai passé la porte, j'ai épuisé ma force sans doute à tort, mais c'est pas grave j'ressens plus la corde qui m'attachait
J'me suis caché j'me suis cassé
Je ne pourrai jamais devenir l'homme que j'aurai dû être
Je ne regrette pas, je sais que j'aurai jamais pû l'être

L'éclipse est passé le soleil n'est pas revenu
une partie d'moi voulait partir, je l'ai pas retenue
Observer toute cette merde a fait d'moi un fataliste
En fait avant de quitter leur monde j'étais déjà parti

Si tout s'arrête, c'est mon destin
Et j'm'en fous
T'façon je préfère les…



Quelles sont ces voix féminines qui me parlent
Depuis mon départ elles ne me quittent pas

J'ai cherché les réponses dans des phrases complexes
La fuite c'est ma façon de perdre
J'suis face contre terre 
J'me sens relevé par les bras d'mon père 



J'me sens libre et étriqué 
J'me sens libre et étriqué
J'peux plus raviver la flamme
J'ai déjà vidé l'briquet 

L'étincelle va disparaître
Arrivé seul,parti pareil
Après tout ce chemin 
J'sais toujours pas ce qui m'amène

Cherchant la lumière mon regard se perd 
Nan j'sais pas c'que j'ai
Y'a une part de vrai, une part de rêve 
Sois j'me réveil sois je renais

J'ai les oreilles bouchées 
J'sens la lumière m'toucher
J'crois qu'il est grand temps d'aller s'coucher

J’essaie de m’
J'essaie de m’canaliser,
Ce pèlerinage c'est le prix du mal que j'ai banalisé

J'peux bouger mais j'me sens paralysé 
C'est bizarre j'ai l'impression qu'ça m'est déjà arrivé

J'ai lâché la plume j'prends l'couteau
Tout un voyage pour comprendre qu’j'suis mon propre bourreau 

J'cotoie l'infini ou c’qui semble l'être 
J'perds mes repères, j'craint mon père mais j'lui ressemble peut-être

J’me sens léger j’me sens inépuisable
J'suis jeune et puissant, tout autour de moi s'embrase et j'en suis l'épicentre 

J'en suis la cause et j'en suis l’résultat
J'me faisais du mal, pour des sois disant bonne raison c'est un paradoxe 

Et puis, j'revois la porte
Encore une fois j'pense à des choses qui n'ont aucun rapport

Mais rien n'importe rien n'importe 
J'me sens divin plus rien n'm'arrête a part la 
`,
      },
    ],
  },
  {
    id: '3',
    title: 'Hantu Kamar',
    titleImageUrl: '/public/ressources/image/hantu_kamar.png',
    releaseDate: '2023-09-09',
    coverUrl: '/public/ressources/cover/pochette_hantu_kamar.jpg',
    type: 'ep',
    streamingLinks: {
      spotify: 'https://open.spotify.com/intl-fr/album/6Kxb5sl5gHdo6Z4NH2rJZt?si=xwzONhJTRoGjySA7b5UuTw',
      appleMusic: 'https://music.apple.com/fr/album/hantu-kamar/1732176349?ls',
      youtubeMusic: 'https://www.youtube.com/watch?v=fBgGKxY5Q20&list=OLAK5uy_kR5wxWqd077tcbALfEkipizFOD20kwG1g',
      deezer: 'https://www.deezer.com/us/album/550650002',
      tidal: '',
      soundcloud: 'https://soundcloud.com/aulia11/sets/492bafe8-6821-478a-b03b-eddadc2c390a',
    },
    ecrit:'Aulia',
    prod:'Lil Chick, Amé',
    mix:'Amé',
    master:'Amé',
    remerciement:'Cupid',
    cover:'Mouton noire, Margaux Peleau',
    label:'La lame et les outils',
    streamingEmbedLinks: {
    appleMusic: 'https://embed.music.apple.com/fr/album/hantu-kamar/1732176349',
    spotify: 'https://open.spotify.com/embed/album/6Kxb5sl5gHdo6Z4NH2rJZt?utm_source=generator&theme=0',
    deezer:'https://widget.deezer.com/widget/auto/album/550650002',
    
},
    tracks: [
     {
        id: '3-1',
        title: 'Perception',
        duration: '2:56',
        audioUrl: '/public/ressources/music/Hantu_Kamar/1.perception.wav',
        lyrics: `
L'impression qu'j'me relève, gars p'tetre j'm'effondre
Du point de vue de la lumière je cache mes ombres
Tout dépend de la perception
Tout dépend de la perception
Tout dépend de la perception
Tout dépend de la perception

J'veux qu'ma voix agresse les ondes
Gros c'est à toi qu's'adresse mes sons
J'vais refaire le monde avec mes songes
Le ciel avant l'averse est sombre

Cyborg monté à l'envers
Un artiste qui se cherchait à s'en perdre
J'aimais pas les adultes avant d'l'être
J'les aimes encore moins retrouve moi dans l'oeil d'la tempête

J'vois tout a l'envers à croire qu'ma tête est en bas
Le logo est sur l'étendard, aimable mais pas fréquentable
J'suis investi, mes poils s'hérissent dès que j'en parle
Les problèmes se ramènent avec les temps calmes

L'histoire se répète
C'qui leur est différent se fait taire
Ta vérité est propre à ce que tu préfères
J'aspire à la lumière comme un trou noir

T'inquiètes plus pour moi
Les potes disparaissent avec les pourquois
J'finis c'que j'commence j'me retourne pas
Mais c'est pas avec l'obsession que les doutes partent

Non non
Pour y arriver faut que j'décide d'y croire
J'combat une flemme rédhibitoire, 
J'étudie les sciences et j'écris l'histoire

Le regard dans le vide est sanguinolant
J'vais pas mieux dormir en vendant du rêve
J'suis l'produit d'mon environnement
C'est l'enfant d'mon époque, pas l'enfant du siècle
J'pensais pas mentir autant 
J'suis un de ces anges descendant du ciel

Des nuances de rouge dans un monde noir et blanc
Un détail peut faire foirer l'plan 
J'ai la flamme est ce que tu vois l'essence
Face au danger tu constate une foi naissante

L'unique et première version
Ma différence n'est pas perversion
Le ciel pendant l'averse s'effondre
Bienvenue dans ma perception
`,
      },
      {
        id: '3-2',
        title: 'Le feu et le sang (feat. Amé)',
        duration: '2:33',
        audioUrl: '/public/ressources/music/Hantu_Kamar/2.le_feu_et_le_sang.wav',
        lyrics: `
On a commencé ensemble
Quand on chante on change l'ambiance de la pièce comme un encens
Flow tranchant
Flow changeant
On devient pas meilleur en le pensant

Depuis l'commencement j'suis al, j'suis absent qu'aux manquements
J'suis fast, toi t'arrives trop lentement
J'ai que des frères, je veux pas d'fausses ententes
J’sais même pas si j’veux qu'on m'entendent, merde!

J'bat des ailes j'prends mon envol je sais pas si je m'en sortirai 
J'suis high puis je redescends
C'est un peu décevant, comme mon adolescence,

J'ai de l'essence pour tracer, tout cramer j'vais y laisser que des cendres 
Je m'en irai dans l'feu et l'sang
Tes blessures je les sens

Ma breuch’ c'est un bordel
L'veau-cer aussi c'est un bordel
J'vise leur tête comme une balle en corner
Tu t'perds si tu parle encore d'elle

J'suis pas dans tes barèmes
T'facon mon gava c'est pareil
Tu verras nos raps et nos ganaches apparaître
J'bataille dans l'arène j'ai perdu si j'attrape aucun rêve

Le ciel commence à s'embraser 
J’suis sur terre pas qu'pour songer
J’rêve de m'évader 
Au loin j’revois le fantôme du passé

Jamais je m'arrête je suis clean comme un coup franc dans les arrêts d'jeu
J'ai rêvé de ce carré bleu.
Depuis, je n'ai plus rien d'un paresseux 
J'vais là où l'horizon sépare les cieux

Pour dompter mes désirs j'ai des envies tirés par les cheveux 
J'suis sur ma route donc restez à l'écart messieurs
Le talent suffit pas c'est comme l'envie d'aller mieux

Parti pour un long voyage
Parti pour une très longue aubaine
Et je me demande si ce voyage en vaut vraiment la peine ? 
J'ai du m'barrer vers la grèce
J'ai pris le large, j'ai que ma tête
Quelques vers 
T’sais j’ai qu'une seule quête et quelques verset 

Juste une dernière bouteille , j’suis déjà bourré d'idées nouvelles
Puis j'ai jeté ma bouteille à la mer, vers de nouvelles contrées, 
Moi et la sérénité prenons deux chemins parallèles 
Il reste des vagues à affronter, j'noie mes pensées elles vont remonter

Gosse de banlieue, mais pas d'un vilain tieks
J'connais pas les iencli en file indienne
Chacun sa vie donc vie la tienne
J'ai du chemin pourvu qu'mes Fila tiennent

J'ai des ambitions gars j'vais pas suivre la trend
On m'a dit qu'chaque jour suffit sa peine
Climat tiède, impossible qu'ils m'atteignent
C'que j'observe, c'que j'écoute, ma vie l'impregne

J'ai faim ramenez moi d'la prod
J'te gifle avec le gant du roi d'la pop
Nos liens dans le ciment, souvenirs lancinant
Y'a plus d'réponses quand j'toque à la porte

J'ai un message et ma voix la porte
J'ai rien vécu si je croise la mort
Ma mémoire est immense
J'laisse parler le silence
Si on m'demande c'que la foi m'apporte
`,
      },
      {
         id: '3-3',
        title: 'Sourire',
        duration: '2:33',
        audioUrl: '/public/ressources/music/Hantu_Kamar/3.sourire.wav',
        lyrics: `
J'suis sur un chemin qu'on m'a indiqué à tort
J'vais pas rester là à admirer ma mort
Je tiens le coup, j'ai retiré la corde
J'ai la tête dur comme un triceratops

J'ai misé ma force dans la rime et la forme
J’crache ce feu pour illuminer ma torche, j'vais me niquer la gorge
J'veux m'tirer d'la, ici c'est vla moche
Nique une amorce, je vais kicker la porte

Y'a pas de maquette, tout est dans ma tête
J'ai tout fais dans ma chambre
Rien ne m'arrête, je cours à ma perte j'doute pas de ma chance
Dedans les mêmes questions, dehors même saison, gros c'est intense
Chacun sa version, gros j'ai l'impression, que rien n'change

Ne me demande pas pourquoi j'ai l'seum
J'ai le troisième oeil, j'ai la laxvision
Loin de mes addictions, et de ma mission
J'ai l'impression mais j'suis loin d'être seul

Dans le partage pas d'celui qui augmente les doses
dès qu'elle sourit je ressens des choses
j'aurai notre monde entre mes paumes
Ils sont derrière ne peuvent que planter le dos

Pas vicieux mais j'suis pas la nonne frère 
Je viens de Paname nord
C’est n'importe quoi, est-ce que j'apporte au rap
Aussi peu que c'que le rap m'apporte, merde

Lequel de mes choix changera la donne
J'suis au delà d'la norme, j'graille des pastabox
J'suis à ma fenêtre comme une parabole
Et j'écoute pas c'que l'état radote

Ma liberté en quarantaine, et ma santé entre parenthèses
Les paroles sont insensés quand je vois ce que les actes enseignent, putain

La pluie et beau temps comme un arc en ciel
J'suis un roi sans couronne j'suis un mage sans sceptre
Je vais m'barrer car rien ne m'empêche
Et nan rien ne m'empêche
Allez viens j't'emmène

Dès que je veux dormir, le réveil sonne
Pff Le travail ça pardonne pas,
Je le fais comme qui? Comme Personne
Oh nan je le fais pas comme toi

La rage vient après l'seum, la bêtise impressionne
J'ai pris du niveau depuis maladresse

Je n'aime pas vos dresscode, on joue plus je press stop
Je fais rien grossir à part ma graisse

J'suis dans l'indécence j'suis dans la descente
Cette life n'a aucun vrai sens
J'me fous la pression mais y'a rien d'stressant
J'aborde ma chance en l'agressant

Gros je suis matrixé, j'en ai passé des étés sombre
Le projet sera mal mixé, mais il sera fait maison

J'ai la flamme ça me consume comme une bougie
Aulia, Amé, la lame et les outil
On va retarder l'arrêt d'la toupie
Faut que tout brille, à tout prix

Un regard peut tout dire, un chemin va s'ouvrir
Ma vie un film, mes textes c'est les sous-titres
J'garde les plaies, le reste c'est des souvenirs
On va le faire, avec le sourire
`,
      },
      {
         id: '3-4',
        title: 'Interlude',
        duration: '1:14',
        audioUrl: '/public/ressources/music/Hantu_Kamar/4.interlude.wav',
        lyrics: `
Le soleil à atteint le zénith
Les regrets ont éteint le désir
On s'cotoie on s'évite, au besoin on s'fait signe
Mais C'est pas mon délire

Des erreurs des erreurs des erreurs
Un endetté qui ouvre la porte,
Eve qui goûte la pomme
J'voulais sonner l'alarme mais elle coule d'abord

Les malheurs nous dévorent chaque jour mais nous rapprochent
J'vois la mort d'l'amour, et l'amour de la mort

On subit on survit, on s'unit,
Vas-y coupe la prod
`,
      },
      {
         id: '3-5',
        title: 'Le fantôme de ma chambre',
        duration: '2:48',
        audioUrl: '/public/ressources/music/Hantu_Kamar/5.le_fantome_de_ma_chambre.wav',
        lyrics: `
J'me morfond dans le paysage, parmis les passants
Muet comme un sans visage, j'm'évade en marchant
J'm'investis en sachant qu'j'vais laisser passer ma chance
J'suis le seul fantôme qui se cache dans ma chambre

J'me dois d'être solide ouais,
Un peu moins solitaire, gros j'maudit c'terme
Le bien et l’mal, j'sais plus c'que mon cerveau discerne

Quand le silence se marque, des anges sifflent à mon oreille
J’suis voué à técla comme ce ballon qui monte au ciel

Le coeur apaisé par une caresse, un regard qui tue la paresse
Ça me détruit mais j'ai remis une pièce dans l'appareil
J'peux remplacer les absents j’sais qu'ça sera pas pareil
Y'a le malheur et le mal-être, la valeur et le paraître

Le ciel est masqué par la capuche ou la casquette
Donc je sais pas s'il est gris ou bien de couleur pastel
Je doute et j'angoisse pourtant jamais je m'arrête
Où est ce que ça va m'mener, si jamais je lâchais la manette

Un jour tout c'que j'ai fuis me rattrapera,
Qu'importe le drame gars j'me dis que c'est pas grave
J'suis que d’passage,donc j'voudrais laisser ma trace
C'est macabre, je sais pas si j'suis l'âme ou le cadavre

Je cours,
Incertain d'une destination
J'ai fini d'me fier aux estimations
J'me laisse porter loin de l'hésitation

Je recherche l'équilibre
Je me casse très loin d'ici, l'impression qu'j'suis invisible
Je cours et je cours mais la course est infini
À force d'accélérer j'ai dépassé mes limites

J'enchaîne mieux les galères
Ma montre n'est pas à l'heure
J'ai la salive amer
Leurs vie n'a pas d'saveur

J'laisserai pas un salaire
Définir ma valeur
Putain j'en ai pas l'air
Mais j'vais faire un malheur

Alors
J'accélère
Oh ouais j'accélère
J'sais toujours pas si j'vais dans le bon sens
J'continue de perra qu'importe qui me comprends

Et nos vies se condensent
J'fais des bonnes actions que mes vices compensent
On rêve à défaut de dire c'qu'on pense
Bébé rejoins moi, on est triste on danse

J'irai jamais trop vite, 
Ressens la liberté comme dans un métro vide
J'vis ma vie comme s'il fallait qu'j'profite
J'dis qu'c'est impossible puis j'improvise 

J'donne vie a des mots
Et j'enterre les souvenirs
J'peux pas taire mes défauts
J'peux ramener le sourire

J'te parle de vrai chose
Mais Je vais pas tout dire
J'ai commencé l'jet-pro 
Donc je vais l'aboutir

Comme vous j'suis égoïste 
Mais j'ressens l'empathie
Le talent c'est un plus
L'envie c'est bien mieux

La vie est injuste
Si la vie est un jeu
J'vais changer les règles
Et puis quitter la partie

`,
      },
      {
         id: '3-6',
        title: 'Si je reste',
        duration: '2:45',
        audioUrl: '/public/ressources/music/Hantu_Kamar/6.si_je_reste.wav',
        lyrics: `
Mon coeur a ses raisons, là où ma tête a ses torts
Comme les miens j’aime pas les ordres et encore moins ceux qui les font
Ce monde est sombre, dehors tout est mort
Au fil du temps j'me fond dans l'décor car chez moi tout s'effondre

Et y'a un sens à cette vie j'ai pas d'doute
Beaucoup d'erreur de parcours car le vice est partout
Mais j'oublie pas mon épopée part d'où
L'enfer c'est les autres, mais on l'est pas tous
Si la fin est belle, la manière n'est pas douce

Ma seul prison est cérébrale, j'vais pas baisser les bras
Faire ce projet c'est accomplir ce que j'espérais d'moi
J'm'en fout des chiffres j'aurai laissé mes traces
Nouveau départ nouvelle sauvegarde, les anciennes donnés on les écrases

J'm'ecarte des apparences pour garder c'qu'il me reste d'humanité, 
J'crois en l'amour, j'crois en l'amitié
Si un futur existe, on l'a niqué, j'me suis fait à l'idée
Donc j'vis l'instant présent, comme ça j'm'y plaît

A quoi sert la peur t'as la réalité, dis moi?
À quoi sert de paniquer?
J'observe les étoile et leurs vanité, eh J'oublie les lois de la gravité

J'sais plus c'que j'suis sensé croire, envahi par des pensées noirs,
J'me raccroche dans l'espoir, et mes textes en témoignent
J'suis dans la matrice débranchez moi, mes chances s'éloignent 
J'ai des proches mais j'dois avancer d'moi

D'moi seul, et si elles sont contre moi j'm'en fout de c'que les voix veulent, 
j'ai la foi, j'peux l'faire et j’reste moi quelque soit l'turf
J'connais la peur d'avoir peur, les angoisses, pleurs
S'il vous plaît ce soir laissez moi seul

Seul, j'marche, autour les plus belles fleurs fanent
J'veux pas rattraper le retard, je sais que l'heure tarde
Un jour faudra que j'parte mais mes textes ne meurent pas
Dis moi, que vois-tu quand tu me regardes?

Quand tu me regardes

J'suis l'flemmard rattrapé par les enjeux
J'suis l'demon noir habité par des anges

L'asphalt noirci sous les premières gouttes qu'annonce l'averse
Ou Au passage de mon ombre sous son inverse

Vagabond dans les rues de ma ville
Je navigue et j'fais durer la nuit
Faut qu'je brise les murs de l'asile

Que vais-je devenir si je reste là ?
Que vais-je devenir si je reste là ?

Que vais-je devenir?
Que vais-je devenir?
`,
      },
      {
         id: '3-7',
        title: 'Sommeil (feat. Cupid)',
        duration: '2:25',
        audioUrl: '/public/ressources/music/Hantu_Kamar/7.sommeil.wav',
        lyrics: `
Les notes de pianos m'emportent cette nuit au fil de la mélodie sans que je n'y résiste
Elles deviennent de plus en plus intenses
Je m'envole, je me perds loin de ce monde mort, loin de la terre entière
Et pendant un instant, toutes les voix se taisent

J'ai besoin
J'ai besoin d'aide mais
C'est plus simple 
De pas l'admettre
Et d'rester seul en cachant ses blessures internes

Quel erreur

Rien est grave
A part le silence
Suis-je esclave
Des sentiments
J'ai besoin d'elle, Je ne veux plus jamais faire semblant

J'ai des regrets, et des doutes qui s'accumulent
Insomnie qui perdure, aux côtés d'la lune

Je me suis perdu en chemin, suis-je si loin du sommet?
Finir comme Icare ou Sulfura suis-je si loin du soleil?
le marchand de sable vends du rêve, j'ai besoin de sommeil, 

J'ai besoin…
`,
      },
    ],
  },
  {
    id: '4',
    title: 'Retirer le pansement',
    titleImageUrl: '/public/ressources/image/retirer_le_pansment.png',
    releaseDate: '2025-07-03',
    coverUrl: '/public/ressources/cover/pochette_retirer_le_pansement.jpg',
    type: 'single',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example3',
      appleMusic: 'https://music.apple.com/album/example3',
      youtubeMusic: 'https://music.youtube.com/watch?v=example3',
      deezer: 'https://deezer.com/track/example3',
      tidal: 'https://tidal.com/track/example3',
      soundcloud: 'https://soundcloud.com/example/track',
    },
    ecrit:'Aulia',
    prod:'Peril',
    mix:'Amé',
    master:'Neptune',
    remerciement:'Elyo',
    cover:'Aulia miniature, la daronne',
    label:'La lame et les outils',
    streamingEmbedLinks: {
    appleMusic: '',
    spotify: '',
    deezer:'',

},
    tracks: [
      {
        id: '4-1',
        title: 'Retirer le pansement',
        duration: '4:06',
        audioUrl: '/public/ressources/music/single/retirer_le_pansement.wav',
        lyrics: `
Quelques temps dans mes pensées
Remplacer les pansements 
J'entends des voix manigancer
Pourquoi le vide est si tentant?

J'ai eu c'que j'attendais
Mais J'ai pas choisi cet embranchement 
C'est quoi d'se voir comme un étranger ?
C'est quoi d'être pris pour un pansement ?

Qui vivra s'en voudra, j'perd c'que j'ai à perdre 
J'ai pris du temps pour moi, c'était le mieux à faire

Loin de, loin de, loin de ce qui faisait c'que j'étais 
l'environnement où j'étais 

Il m'reste quelques idées dans la tête
Aucune conviction dont j'suis sûr
J'suis jamais tout seul dans ma merde
Y'a quelques noiraudes dans mes murs

J'ai que mes clés dans mes poches,
J'crois qu'j'ai pas les yeux devant les trous
Tout mon ressenti dans mes notes
Y'a plus rien sur mes joues

J'voulais retirer le pansement 

J'voulais retirer le pansement 

J'voulais retirer le pansement 

Mais la plaie n'a pas guérie 

Mais la plaie n’a pas guérie

J'ai pas l'habitude de décevoir 
Donc J'prends à cœur quand ça vient d'mes proches
J'me dis qu'j'vais changer dès ce soir 
Mais j'suis comme cette putain d'époque

J'ai jamais rêvé d'un miracle, J'ai toujours espéré le pire, 
Pour m'pousser à bouger, 
S'lever un jour et avouer tout c'que j'ai jamais voulu m'dire

Bloqué dans la routine j'tiens plus à grand chose
Si ce n'est une barre de bus
J'm'efforce de garder mon rêve éveillé à chaque phase de plus

Il m'reste quelques idées dans la tête
Une seule conviction dont j'suis sûr
J'suis jamais tout seul dans ma merde
Y'a quelques noiraudes dans mes murs

Y'a plus mes clés dans mes poches,
J'crois qu'j'ai pas les yeux devant les trous
J'ai tout vomi devant mes proches
Y'a plus rien sur mes joues

J'voulais retirer le pansement 

J'voulais retirer le pansement 

J'voulais retirer le pansement 

Mais la plaie n'a pas guérie 

Mais la plaie n'a pas guérie, j'veux gratter la croûte gros c'est terrible 
J'vagabonde comme un teille à la dérive

Oh la plaie n'a pas guérie, je le sais je vis mieux dans le déni 
Mais c'est pas comme ça qu'ça va s'embellir

Retirer le pansement, se blesser après 
Les blessures soignent et les temps changent mais que fait la peine?

Oh que fait la

J’en veux encore
Encore
Et encore
C’est que l’début
C’est pas fini, non
C’est pas fini
Non c’est pas fini
`,
      },
    ],
  },
  {
    id: '5',
    title: '03_nov_24',
    titleImageUrl: '/public/ressources/image/03_nov.png',
    releaseDate: '2023-09-12',
    coverUrl: '/public/ressources/cover/pochette_3_nov_24.jpg',
    type: 'single',
    streamingLinks: {
      spotify: 'https://open.spotify.com/track/example4',
      appleMusic: 'https://music.apple.com/album/example4',
      youtubeMusic: 'https://music.youtube.com/watch?v=example4',
      deezer: 'https://deezer.com/track/example4',
      tidal: 'https://tidal.com/track/example4',
      soundcloud: 'https://soundcloud.com/example/track2',
    },
    ecrit:'Aulia',
    prod:'Eeryskies',
    mix:'Amé',
    master:'Neptune',
    remerciement:'',
    cover:'C moi wsh',
    label:'La lame et les outils',
    streamingEmbedLinks: {
    appleMusic: '',
    spotify: '',
    deezer:'',

},
    tracks: [
      {
        id: '5-1',
        title: '03_NOV_24',
        duration: '4:17',
        audioUrl: '/public/ressources/music/Single/3_Nov_24.mp3',
        lyrics: `
Hun hun chaque jour est le même 
Hun hun j'dois trouvez ce pez
Et j'vois mes chances me passer sous les yeux Qu'j'baisse
Giflez moi si un jour j'dis que j'pouvais le faire 

Sale, sale comme les rivières du Gange
J'ai perdu des gens qu'j'aime éperdument 
Prends du temps pour toi
Mais plus j'ai d'temps libre plus je perds du temps

Les cours le taffe, Les Allers retours 
La sique Les tals La famille les amis les aléas 
J'irai bien me cacher mais j'ai passé l'age
L'excès la pression à force rends désagréable 

C't'année j'ai plus d'anniversaire début novembre 
J'me couche, j'me réveil la boule au ventre 
Mais la boule comble pas le vide pour autant

J'suis sobre , mais j'ai quand même mes cercles vicieux , les cernes les p'tits yeux,
J'ai des doutes j'mentirai d'me dire pieux 
Moi j'veux juste faire l'skeudi qu'j'veux
Et p'tetre devenir vieux

C'est beau d'avoir des rêves, c'est moins beau d'se tuer en les réalisant 
C'est moins beau quand ta miff te trouvera distant
J'finirai seul avec des chats et des talismans

Hun hun chaque jour est le même 
Hun hun j'dois trouver ce pez
Et j'vois mes chances me passer sous les yeux Qu'j'baisse
Giflez moi si un jour j'dis que j'pouvais le faire 

Sale, sale comme les rivières du Gange
J'ai perdu des gens qu'j'aime éperdument 
Prends du temps pour toi
Mais plus j'ai d'temps libre plus je perds du temps

Changement épatant
J'ai grandi bien vite ptn j'en demandais pas tant
j'suis toujours un gosse quand j'entends mes parents 
Franchement c'est navrant 
C'est déjà un exploit si je rentre dans les quarantes

Déphasé l'impression qu'j'suis décalé d'une heure 
Mauvais mélange entre la fierté la pudeur
J'suis dans mon lit, duper 
Désormais ma vie est dictée par mes humeurs

Loin du RER, d'la foule pitié ramenez moi au fin fond d'Hyrule
Le cerveau stimulé en continu,
J'veux m'poser observer le monde qui brule

Hyperactif, le calme et l'silence ramène les regrets
Et les craintes que j'ai mis dans l'dernier EP
J'ai couru j'ai tout fait 
Résultat j'ai failli finir après un REP

Hun hun chaque jour est les mêmes 
Hun hun j'dois trouver ce pez
Et j'vois mes chances me passer sous les yeux Qu'j'baisse
Giflez moi si un jour j'dis que j'pouvais le faire 

Sale, sale comme les rivières du Gange
J'ai perdu des gens qu'j'aime éperdument 
Prends du temps pour toi
Mais plus j'ai d'temps libre plus je perds du temps


Dans mon lit j'veux faire des pompes 
Et quand j'suis en cours j'veux faire des sommes
Quand j'suis Au taffe j'veux faire du son
Et une fois Au stud j'veux faire un somme

Dans mon lit j'veux faire des pompes 
Et quand j'suis en cours j'veux faire des sommes
Quand j'suis Au taffe j'veux faire du son
Et une fois Au stud j'veux faire un somme
        `,
      },
    ],
  },
//   {
//     id: '5',
//     title: "Des choses à m'dire (feat. Amé)",
//     titleImageUrl: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg',
//     releaseDate: '2024-04-01',
//     coverUrl: 'https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg',
//     type: 'feat',
//     streamingLinks: {
//       spotify: 'https://open.spotify.com/track/example5',
//       appleMusic: 'https://music.apple.com/album/example5',
//       youtubeMusic: 'https://music.youtube.com/watch?v=example5',
//       deezer: 'https://deezer.com/track/example5',
//       tidal: 'https://tidal.com/track/example5',
//       soundcloud: 'https://soundcloud.com/example/collab1',
//     },
//     ecrit:'Amé, Aulia',
//     prod:'Amé',
//     mix:'Amé',
//     master:'',
//     remerciement:'',
//     cover:'',
//     label:'La lame et les outils',
//     tracks: [
//       {
//         id: '5-1',
//         title: "Des choses à m'dire",
//         duration: '3:55',
//         audioUrl: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3',
//         lyrics: `City lights shine bright tonight
// Guiding us through endless streets
// Every corner tells a story
// Every moment feels complete`,
//       },
//     ],
//   },
//   {
//     id: '6',
//     title: 'le meilleur featuring c est toi et moi <3',
//     titleImageUrl: 'https://images.pexels.com/photos/1626481/pexels-photo-1626481.jpeg',
//     releaseDate: '2024-03-15',
//     coverUrl: './ressources/cover/love.jpg',
//     type: 'feat',
//     streamingLinks: {
//       spotify: 'https://open.spotify.com/track/example6',
//       appleMusic: 'https://music.apple.com/album/example6',
//       youtubeMusic: 'https://music.youtube.com/watch?v=example6',
//       deezer: 'https://deezer.com/track/example6',
//       tidal: 'https://tidal.com/track/example6',
//       soundcloud: 'https://soundcloud.com/example/collab2',
//     },
//     tracks: [
//       {
//         id: '6-1',
//         title: 'Ocean Waves',
//         duration: '4:10',
//         audioUrl: 'https://storage.googleapis.com/media-session/sintel/snow-fight.mp3',
//         lyrics: `Waves crash on distant shores
// Calling me to explore more
// Ocean breeze in my hair
// Taking me anywhere`,
//       },
//     ],
//   },
];

export const clips: Clip[] = [
  {
    id: '1',
    title: 'Hauru',
    titleImageUrl: '/public/ressources/image/hauru.png',
    thumbnailUrl: '/public/ressources/image/hauru_screen.png',
    videoUrl: 'https://youtu.be/lmqYHcqF-FU?si=vqWCWdHmwumkKlkB',
    releaseDate: '2024-03-15',
    lyrics: `
Chaque jour est différent, j'suis dans l'bon train 
J'suis dans la musique qui s'fait sans contraintes 
Pari sur moi c'est du trente contre un
J'suis un branleur qui s'prend en main

J’suis jeune et intestable, pas très stable
La money et oim sur la kisscam
Mais j'ai trop d'empathie pour les p'tits scams
Et j'ai bien trop d'love pour un disstrack

Hyperactif j'évite le sucre
Et j'perds le nord donc je vise le sud
J'fais un couplet d'batard et puis j'le suppr’
Il pleut pas jaune gros j'vous pisse dessus

Une grosse layette à ces enculés sur un piédestal
C'est la compèt du plus détestable 
J'veux voir du blanc et du bleu quand les caisses crames

Il fait froid froid dans la ville
Froid froid même les beau jours
J'garde le même coeur qu'Hauru

Ah il fait froid froid dans la ville
Froid qu'importe l'horaire 
J'abrite Calcifer sous la polaire

Il fait froid froid dans la ville
Froid froid même les beau jours
J'garde le même coeur qu'Hauru

Il fait froid froid dans la ville
Froid qu'importe l'horaire 
J'abrite calcifer sous la polaire

J'me suis fait tout frais, je me sens pas beau
J'suis entre le clou et le marteau 
J'suis entre la planche et le couperet

Mais dès que je le peux, j't'emmenerai la haut
Apprécier la verdure, observer les oiseaux 
Mais continuer d'emmerder les fachos

Han, le projet est naïf à souhait je m'en fous
J'ai besoin d'ça, je me tue assez dans c'trou
Devinez pourquoi
Je ne suis pas l'même devant vous

J'le redis j'aime pas vos regard d'escrocs 
J'en ai pas fini un j'suis sur 4 jet-pro
J'pourrai être le prince de ma ville
Ou être celui qui retarde le metro

Lessgo

Il fait froid froid dans la ville
Froid froid même les beau jours 
J'garde le même coeur qu'Hauru 

Fait froid froid dans la ville
Froid qu'importe l'horaire 
J'abrite Calcifer sous la polaire 

Il fait froid froid dans la ville
Froid froid même les beau jours
J'garde le même coeur qu'Hauru

Ici Toute l'année c'est hiver
Un jour Il faudrait s'y faire
Ouhoho`,
  },
];

export const playlists: Playlist[] = [
  {
    id: 'pl1',
    title: 'Merci la musique',
    coverUrl: 'public/ressources/cover/pochette_merci_la_musique.jpg',
    description: "C'est de l'internationale, met ça en aléatoire",
    streamingLinks: {
      spotify: 'https://open.spotify.com/playlist/0t8ET06WZrFnLiYB47Scg1?si=907b86d75c974436',
      appleMusic: 'https://music.apple.com/fr/playlist/merci-la-musique/pl.u-leyl0J8iMJybg7N',
      //youtubeMusic: 'https://music.youtube.com/playlist/example',
      //deezer: 'https://deezer.com/playlist/example',
      //tidal: 'https://tidal.com/playlist/example',
      soundcloud: 'https://soundcloud.com/aulia11/sets/bonnemusique-fm/s-WKvQizPhI49?si=7afe5ff855a64f6881ab1a612eac7b28&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  },
  {
    id: 'pl2',
    title: 'Veritable Banger',
    coverUrl: 'public/ressources/cover/pochette_veritable_banger.png',
    description: "pcq y'avait pas que la tektonik fin 2000",
    streamingLinks: {
      spotify: 'https://open.spotify.com/playlist/7teCnuSe8JkFNV7oO25jhk?si=3c5465f03fd54ede',
      appleMusic: 'https://music.apple.com/fr/playlist/les-v%C3%A9ritables-bangers-tu-peux-pas-rester-sto%C3%AFque/pl.u-leyl13AIMJybg7N',
      //youtubeMusic: 'https://music.youtube.com/playlist/example2',
      deezer: 'https://www.deezer.com/us/playlist/13590858321?host=4427479782&deferredFl=1',
      //tidal: 'https://tidal.com/playlist/example2',
      soundcloud: 'https://soundcloud.com/aulia11/sets/les-veritables-bangers-tu-peux',
    },
  },
  {
    id: 'pl3',
    title: '22',
    coverUrl: 'public/ressources/cover/pochette_22.jpg',
    description: '22 piges, malheureusement',
    streamingLinks: {
      spotify: 'https://open.spotify.com/playlist/3Jto9i4tvZx8a3oE3dpXbJ?si=999ae104578a4741',
      appleMusic: 'https://music.apple.com/fr/playlist/22/pl.u-6mo4lD8i8J7xleN',
      //youtubeMusic: 'https://music.youtube.com/playlist/example2',
      //deezer: '',
      //tidal: '',
      soundcloud: 'https://soundcloud.com/aulia11/sets/22a1/s-d9E6Ivmfi23?si=88632e555ed3415f8733ff6f570217c4&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    },
  },
  {
  id: 'pl4',
    title: 'C(pas encore)7MERD',
    coverUrl: 'public/ressources/cover/pochette_beau.jpg',
    description: 'morceaux pas finis et maquettes nulles',
    streamingLinks: {
      soundcloud: 'https://soundcloud.com/aulia11/sets/c-pasencore-7merd/s-tTQCHvU8U14?si=9f78ae920e0641d7a8221c2206764dcd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    }
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return musicProjects.find(project => project.id === id);
};

export const getProjects = (): Project[] => {
  return musicProjects.filter(project => project.type !== 'single' && project.type !== 'feat');
};

export const getSingles = (): Project[] => {
  return musicProjects.filter(project => project.type === 'single');
};

export const getFeats = (): Project[] => {
  return musicProjects.filter(project => project.type === 'feat');
};

export const getClipById = (id: string): Clip | undefined => {
  return clips.find(clip => clip.id === id);
};

export const getPlaylistById = (id: string): Playlist | undefined => {
  return playlists.find(playlist => playlist.id === id);
};