import { useState } from 'react';

interface PhotoProductCardProps {
  imagePath: string;
  thumbnails: string[];
  description: string;
  price: string;
}

export default function PhotoProductCard({
  imagePath,
  thumbnails,
  description,
  price,
}: PhotoProductCardProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '1rem',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        maxWidth: '350px',
        position: 'relative',
      }}
    >
      {/* Image with Overlay */}
      <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
        <img
          src={imagePath}
          alt="product"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        {thumbnails.length > 1 && (
          <div
            onClick={() => setShowModal(true)}
            style={{
              position: 'absolute',
              top: '80%',
              left: '80%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 123, 255, 0.6)', // Blue film
              color: '#fff',
              fontSize: '1.25rem',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              userSelect: 'none',
            }}
          >
            +{thumbnails.length}
          </div>
        )}
      </div>

      {/* Description and Price */}
      <div style={{ padding: '1rem' }}>
        <p style={{ margin: 0, color: '#333', fontSize: '0.9rem' }}>{description}</p>
        <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>${price}</p>
      </div>

      {/* Modal */}
      {showModal && (
        <>
          <div
            onClick={() => setShowModal(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              height: '100vh',
              width: '100vw',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1000,
            }}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: '#fff',
              padding: '1rem',
              borderRadius: '1rem',
              zIndex: 1001,
              maxWidth: '80vw',
              maxHeight: '80vh',
              overflowY: 'auto',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            }}
          >
            <h3 style={{ marginBottom: '1rem' }}>Additional Views</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {thumbnails.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Thumbnail ${idx}`}
                  style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '0.5rem' }}
                />
              ))}
            </div>
            <button
              onClick={() => setShowModal(false)}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </>
      )}
    </div>
  );
}
