import logo from './logo.svg';
import './App.css';

function EpicButton() {
  return (
    <div>
      <h3>Click if Star Wars is Awesome!</h3>
      <button>Its Awesome!</button>
      </div>
  );
}

const films = [
  { id: 1, title: 'Star Wars: A New Hope', theme: 'space', isGood: true },
  { id: 2, title: 'Star Wars: Revenge of the Sith', theme: 'space', isGood: true },
  { id: 3, title: 'Star Wars: The Last Jedi ', theme: 'space', isGood: false },
];

function MoviesList() {
  const listMovies = films.map(film =>
    <li
      key={film.id}
      style={{
        color: film.isGood ? 'Green' : 'red'
      }}
    >
      {film.title}
    </li>
  );
  return (
    <ul>{listMovies}</ul>
  )
}

const movie = {
  title: 'Star Wars a New Hope',
  director: 'George Lucas',
  release: '1977',
  image: logo,
  width: '250px',
  height: '250px'
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
        <MoviesList />
        <EpicButton />
      </header>
    </div>
  );
}

export default App;
