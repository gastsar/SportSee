// Importe les données fictives depuis le fichier JSON
import mockdata from '../../data/mockdata.json';

/**
 * Simule une requête GET pour récupérer les utilisateurs depuis l'API.
 *
 * @return {Promise<Object[]>} Promesse qui résout un tableau d'objets représentant les utilisateurs.
  * @param {number} userId L'ID de l'utilisateur dont l'activité doit être récupérée.
 * @return {Promise<Object>} Promesse qui résout un objet représentant l'activité de l'utilisateur.
 
*/
export const simulateGetUsers = async () => {
  return new Promise((resolve) => {
    // Utilise les données fictives importées pour la simulation
    resolve(mockdata.user);
  });
};


export const simulateGetUserActivity = async (userId) => {
  return new Promise((resolve, reject) => {
    // Utilise les données fictives importées pour la simulation
    const userActivity = mockdata.activity.find((activity) => activity.userId === userId);

    if (userActivity) {
      resolve({
        userId: userActivity.userId,
        sessions: userActivity.sessions,
      });
    } else {
      reject(new Error("Les données d'activité de l'utilisateur non trouvées"));
    }
  });
};


export const simulateGetUserAverageSessions = async (userId) => {
  return new Promise((resolve, reject) => {
    // Charge les données depuis le fichier JSON
    const data = mockdata;

    // Recherche l'utilisateur par son ID dans les données statiques
    const userAverageSessions = data['average-sessions'].find(session => session.userId === userId);

    if (userAverageSessions) {
      resolve({
        userId: userAverageSessions.userId,
        sessions: userAverageSessions.sessions
      });
    } else {
      reject(new Error("Les données de session de l'utilisateur non trouvées"));
    }
  });
};


export const simulateGetUserPerformance = async (userId) => {
  return new Promise((resolve, reject) => {
    // Charge les données depuis le fichier JSON
    const data = mockdata;

    // Recherche l'utilisateur par son ID dans les données statiques
    const userPerformance = data.performance.find(perf => perf.userId === userId);

    if (userPerformance) {
      const result = {
        userId: userPerformance.userId,
        data: userPerformance.data,
        kind: userPerformance.kind,
      };

      resolve(result);
    } else {
      reject(new Error("Les données de performance de l'utilisateur non trouvées"));
    }
  });
};
