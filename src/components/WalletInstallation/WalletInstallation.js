import React from "react";

const WalletInstallation = () => {
  return (
    <>
      <h2>MetaMask is required</h2>
      <h3>
        Follow the link to install
        <a href="https://metamask.io/download.html">Meta Mask</a>
      </h3>
    </>
  );
  //     const { ethereum } = window as any;
  //  {!ethereum ? <WalletInstallation /> : ____________} //window as any only in TS
};

export default WalletInstallation;
