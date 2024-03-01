// useUserData.js
import { useApiData } from './newData/useDataApi';

const useUserData = (id, useApi) => {
  // Récupération des données de l'API
  const { data: userDataApi, isLoading: userLoadingApi, error: userErrorApi } = useApiData(`user/${id}`, 3000);
  const { data: userActivityApi, isLoading: activityLoadingApi, error: activityErrorApi } = useApiData(`user/${id}/activity`, 3000);
  const { data: userSessionApi, isLoading: sessionLoadingApi, error: sessionErrorApi } = useApiData(`user/${id}/average-sessions`, 3000);
  const { data: userPerformanceApi, isLoading: performanceLoadingApi, error: performanceErrorApi } = useApiData(`user/${id}/performance`, 3000);

  // Récupération des données mockées
  const { data: userDataMock, isLoading: userLoadingMock, error: userErrorMock } = useApiData(`user/${id}`, 3001);
  const { data: userActivityMock, isLoading: activityLoadingMock, error: activityErrorMock } = useApiData(`activity?userId=${id}`, 3001);
  const { data: userSessionMock, isLoading: sessionLoadingMock, error: sessionErrorMock } = useApiData(`average-sessions?userId=${id}`, 3001);
  const { data: userPerformanceMock, isLoading: performanceLoadingMock, error: performanceErrorMock } = useApiData(`performance?userId=${id}`, 3001);

  // Utiliser les données en fonction de l'utilisation de l'API ou des données mockées
  const userData = useApi ? userDataApi.data : userDataMock;
  const userActivity = useApi ? userActivityApi.data : userActivityMock[0];
  const userSession = useApi ? userSessionApi.data : userSessionMock[0];
  const userPerformance = useApi ? userPerformanceApi.data : userPerformanceMock[0];

  const loading = useApi
    ? userLoadingApi || activityLoadingApi || sessionLoadingApi || performanceLoadingApi
    : userLoadingMock || activityLoadingMock || sessionLoadingMock || performanceLoadingMock;

  const error = useApi
    ? userErrorApi || activityErrorApi || sessionErrorApi || performanceErrorApi
    : userErrorMock || activityErrorMock || sessionErrorMock || performanceErrorMock;

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
