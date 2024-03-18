/**
 * Classe qui contient les données d'un utilisateur
 * @property {Object} _data Données contenues dans l'objet
 */
class UserData {

    constructor(data) {
        this._data = data;
    }
}

/**
 * Classe représentant les données des sessions d'un utilisateur
 * @property {string[]} _day Les jours de la semaine en abbréviation en français
 */
export class UserSessions extends UserData {

    constructor(data) {
        super(data);

        this._day = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    }
    getData() {
        const customData = this._data.sessions.map(session => ({
            ...session,
            day: this._day[session.day - 1],
        }));
        return customData;
    }
}

/**
 * Classe représentant les performances d'un utilisateur
 */
export class UserPerformance extends UserData {
    constructor(data) {
        super(data);
        /**
         * @type {Object.<number, string>}
         */
        this._kind = {
            1: 'Cardio',
            2: 'Energie',
            3: 'Endurance',
            4: 'Force',
            5: 'Vitesse',
            6: 'Intensité',
        };
    }

    /**
     * Retourne les données formatées de l'utilisateur
     * @return {Object[]} Les données formatées
     */
    getData() {
        const customData = this._data.data.map(entry => ({
            ...entry,
            kind: this._kind[entry.kind],
        }));
        return customData.reverse();
    }
}


import iconeCalorie from '/assets/calorie-icon.png';
import iconeProteine from '/assets/protein-icon.png';
import iconeGlucide from '/assets/glucide-icon.png';
import iconeLipide from '/assets/lipide-icon.png';

/**
 * Classe contenant les données principales de l'utilisateur
 */
export class UserMainData extends UserData {
    getData() {
        const customScore = this._data.todayScore ? this._data.todayScore * 100 : this._data.score * 100;
        const customCalories = (this._data.keyData.calorieCount / 1000).toFixed(3).replace('.', ',');

        const customData = {
            score: customScore,
            name: this._data.userInfos.firstName,
            keyData: [
                {
                    name: 'calories',
                    value: customCalories,
                    icon: iconeCalorie,
                    unit: 'kCal',
                },
                {
                    name: 'protéines',
                    value: (this._data.keyData.proteinCount).toString(),
                    icon: iconeProteine,
                    unit: 'g',
                },
                {
                    name: 'glucides',
                    value: (this._data.keyData.carbohydrateCount).toString(),
                    icon: iconeGlucide,
                    unit: 'g',
                },
                {
                    name: 'lipide',
                    value: (this._data.keyData.lipidCount).toString(),
                    icon: iconeLipide,
                    unit: 'g',
                },
            ],
        };

        return customData;
    }
}

/**
 * Classe représentant les données des activités d'un utilisateur
 */
export class UserActivity extends UserData {
    getData() {
        const customData = this._data.sessions.map((entry, idx) => ({
            ...entry,
            day: (idx + 1), // Ajouter 1 à l'index
            calories: entry.calories,
        }));
        return customData;
    }
}


