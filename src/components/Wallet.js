import React from "react";
import { useEthers } from "@usedapp/core";

const BtnStyle = {
  borderRadius: "4px",
  padding: "4px",
  backgroundColor: "lightsteelblue",
};

const Wallet = () => {
  const { activateBrowserWallet, account, deactivate } = useEthers();
  return (
    <div>
      <h3>dApp Wallet</h3>{" "}
      {account ? (
        <div>
          <p>Your account: {account}</p>
          <button onClick={deactivate} style={BtnStyle}>
            Disconnect
          </button>
        </div>
      ) : (
        <button onClick={() => activateBrowserWallet()} style={BtnStyle}>
          connect wallet
        </button>
      )}
    </div>
  );
};

export default Wallet;
