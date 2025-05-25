// src/components/ProductCard.tsx
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
}: ProductCardProps) {
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

      {/* Smaller Image */}
      <div style={{ height: '120px', overflow: 'hidden' }}>
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
      </div>

      {/* Description and Price */}
      <div style={{ padding: '1rem' }}>
        <p style={{ margin: 0, color: '#333', fontSize: '0.9rem' }}>{description}</p>
        <p style={{ fontWeight: 'bold', marginTop: '0.5rem' }}>${price}</p>
      </div>
    </div>
  );
}
