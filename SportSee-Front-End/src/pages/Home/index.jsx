import  { useState } from 'react';
import { useParams } from 'react-router-dom';
import useLocalData from '../../services/useLocalData';
import Loading from '../../components/Loading';
import Hello from '../../components/Hello';
import ChartActivity from '../../components/Chart/ChartActivity';
import ChartPerf from '../../components/Chart/ChartPerf';
import ChartScore from '../../components/Chart/ChartScore';
import ChartSessions from '../../components/Chart/ChartSessions';

import Checkbox from '../../components/Checkbox';
import Error from '../Error';
import KeyData from '../../components/KeyData';

const Home = () => {
  const { id } = useParams();

  const [useApi, setUseApi] = useState(true);

  const handleCheckboxChange = () => {
    setUseApi((prevUseApi) => !prevUseApi);
  };

  const {
    userData, userActivity, userSession, userPerformance, loading, error,
  } = useLocalData(id, useApi);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={`Erreur lors de la récupération des données : ${error.message}`} />;
  }

  return (
    <>
      <main className="main-containte">
        <section className="header-page">
          <Hello firstName={userData.name} />
         
          <div style={{ display: 'flex', alignItems: 'center',  }}>
          <Checkbox checked={useApi} onChange={handleCheckboxChange} />
        
            <div style={{ marginRight: '10px', backgroundColor: 'lightblue'}}>
              {useApi ? "Décochez pour utiliser les donées simulées." : "Cochez pour utiliser l'API reelle."}
            </div>
           
          </div>
        </section>
        <section className="container-chart">
          <article className="section-content">
            <ChartActivity data={userActivity} />
            <div className="chart">
              <ChartSessions data={userSession} />
              <ChartPerf data={userPerformance} />
              <ChartScore data={userData} />
            </div>
          </article>

          <aside className="section-aside">
            {userData.keyData.map((keyDataItem, index) => (
              <KeyData key={index} {...keyDataItem} />
            ))}
          </aside>
        </section>
      </main>
    </>
  );
};

export default Home;
