const boutonCommencer = document.getElementById("commencer");
const accueilCard = document.getElementById("accueilCard");
const rechercheCard = document.getElementById("rechercheCard");
const boutonChercher = document.getElementById("chercher");
const champNom = document.getElementById("nomMembre");
const messageErreur = document.getElementById("messageErreur");

const membres = [
  { nom: "SIMAY", prenom: "Josianne", promotion: "", poste: "Présentatrice", commission: "Communications" },
  { nom: "Mansuka", prenom: "Tegra", promotion: "L2 FED", poste: "Vidéaste secondaire", commission: "Communications" },
  { nom: "Kandolo", prenom: "Jocelyne", promotion: "L3 Droit", poste: "Rédactrice", commission: "Communications" },
  { nom: "Kidiadi", prenom: "Manuella", promotion: "L3 Droit", poste: "Rédactrice", commission: "Communications" },
  { nom: "Kanyinda", prenom: "Hogla", promotion: "M2 SPO", poste: "", commission: "Relations publiques" },
  { nom: "Mulowayi", prenom: "Rachel", promotion: "M1 CS", poste: "", commission: "Relations publiques" },
  { nom: "Dalucia", prenom: "Kanku", promotion: "", poste: "", commission: "Relations publiques" },
  { nom: "Jael", prenom: "Olonga", promotion: "M2 FED", poste: "", commission: "Relations publiques" },
  { nom: "Sung Ni-Hang", prenom: "Victoire", promotion: "L2 Droit", poste: "", commission: "Secrétariat" },
  { nom: "Pika", prenom: "Pistis", promotion: "M1 SPO", poste: "", commission: "Secrétariat" },
  { nom: "Metta", prenom: "Davina", promotion: "L2 FED", poste: "Secrétaire ELF", commission: "Secrétariat" },
  { nom: "Kabey", prenom: "Sala Lys", promotion: "", poste: "Adjoint", commission: "Trésorerie" },
  { nom: "Khandy", prenom: "Florentine", promotion: "L3 Droit", poste: "", commission: "Protocole" },
  { nom: "Ghata", prenom: "Marie Antoinette", promotion: "L2 FED", poste: "", commission: "Protocole" },
  { nom: "Badianga", prenom: "Divine", promotion: "L2 FED", poste: "", commission: "Protocole" },
  { nom: "Mwanza", prenom: "Dileovie", promotion: "LAU", poste: "", commission: "Protocole" },
  { nom: "Kalukodj", prenom: "Marie Michelle", promotion: "L2 FED", poste: "", commission: "Protocole" },
  { nom: "Lupembe", prenom: "Asia Maria", promotion: "M1", poste: "", commission: "Protocole" },
  { nom: "Amini", prenom: "Jessica", promotion: "", poste: "", commission: "Protocole" },
  { nom: "Aniboti", prenom: "Prisca", promotion: "", poste: "", commission: "Protocole" },
  { nom: "Minduku", prenom: "Tony-Michael", promotion: "M1 SPO", poste: "Adjoint", commission: "Sensibilisation" },
  { nom: "Lokondo", prenom: "Giovanni", promotion: "M2 Droit", poste: "", commission: "Sensibilisation" },
  { nom: "Sakandadu", prenom: "Gloire", promotion: "L2 Droit", poste: "", commission: "Sensibilisation" },
  { nom: "Mabesi", prenom: "Gerbie", promotion: "L2 FED", poste: "", commission: "Sensibilisation" },
  { nom: "Kompani", prenom: "Davina", promotion: "L2 FED", poste: "", commission: "Sensibilisation" },
  { nom: "Lamiel", prenom: "Lilas", promotion: "M1 SPO", poste: "", commission: "Sensibilisation" },
  { nom: "Ciama", prenom: "Marie Corinne", promotion: "L3 FED", poste: "", commission: "Logistique" },
  { nom: "Matabara", prenom: "Avelange", promotion: "L3 FED", poste: "", commission: "Logistique" }
];

boutonCommencer.addEventListener("click", function () {
  accueilCard.style.display = "none";
  rechercheCard.style.display = "block";
  champNom.focus();
});

boutonChercher.addEventListener("click", rechercherMembre);

champNom.addEventListener("keydown", function (event) {
  if (event.key === "Enter") rechercherMembre();
});

function rechercherMembre() {
  const nomEntre = normaliserNom(champNom.value);

  if (nomEntre === "") {
    afficherErreur("Entre ton nom complet pour consulter ton résultat.");
    return;
  }

  const motsEntres = nomEntre.split(" ").sort().join(" ");

  const membreTrouve = membres.find(function (membre) {
    const identite = normaliserNom(`${membre.nom} ${membre.prenom}`);
    const motsMembre = identite.split(" ").sort().join(" ");
    return identite === nomEntre || motsMembre === motsEntres;
  });

  if (membreTrouve) {
    messageErreur.style.display = "none";
    afficherResultat(membreTrouve);
  } else {
    afficherErreur(
      "Nous n'avons pas retrouvé ce nom. Vérifie l'orthographe et assure-toi d'entrer ton nom complet."
    );
  }
}

function afficherErreur(message) {
  messageErreur.textContent = message;
  messageErreur.style.display = "block";
}

function normaliserNom(nom) {
  return nom
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-_’']/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function blocInfo(label, valeur) {
  if (!valeur) return "";
  return `
    <p class="resultat-label">${label}</p>
    <p class="resultat-valeur">${valeur}</p>
  `;
}

function afficherResultat(membre) {
  rechercheCard.innerHTML = `
    <img src="images/logo-dynamique.png" alt="Logo Dynamique Femme UCC" class="logo-dynamique">
    <p class="annee">DYNAMIQUE FEMME UCC • 2026 — 2027</p>

    <span class="badge-felicitation">CANDIDATURE RETENUE 🎉</span>

    <h2 class="nom-resultat">Félicitations, ${membre.prenom} !</h2>

    <p class="description">
      Nous avons le plaisir de t'annoncer que ta candidature a été retenue pour rejoindre
      la <strong>Dynamique Femme UCC</strong> pour l'année 2026-2027.
    </p>

    <div class="resultat-box">
      ${blocInfo("TA COMMISSION", membre.commission)}
      ${blocInfo("TON POSTE", membre.poste)}
      ${blocInfo("TA PROMOTION", membre.promotion)}
    </div>

    <p class="description" style="margin-top: 28px; margin-bottom: 10px;">
      Bienvenue dans l'équipe. Nous avons hâte de construire cette nouvelle année avec toi 💙
    </p>

    <button class="retour-btn" onclick="location.reload()">
      Rechercher un autre nom
    </button>
  `;
}
