import { useEffect } from "react";
import Title from "./components/Title";

const LoadingPage = () => {
  useEffect(() => {
    // Create an audio element
    const audio = new Audio("/audio/loading.mp3");

    // Play the audio
    audio.play();

    // Add event listeners to stop the audio when the page is reloaded or closed
    window.addEventListener("beforeunload", () => {
      // This will stop the audio when the page is reloaded or closed
      audio.pause();
      audio.currentTime = 0;
    });

    // Optionally, you can add event listeners for audio events (e.g., audio ended)
    audio.addEventListener("ended", () => {
      audio.currentTime = 0;
      audio.play();
      // Do something when the audio ends (e.g., redirect or change the component)
    });

    // Clean up the audio element and event listeners when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0;
      window.removeEventListener("beforeunload", () => {
        // Remove the event listener when the component unmounts
      });
    };
  }, []);
  const quotes = [
    '"Blessed is the season which engages the whole world in a conspiracy of love."',
    "“T’was the night before Christmas, when all through the house, not a creature was stirring, not even a mouse.”",
    '“The best way to spread Christmas cheer is singing loud for all to hear."',
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];

  return (
    <div>
      <div
        style={{
          fontSize: "36px",
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        <Title name="Waiting For Admin To Approve You" />
      </div>
      <div>
        <p
          style={{
            fontFamily: "cursive",
            color: "#B11515",
            fontSize: "24px",
            textAlign: "center",
            marginTop: "245px",
          }}
        >
          {selectedQuote}
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            border: "16px solid rgba(0, 0, 0, 0.1)",
            borderTop: "16px solid #00873E",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            animation: "spin 2s linear infinite",
          }}
        ></div>
        <style>
          {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          `}
        </style>
      </div>
    </div>
  );
};

export default LoadingPage;
