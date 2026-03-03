import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <header className="header">
        <div className="headerInner">
          <div>
            <h1 className="title">Counter App</h1>
            <p className="subtitle">Clean state management demo with React</p>
          </div>

          <a
            href="https://github.com/Mohican76/counter-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </header>

      <main className="container">
        <section className="card">
          <p className="value">{count}</p>

          <div className="row" style={{ marginTop: 12 }}>
            <button className="btn" onClick={() => setCount((c) => c + 1)}>
              Increase
            </button>

            <button
              className="btn btnSecondary"
              onClick={() => setCount((c) => c - 1)}
            >
              Decrease
            </button>

            <button className="btn btnSecondary" onClick={() => setCount(0)}>
              Reset
            </button>
          </div>
        </section>

        <div className="footer">
          Built with React • Deployed on Netlify • © Gerald Mendoza
        </div>
      </main>
    </>
  );
}
