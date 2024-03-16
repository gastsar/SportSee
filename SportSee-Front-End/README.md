
# Project 12 SportSee

Développez un tableau de bord d'analytics avec React.




## Installation
### BackEnd Link :
 https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git

Install the dependencies command.
```bash
  yarn
```
### FrontEnd :

Install the dependencies command.
```bash
  yarn
```

## Utilisation donné:
### Donner simuler
#### 1- useUserData :
Utilisation de json server:
```bash
  npx json-server db.json
```

Endpoints:
- http://localhost:3001/user.
- http://localhost:3001/activity
- http://localhost:3001/average-sessions
- http://localhost:3001/performance

#### 1- useLocalData :

Utilisation du data/mockdata.json 


## Choix utilisation :
Composant Home : 
```bash
Ligne 4 : import useUserData from '../../utils/useUserData';//A commenter pour utiliser useLocalData

Ligne 5 : //import useLocalData from '../../utils/useLocalData'; //Supprimer commentaire pour utilisateur
```

```bash
Ligne 23 : const {userData,userActivity, userSession,userPerformance,loading,error,} = useUserData(id, useApi);// changer useUserData en useLocalData.

```