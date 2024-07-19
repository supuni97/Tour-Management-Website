import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/weather.png';
import customImg from '../assets/images/customization.png';

const servicesData = [
  {
    imgurl: weatherImg,
    title: 'Calculate Weather',
    desc: 'description'
  },
  {
    imgurl: guideImg,
    title: 'Best Tour Guide',
    desc: 'description'
  },
  {
    imgurl: customImg,
    title: 'Customization',
    desc: 'description'
  }
]

const ServiceList = () => {
  return (
    <>
      {
        servicesData.map((item,index)=>
       ( <Col lg='3' key={index}><ServiceCard item={item}/></Col>
       ))}
    </>
  )
}

export default ServiceList