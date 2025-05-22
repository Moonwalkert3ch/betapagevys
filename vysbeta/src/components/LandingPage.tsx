import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

// Load model from public/models/3d-glasses.gltf
const Model: React.FC = () => {
  const { scene } = useGLTF('/assets/models/3d-glasses.gltf');
  return <primitive object={scene} scale={1.5} />;
};

const LandingPage: React.FC = () => {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', color: '#004AAD', fontFamily: 'sans-serif' }}>
      
      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '4rem 1rem',
          background: 'linear-gradient(to bottom, #FF3B3F, #004AAD)',
          color: 'white',
        }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          Welcome to VYS
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '640px', margin: '0 auto' }}>
          A Virtual Yard Sale platform to explore secondhand items like never before — in 3D and VR!
        </p>

        <div style={{ width: '100%', maxWidth: '600px', height: '300px', margin: '2rem auto 0' }}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Model />
            <OrbitControls />
          </Canvas>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section
        style={{
          padding: '3rem 1.5rem',
          maxWidth: '64rem',
          margin: '0 auto',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#222',
            borderLeft: '4px solid #FF3B3F',
            paddingLeft: '0.75rem',
          }}
        >
          The Problem
        </h2>
        <p style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
          Many buyers and sellers in their 20s–30s are frustrated with not being able to fully inspect items online before buying. 
          Repetitive requests for more photos or videos often waste time and discourage both sides.
        </p>

        <h2
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#222',
            borderLeft: '4px solid #004AAD',
            paddingLeft: '0.75rem',
          }}
        >
          Our Solution
        </h2>
        <p style={{ lineHeight: '1.6' }}>
          VYS allows sellers to turn item photos into interactive 3D models with VR viewing and AI-enhanced descriptions, making it easy for buyers to assess condition, scale, and fit with confidence.
        </p>
      </section>

      {/* CTA Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          backgroundColor: '#FF3B3F',
          color: 'blue',
        }}
      >
        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>
          Ready to explore items in 3D?
        </h3>
        <button
          style={{
            backgroundColor: 'white',
            color: '#FF3B3F',
            padding: '0.75rem 1.5rem',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: '1rem',
            cursor: 'pointer',
            border: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#004AAD';
            e.currentTarget.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = '#FF3B3F';
          }}
        >
          Get Started
        </button>
      </section>
    </main>
  );
};

export default LandingPage;
