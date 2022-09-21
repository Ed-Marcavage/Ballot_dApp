import React from "react";
import { useEthers } from "@usedapp/core";

const Wallet = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  return (
    <div>
      <h3>dApp Wallet</h3>{" "}
      {account ? (
        <p>Your account: {account}</p>
      ) : (
        <button onClick={activateBrowserWallet}>connect wallet</button>
      )}
    </div>
  );
};

export default Wallet;
