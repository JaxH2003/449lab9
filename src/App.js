import logo from './logo.svg';
import './App.css';

function EpicButton() {
  return (
    <div>
      <h3>This Button is Pretty Epic!</h3>
      <button>Epic</button>
      </div>
  );
}

const movie = {
  title: 'Star Wars a New Hope',
  director: 'George Lucas',
  release: '1977',
  image: logo,
  width: '250',
  height: '250'
};

function MovieCase() {
  return (
    <>
      <h2>{movie.title} ({movie.release})</h2>
      <p>{movie.director}</p>
      <img
        className="movieCover"
        src={movie.image}
        alt={movie.title + ' cover'}
        style={{
          width: movie.width,
          height: movie.height
        }}
      />
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieCase />
        <EpicButton />
      </header>
    </div>
  );
}

export default App;
