import React from 'react';
import { Card, CardBody } from 'reactstrap';
import {Link} from 'react-router-dom';
import './Tour-card.css';
import calculateAvgRating from '../utils/avgRating';
const TourCard = ({tour}) => {

    const {_id,title,city,photo,price,featured, reviews} = tour;
const {totalRating,avgRating} = calculateAvgRating(reviews)
  return (
    <div className='tour__card'>
        <Card>
        <div className='tour__img'>
        <img src={photo} alt='tour-img' />
        { featured && <span>featured</span>}
        </div>
        </Card>

        <CardBody className='card__body'>
            <div className='card_top d-flex align-items-center justify-content-between'>
            <span className='tour_location d-flex align-items-center gap-1'>
            <i class="ri-map-pin-line">{city}</i>
            </span>
            <span className='tour_location d-flex align-items-center gap-1'>
            <i class="ri-star-fill"></i>{avgRating === 0? null :avgRating}
            {totalRating===0 ? (
              "Not rated"):(
                <span>({reviews.length})</span>
                )}
            </span>
            </div>

            <h5 className='tour__title'>
            <Link to={`/tours/${_id}`}>{title}</Link>
            </h5>

            <div className='card__bottom d-flex align-items-center justify-content- mt-3'>
            <h5>${price} <span>/per person</span> </h5>
            <button className='btn booking__btn'>
            <Link to={`/tours/${_id}`}>Book Now</Link>
            </button>
            </div>
        </CardBody>
    </div>
  )
}

export default TourCard