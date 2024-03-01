import mockdata from '../../data/mockdata.json';

const simulatePromise = (dataKey, userId) => {
  return new Promise((resolve, reject) => {
    const data = mockdata;

    // Recherche l'utilisateur par son ID dans les données statiques
    const userData = data[dataKey].find((item) => item.userId === userId);

    if (userData) {
      resolve({
        userId: userData.userId,
        ...userData,
      });
    } else {
      const errorType = dataKey === 'activity' ? "d'activité" : "de session";
      reject(new Error(`Les données ${errorType} de l'utilisateur non trouvées`));
    }
  });
};

export const simulateGetUsers = async () => {
  return new Promise((resolve) => {
    resolve(mockdata.user);
  });
};

export const simulateGetUserActivity = async (userId) => {
  return simulatePromise('activity', userId);
};

export const simulateGetUserAverageSessions = async (userId) => {
  return simulatePromise('average-sessions', userId);
};

export const simulateGetUserPerformance = async (userId) => {
  return simulatePromise('performance', userId);
};
