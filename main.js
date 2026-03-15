const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  const indexPath = path.resolve(__dirname, 'frontend', 'index.html');
        win.loadFile(path.join(__dirname, 'frontend', 'index.html'));
  
  win.loadFile(indexPath).catch(err => {
    console.error("Erro ao carregar o HTML:", err);
  });

  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});