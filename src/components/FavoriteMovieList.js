import React from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';

import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {
    const favorites = [];
    // const { favorites, displayFavorites, removeFavorite } = props;
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    return ({
        favorites: state.favorites,
        displayFavorites: state.displayFavorites
    })
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);