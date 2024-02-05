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
import { useEffect} from 'react';
import useUserData from '../../utils/hooks';

export default function Home() {
  const { id } = useParams();
  const { isLoading, error, data } = useUserData(id);

  useEffect(() => {
    // Vous pouvez exécuter d'autres actions à chaque changement de data, isLoading, error si nécessaire
  }, [data, isLoading, error]);

  if (isLoading) {
    return <div className="section">Loading...</div>;
  }

  if (error) {
    return <div className="section">{error}</div>;
  }

 /*  console.log("User First Name:", data.userInfos);
  console.log("User Performance:", data.userPerformance);
  console.log("User Session:", data.userSession);
 */
  return (
    <>
      <main className="main-containte">
        {data && 
          <div>
            <div className="header-page">
              <h1>
                Bonjour <span className="nameUser">{data.userInfos?.firstName}</span>
              </h1>
              <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
            <div className="container-chart">
              <section className="section-content">
                <CharActivity data={data.userActivity?.sessions} />
                <div className="chart">
                  <ChartSessions data={data.userSession?.sessions} />
                  <ChartPerf data={data.userPerformance?.data} />
                  <ChartScore data={data.userInfos?.score} />
                </div>
              </section>
              <aside className="section-aside">
                <KeyData srcIcone={iconeCalorie} quatityName="Calories" quantitycount={data.keyData?.calorieCount} />
                <KeyData srcIcone={iconeProteine} quatityName="Proteines" quantitycount={data.keyData?.proteinCount} />
                <KeyData srcIcone={iconeGlucide} quatityName="Glucides" quantitycount={data.keyData?.carbohydrateCount} />
                <KeyData srcIcone={iconeLipide} quatityName="Lipides" quantitycount={data.keyData?.lipidCount} />
              </aside>
            </div>
          </div>
        }
      </main>
    </>
  );
}
