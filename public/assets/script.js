/**
 *  Show navbar
**/

const header = document.querySelector(".primary-header")
const hero = document.querySelector(".parallax")

const heroOptions = {
  rootMargin: "-40px 0px 0px 0px"
};

const observer = new IntersectionObserver(function(
  entries
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("scrolling-header");
    } else {
      header.classList.remove("scrolling-header");
    }
  });
},
heroOptions);

observer.observe(hero);


/**
 *  Button scroll to top
**/

const btnUp = document.getElementById("scrollToTop")

btnUp.addEventListener("click",function() {      
  window.scroll({
    top: 0,
    behavior: "smooth",
  })
})

/**
 *  Buttons scroll to
**/

const btnScrollToLife = document.querySelectorAll(".scrollToLifeSection")
const lifeSection = document.getElementById("life")

for (let k = 0; k<btnScrollToLife.length; k++){
  btnScrollToLife[k].addEventListener("click",function() {      
    lifeSection.scrollIntoView({behavior: "smooth"})
  })
}

const btnScrollToContact = document.querySelectorAll(".scrollToContactSection")
const contactSection = document.getElementById("contact")

for (let l = 0; l<btnScrollToContact.length; l++){
  btnScrollToContact[l].addEventListener("click",function() {      
    contactSection.scrollIntoView({behavior: "smooth"})
  })
}


/**
 *  Life section 
**/

let journey = [
    {
        "date":"2016",
        "title":"2016 : mes débuts dans le monde du travail",
        "school":"J’entre en <B>licence Métiers du Conseil en Elevage</B>, après avoir fait un <B>BTS Productions Animales</B>. A ce moment, je souhaitais travailler dans le milieu agricole, plus particulièrement en élevage porcin.<br> Pour valider cette formation, <B>j’ai réalisé</B> une étude afin d’évaluer l’impact de la biosécurité chez les éleveurs de Porélia, un groupement d’éleveurs.",
        "work":"J’ai effectué cette licence en <B>alternance au sein du groupement d’éleveur Porélia</B>. J’y occupais alors le poste d’<B>assistante technique</B>, mon rôle était de réaliser les bilans techniques des éleveurs. Mon statut d’alternante m’a aussi permis d’accompagner les techniciens et la vétérinaire du groupement lors de leurs interventions en élevage.",
        "skills": "Cette année d’alternance m’a permis de découvrir le <B>travail en entreprise</B> ainsi que l’organisation d’un groupement."
    },
    {
        "date":"2017",
        "title":"2017-2020 : l’élevage et moi, du rêve à la réalité",
        "school":"Je venais de finir mes études et je ne pensais pas y retourner un jour, j’étais sûre d’avoir trouvé ma voie !",
        "work":"J’occupe mon premier poste en élevage porcin conventionnel, en tant que <B>responsable de maternité</B>. Mon rôle était de m’occuper des <B>truies et de leurs porcelets, de la mise-bas au sevrage</B>. Après 1 an, je choisi de me tourner vers l’<B>élevage porcin biologique</B>, et j’intègre la ferme de Vourc’h Vras. Géré par une seule personne, ce petit élevage était divisé en deux grands pôles : la vente des produits en cycle court et la gestion de l’élevage. Ma mission était de l’appuyer sur la partie élevage, j’étais donc <B>responsable des animaux</B>, de leur alimentation à leurs soins. Mais ce métier passionnant n’en est pas moins difficile, ce qui m’a causé des problèmes de dos, je suis donc contrainte de me reconvertir.",
        "skills":"Je retire beaucoup de ces expériences,  l’<B>organisation et le travail d’équipe</B> pour mener à bien toutes les tâches qui font fonctionner un élevage. L’<B>attention et la persévérance</B> dont on a parfois besoin pour le soin des animaux. Aussi la <B>débrouillardise</B> lorsque des réparations sont nécessaires. Enfin l’<B>anticipation</B> pour mieux prévoir l’imprévu."
    },
    {
        "date":"2020",
        "title":"2020-2022 : une page blanche à écrire",
        "school":"Pour préserver ma santé, <b>je choisis en 2020 de changer de métier</b>. Je souhaites alors <b>reprendre des études</b> pour évoluer dans un nouveau domaine, mais, à ce moment, je ne sais pas encore lequel. C’est une période pendant laquelle je me renseigne sur mes possibilités, quel métier pourrait me plaire et comment y accéder.",
        "work":"En attendant de savoir quelle suite professionnelle donner à ma vie, <b>je travaille en magasin</b>, d’abord en tant qu’<b>employée de rayon</b> pendant un an, où mes tâches consistent a remplir les rayons, gérer les commandes, les demandes des clients et les venues des commerciaux me présentant leurs produits. Je change ensuite de poste pour passer <b>préparatrice de commandes</b> drive pendant un an, mon rôle est alors de gérer la préparation des commandes, leur réception par les clients, la communication en cas d’erreur dans une commande ou de conflit avec un client.",
        "skills":"Ces postes m’ont permis de développer ma capacité à travailler en équipe, à <b>gérer des situations conflictuelles</b>, aussi à organiser mon temps et <b>prioriser les tâches</b>."
    },
    {
        "date":"2022",
        "title":"2022-2023 : nouveau départ",
        "school":"En septembre 2022, je commence une nouvelle vie à My Digital School et j’entre en <b>première année du bachelor cycle Web et Multimédia</b>. L’intitulé est flou mais l’idée est de se former aux <b>métiers du numérique</b> : de la création graphique, au développement web en passant par la communication digitale.<br>Nos cours se résument souvent par des projets fictifs que nous devons mener à bien, seuls ou en groupe de quatre, <b>je réalise ainsi des maquettes de sites</b> vitrines ou e-commerce et <b>j’intègre plusieurs projets utilisant différents langages</b> tels que HTML, CSS, JavaScript, PHP, SQL et outils comme WordPress.",
        "work":"Parallèlement à mes nouvelles études, je continue de travailler en magasin les week-ends. Je n’ai plus de poste fixe puisque je deviens un <b>renfort des équipes rayon et drive</b>. Mon rôle devient donc de soutenir l’équipe qui en a le plus besoin lorsque je suis là, passant parfois d’un poste à l’autre quand c’est nécessaire.<br>Pour valider ma première année, je réalise un <b>stage de 8 semaines dans l’agence Galopin</b>.",
        "skills":"Cette première année est pour moi la découverte des différentes étapes de la création d’un site web, du maquettage à l’intégration, en passant par le SEO. J’apprend énormément et mets mes nouvelles compétences au services de plusieurs projets."
    },
    {
        "date":"2023",
        "title":"2023-2024 : sur la bonne voie",
        "school":"J’entame désormais ma deuxième année de bachelor et me <b>spécialise dès janvier 2024</b><strong> en développement web</strong>. L’année se poursuit sur la même lancée que l’année précédente, avec de <b>nombreux projets, concrets ou fictifs</b>. J’ai déjà réalisé plusieurs projets, en HTML, Vue.js, React.js et WordPress-Elementor. J’ai aussi eu l’occasion de participer à une Game Jam pour laquelle nous avons utilisé le moteur Godot, et son langage gdScript.",
        "work":"En parallèle, je continue de travailler au magasin, toujours en renfort les week-ends.<br>En revanche cette année, l’école nous propose un <b>projet fil rouge</b>, pour lequel nous devons répondre, en groupe, au besoin d’un client réel. Dans ce cadre, mes comparses et moi-même travaillons à la <strong>réalisation d’un site pour le Dédale</strong> (café-boutique de jeux).",
        "skills":"En ce début d’année, j’ai réalisé des projets en utilisant des techniques variées, comme l’intégration d’un site en HTML/CSS, un répertoire de la filmographie du studio Ghibli en <b>Vue.JS</b>, un blog suivant le <b>modèle MVC en PHP/SQL</b> et en utilisant la librairie Bootstrap, une app web en <b>React.JS</b> avec NextUI et Tailwind ou encore un site WordPress-Elementor."
    }
];

const blocButton = document.getElementById("arrow-date");

function createDate(array){
  for (let i = 0; i<array.length; i++){
    newDiv = document.createElement("div")
    newDiv.classList.add("flex", "flex-col", "dateButton")
    newDiv.id = i
    newDiv.innerHTML = `
      <p>`+ array[i].date +`</p>
      <svg class="dot" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_743_60)">
          <path d="M1.72071 1.45082C1.94564 1.2259 3.12652 0.112493 4.94845 2.81548e-05C7.28772 -0.13493 8.87348 1.49581 9.42455 2.06938C9.97563 2.64295 11.5501 4.2512 11.4039 6.66919C11.2577 9.13217 9.45829 10.5605 9.17713 10.7742C7.50141 12.0563 5.08341 12.4161 3.08154 11.3927C0.922212 10.3018 0.303655 8.13124 0.179944 7.67013C-0.146204 6.39928 0.0449862 5.33086 0.179944 4.67857C0.359888 3.80134 0.60731 2.53049 1.72071 1.43958V1.45082Z"/>
        </g>
        <defs>
          <clipPath id="clip0_743_60">
            <rect width="11.4152" height="12" fill="red"/>
          </clipPath>
        </defs>
      </svg>
    `;
    
    blocButton.appendChild(newDiv)

    const button = document.getElementsByClassName("dateButton");
    let data = array[i];
    const blocData = document.getElementById("bloc-date");
    
    button[i].addEventListener("click",
    function(){
      blocData.innerHTML = ``
      blocData.innerHTML = `
        <h3>`+ data.title +`</h3>
        <div class="flex" id="school">
            <img class="icon" src="../public/assets/img/icons/school.png">
            <p>`+ data.school +`</p>
        </div>
        <div class="flex" id="work">
            <img class="icon" src="../public/assets/img/icons/work.png">
            <p>`+ data.work +`</p>
        </div>
        <div class="flex" id="idea">
            <img class="icon" src="../public/assets/img/icons/idea.png">
            <p>`+ data.skills +`</p>
        </div>
      `
    })
  }
}

createDate(journey);

const allBlocDate = document.querySelectorAll(".dateButton")
allBlocDate.forEach(el => el.addEventListener("click", function(){
  for (let j = 0; j<allBlocDate.length; j++){
    if (allBlocDate[j].classList.contains("active")){
      allBlocDate[j].classList.remove("active");
    }
  }
  this.classList.add("active");
}));