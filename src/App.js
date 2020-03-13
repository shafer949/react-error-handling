import React from "react";
import "./styles.css";
import { Incrementor } from "./components/Incrementor";
import { CounterErrorBoundary } from "./components/CounterErrorBoundary";

export default function App() {
  return (
    <div className="container">
      <CounterErrorBoundary>
        <Incrementor lowerLimit={-5} />
        <Incrementor errorLimit={10} lowerLimit={-5} />
      </CounterErrorBoundary>
      <CounterErrorBoundary>
        <Incrementor errorLimit={20} lowerLimit={-5} />
      </CounterErrorBoundary>
      <CounterErrorBoundary>
        <Incrementor errorLimit={2} lowerLimit={-5} />
      </CounterErrorBoundary>
    </div>
  );
}
