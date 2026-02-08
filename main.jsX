const { useState, createElement: h } = React;
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

  return h(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "Arial",
        textAlign: "center",
      },
    },
    !isValentine
      ? [
          h("h1", { key: 1 }, "Will you be my Valentine? 💘"),
          h(
            "button",
            {
              key: 2,
              onClick: () => setIsValentine(true),
              style: { fontSize: yesButtonSize, margin: "10px" },
            },
            "Yes"
          ),
          h(
            "button",
            {
              key: 3,
              onClick: () => setNoClicks((c) => c + 1),
            },
            noClicks === 0
              ? "No"
              : NO_PHRASES[Math.min(noClicks - 1, NO_PHRASES.length - 1)]
          ),
        ]
      : h(
          "h1",
          { style: { color: "pink", fontSize: "48px" } },
          "Yay!!! 💖🎉"
        )
  );
}

createRoot(document.getElementById("root")).render(h(App));
