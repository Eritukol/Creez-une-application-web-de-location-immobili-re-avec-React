import './Home.css';

function Home() {
  return (
    <main className="home">
      <section className="banner container">
        <h1>Chez vous, partout et ailleurs</h1>
      </section>

      <section className="gallery container">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="card">
            <p>Titre de la location</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Home;
