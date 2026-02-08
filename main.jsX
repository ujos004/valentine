const { useState } = React;
const { createRoot } = ReactDOM;

const NO_PHRASES = [
  "No 💔",
  "Pretty please? 🥺",
  "But we'd be so cute together! 💕",
  "One more chance, pookie?",
  "Don't break my heart :(",
  "What about a maybe?",
  "Please don't do this to me, I'm fragile",
];

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [isValentine, setIsValentine] = useState(false);
  const yesButtonSize = noClicks * 20 + 16;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "Arial",
      textAlign: "center"
    }}>
      {!isValentine ? (
        <>
          <h1>Will you be my Valentine? 💘</h1>

          <button
            onClick={() => setIsValentine(true)}
            style={{ fontSize: yesButtonSize }}
          >
            Yes
          </button>

          <button onClick={() => setNoClicks(c => c + 1)}>
            {noClicks === 0
              ? "No"
              : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]}
          </button>
        </>
      ) : (
        <h1 style={{ color: "pink", fontSize: 48 }}>
          Yay!!! 💖🎉
        </h1>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
