// src/components/PhotoProductCard.tsx
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
  return (
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '1rem',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        transition: 'transform 0.3s, box-shadow 0.3s',
        maxWidth: '350px',
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
      {/* Smaller Main Image */}
      <div style={{ width: '100%', height: '160px', overflow: 'hidden' }}>
        <img
          src={imagePath}
          alt="product"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Smaller Thumbnails */}
      <div style={{ display: 'flex', gap: '0.5rem', padding: '0.5rem' }}>
        {thumbnails.map((thumb, i) => (
          <img
            key={i}
            src={thumb}
            alt={`thumbnail-${i}`}
            style={{
              width: '50px',
              height: '50px',
              objectFit: 'cover',
              borderRadius: '0.5rem',
              border: '1px solid #ddd',
            }}
          />
        ))}
      </div>

      {/* Description and Price */}
      <div style={{ padding: '1rem' }}>
        <p style={{ margin: 0, color: '#333', fontSize: '0.9rem' }}>{description}</p>
        <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>${price}</p>
      </div>
    </div>
  );
}
