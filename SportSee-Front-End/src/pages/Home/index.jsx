import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CharActivity from '../../components/ChartActivity';
import ChartPerf from '../../components/ChartPerf';
import ChartScore from '../../components/ChartScore';
import ChartSessions from '../../components/ChartSessions';
import KeyData from '../../components/KeyData';
import iconeCalorie from '../../assets/calorie-icon.png';
import iconeGlucide from '../../assets/glucide-icon.png';
import iconeProteine from '../../assets/protein-icon.png';
import iconeLipide from '../../assets/lipide-icon.png';

import { useDataApi, useDataMock } from '../../utils/useDataFetching';
import { Checkbox } from '../../components/CheckBock';

export default function Home() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [userSession, setUserSession] = useState({});
  const [useApi, setUseApi] = useState(true); // État pour déterminer l'utilisation de l'API ou des fausses données

  // Choisissez le hook approprié en fonction de la valeur de useApi
  const dataHook = useApi ? useDataMock : useDataApi;

  // Appelez le hook sélectionné
  dataHook(id, setUserData, setUserActivity, setUserSession, setUserPerformance);

  const { userInfos, keyData } = userData;
 

 
  return (
    <>
      <main className="main-containte">
        <div className="header-page">
          <h1>
            <span>Bonjour </span>
            <span className="nameUser">{userInfos?.firstName}</span>
            <Checkbox
              label="Utiliser API"
              checked={useApi}
              onChange={() => {
                setUseApi(!useApi);
              
              }}
            />
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
        </div>
        <div className="container-chart">
          <section className="section-content">
            <CharActivity data={userActivity?.sessions || []} />
            <div className="chart">
              <ChartSessions data={userSession?.sessions || []} />
              <ChartPerf dataPerf={userPerformance || []} />
    
              <ChartScore data={userData} />
            </div>
          </section>
          <aside className="section-aside">
            <KeyData srcIcone={iconeCalorie} quatityName="Calories" quantitycount={keyData?.calorieCount} />
            <KeyData srcIcone={iconeProteine} quatityName="Proteines" quantitycount={keyData?.proteinCount} />
            <KeyData srcIcone={iconeGlucide} quatityName="Glucides" quantitycount={keyData?.carbohydrateCount} />
            <KeyData srcIcone={iconeLipide} quatityName="Lipides" quantitycount={keyData?.lipidCount} />
          </aside>
        </div>
      </main>
    </>
  );
}
