import './App.css';
import HeaderSample from './components/header/HeaderSample';
import LangInfographic from './components/lngg/LangInfographic';
import SkillInfographic from './components/skli/SkillInfographic';

function App() {
  return (
    <div className='container'>
      <div className='sidebar'>
        <ul>
          <li className='active'><a href="#header">Header</a></li>
          <li><a href="#languageTile">Language Infographic</a></li>
          <li><a href="#skillTile">Skill Infographic</a></li>
          <li><a href="#">Comming Soon...</a></li>
          <li><a href="#">Comming Soon...</a></li>
          <li><a href="#">Comming Soon...</a></li>
          <li><a href="#">Comming Soon...</a></li>
          <li><a href="#">Comming Soon...</a></li>
        </ul>
      </div>
      <div className='component-page'>
        <div className='document'>
          <HeaderSample />
          <LangInfographic/>
          <SkillInfographic/>
        </div>
      </div>
    </div>
  );
}

export default App;
