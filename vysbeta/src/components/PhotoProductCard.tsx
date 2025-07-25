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
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      margin: '0.5rem',
    }}
  >
    {/* Label A */}
    <div
      style={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#4B0082',
        backgroundColor: '#A1C9FF',
        padding: '0.25rem 0.75rem',
        borderRadius: '1rem',
        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s',
      }}
    >
      A
    </div>
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
            objectFit: 'contain',
            transition: 'transform 0.3s',
            paddingTop: '0.5rem', 
          }}
        />
        {thumbnails.length > 1 && (
          <div
            onClick={handleOpenModal}
            style={{
              position: 'absolute',
              top: '85%',
              left: '65%',
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
        <h3 style={{ textAlign: 'center', textDecoration: 'underline', fontSize: '1rem', marginBottom: '0.5rem' }}>
          Product Description
        </h3>
        <div style={{ maxHeight: '150px', overflowY: 'auto', fontSize: '0.85rem', color: '#333' }}>
          {description
            .split('.')
            .filter(line => line.trim() !== '')
            .map((sentence, idx) => (
              <p key={idx} style={{ margin: '0.25rem 0' }}>
                {sentence.trim()}.
              </p>
            ))}
        </div>
        <p style={{ fontWeight: 'bold', marginTop: '4rem', fontSize: '1rem' }}>${price}</p>
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
  </div>
  );
}
