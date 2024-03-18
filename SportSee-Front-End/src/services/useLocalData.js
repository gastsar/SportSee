import { useEffect, useState } from 'react';
import {simulateGetUsers, simulateGetUserActivity,simulateGetUserAverageSessions,simulateGetUserPerformance,} from './mockData';
import { UserSessions, UserPerformance, UserMainData,UserActivity } from './dataFormatter'; 

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

          setUserData(new UserMainData(usersData.data).getData());
          setUserActivity(new UserActivity(activityData.data).getData());
          setUserSession(new UserSessions(sessionData.data).getData());
          setUserPerformance(new UserPerformance(performanceData.data).getData());
        } else {
          // Utiliser les données simulées
          const usersData =  simulateGetUsers();
          const activityData = simulateGetUserActivity(parseInt(id, 10));
          const sessionData =  simulateGetUserAverageSessions(parseInt(id, 10));
          const performanceData =  simulateGetUserPerformance(parseInt(id, 10));

          setUserData(new UserMainData(usersData.find((user) => user.id === parseInt(id, 10)) ?? {}).getData());
          setUserActivity(new UserActivity(activityData).getData());
          setUserSession(new UserSessions(sessionData).getData());
          setUserPerformance(new UserPerformance(performanceData).getData());
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
