// src/components/SurveyProductPost.tsx
import React from 'react';
import PhotoProductCard from './PhotoProductCard';
import ProductCard from './ProductCard';
// import { Color } from 'three';

const products = [
  {
    videoPath: '/assets/videos/accent-chair.mp4',
    imagePath: '/images/accent-fv-angle.jpg',
    thumbnails: ['/images/accent-fl.jpg', '/images/accent-fs-angle.jpg', '/images/ac-back.jpg'],
    description: 'Item: Accent Chair. Dimensions: 27" x 27" x 34 inches". Color: Off-white. Features: Comfortable and stylish, perfect for any room. Material:Linen Fabric; Sponge; Wood. Maximum Load Weight: 440lbs. Assembly Required: Yes. Warranty: 1 year.',
    price: '100',
  },
  {
    videoPath: '/assets/videos/office-chair.mp4',
    imagePath: '/images/oc-fs.jpg',
    thumbnails: ['/images/oc-bs.jpg', '/images/oc-lv.jpg','/images/oc-fs.jpg'],
    description: 'Item: Office Chair. Dimensions: 24" x 24" x 36 inches". Color: Black. Features: Ergonomic design, adjustable height, swivel base. Material: Mesh; Steel; Plastic. Maximum Load Weight: 300lbs. Assembly Required: Yes. Warranty: 2 years.',
    price: '65',
  },
  {
    videoPath: '/assets/videos/puma-shoe.mp4',
    imagePath: '/images/ps-fv.jpg',
    thumbnails: ['/images/shoe-l-side.jpg', '/images/shoe-side.jpg', '/images/ps-pair.jpg'],
    description: 'Item: Puma Shoe. Dimensions: 10" x 4" x 3 inches". Color: Black/White. Features: Lightweight, breathable mesh, cushioned sole. Material: Synthetic; Rubber. Maximum Load Weight: N/A. Assembly Required: No. Warranty: 6 months.',
    price: '25',
  },
  {
    videoPath: '/assets/videos/wooden-chair.mp4',
    imagePath: '/images/dc-fs.jpg',
    thumbnails: ['/images/dc-b.jpg', '/images/dc-lv.jpg', '/images/dc-back.jpg'],
    description: 'Item: Wooden Chair. Dimensions: 22" x 22" x 36 inches". Color: Natural Wood. Features: Classic design, sturdy construction, comfortable seating. Material: Solid Wood; Fabric Cushion. Maximum Load Weight: 350lbs. Assembly Required: Yes. Warranty: 1 year.',
    price: '10',
  },
  {
    videoPath: '/assets/videos/stool-chair.mp4',
    imagePath: '/images/bar-fs.jpg',
    thumbnails: ['/images/bar-cushion.jpg', '/images/bc-s.jpg', '/images/bc-fv.jpg'],
    description: 'Item: Stool Chair. Dimensions: 18" x 18" x 30 inches". Color: Black. Features: Adjustable height, swivel seat, footrest. Material: Metal; Faux Leather. Maximum Load Weight: 250lbs. Assembly Required: Yes. Warranty: 1 year.',
    price: '20',
  },
];

export default function SurveyProductPost() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}>
        Beta Product Solution Sample
      </h1>

      

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
        }}
      >
        {products.map((product, idx) => (
          <React.Fragment key={idx}>
            <ProductCard
              videoPath={product.videoPath}
              imagePath={product.imagePath}
              description={product.description}
              thumbnails={product.thumbnails}
              price={product.price}
            />
            <PhotoProductCard
              imagePath={product.imagePath}
              thumbnails={product.thumbnails}
              description={product.description}
              price={product.price}
            />
          </React.Fragment>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
  <a
    href="https://docs.google.com/forms/d/e/1FAIpQLSer22RCinp1tA49SXPsFsbNDuH2aQUKKnqrlSW6kcw1ok0nSA/viewform?usp=sharing&ouid=101666015088557918298"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-block',
      padding: '0.75rem 1.5rem',
      backgroundColor: '#007bff',
      color: '#fff',
      fontSize: '1rem',
      fontWeight: 'bold',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      transition: 'background-color 0.3s',
    }}
    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#0056b3')}
    onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#007bff')}
  >
    Complete Survey
  </a>
</div>

    </div>
  );
}