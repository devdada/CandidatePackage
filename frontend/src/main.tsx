import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// Main App Component
const App = () => {
  // State for each endpoint response
  const [token, setToken] = useState("");
  const [userinfo, setUserinfo] = useState("");
  const [discovery, setDiscovery] = useState("");
  const [jwks, setJwks] = useState("");

  // POST /auth/token
  const getToken = async () => {
    const res = await fetch("http://localhost:4000/auth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setToken(JSON.stringify(data, null, 2));
  };

  // GET /auth/authorize
  const getAuthorize = async () => {
    const res = await fetch("http://localhost:4000/auth/authorize");
    const data = await res.json();
    setToken(JSON.stringify(data, null, 2));
  };

  // GET /auth/userinfo
  const getUserinfo = async () => {
    const res = await fetch("http://localhost:4000/auth/userinfo");
    const data = await res.json();
    setUserinfo(JSON.stringify(data, null, 2));
  };

  // GET /.well-known/openid-configuration
  const getDiscovery = async () => {
    const res = await fetch(
      "http://localhost:4000/.well-known/openid-configuration"
    );
    const data = await res.json();
    setDiscovery(JSON.stringify(data, null, 2));
  };

  // GET /.well-known/jwks.json
  const getJWKS = async () => {
    const res = await fetch("http://localhost:4000/.well-known/jwks.json");
    const data = await res.json();
    setJwks(JSON.stringify(data, null, 2));
  };

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        OIDC Test Client
      </h1>

      {/* Buttons for each action */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <button onClick={getToken} style={btnStyle}>
          Get Token
        </button>
        <button onClick={getAuthorize} style={btnStyle}>
          Authorize
        </button>
        <button onClick={getUserinfo} style={btnStyle}>
          UserInfo
        </button>
        <button onClick={getDiscovery} style={btnStyle}>
          Discovery
        </button>
        <button onClick={getJWKS} style={btnStyle}>
          JWKS
        </button>
      </div>

      {/* Output sections */}
      <section>
        <h2>Token Response</h2>
        <pre style={preStyle}>{token}</pre>

        <h2>UserInfo Response</h2>
        <pre style={preStyle}>{userinfo}</pre>

        <h2>Discovery Response</h2>
        <pre style={preStyle}>{discovery}</pre>

        <h2>JWKS Response</h2>
        <pre style={preStyle}>{jwks}</pre>
      </section>
    </main>
  );
};

// let's add some basic styling resizing
const btnStyle: React.CSSProperties = {
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  border: "1px solid #333",
  background: "#333",
  color: "#fff",
  cursor: "pointer",
};

const preStyle: React.CSSProperties = {
  background: "#f4f4f4",
  padding: "1rem",
  borderRadius: "4px",
  overflowX: "auto",
};

// Mount app
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
