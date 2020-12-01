//https://stackoverflow.com/questions/12070631/how-to-use-json-file-in-html-code
$(function () {
  var elizabeth = [];

  $.getJSON("elizabeth-harmon.json", function (data) {
    for (i = 0; i < data.titres_section_court.length; i++) {
      let section_titre_court = data.titres_section_court[i];
      let position = String(i + 1);
      document.getElementById(
        "section-title-short-" + position
      ).innerHTML = section_titre_court.toUpperCase();
    }
    document.getElementById("nom_complet").innerHTML =
      data.titre_html.nom_complet;
    document.getElementById("emission").innerHTML = data.titre_html.emission;

    for (i = 0; i < data.information_personnelle.length; i++) {
      let categorie = data.information_personnelle[i].info_categorie;
      let information = data.information_personnelle[i].info_valeur;
      let position = String(i + 1);
      document.getElementById("information-category-" + position).innerHTML =
        categorie + ": ";
      document.getElementById(
        "information-value-" + position
      ).innerHTML = information;
    }
    for (i = 0; i < data.titres_section.length; i++) {
      let section_titre = data.titres_section[i];
      let position = String(i + 1);
      document.getElementById(
        "section-title-" + position
      ).innerHTML = section_titre;
    }

    for (i = 0; i < data.age_pictures.length; i++) {
      let age = data.age_pictures[i];
      position = String(i + 1);
      document.getElementById("age-pictures-" + position).innerHTML = age;
    }
    for (i = 0; i < data.education.length; i++) {
      let edu_saison = data.education[i].saison;
      let edu_annee = data.education[i].annee;
      let edu_titre = data.education[i].titre;
      let edu_desc = data.education[i].description;
      let position = String(i + 1);

      document.getElementById(
        "education-season-" + position
      ).innerHTML = edu_saison;
      document.getElementById(
        "education-year-" + position
      ).innerHTML = edu_annee;
      document.getElementById(
        "education-title-" + position
      ).innerHTML = edu_titre;
      document.getElementById(
        "education-description-" + position
      ).innerHTML = edu_desc;
    }
    for (i = 0; i < data.experience.length; i++) {
      let exp_titre = data.experience[i].titre;
      let exp_desc = data.experience[i].description;
      position = String(i + 1);
      document.getElementById(
        "experience-title-" + position
      ).innerHTML = exp_titre;
      document.getElementById(
        "experience-description-" + position
      ).innerHTML = exp_desc;
    }

    for (i = 0; i < data.ouvertures_echecs.length; i++) {
      let ouverture = data.ouvertures_echecs[i].ouverture;
      let variation = data.ouvertures_echecs[i].variation;
      position = String(i + 1);
      document.getElementById("ouverture-echecs-" + position).innerHTML =
        ouverture + ": " + variation;
    }
  });
});
