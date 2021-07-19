import React, { useEffect, useCallback } from 'react';
import { Widget } from "@maticnetwork/wallet-widget";

const widget = new Widget({
  target: '#btnOpenWidget',
  appName: "test",
  position: "bottom-right"
});


const App = () => {
  useEffect(() => {
    widget.create();
  }, [])

  // subscribe to event onLoad
  const load = useCallback(event => {
    console.log('widget is loaded');
  }, []);
  useEffect(() => {
    widget.on('load', load);
    return () => {
      widget.off('load', load);
    }
  }, [load])
  // subscribe to event onClose
  const close = useCallback(event => {
    console.log('widget is closed');
  }, []);
  useEffect(() => {
    widget.on('close', close);
    return () => {
      widget.off('close', close);
    }
  }, [close])


  return (
    <React.Fragment>
      <h1>Wallet Widget React Example</h1>
      <button id="btnOpenWidget">Open widget</button>
      <br />
      <mark>
        <a href="https://docs.matic.today/docs/develop/tools/widget/#how-to-use" target="_blank" rel="noreferrer">
          For more details read docs here
        </a>
      </mark>
    </React.Fragment>
  )
}

export default App
