async function openWidget() {
  const Widget = window.MaticWidget.Widget

  // Polygon Wallet Widget
  const widget = new Widget({
    target: '#btnTarget',
    appName: 'test',
    position: 'center',
    network: 'testnet',
    overlay: false,
    closable: true,
    autoShowTime: 0,
    height: 620,
    width: 540,
  })

  await widget.create()

  widget.show()
}
