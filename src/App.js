// src/App.js
export default function App() {
  return (
    <main
      className="text-gray-400 body-font"
      style={{
        backgroundImage: "url('/noise-tecture.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}