import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

// class Movie extends Component{

//     static propsTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         // console.log(this.props);
//         return (
//             <div>
//                 <MoviePoster poster={this.props.poster}/>
//                 <h1>{this.props.title}</h1>
//             </div>
//         )
//     }
// }

// 클래식 컴포넌트
// class MoviePoster extends Component{

//     static propsTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     }

//     render(){
//         return(
//             // <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8ttGZ5AlDmadfWUBDYS3sNd_Hf9HsYnBAinOhl7tPJT3IaWGBQ" />
//             <img src={this.props.poster} alt="Movie Poster"  />
//         )
        
//     }
// }

// stateless 컴포넌트
function MoviePoster({poster, alt}){
    return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

function Movie({title, poster, genres, synopsis}){
    return (
        <div className="Movie">
            <div className="Movie__Columns">
                <MoviePoster poster={poster} alt={title}/>
            </div>
            <div className="Movie__Columns">
                <h1>{title}</h1>
                <div className="Movie__Genres">
                    {genres.map((genre,index)=> 
                        <MovieGenre genre={genre} key={index}/>)
                    }
                </div>
                <div className="Movie__Synopsis">
                    <LinesEllipsis
                        text={synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </div>
            </div>
        </div>
    )
}

Movie.propTypes = {
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}

function MovieGenre({genre}){
    return (
        <span className="Movie__Genre">{genre} </span>
    )
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}
export default Movie