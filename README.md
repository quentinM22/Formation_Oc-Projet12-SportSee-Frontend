# Sport See 

 
Formation OpenClassroom projet 12

L'objectif de ce projet est de refaire la page profil utilisateur du site en utilisant React. Le projet intègre des graphiques sur l'activité sportive de l'utilisateur, qui devront être développés à l'aide de D3 ou de Recharts.

Projet sur Netlify ( les données "ApiData" renvoi une page d'erreur car le backend n'est pas mis en ligne utilisation de "MockData") 

Lien du projet: https://formation-oc-p12-sportsee.netlify.app/

## Installation Backend

Lien vers le backend du projet
https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

### Suivre les instructions 

#### 1. cloner le projet backend

```bash
 git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
 cd P9-front-end-dashboard
```
#### 2. Installation des dépendances
```bash
  yarn
  cd my-project
```
#### 3. Modification du port
Avant de démarrer le backend

  1. Aller dans le dossier "App"

  2. Ouvrer le ficher "index.js"

  3. Modifier la ligne 

    const port = 3000

  par

    const port = 8000

#### 4. Lancer le backend

```bash
  yarn start
```

## Installation Frontend

### Suivre les instructions 

#### 1- cloner le projet frontend

```bash
 git clone https://github.com/quentinM22/Formation_Oc-Projet12-SportSee-Frontend.git
 cd Formation_Oc-Projet12-SportSee-Frontend
```
#### 2- Installation des dépendances
```bash
  yarn
  cd my-project
```

#### 4- Lancer le frontend
```bash
yarn start
```
## IDE et autres logiciel utiliser pour le projet
* IDE: VSCode (Pour coder le projet)
* API development platform: Insomnia (pour tester les chemin API)

## Dépendances


| Name              | Version |  
| ----------------- | ------- |
| node              | v18.15.0|
| yarn               | 1.22.19  |
| react             | 18.2.0  |
| react-dom         | 18.2.0  |
| react-router-dom  | 6.11.1  |
| react-scripts     | 5.0.1   |
| recharts          | 2.6.2   |

## Documentations utilisé

* Recharts: https://recharts.org/en-US/
* React: https://fr.legacy.reactjs.org/
* React-router: https://reactrouter.com/en/main

