import { useState } from 'react';

interface ProductCardProps {
  videoPath: string;
  imagePath: string;
  description: string;
  price: string;
  thumbnails: string[];
}

export default function ProductCard({
  videoPath,
  imagePath,
  description,
  price,
  thumbnails,
}: ProductCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOverlayClick = () => {
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
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1.02)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      }}
    >
      {/* Smaller Video */}
      <div style={{ height: '160px', width: '100%', overflow: 'hidden' }}>
        <video
          src={videoPath}
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Image with Overlay */}
      <div style={{ height: '120px', overflow: 'hidden', position: 'relative' }}>
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
        {thumbnails.length > 0 && (
          <div
            onClick={handleOverlayClick}
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              backgroundColor: 'rgba(0, 98, 255, 0.8)',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.8rem',
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

      {/* Thumbnail Modal */}
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
            <h3 style={{ marginBottom: '1rem', fontWeight: 'bold' }}>
              Additional Views
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
                marginBottom: '1rem',
              }}
            >
              {thumbnails.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Thumbnail ${idx}`}
                  onClick={() => setSelectedImage(src)}
                  style={{
                    width: '100%',
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
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </>
      )}

      {/* Enlarged Image Viewer */}
      {selectedImage && (
        <>
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.7)',
              zIndex: 1100,
            }}
          />
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1101,
              backgroundColor: '#fff',
              padding: '1rem',
              borderRadius: '1rem',
              maxWidth: '90%',
              maxHeight: '80%',
              boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
              textAlign: 'center',
            }}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                borderRadius: '0.5rem',
              }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                marginTop: '1rem',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
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

