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
        list: "Liste",
        listFull: "Liste de mariage",
        dresscode: "Dress Code",
        rsvp: "RSVP",
      },
      footer: {
        home: "Accueil",
        events: "Programme",
        list: "Liste de mariage",
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
          name: "Aperitivo",
          time: "à partir de 16h, et pour toute la soirée",
          description:
            "Un Aperitivo pour prolonger les discussions de la veille avant les premiers départs.",
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

    listPage: {
      eyebrow: "Liste de mariage",
      title: "Liste de mariage",
      foundation: {
        sectionLabel: "Fondation Les Goélands",
        logoAlt: "Logo de la fondation Les Goélands",
        text:
          "Chers amis, chère famille,\nNous serions comblés que votre geste soutienne la fondation Les Goélands, fondée par le père de Martin, qui accompagne financièrement et humainement de jeunes étudiants dans leur parcours d'excellence.",
      },
      couple: {
        sectionLabel: "Attention destinée aux mariés",
        imageAlt: "Photo des mariés",
        text:
          "Si toutefois vous souhaitez que votre attention nous soit directement destinée, nous l'accueillerons évidemment avec grand plaisir. Merci infiniment",
      },
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
        { name: "Aperitivo — Dimanche", meta: "a Partir de 16h — La Poterie / alentours" },
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

  function applyContentIn(root, { text = {}, html = {}, attrs = {} } = {}) {
    Object.entries(text).forEach(([key, value]) => {
      root.querySelectorAll(`[data-content="${key}"]`).forEach((node) => {
        node.textContent = value;
      });
    });

    Object.entries(html).forEach(([key, value]) => {
      root.querySelectorAll(`[data-content="${key}"]`).forEach((node) => {
        node.innerHTML = value;
      });
    });

    Object.entries(attrs).forEach(([key, attrMap]) => {
      root.querySelectorAll(`[data-content="${key}"]`).forEach((node) => {
        Object.entries(attrMap).forEach(([attr, val]) => {
          node.setAttribute(attr, val);
        });
      });
    });
  }

  // Applique le contenu sur les éléments marqués via data-content.
  function applyContent(options = {}) {
    applyContentIn(document, options);
  }

  function getHeaderContent() {
    const { shared } = content;

    return {
      text: {
        "brand.mark": shared.brandMark,
        "brand.names": shared.brandNames,
        "brand.sub": shared.brandSub,
        "nav.program": shared.nav.program,
        "nav.venue": shared.nav.venue,
        "nav.list": shared.nav.list,
        "nav.listFull": shared.nav.listFull,
        "nav.dresscode": shared.nav.dresscode,
        "nav.rsvp": shared.nav.rsvp,
      },
      attrs: {
        "nav.listLink": { "aria-label": shared.nav.listFull },
      },
    };
  }

  function applyHeaderState(header, mountNode) {
    const activeNavId = mountNode.dataset.headerActive || "";
    const isSolid = mountNode.dataset.headerSolid === "true";

    header.classList.toggle("is-solid", isSolid);

    header.querySelectorAll("[data-nav-id]").forEach((link) => {
      link.classList.toggle("is-active", link.dataset.navId === activeNavId);
    });
  }

  function createHeaderFromMarkup(markup) {
    const template = document.createElement("template");
    template.innerHTML = markup.trim();

    const header = template.content.firstElementChild;
    if (!header) {
      throw new Error("Le markup du header ne contient aucun élément racine.");
    }

    return header;
  }

  function getFallbackHeaderMarkup() {
    return `
      <header class="site-header ui-header">
        <div class="site-header-inner ui-header-inner">
          <a href="index.html" class="brand-button" data-content="brand.mark" aria-label="Retour à l'accueil"></a>
          <nav class="site-nav" aria-label="Navigation principale">
            <a href="lieu.html" class="nav-link" data-nav-id="venue" data-content="nav.venue"></a>
            <a href="liste-mariage.html" class="nav-link" data-nav-id="list" data-content="nav.listLink">
              <span class="nav-label nav-label--desktop" data-content="nav.listFull"></span>
              <span class="nav-label nav-label--mobile" data-content="nav.list"></span>
            </a>
            <a href="rsvp.html" class="nav-link nav-primary" data-nav-id="rsvp" data-content="nav.rsvp"></a>
          </nav>
        </div>
      </header>
    `;
  }

  async function loadHeaderElement() {
    try {
      const response = await fetch("header.html");
      if (!response.ok) {
        throw new Error(`Impossible de charger header.html (${response.status})`);
      }

      return createHeaderFromMarkup(await response.text());
    } catch (error) {
      console.warn("Header: chargement de header.html impossible, fallback local utilisé.", error);
      return createHeaderFromMarkup(getFallbackHeaderMarkup());
    }
  }

  async function mountSiteHeader(mountNode = document.querySelector("[data-site-header]")) {
    if (!mountNode) return null;

    const header = await loadHeaderElement();

    applyHeaderState(header, mountNode);
    applyContentIn(header, getHeaderContent());
    mountNode.replaceWith(header);

    return header;
  }

  window.siteContent = content;
  window.applyContent = applyContent;
  window.mountSiteHeader = mountSiteHeader;
  window.siteHeaderReady = mountSiteHeader().catch((error) => {
    console.error("Header:", error);
    return null;
  });
})();
