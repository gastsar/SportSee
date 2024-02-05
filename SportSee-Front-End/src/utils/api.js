// api.js
import { apiUrl } from './config';

export async function getUserDataFromApi(userId) {
  const url = `${apiUrl}/user/${userId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données utilisateur');
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Une erreur s'est produite: ${error.message}`);
  }
}

export async function getUserActivityFromApi(userId) {
  const url = `${apiUrl}/user/${userId}/activity`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données d\'activité');
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Une erreur s'est produite: ${error.message}`);
  }
}

export async function getAverageSessionsFromApi(userId) {
  const url = `${apiUrl}/user/${userId}/average-sessions`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des sessions moyennes');
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Une erreur s'est produite: ${error.message}`);
  }
}

export async function getUserPerformanceFromApi(userId) {
  const url = `${apiUrl}/user/${userId}/performance`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des données de performance');
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Une erreur s'est produite: ${error.message}`);
  }
}
