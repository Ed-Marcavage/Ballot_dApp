import React from "react";
import { useEthers, useEtherBalance, Goerli } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

const BtnStyle = {
  borderRadius: "4px",
  padding: "4px",
  backgroundColor: "lightsteelblue",
};

const Wallet = () => {
  const { activateBrowserWallet, account, deactivate, chainId, switchNetwork } =
    useEthers();
  const GoerliBalance = useEtherBalance(account, { chainId: Goerli.chainId });
  //   const rinkebyBalance = useEtherBalance(account, { chainId: Rinkeby.chainId });
  //   const kovanBalance = useEtherBalance(account, { chainId: Kovan.chainId });
  //   const mainnetBalance = useEtherBalance(account, { chainId: Mainnet.chainId });
  return (
    <div>
      <h3>dApp Starter Kit</h3> {/* If Account Exist */}
      {account ? (
        <div>
          <p>Your account: {account}</p>
          <button onClick={deactivate} style={BtnStyle}>
            Disconnect
          </button>
          {GoerliBalance && (
            <h4>Goerli Balance: {formatEther(GoerliBalance)}</h4>
          )}
        </div>
      ) : //  If Account Exist but not on Goerli
      chainId !== Goerli.chainId ? (
        <button onClick={() => switchNetwork(Goerli.chainId)} style={BtnStyle}>
          Switch network
        </button>
      ) : (
        //  Not connected at all
        <button onClick={() => activateBrowserWallet()} style={BtnStyle}>
          connect wallet
        </button>
      )}
    </div>
  );
};

export default Wallet;
