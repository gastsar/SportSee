import mockdata from '../../data/mockdata.json';

const simulatePromise = (dataKey, userId) => {
  const data = mockdata;

  // Recherche l'utilisateur par son ID dans les données statiques
  const userData = data[dataKey].find((item) => item.userId === userId);

  if (userData) {
    return {
      userId: userData.userId,
      ...userData,
    };
  } else {
    const errorType = dataKey === 'activity' ? "d'activité" : "de session";
    throw new Error(`Les données ${errorType} de l'utilisateur non trouvées`);
  }
};

export const simulateGetUsers = () => {
  return mockdata.user;
};

export const simulateGetUserActivity = (userId) => {
  return simulatePromise('activity', userId);
};

export const simulateGetUserAverageSessions = (userId) => {
  return simulatePromise('average-sessions', userId);
};

export const simulateGetUserPerformance = (userId) => {
  return simulatePromise('performance', userId);
};
