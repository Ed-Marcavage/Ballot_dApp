import "./App.css";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import Wallet from "./components/WalletConnect/Wallet";

function App() {
  return (
    <div className="App">
      <Wallet />
    </div>
  );
}

export default App;
