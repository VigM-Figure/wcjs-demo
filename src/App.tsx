import { useWalletConnect, QRCodeModal } from "@provenanceio/walletconnect-js";
import React from "react";
import "./App.css";

function App() {
  const { walletConnectService, walletConnectState } = useWalletConnect();
  const {
    connected,
    address,
    publicKey,
    signedJWT,
    walletInfo = {},
  } = walletConnectState;
  const { name } = walletInfo;

  return (
    <section className="App">
      <header className="App-header">
        {connected ? (
          <div>
            <p>
              You've Connected with "<code>{name}</code>" wallet!
            </p>
            <p>Address:</p>
            <code>{address}</code>
            <p>PublicKey:</p>
            <code>{publicKey}</code>
            <p>Signed JWT:</p>
            <code>{signedJWT}</code>
            <div>
              <button onClick={() => walletConnectService.disconnect()}>
                Disconnect
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p>Click the connect button to link your wallet to this app</p>
            <button onClick={() => walletConnectService.connect()}>
              Connect
            </button>
          </div>
        )}
        <QRCodeModal walletConnectService={walletConnectService} />
      </header>
    </section>
  );
}

export default App;
