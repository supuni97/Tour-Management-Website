import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import Subtitle from './../shared/Subtitle';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVidep from '../assets/images/hero-video.mp4';
import WorldImg from '../assets/images/world.png';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';

const Home = () => {
  return (
    <>
    {/* hero start */}
    <section>
      <Container>
      <Row>
        <Col lg='6'>
        <div className='hero__content'>
        <div className='hero__subtitle d-flex align-items-center'>
          <Subtitle subtitle={'Know Before You Go'} />
          <img src={WorldImg} alt='' />
        </div> 
        <h1>Traveling opens the door to creating <span className='highlight'>memories</span> </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </Col>
        <Col lg='2'>
        <div className='hero__img-box'>
        <img src={heroImg} alt='' />

        </div>
        </Col>
        <Col lg='2'>
        <div className='hero__img-box mt-4'>
        <video src={heroVidep} alt='' controls />

        </div>
        </Col> <Col lg='2'>
        <div className='hero__img-box mt-5'>
        <img src={heroImg02} alt='' />

        </div>
        </Col>

        <SearchBar/>

      </Row>
      </Container>
    </section>
    {/* hero end*/}

    <section>
      <Container>
        <Row>
          <Col lg='3'>
          <h5 className='services__subtitle'>What we serve</h5>
          <h2 className='services__title'>We offer our best services</h2>
          </Col>

          <ServiceList/>
        </Row>
      </Container>
    </section>

    </>
  )
}

export default Home