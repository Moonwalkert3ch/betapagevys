import { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import heroAnimation from '../assets/lottie/hero-animation.json';
import SectionDivider from './SectionDivider';

const ShoppingCartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} width="24" height="24" style={{ marginRight: '0.5rem', flexShrink: 0 }}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.293 1.293a1 1 0 00.293 1.414l.707.707a1 1 0 001.414-.293L10 13M7 13h10m0 0a2 2 0 110 4 2 2 0 010-4zm-10 0a2 2 0 110 4 2 2 0 010-4z" />
  </svg>
);

const Model = () => {
  const { scene } = useGLTF('/assets/models/3d-glasses.gltf');
  return <primitive object={scene} scale={1.5} />;
};

const LandingPage = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      nav { flex-wrap: wrap; }
      nav > div { flex: 1 1 auto; }
      nav a { margin-top: 8px; margin-left: auto; }

      @media (max-width: 768px) {
        section { padding-left: 1rem !important; padding-right: 1rem !important; }
        h1 { font-size: 2rem !important; }
        h2 { font-size: 1.5rem !important; }
        h3 { font-size: 1.25rem !important; }
        p { font-size: 1rem !important; }
        button { max-width: 100% !important; width: auto !important; padding: 1rem 2rem !important; font-size: 1.1rem !important; }
      }

      @media (max-width: 480px) {
        .canvas-container { height: 150px !important; max-width: 100% !important; }
      }

      footer {
        text-align: center;
        padding: 1rem;
        background-color: #ffffff ;
        color: #4B0082;
        font-size: 0.9rem;
        margin-top: 2rem;
      }

      @keyframes glowRainbow {
        0% { color: red; text-shadow: 0 0 5px red; }
        20% { color: orange; text-shadow: 0 0 5px orange; }
        40% { color: yellow; text-shadow: 0 0 5px yellow; }
        60% { color: green; text-shadow: 0 0 5px green; }
        80% { color: blue; text-shadow: 0 0 5px blue; }
        100% { color: violet; text-shadow: 0 0 5px violet; }
      }

      .glow-flash {
        animation: glowRainbow 4s infinite;
        font-weight: bold;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #FF3B3F, #004AAD)', fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', background: '#fff', borderBottom: '1px solid #ddd', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold', fontSize: '1.25rem', color: '#4B0082', cursor: 'pointer' }}>
          <ShoppingCartIcon />
          <span>VYS</span>
        </div>
        <Link to="/survey" style={{ color: '#4B0082', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', cursor: 'pointer' }}>Surveys</Link>
      </nav>

      <section style={{ textAlign: 'center', padding: '0rem', color: 'white' }}>
        <div style={{ maxWidth: '300px', margin: '2rem auto', height: 150 }}>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} />
            <Model />
            <OrbitControls />
          </Canvas>
        </div>

        <h1 style={{ color: '#4B0082', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          Ever Wished You Could <span className="glow-flash">Really</span> See an Item Before Buying It Online?
        </h1>

        <p style={{ fontSize: '12px', color: '#A1C9FF', maxWidth: '640px', margin: '1rem auto', lineHeight: 1.5 }}>
          Imagine spinning, zooming, and exploring secondhand items — just like holding them in your hands. Welcome to the future of online thrifting.
        </p>

        <Lottie
          animationData={heroAnimation}
          loop
          autoplay
          style={{ width: '100%', maxWidth: 500, height: 200 }}
        />

        <Link to="/survey">
          <button style={{ backgroundColor: '#4B0082', color: '#A1C9FF', borderRadius: '999px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', transition: 'all 0.3s ease', marginTop: '1rem', padding: '0.75rem 1.5rem' }}>
            Jump to Survey
          </button>
        </Link>
      </section>

      <section style={{ padding: '3rem 2rem', maxWidth: '64rem' }}>
        <SectionDivider
          text="Why Take the Survey?"
          fontSize="3rem"
          color="#4B0082"
        />
        <img
          src="/images/illustration.png"
          alt="Survey Illustration"
          style={{ width: '100%', maxWidth: '200px' }}
        />
        <p style={{ color: '#A1C9FF', fontSize: '1rem', lineHeight: '1', maxWidth: 640 }}>
          We're building something new — and your feedback will shape it. This short survey helps us understand how people want to browse, shop, and sell secondhand items in 3D.
          <br /><br />
          <strong>Leave your email</strong> and you’ll get early access to our beta experience!
        </p>
      </section>

      <section style={{ textAlign: 'center', padding: '0.5rem', color: '#A1C9FF' }}>
        <SectionDivider
          text="Ready to experience the future? Take our short survey to help us build it together."
          fontSize="2rem"
          color="#A1C9FF"
        />
        <Link to="/survey">
          <button style={{ backgroundColor: '#4B0082', color: '#A1C9FF', borderRadius: '999px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', transition: 'all 0.3s ease', marginTop: '1rem', padding: '0.75rem 1.5rem' }}>
            Take the Survey
          </button>
        </Link>
      </section>

      <footer>
        &copy; {new Date().getFullYear()} NuEwa Tech
      </footer>
    </main>
  );
};

export default LandingPage;
