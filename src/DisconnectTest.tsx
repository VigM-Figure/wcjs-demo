import { useWalletConnect } from "@provenanceio/walletconnect-js";
import { useEffect } from "react";

export const DisconnectTest: React.FC = () => {
  const { walletConnectState, walletConnectService } = useWalletConnect();
  const { connected } = walletConnectState;

  useEffect(() => {
    if (connected) {
      console.log("connected - running wcs.disconnect()");
      walletConnectService.disconnect();
    }
  }, [connected, walletConnectService]);

  return <div>Disconnect Test</div>;
};
