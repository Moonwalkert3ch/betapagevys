import React from 'react';
import PhotoProductCard from './PhotoProductCard';
import ProductCard from './ProductCard';
import SectionDivider from './SectionDivider';

const products = [
  {
    videoPath: '/assets/videos/accent-chair.mp4',
    imagePath: '/images/accent-fv-angle.jpg',
    thumbnails: ['/images/accent-fl.jpg', '/images/accent-fs-angle.jpg', '/images/ac-back.jpg'],
    description: 'Item: Accent Chair. Dimensions: 27" x 27" x 34 inches". Color: Off-white. Features: Comfortable and stylish, perfect for any room. Material:Linen Fabric; Wood. Maximum Load Weight: 440lbs.',
    price: '100',
  },
  {
    videoPath: '/assets/videos/office-chair.mp4',
    imagePath: '/images/oc-fs.jpg',
    thumbnails: ['/images/oc-bs.jpg', '/images/oc-lv.jpg','/images/oc-fs.jpg'],
    description: 'Item: Office Chair. Dimensions: 24" x 24" x 36 inches". Color: Black. Features: Ergonomic design. Material: Mesh; Steel. Maximum Load Weight: 300lbs.',
    price: '65',
  },
  {
    videoPath: '/assets/videos/puma-shoe.mp4',
    imagePath: '/images/ps-fv.jpg',
    thumbnails: ['/images/shoe-l-side.jpg', '/images/shoe-side.jpg', '/images/ps-pair.jpg'],
    description: 'Item: Puma Shoe. Dimensions: 9 inches". Color: light grey/white. Features: Lightweight, breathable mesh, cushioned sole. Material: Synthetic; Rubber.',
    price: '25',
  },
  {
    videoPath: '/assets/videos/wooden-chair.mp4',
    imagePath: '/images/dc-fs.jpg',
    thumbnails: ['/images/dc-b.jpg', '/images/dc-lv.jpg', '/images/dc-back.jpg'],
    description: 'Item: Wooden Chair. Dimensions: 22" x 22" x 36 inches". Color: Natural Wood. Features: Classic design, sturdy construction, comfortable seating. Material: Solid Wood;. Maximum Load Weight: 350lbs.',
    price: '10',
  },
  {
    videoPath: '/assets/videos/stool-chair.mp4',
    imagePath: '/images/bar-fs.jpg',
    thumbnails: ['/images/bar-cushion.jpg', '/images/bc-s.jpg', '/images/bc-fv.jpg'],
    description: 'Item: Stool Chair. Dimensions: 18" x 18" x 30 inches". Color: Black. Material: Metal; Faux Leather. Maximum Load Weight: 250lbs.',
    price: '20',
  },
];

export default function SurveyProductPost() {
  return (
    <div style={{ padding: '1rem', fontFamily: 'sans-serif', background: '#4B0082' }}>
      {/* Intro Text */}
      <div style={{ maxWidth: '800px', margin: '0 auto', marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#A1C9FF' }}>
          Visual Survey
        </h1>
        <p style={{ fontSize: '1rem', color: 'white' }}>
          This page shows a side-by-side visual comparison of how listings typically appear on platforms like Facebook Marketplace, Etsy, Poshmark, and Craigslist (Column A) versus how they might appear using the VYS solution (Column B).
        </p>
        <p style={{ fontSize: '1rem', color: 'white', marginTop: '0.5rem' }}>
          Below, you’ll see each product represented in both formats. After reviewing, click the button at the bottom to take our short Google Form survey.
        </p>
      </div>

      {/* Column A + B Labels */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        marginBottom: '1rem',
        color: '#4B0082'
      }}><div>
        <SectionDivider
          text="Column A"
          fontSize="2rem"
          color="#A1C9FF"
        />
        </div>
        <div>
        <SectionDivider 
          text="Column B"
          fontSize="2rem"
          color='#A1C9FF'
        />
        </div>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
        }}
      >
        {products.map((product, idx) => (
          <React.Fragment key={idx}>
            {/* Column A card with background letter A */}
            
              <div style={{ position: 'relative', zIndex: 1 }}>
                <PhotoProductCard
                  imagePath={product.imagePath}
                  thumbnails={product.thumbnails}
                  description={product.description}
                  price={product.price}
                />
              </div>

            {/* Column B card - untouched for now */}
            <ProductCard
              videoPath={product.videoPath}
              imagePath={product.imagePath}
              description={product.description}
              thumbnails={product.thumbnails}
              price={product.price}
            />
          </React.Fragment>
        ))}
      </div>

      {/* Survey Button */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSer22RCinp1tA49SXPsFsbNDuH2aQUKKnqrlSW6kcw1ok0nSA/viewform?usp=sharing&ouid=101666015088557918298"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#A1C9FF',
            color: '#4B0082',
            fontSize: '1rem',
            fontWeight: 'bold',
            borderRadius: '999rem',
            textDecoration: 'none',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#A1C9FF')}
        >
          Complete Survey
        </a>
      </div>
    </div>
  );
}
