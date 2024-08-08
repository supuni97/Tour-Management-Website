import React, { useEffect, useState } from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import tourData from '../assets/data/tours';
import TourCard from './../shared/TourCard';
import SearchBar from './../shared/SearchBar';
import Newsletter from './../shared/Newsletter';
import { Container, Row, Col } from 'reactstrap';

const Tours = () => {

  const [pageCount, setPageCOunt] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const pages = Math.ceil(5 / 4)
    setPageCOunt(pages)


  }, [page])

  return (
    <>
      <CommonSection title={'All Tours'} />

      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              tourData?.map(tour =>
                <Col lg='3' className='mb-4' key={tour.id}>

                  <TourCard tour={tour} />
                </Col>)
            }

            <Col lg='12'>
              <div className='d-flex align-items-center gap-3 pagination justify-content-center mt-4'>
                {[...Array(pageCount).keys()].map(number => (
                  <span key={number} onClick={()=> setPage(number)}
                  className={page===number? "active__page":""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      <Newsletter/>

    </>
  )
}

export default Tours