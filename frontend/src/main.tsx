import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [token, setToken] = useState("");

  const getToken = async () => {
    try {
      const res = await fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log("Token response:", data);
      setToken(data.token || "No token received");
    } catch (err) {
      console.error(err);
      setToken("Error fetching token");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>OIDC Test Client</h1>
      <button onClick={getToken} style={{ padding: "0.5rem 1rem" }}>
        Get Token
      </button>
      <pre style={{ marginTop: "1rem" }}>{token}</pre>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
