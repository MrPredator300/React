import './App.css';
import Sample from './Sample';
//import Welcome from './Welcome';

function App() {
  //The <hr></hr> will give a horizontal Line but the <hr> should have an opening tag and closing tag
  //The <hr /> tag will also give a horizontal Line here no need to open the tag just this tag is enough
  return (
    <div className='App'>
      <Sample />
      <hr />

    </div>
  );
}

export default App;
