import React, { useEffect, useState } from "react";

interface HealthResponse {
  status: string;
}

const App: React.FC = () => {
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json() as Promise<HealthResponse>;
      })
      .then((data) => {
        setStatus(data.status);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setStatus("Error fetching status");
      });
  }, []);

  return (
    <div>
      <h1>Backend Health Status:</h1>
      <p>{status}</p>
    </div>
  );
};

export default App;
