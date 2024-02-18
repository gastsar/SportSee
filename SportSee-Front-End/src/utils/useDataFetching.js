// useDataFetching.js

import { useEffect } from 'react';
import { simulateGetUsers, simulateGetUserActivity, simulateGetUserAverageSessions, simulateGetUserPerformance } from './mockData'; 

export const useDataApi = (id, setUserData, setUserActivity, setUserSession, setUserPerformance) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const usersData = await fetch(`http://localhost:3000/user/${id}`).then(response => response.json());

        const userActivityData = await fetch(`http://localhost:3000/user/${id}/activity`).then(response => response.json());

        const userSessionData = await fetch(`http://localhost:3000/user/${id}/average-sessions`).then(response => response.json());

        const userPerformanceData = await fetch(`http://localhost:3000/user/${id}/performance`).then(response => response.json());

        setUserData(usersData.data);
        setUserActivity(userActivityData.data);
        setUserSession(userSessionData.data);
        setUserPerformance(userPerformanceData.data);

        console.log("Data fetching complete!");
      } catch (error) {
        console.error('Erreur lors de la récupération des données réelles :', error);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
};

export const useDataMock = (id, setUserData, setUserActivity, setUserSession, setUserPerformance) =>{
     useEffect(() => {
    const fetchData = async () => {
      try {
        // Simule un appel GET à l'API pour récupérer les utilisateurs
        const usersData = await simulateGetUsers();

        // Simule un appel GET à l'API pour récupérer les sessions d'activité d'un utilisateur
        const userActivityData = await simulateGetUserActivity(parseInt(id, 10));

        // Simule un appel GET à l'API pour récupérer les sessions moyennes d'un utilisateur
        const userSessionData = await simulateGetUserAverageSessions(parseInt(id, 10));

        // Simule un appel GET à l'API pour récupérer les performances d'un utilisateur
        const userPerformanceData = await simulateGetUserPerformance(parseInt(id, 10));

        // Met à jour l'état avec les données simulées
        setUserData(usersData.find(user => user.id === parseInt(id, 10)) ?? {});
        setUserActivity(userActivityData);
        setUserSession(userSessionData);
        setUserPerformance(userPerformanceData);

        // Mettez à jour d'autres états avec les données simulées au besoin
      } catch (error) {
        console.error('Erreur lors de la récupération des données simulées :', error);
      }
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // Se déclenche lorsque l'ID de l'utilisateur change

}







