// Contenu textuel centralisé pour l'ensemble du site (nav, pages, formulaires).
// Chaque page vient puiser ici les libellés, titres, descriptions et placeholders.
(function () {
  const content = {
    shared: {
      brandMark: "Maxence & Martin",
      brandNames: "Maxence & Martin",
      brandSub: "Mariage à la poterie",
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
      eyebrow: "du 31 juillet au 3 août • Chambon-sur-Cisse, Loir-et-Cher",
      title: "Mariage de Maxence & Martin",
      description:
        "Palceholder",
      buttons: {
        program: "Découvrir le programme",
        rsvp: "Confirmer ma présence",
      },
      info: {
        date: { label: "Date", value: "5 & 6 juin 2026" },
        location: { label: "Lieu", value: "La Poteie. Chambon-sur-Cisse" },
        dresscode: { label: "Dress code", value: "Palceholder" },
      },
      side: {
        title: "Infos rapides",
        items: [
          "",
          "",
          "",
          "",
        ],
      },
    },

    eventsPage: {
      eyebrow: "Programme du week-end",
      title: " Le Programme",
      intro:
        "3 jours de célébrations",
      items: [
        {
          image: "assets/event_1.jpg",
          day: "Vendredi 31 juillet",
          name: "Welcome drink",
          time: "A partir de 18h",
          description:
            "Palceholder",
          location: "Le Molineuf",
          dresscode: "Palceholder",
        },
        {
          image: "assets/event_2.jpg",
          day: "Samedi 1er août",
          name: "Messe de mariage",
          time: "16h",
          description:
            "Palceholder",
          location: "Eglise Saint-Secondin, Valencisse",
          dresscode: "Palceholder",
        },
        {
          image: "assets/event_3.jpg",
          day: "Samedi 1er août",
          name: "Vin d'honneur, dîner et soirée",
          time: "A partir de 18h",
          description:
            "",
          location: "La Poterie, Chambon-sur-Cisse",
          dresscode: "Tenue légère & couleurs pastel",
        },
        {
          image: "assets/event_4.jpg",
          day: "Optionnel",
          name: "Excursion dans le désert",
          time: "Dimanche (horaires à confirmer)",
          description:
            "Pour ceux qui souhaitent prolonger l’aventure, nous organisons une excursion dans le désert (non incluse dans le budget du mariage).",
          location: "Désert d’Agafay",
          dresscode: "Tenue confortable",
        },
      ],
      cta: {
        text: "Prêt(e) à nous dire quand vous serez là ?",
        button: "Remplir le formulaire de réponse",
      },
    },

    venuePage: {
      eyebrow: "Lieu du mariage",
      title: "Chambon-sur-Cisse",
      intro:
        "Nous nous retrouvons dans le charmant village de Chambon-sur-Cisse, au cœur du Loir-et-Cher. Voici les infos pratiques pour vous rendre sur place et profiter au mieux des environs.",
      addressTitle: "Adresse",
      address: "Chambon-sur-Cisse, 41190, France",
      accessTitle: "Accès",
      access: [
        "En train : gare de Blois-Chambord, puis 20 minutes en voiture.",
        "En voiture : compter 2h de Paris, 2h30 de Bordeaux.",
        "Parking : possibilité de se garer près du lieu (suivre les indications).",
      ],
      tipsTitle: "À savoir",
      tips: [
        "Prévoyez des chaussures confortables pour les déplacements dans le domaine.",
        "Les soirées peuvent être fraîches : emportez une petite veste.",
        "Nous mettrons des navettes ponctuelles depuis la gare (horaires à confirmer).",
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
        names: "Ex : Camille Dupont & Paco Martin",
        email: "vous@example.com",
        phone: "+33 6 12 34 56 78",
        address: "12 rue des Fleurs, 75000 Paris",
        diet: "Ex : végétarien, sans gluten, allergie aux noix…",
        message: "On a hâte de vous retrouver !",
      },
      events: [
        { name: "Welcome drink – Jeudi soir", meta: "19h00 — rooftop de l’hôtel" },
        { name: "Cérémonie & dîner – Vendredi", meta: "16h00 — Domaine La Palmeraie" },
        { name: "Brunch – Samedi", meta: "11h00 — Riad privé" },
        { name: "Excursion dans le désert", meta: "Dimanche (optionnel)" },
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
          "(Pour l’instant, ce bouton n’envoie nulle part : à connecter plus tard à un Google Form, un backend, etc.)",
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
