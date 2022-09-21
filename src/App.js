import "./App.css";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Wallet from "./components/Wallet";

function App() {
  return (
    <div className="App">
      <Wallet />
    </div>
  );
}

export default App;
