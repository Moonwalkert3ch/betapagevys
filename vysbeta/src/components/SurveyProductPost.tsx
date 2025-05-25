// src/components/SurveyProductPost.tsx
import React from 'react';
import PhotoProductCard from './PhotoProductCard';
import ProductCard from './ProductCard';

const products = [
  {
    videoPath: '/assets/videos/accent-chair.mp4',
    imagePath: '/images/accent-fv-angle.jpg',
    thumbnails: ['/images/accent-fl.jpg', '/images/accent-fs-angle.jpg'],
    description: 'This is a great survey tool for field data.',
    price: '50',
  },
  {
    videoPath: '/assets/videos/office-chair.mp4',
    imagePath: '/images/oc-fs.jpg',
    thumbnails: ['/images/oc-bs.jpg', '/images/oc-lv.jpg','/images/oc-fs.jpg'],
    description: 'Compact and durable for rugged use.',
    price: '65',
  },
  {
    videoPath: '/assets/videos/puma-shoe.mp4',
    imagePath: '/images/ps-fv.jpg',
    thumbnails: ['/images/shoe-l-side.jpg', '/images/shoe-side.jpg'],
    description: 'Lightweight and high precision.',
    price: '45',
  },
  {
    videoPath: '/assets/videos/wooden-chair.mp4',
    imagePath: '/images/dc-fs.jpg',
    thumbnails: ['/images/dc-b.jpg', '/images/dc-lv.jpg'],
    description: 'Ideal for topographic surveys.',
    price: '70',
  },
  {
    videoPath: '/assets/videos/stool-chair.mp4',
    imagePath: '/images/bar-fs.jpg',
    thumbnails: ['/images/bar-cushion.jpg', '/images/bc-s.jpg'],
    description: 'User-friendly with advanced features.',
    price: '60',
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
    </div>
  );
}