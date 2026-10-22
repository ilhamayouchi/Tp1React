import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profile from './Profile';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';
import BoutonAlerte from './BoutonAlerte';
import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Application Principale</h1>

      <HelloWorld />
      <hr />

      <Greeting prenom="Alice" />
      <Greeting prenom="Bob" />
      <Greeting prenom="Charlie" />
      <hr />

      <Profile nom="Alice Martin" age={25} estActif={true} />
      <Profile nom="Bob Durand" age={32} estActif={false} />
      <hr />

      <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
      <Voiture marque="Renault" modele="Clio" />
      <hr />

      <ListeCourses items={['Pain', 'Lait', 'Oeufs', 'Fromage']} />
      <hr />

      <BoutonAlerte message="Bonjour depuis React !" />
    </div>
  );
}

export default App;