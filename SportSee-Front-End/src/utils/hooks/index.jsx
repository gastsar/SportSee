// useUserData.js
import { useEffect, useState } from 'react';
import { getUserDataFromApi, getUserActivityFromApi, getUserPerformanceFromApi, getAverageSessionsFromApi } from '../api';
import { useApi } from '../config';
import mockdata from '../../data/mockdata.json';

// Fonction pour récupérer les données d'activité d'un utilisateur par userId
function getUserActivity(userId) {
  const userActivity = mockdata.activity.find(activity => activity.userId === parseInt(userId, 10)) || {};
  return userActivity;
}

// Fonction pour récupérer les données de performance d'un utilisateur par userId
function getUserPerformance(userId) {
  const userPerformance = mockdata.performance.find(perf => perf.userId === parseInt(userId, 10)) || {};
  return userPerformance;
}
// Fonction pour récupérer les sessions d'un utilisateur par userId
function getUserSession(userId) {
    const userSessions = mockdata.sessions.find(session => session.userId === parseInt(userId, 10)) || [];
    return userSessions;
  }



function useUserData(id) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        let userData;
        let userActivity;
        let userPerformance;
        let userSession;
      
        if (useApi) {
          userData = await getUserDataFromApi(id);
          console.log(userInfos)
          userActivity = await getUserActivityFromApi(id);   
          userPerformance = await getUserPerformanceFromApi(id);
          userSession = await getAverageSessionsFromApi(id);
        } else {
          userData = mockdata.user.find((user) => user.id === parseInt(id, 10)) || {};
          userActivity = getUserActivity(id);
          userPerformance = getUserPerformance(id);
          userSession = getUserSession(id);
        }
      
        const { userInfos, keyData } = userData || {};
        console.log(userInfos)
        if (!userInfos) {
          setError(`L'utilisateur n'existe pas`);
        } else {
          setData({
            userInfos,
            userActivity,
            userPerformance,
            userSession,
            keyData,
          });
        }
      } catch (error) {
        setError(error.message || 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { isLoading, error, data };
}

export default useUserData;
