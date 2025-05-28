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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpenModal = () => {
    setSelectedImage(imagePath); // Set the main image as default
    setShowModal(true);
  };

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
            transition: 'transform 0.3s',
          }}
        />
        {thumbnails.length > 1 && (
          <div
            onClick={handleOpenModal}
            style={{
              position: 'absolute',
              top: '80%',
              left: '80%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 123, 255, 0.6)',
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
              maxWidth: '90vw',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            }}
          >
            <h3 style={{ marginBottom: '1rem', fontWeight:'bold' }}>Additional Views</h3>

            {/* Enlarged selected image */}
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Selected"
                style={{
                  width: '100%',
                  maxHeight: '400px',
                  objectFit: 'contain',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem',
                }}
              />
            )}

            {/* Thumbnails to choose from */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[imagePath, ...thumbnails].map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Thumbnail ${idx}`}
                  onClick={() => setSelectedImage(src)}
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    border: selectedImage === src ? '2px solid #007bff' : 'none',
                  }}
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
