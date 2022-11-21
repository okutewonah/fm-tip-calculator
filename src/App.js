import './App.css';
import Bill from './components/Bill';
import Header from './components/Header';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Bill />
        <Result />
      </main>
    </div>
  )
}

export default App;
