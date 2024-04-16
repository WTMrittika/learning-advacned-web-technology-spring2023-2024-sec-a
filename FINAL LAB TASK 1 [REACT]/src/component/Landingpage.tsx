import React from 'react';
import Info from './Info';

function LandingPage() {
  const info = ['Mrittika'];

  return (
    <>
      <nav>
        <h1>Landing Page</h1>
        <ul>
          <li>About</li>
          <li>Contact Info</li>
        </ul>
      </nav>

      <section>
        <h1>Hello! This is the landing page.</h1>
        <p>The ultimate platform for online learning.</p>
        <div>
          {info.map((item) => (
            <Info key={item} username={item} id={1} email="mtika@aiub.edu" />
          ))}
        </div>
        <button>Enter</button>
      </section>

      <section>
        <h2>What Our Teachers Say</h2>
        <p>"Teachers can change lives with just the right mix of chalk and challenges." - Joyce Meyer.</p>
      </section>

      <footer>
        <p>&copy; 2024 Landing Page. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default LandingPage;