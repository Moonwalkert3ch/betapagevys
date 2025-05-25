import React, { useEffect } from 'react'; 
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';

const ShoppingCartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    width="24"
    height="24"
    style={{ marginRight: '0.5rem', flexShrink: 0 }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 1.293a1 1 0 00.293 1.414l.707.707a1 1 0 001.414-.293L10 13M7 13h10m0 0a2 2 0 110 4 2 2 0 010-4zm-10 0a2 2 0 110 4 2 2 0 010-4z"
    />
  </svg>
);

const Model: React.FC = () => {
  const { scene } = useGLTF('/assets/models/3d-glasses.gltf');
  return <primitive object={scene} scale={1.5} />;
};

const LandingPage: React.FC = () => {
  // Inject responsive CSS once on mount
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Navigation */
      nav {
        flex-wrap: wrap;
      }
      nav > div {
        flex: 1 1 auto;
      }
      nav a {
        margin-top: 8px;
        margin-left: auto;
      }

      /* Responsive text sizing and padding */
      @media (max-width: 768px) {
        section {
          padding-left: 1rem !important;
          padding-right: 1rem !important;
        }
        h1 {
          font-size: 2rem !important;
        }
        h2 {
          font-size: 1.5rem !important;
        }
        h3 {
          font-size: 1.25rem !important;
        }
        p {
          font-size: 1rem !important;
        }
        button {
          max-width: 100% !important;
          width: auto !important;
          padding: 1rem 2rem !important;
          font-size: 1.1rem !important;
        }
      }

      /* Canvas size on smaller screens */
      @media (max-width: 480px) {
        .canvas-container {
          height: 200px !important;
          max-width: 100% !important;
        }
      }

      /* Footer style */
      footer {
        text-align: center;
        padding: 1rem;
        background-color: #f0f0f0;
        color: #666;
        font-size: 0.9rem;
        margin-top: 2rem;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        color: '#004AAD',
        fontFamily: 'sans-serif',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Navigation Bar */}
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          backgroundColor: '#fff',
          borderBottom: '1px solid #ddd',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontWeight: 'bold',
            fontSize: '1.25rem',
            color: '#004AAD',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <ShoppingCartIcon />
          <span>VYS</span>
        </div>
        <a
          href="/surveys"
          style={{
            color: '#004AAD',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            marginTop: 8,
            marginLeft: 'auto',
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = '#FF3B3F')}
          onMouseOut={(e) => (e.currentTarget.style.color = '#004AAD')}
        >
          Surveys
        </a>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '4rem 1rem',
          background: 'linear-gradient(to bottom, #FF3B3F, #004AAD)',
          color: 'white',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '2rem',
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.2,
          }}
        >
          Welcome to our Beta Solution Page
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: 1.5,
          }}
        >
          We are testing ways to explore secondhand items like never before — in 3D and VR! And we want <strong>YOUR</strong> opinion!
        </p>

        <div
          className="canvas-container"
          style={{
            width: '100%',
            maxWidth: '600px',
            height: '300px',
            margin: '2rem auto 0',
          }}
        >
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
          Many buyers and sellers are frustrated with not being able to fully inspect items online before buying. Repetitive
          requests for more photos or videos often waste time and discourage both sides.
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
          VYS allows sellers to turn item photos into interactive 3D models with VR viewing and AI-enhanced descriptions, making it easy for
          buyers to assess condition, scale, and fit with confidence.
        </p>
      </section>

      {/* CTA Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          background: 'linear-gradient(to bottom, #FF3B3F, #004AAD)',
          color: 'white',
        }}
      >
        <h3
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <strong>Ready to explore items in 3D?</strong> (complete a short survey to help us improve our product afterward!)
        </h3>
        <Link to="/survey">
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
            maxWidth: 200,
            width: '90%',
            margin: '0 auto',
            display: 'block',
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
        </Link>
      </section>

      {/* Footer */}
      <footer>
        &copy; {new Date().getFullYear()} NuEwa Tech
      </footer>
    </main>
  );
};

export default LandingPage;
