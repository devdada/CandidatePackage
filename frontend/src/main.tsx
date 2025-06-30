import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [result, setResult] = useState("");

  const callEndpoint = async (endpoint: string, method: string = "GET") => {
    try {
      const res = await fetch(`http://localhost:4000${endpoint}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(`${endpoint} response:`, data);
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      console.error(err);
      setResult(`Error fetching ${endpoint}`);
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>OIDC Test Client</h1>

      <button
        onClick={() => callEndpoint("/auth/token", "POST")}
        style={{ margin: "0.5rem" }}
      >
        Get Token
      </button>

      <button
        onClick={() => callEndpoint("/auth/authorize")}
        style={{ margin: "0.5rem" }}
      >
        Authorize
      </button>

      <button
        onClick={() => callEndpoint("/auth/userinfo")}
        style={{ margin: "0.5rem" }}
      >
        UserInfo
      </button>

      <button
        onClick={() => callEndpoint("/.well-known/openid-configuration")}
        style={{ margin: "0.5rem" }}
      >
        Discovery
      </button>

      <button
        onClick={() => callEndpoint("/.well-known/jwks.json")}
        style={{ margin: "0.5rem" }}
      >
        JWKS
      </button>

      <pre
        style={{
          marginTop: "2rem",
          background: "#f4f4f4",
          padding: "1rem",
          whiteSpace: "pre-wrap",
        }}
      >
        {result}
      </pre>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
