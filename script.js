const boutonCommencer = document.getElementById("commencer");
const accueilCard = document.getElementById("accueilCard");
const rechercheCard = document.getElementById("rechercheCard");
const boutonChercher = document.getElementById("chercher");
const champNom = document.getElementById("nomMembre");
const messageErreur = document.getElementById("messageErreur");

const membres = [
  {
    nom: "SIMAY",
    postnom: "MOURA",
    prenom: "JOSIANE",
    promotion: "",
    poste: "Présentatrice",
    commission: "Communications"
  },

  {
    nom: "MASANKA",
    postnom: "BITEMA",
    prenom: "TEGRA",
    promotion: "L2 FED",
    poste: "Vidéaste secondaire",
    commission: "Communications"
  },

  {
    nom: "Kandolo",
    postnom: "Mapana",
    prenom: "Jocelyne",
    promotion: "L3 Droit",
    poste: "Rédactrice",
    commission: "Communications"
  },

  {
    nom: "Kidiadi",
    postnom: "Masivi",
    prenom: "Manuella",
    promotion: "L3 Droit",
    poste: "Rédactrice",
    commission: "Communications"
  },

  {
    nom: "Kanyinda",
    postnom: "Ngoyi",
    prenom: "Hogla",
    promotion: "M2 SPO",
    poste: "",
    commission: "Relations publiques"
  },

  {
    nom: "Mulowayi",
    postnom: "",
    prenom: "Rachel",
    promotion: "M1 CS",
    poste: "",
    commission: "Relations publiques"
  },

  {
    nom: "KANKU",
    postnom: "MUKOLE",
    prenom: "Dalucia",
    promotion: "",
    poste: "",
    commission: "Relations publiques"
  },

  {
    nom: "Olonga",
    postnom: "Wa-latuyalaka",
    prenom: "Jaël",
    promotion: "M2 FED",
    poste: "",
    commission: "Relations publiques"
  },

  {
    nom: "Mpoy",
    postnom: "Kapinga",
    prenom: "Princesse",
    promotion: "M1 Droit",
    poste: "",
    commission: "Relations publiques"
  },

  {
    nom: "SUNG NI-HAN",
    postnom: "NKWEY",
    prenom: "Victoire",
    promotion: "L2 Droit",
    poste: "",
    commission: "Secrétariat"
  },

  {
    nom: "PIKA",
    postnom: "VETULUAKA",
    prenom: "Pistis",
    promotion: "M1 SPO",
    poste: "",
    commission: "Secrétariat"
  },

  {
    nom: "META",
    postnom: "KASANDA",
    prenom: "DAVINA",
    promotion: "L2 FED",
    poste: "Secrétaire ELF",
    commission: "Secrétariat"
  },

  {
    nom: "KABEY",
    postnom: "SALA",
    prenom: "Lys",
    promotion: "",
    poste: "Adjoint(e)",
    commission: "Trésorerie"
  },

  {
    nom: "KHANDI",
    postnom: "MBIKILA",
    prenom: "Florentine",
    promotion: "L3 Droit",
    poste: "",
    commission: "Protocole"
  },

  {
    nom: "GHATA",
    postnom: "NGANDA",
    prenom: "MARIE-ANTOINETTE",
    promotion: "L2 FED",
    poste: "",
    commission: "Protocole"
  },

  {
    nom: "Badianga",
    postnom: "Kumbu",
    prenom: "Divine",
    promotion: "L2 FED",
    poste: "",
    commission: "Protocole"
  },

  {
    nom: "MUANZA",
    postnom: "BABAKA",
    prenom: "DILEOVIE",
    promotion: "",
    poste: "",
    commission: "Protocole"
  },

  {
    nom: "Kalukodi",
    postnom: "Yaya",
    prenom: "Marie Michelle",
    promotion: "L2 FED",
    poste: "",
    commission: "Protocole"
  },

  {
    nom: "Lupembe",
    postnom: "Asia",
    prenom: "Maria",
    promotion: "M1",
    poste: "",
    commission: "Protocole"
  },

  {
    nom: "AMINI",
    postnom: "LWANGA",
    prenom: "JESSICA",
    promotion: "",
    poste: "",
    commission: "Protocole"
  },

  {
    nom: "Aniboti",
    postnom: "Lifoka",
    prenom: "Prisca",
    promotion: "",
    poste: "",
    commission: "Protocole"
  },

  {
    nom: "Minduku",
    postnom: "Nyimi",
    prenom: "Tony-Michaël",
    promotion: "M1 SPO",
    poste: "Adjoint",
    commission: "Sensibilisation"
  },

  {
    nom: "LOKONDO",
    postnom: "BOFENDA",
    prenom: "Giovanny",
    promotion: "M2 Droit",
    poste: "",
    commission: "Sensibilisation"
  },

  {
    nom: "SAKANDADIENO",
    postnom: "NTIAKULU",
    prenom: "GLOIRE",
    promotion: "L2 Droit",
    poste: "",
    commission: "Sensibilisation"
  },

  {
    nom: "Mabesi",
    postnom: "Zivutuka",
    prenom: "Jerbie",
    promotion: "L2 FED",
    poste: "",
    commission: "Sensibilisation"
  },

  {
    nom: "Kompani",
    postnom: "Kompani",
    prenom: "Marina",
    promotion: "L2 FED",
    poste: "",
    commission: "Sensibilisation"
  },

  {
    nom: "Lamiel",
    postnom: "Antal",
    prenom: "Lilas",
    promotion: "M1 SPO",
    poste: "",
    commission: "Sensibilisation"
  },

  {
    nom: "CIAMA",
    postnom: "KANYIKI",
    prenom: "Marie-Corinne",
    promotion: "L3 FED",
    poste: "",
    commission: "Logistique"
  },

  {
    nom: "MATABARO",
    postnom: "FURAHISHA",
    prenom: "Avelange",
    promotion: "L3 FED",
    poste: "",
    commission: "Logistique"
  }
];

boutonCommencer.addEventListener("click", function () {
  accueilCard.style.display = "none";
  rechercheCard.style.display = "block";
  champNom.focus();
});

boutonChercher.addEventListener("click", rechercherMembre);

champNom.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    rechercherMembre();
  }
});

function rechercherMembre() {
  const recherche = normaliserNom(champNom.value);

  if (recherche === "") {
    afficherErreur(
      "Entre ton nom et ton prénom pour retrouver ton résultat."
    );
    return;
  }

  const motsRecherche = recherche
    .split(" ")
    .filter(Boolean);

  const membreTrouve = membres.find(function (membre) {
    const nom = normaliserNom(membre.nom);
    const prenom = normaliserNom(membre.prenom);
    const postnom = normaliserNom(membre.postnom || "");

    const motsNom = nom.split(" ").filter(Boolean);
    const motsPrenom = prenom.split(" ").filter(Boolean);
    const motsPostnom = postnom.split(" ").filter(Boolean);

    const motsIdentite = [
      ...motsNom,
      ...motsPostnom,
      ...motsPrenom
    ];

    return motsRecherche.every(function (mot) {
      return motsIdentite.includes(mot);
    });
  });

  if (membreTrouve) {
    messageErreur.style.display = "none";
    afficherResultat(membreTrouve);
  } else {
    afficherErreur(
      "Nous n'avons pas retrouvé ce nom. Vérifie l'orthographe de ton nom et de ton prénom."
    );
  }
}

function afficherErreur(message) {
  messageErreur.textContent = message;
  messageErreur.style.display = "block";
}

function normaliserNom(nom) {
  return String(nom || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_’']/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function blocInfo(label, valeur) {
  if (!valeur) {
    return "";
  }

  return `
    <div class="resultat-item">
      <p class="resultat-label">${label}</p>
      <p class="resultat-valeur">${valeur}</p>
    </div>
  `;
}

function afficherResultat(membre) {
  rechercheCard.innerHTML = `
    <img
      src="images/logo-dynamique.png"
      alt="Logo Dynamique Femme UCC"
      class="logo-dynamique"
    >

    <p class="annee">
      DYNAMIQUE FEMME UCC • 2026 — 2027
    </p>

    <span class="badge-felicitation">
      CANDIDATURE RETENUE 🎉
    </span>

    <h2 class="nom-resultat">
      Félicitations, ${membre.prenom} !
    </h2>

    <p class="description">
      Nous avons le plaisir de t'annoncer que ta candidature a été retenue
      pour rejoindre la <strong>Dynamique Femme UCC</strong>
      pour l'année 2026-2027.
    </p>

    <div class="resultat-box">
      ${blocInfo("TA COMMISSION", membre.commission)}
      ${blocInfo("TON POSTE", membre.poste)}
      ${blocInfo("TA PROMOTION", membre.promotion)}
    </div>

    <p
      class="description"
      style="margin-top: 28px; margin-bottom: 10px;"
    >
      Bienvenue dans l'équipe. Nous avons hâte de construire cette nouvelle
      année avec toi 💙
    </p>

    <button
      class="retour-btn"
      onclick="location.reload()"
    >
      Rechercher un autre nom
    </button>
  `;
}
