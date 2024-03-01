// useUserData.js
import { useEffect, useState } from 'react';
import {
  simulateGetUsers,
  simulateGetUserActivity,
  simulateGetUserAverageSessions,
  simulateGetUserPerformance,
} from './mockData';
const useUserData = (id, useApi) => {
  const [userData, setUserData] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userSession, setUserSession] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (useApi) {
          // Utiliser l'API réelle
          const usersResponse = await fetch(`http://localhost:3000/user/${id}`);
          const activityResponse = await fetch(`http://localhost:3000/user/${id}/activity`);
          const sessionResponse = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
          const performanceResponse = await fetch(`http://localhost:3000/user/${id}/performance`);

          const usersData = await usersResponse.json();
          const activityData = await activityResponse.json();
          const sessionData = await sessionResponse.json();
          const performanceData = await performanceResponse.json();

          setUserData(usersData.data);
          setUserActivity(activityData.data);
          setUserSession(sessionData.data);
          setUserPerformance(performanceData.data);
        } else {
          // Utiliser les données simulées
          const usersData = await simulateGetUsers();
          const activityData = await simulateGetUserActivity(parseInt(id, 10));
          const sessionData = await simulateGetUserAverageSessions(parseInt(id, 10));
          const performanceData = await simulateGetUserPerformance(parseInt(id, 10));

          setUserData(usersData.find((user) => user.id === parseInt(id, 10)) ?? {});
          setUserActivity(activityData);
          setUserSession(sessionData);
          setUserPerformance(performanceData);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, useApi]);

  return {
    userData,
    userActivity,
    userSession,
    userPerformance,
    loading,
    error,
  };
};

export default useUserData;
