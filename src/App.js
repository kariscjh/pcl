import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: 'Matrix',
    poster: 'https://t1.daumcdn.net/movie/e49c2e4eb419a9813228b5ab6bc5b039362236ea'
  },
  {
    title: 'Star Wars',
    poster: 'https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg'
  },
  {
    title: 'Old Boy',
    poster: 'https://i.pinimg.com/236x/8d/cc/ae/8dccae78c08ebc38569c19673eacfe07--series-movies-old-boys.jpg'
  },
  {
    title: 'Matrix',
    poster: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/54889f61456519.5a6f727ec4709.jpeg'
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
