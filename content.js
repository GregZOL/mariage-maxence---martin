// Contenu textuel centralisé pour l'ensemble du site (nav, pages, formulaires).
// Chaque page vient puiser ici les libellés, titres, descriptions et placeholders.
(function () {
  const content = {
    shared: {
      brandMark: "Maxence & Martin",
      brandNames: "Maxence & Martin",
      brandSub: "Chambon-sur-Cisse, Loir-et-Cher",
      nav: {
        home: "Accueil",
        program: "Programme",
        venue: "Lieu",
        dresscode: "Dress Code",
        rsvp: "RSVP",
      },
      footer: {
        home: "Accueil",
        events: "Programme",
        rsvp: "RSVP",
      },
    },

    home: {
      eyebrow: "31 juillet - 3 août 2026",
      title: "Mariage de Maxence & Martin",
      location: "Chambon-sur-Cisse, Loir-et-Cher",
      description:
        "Un long week-end au cœur du Loir-et-Cher pour célébrer notre mariage entourés de nos proches.",
      buttons: {
        program: "Découvrir le programme",
        rsvp: "Confirmer ma présence",
      },
      info: {
        date: { label: "Date", value: "31 juillet - 3 août 2026" },
        location: { label: "Lieu", value: "Chambon-sur-Cisse, Loir-et-Cher" },
        dresscode: { label: "Dress code", value: "Tenue chic et estivale" },
      },
      side: {
        title: "Infos rapides",
        items: [
          "Cérémonie à l’église Saint-Secondin (Valencisse) le samedi à 16h.",
          "Vin d’honneur, dîner et soirée à La Poterie, Chambon-sur-Cisse.",
          "Gare la plus proche : Blois-Chambord (15 min en voiture).",
          "En voiture : environ 2h15 depuis Paris.",
        ],
      },
    },

    eventsPage: {
      eyebrow: "Programme du week-end",
      title: "Le programme",
      intro:
        "Trois jours pour se retrouver, trinquer et faire la fête ensemble.",
      items: [
        {
          image: "assets/event_1.jpg",
          day: "Vendredi 31 juillet",
          name: "Verre d'accueil",
          time: "À partir de 18h",
          description:
            "On se retrouve pour un premier verre et lancer le week-end en douceur.",
          location: "Le Molineuf",
          dresscode: "Tenue détendue",
        },
        {
          image: "assets/event_2.jpg",
          day: "Samedi 1er août",
          name: "Messe de mariage",
          time: "16h",
          description:
            "Cérémonie à l’église Saint-Secondin, entourés de nos proches.",
          location: "Eglise Saint-Secondin, Valencisse",
          dresscode: "Tenue chic",
        },
        {
          image: "assets/event_3.jpg",
          day: "Samedi 1er août",
          name: "Vin d’honneur, dîner et soirée",
          time: "À partir de 18h",
          description:
            "Le grand moment à La Poterie : vin d’honneur, dîner puis soirée jusqu’au bout de la nuit.",
          location: "La Poterie, Chambon-sur-Cisse",
          dresscode: "Tenue légère & couleurs pastel",
        },
        {
          image: "assets/event_4.jpg",
          day: "Dimanche 2 août",
          name: "Aperetivo",
          time: "à partir de 16h, et pour toute la soirée",
          description:
            "Un Aperetivo pour prolonger les discussions de la veille avant les premiers départs.",
          location: "La Poterie, Chambon-sur-Cisse",
          dresscode: "Tenue confortable",
        },
      ],
      cta: {
        text: "Prêt(e) à nous dire quand vous serez la ?",
        button: "Remplir le formulaire de réponse",
      },
    },

    venuePage: {
      eyebrow: "📍 Lieu",
      title: "La Poterie",
      intro:
        "Nous nous retrouvons à La Poterie, à Chambon-sur-Cisse. Voici les informations pour vous y rendre et où loger à proximité.",
      addressTitle: "Adresse",
      address: "La Poterie, 12 route de Blois, Chambon-sur-Cisse, Loir-et-Cher (42)",
      accessTitle: "Accès",
      access: [
        "En train : gare de Blois-Chambord, puis 15 min en voiture.",
        "En voiture : ~2h15 depuis Paris.",
      ],
      tipsTitle: "Logements",
      tips: [
        "De nombreux gîtes et hôtels sont disponibles dans les environs de Chambon-sur-Cisse, Molineuf, Onzain, Blois, Chaumont-sur-Loire. Nous vous partagerons une liste de suggestions prochainement.",
      ],
      mapCta: "Ouvrir sur Google Maps",
    },

    rsvpPage: {
      eyebrow: "Formulaire de réponse",
      title: "Vous venez ? Dites-nous tout",
      intro:
        "Merci de remplir ce formulaire pour nous aider à organiser au mieux le week-end. Une seule réponse par famille / groupe suffit.",
      sections: {
        info: "Vos informations",
        presence: "Présence par événement",
        presenceHelp: "Indiquez pour chaque moment si vous serez présent(s).",
        extra: "Informations complémentaires",
      },
      labels: {
        names: "Nom(s) et prénom(s) des invité(s)",
        email: "Adresse e-mail",
        phone: "Numéro de téléphone",
        address: "Adresse postale",
        guests: "Nombre total de personnes",
        diet: "Régimes alimentaires / allergies",
        message: "Un petit mot pour nous ?",
      },
      placeholders: {
        names: "Ex : Grégoire Louis",
        email: "vous@example.com",
        phone: "+33 6 99 04 65 68",
        address: "119 rue de Charonne, 75011 Paris",
        diet: "Ex : végétarien, sans gluten, allergie aux noix…",
        message: "On a hâte de vous retrouver !",
      },
      events: [
        { name: "Verre d'accueil — Vendredi", meta: "18h — Le Molineuf" },
        { name: "Cérémonie — Samedi", meta: "16h — Église Saint-Secondin, Valencisse" },
        { name: "Vin d’honneur, dîner & soirée — Samedi", meta: "18h — La Poterie" },
        { name: "Aperetivo — Dimanche", meta: "a Partir de 16h — La Poterie / alentours" },
      ],
      options: {
        present: "Présent",
        absent: "Absent",
        unsure: "Je ne sais pas encore",
        interested: "Intéressé",
        notInterested: "Pas intéressé",
      },
      actions: {
        submit: "Envoyer ma réponse",
        note:
          "Les réponses sont envoyées et stockées dans notre Google Sheet.",
      },
    },
  };

  // Applique le contenu sur les éléments marqués via data-content.
  function applyContent({ text = {}, html = {}, attrs = {} } = {}) {
    Object.entries(text).forEach(([key, value]) => {
      document.querySelectorAll(`[data-content="${key}"]`).forEach((node) => {
        node.textContent = value;
      });
    });

    Object.entries(html).forEach(([key, value]) => {
      document.querySelectorAll(`[data-content="${key}"]`).forEach((node) => {
        node.innerHTML = value;
      });
    });

    Object.entries(attrs).forEach(([key, attrMap]) => {
      document.querySelectorAll(`[data-content="${key}"]`).forEach((node) => {
        Object.entries(attrMap).forEach(([attr, val]) => {
          node.setAttribute(attr, val);
        });
      });
    });
  }

  window.siteContent = content;
  window.applyContent = applyContent;
})();
