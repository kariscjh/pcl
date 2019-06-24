import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

// const movieTitles = [
//   "matrix",
//   "start wars",
//   "Old Boy",
//   "Full Metal Jacket"
// ]

// const movieImages = [
//   "https://t1.daumcdn.net/movie/e49c2e4eb419a9813228b5ab6bc5b039362236ea",
//   "https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg",
//   "https://i.pinimg.com/236x/8d/cc/ae/8dccae78c08ebc38569c19673eacfe07--series-movies-old-boys.jpg",
//   "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/54889f61456519.5a6f727ec4709.jpeg"
// ]




class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()

  // Update: componentWillReceiveProps() -> shouldCompomentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  // 컴포넌트가 새로운 props받았을때 -> 이전 props와 신규 props 비교 후 업데이트 할지 결정 -> 
  componentWillMount(){
    // 사이클의 시작
    // api등 원천 데이터 획득 작업 등
    console.log('will mount');
  }
  
  componentDidMount(){
    // 컴포넌트들이 다 자리 잡음
    console.log('did mount');
    // setTimeout(()=> {
    //   // this.state.greeting = 'something' 직접 변경하면 render 작동안함
    //    this.setState({
    //     //  greeting: 'Hello again!'
    //     // movies: [
    //     //   ...this.state.movies,
    //     //   {
    //     //     title: "Transporter",
    //     //     poster: "https://is3-ssl.mzstatic.com/image/thumb/Video4/v4/73/4a/da/734ada16-cc18-48a1-ebe4-dd4e61866427/pr_source.lsr/268x0w.png"
    //     //   }
    //     // ]
    //     movies : [
    //       {
    //         title: 'Matrix',
    //         poster: 'https://t1.daumcdn.net/movie/e49c2e4eb419a9813228b5ab6bc5b039362236ea'
    //       },
    //       {
    //         title: 'Star Wars',
    //         poster: 'https://images-na.ssl-images-amazon.com/images/I/81WjGytz7HL._SY445_.jpg'
    //       },
    //       {
    //         title: 'Old Boy',
    //         poster: 'https://i.pinimg.com/236x/8d/cc/ae/8dccae78c08ebc38569c19673eacfe07--series-movies-old-boys.jpg'
    //       },
    //       {
    //         title: 'Full Metal Jacket',
    //         poster: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/54889f61456519.5a6f727ec4709.jpeg'
    //       }
        
    //     ]
    //    })
    // },2000)

    //api 호출
    this._getMovies();

  }

   _getMovies = async() =>{
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = ()=>{
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
    .then(tomato => tomato.json())
    .then(json => json.data.movies)
    .catch(err=> console.log(err))
  }

  state = {
    greeting : 'Hello',
    // movies: []
    
  }

  _renderMovies = ()=> {
    const movies = this.state.movies.map((movie)=>{
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis={movie.synopsis}/>
    })
    return movies
  }

  render(){
    // 컴포넌트가 리액트 세계에 존재
    console.log('did render');
    const {movies} = this.state;
    return (
      <div className={movies ? "App":"App--loading"}>
        {/* {this.state.movies.map((movie, index) =>{
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })} */}
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
