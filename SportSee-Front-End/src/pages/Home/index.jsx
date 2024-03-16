// Home.js
import { useState } from 'react';
import { useParams } from 'react-router-dom';
//import useUserData from '../../utils/useUserData';//A commenter pour utiliser useLocalData
import useLocalData from '../../utils/useLocalData'; //Supprimer commentaire pour utilisateur
import Loading from '../../components/Loading';
import Hello from '../../components/Hello';
import ChartActivity from '../../components/ChartActivity';
import ChartPerf from '../../components/ChartPerf';
import ChartScore from '../../components/ChartScore';
import ChartSessions from '../../components/ChartSessions';
import KeyDataAside from '../../components/KeyDataAside';
import Checkbox from '../../components/CheckBock';
import Error from '../Error';
const Home = () => {
  const { id } = useParams();
  const [useApi, setUseApi] = useState(true);

  const handleCheckboxChange = () => {
    setUseApi((prevUseApi) => !prevUseApi);
  };

  const {
    userData,userActivity,userSession,userPerformance,loading,error,} = useLocalData(id, useApi);// changer useUserData en useLocalData.
  
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error errorMessage={`Erreur lors de la récupération des données : ${error.message}`} />;
  }

  const { userInfos, keyData } = userData;

  return (
    <>
      <main className="main-containte">
        <section className="header-page">
          <Hello firstName={userInfos?.firstName} />
          <Checkbox label="Utiliser l'API" checked={useApi} onChange={handleCheckboxChange} />
        </section>
        <section className="container-chart">
          <article className="section-content">
            <ChartActivity data={userActivity?.sessions || []} />
            <div className="chart">
              <ChartSessions data={userSession?.sessions || []} />
              <ChartPerf data={userPerformance?.data || []} />
              <ChartScore data={userData} />
            </div>
          </article>

          <aside className="section-aside">
            <KeyDataAside keyData={keyData} />
          </aside>
        </section>
      </main>
    </>
  );
};

export default Home;
