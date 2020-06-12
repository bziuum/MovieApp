import React from 'react'
import { Link } from '@reach/router';
import {StyledMovieThumb} from '../styles/StyledMovieThumb';
import PropTypes from 'prop-types';

const MovieThumb = ({clickable, image, movieId}) => (
    <StyledMovieThumb>
        {clickable ? (
        <Link to={`/${movieId}`}>
            <img className="clickable" src={image} alt="movieThumb"/>
        </Link>
        ) : ( 
        <img src={image} alt="not-clickable"/> 
        )}
    </StyledMovieThumb>

)

MovieThumb.propTypes = {
    clickable: PropTypes.bool,
    image: PropTypes.string,
    movieId: PropTypes.number,
}
export default MovieThumb;