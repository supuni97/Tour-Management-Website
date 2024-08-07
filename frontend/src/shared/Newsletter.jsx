import React from 'react';

import { Container, Row, Col } from 'reactstrap';
import MaleTourist from '../assets/images/male-tourist.png';
import './newsletter.css';

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='newsletter__content'>
                       <h2> Subscribe now to get useful Traveling information.</h2>
                        <div className='newsletter__input'>
                            <input type='email' placeholder='Enter your email' />
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae commodo diam, sed posuere orci.
                        Suspendisse faucibus libero leo, sit amet accumsan lectus elementum non. </p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='newsletter__img'>
                        <img src={MaleTourist} alt='' />
                    </div>
                </Col>

            </Row>
        </Container>
    </section>
  )
}

export default Newsletter