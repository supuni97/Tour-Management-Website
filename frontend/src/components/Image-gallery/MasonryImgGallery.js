import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';  
import galleryUmages from './galleryUmages';

const MasonryImgGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}> 
      <Masonry gutter='1rem'>
        {
          galleryUmages.map((item,index) => (
            <img  className='msn_img' src={item} key={index} alt='' style={{width:'100%', display:'block', borderRadius:'10px'}}/>
          ))
        }
      </Masonry>
    </ResponsiveMasonry>
  );
}

export default MasonryImgGallery;
