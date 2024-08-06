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
import FeaturedTourList from '../components/Featured tours/FeaturedTourList';
import expImg from '../assets/images/experience.png';
import MasonryImgGallery from '../components/Image-gallery/MasonryImgGallery';

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

            <SearchBar />

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

            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* featured tour section start*/}
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'} />
              <h2 className='featured__tour-title'>Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/* featured tour section end*/}

      {/* experience section start*/}

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className='experience__content'>
                <Subtitle subtitle={'Experience'}/>
                <h2>With our all experience <br/> we will serve you</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br/>
                Sed do eiusmod tempor incididunt ut labore
                </p>
              </div>

              <div  className='counter__wrapper d-flex align-items-center gap-5'>
              <div  className='counter__box'>
             <span>12k+</span>
             <h6>Successful Trip</h6>
              </div>
              <div  className='counter__box'>
             <span>2k+</span>
             <h6>Regular Clients</h6>
              </div>
              <div  className='counter__box'>
             <span>15</span>
             <h6>Years Experience</h6>
              </div>
              </div>

            </Col>
            <Col lg='6'>
              <div className='experience__img'>
              <img src={expImg} alt='' />

              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* experience section end*/}
     
      {/* gallery section start*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
            <Subtitle subtitle={'Gallery'} />
            <h2 className='gallery__title'>Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImgGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      {/* gallery section end*/}
    </>
  )
}

export default Home