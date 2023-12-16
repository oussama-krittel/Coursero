import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="flex w-full flex-col items-center py-10 max-h-full overflow-y-scroll hideScroll">
      <h1 className="text-[40px] uppercase font-bold text-blue-500">
        Bonjour !
      </h1>
      <h1 className="text-[30px] font-semibold">
        Formation de <span className="text-blue-400">Programmation Web</span>
      </h1>
      <p className="text-center w-2/3 my-6">
        Une formation en programmation web est un programme éducatif conçu pour
        enseigner les compétences nécessaires à la création d'applications et de
        sites web interactifs. Elle couvre généralement des langages de
        programmation comme HTML, CSS et JavaScript, ainsi que des frameworks et
        bibliothèques populaires tels que React, Angular ou Vue.js.
        <br />
        <br />
        Les sujetsabordés incluent la création d'interfaces utilisateur, la
        manipulation de données, la conception responsive, les bases de données,
        le déploiement et la gestion de serveurs, ainsi que les bonnes pratiques
        de développement web et les principes de sécurité. Ces formations
        peuvent varier en durée et en niveau de complexité, allant des bases
        pour les débutants jusqu'aux concepts avancés pour les développeurs
        expérimentés.
      </p>
      <Link to={"/paragraphe/" + 1}>
        <Button text="Commancer" />
      </Link>
    </main>
  );
};

export default HomePage;
