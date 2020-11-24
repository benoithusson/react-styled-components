Explication structure composant pour dossier NavBar
-------

1. components
- index.js : c'est ici que l'on va importer tous les composants du dossier components

    2. NavBar 
    - NavBar.js : ici que l'on importe nos styled-components
    - NavBar.elements.js = ici que l'on créé nos styled-components


- NavBar.element.js > importer NavBar.element sur NavBar.js > importer NavBar.js sur index.js



React Router
-------
- Extension React qui permet de gérer les routes d'une application
- Permet d'associer les composants á des url

React-Icon
-------
- Pour utiliser des icônes dans notre projet React
- Icônes trés utilisés
- Pour styliser un icon React : IconContext.Provider
    - <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
        <div>
            <FaFolder />
        </div>
        </IconContext.Provider>
