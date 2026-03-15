const { app, BrowserWindow } = require('electron');
const path = require('path');

function criarJanela() {
    const janela = new BrowserWindow({
        width: 350,
        height: 500,
        resizable: false, 
    });

    janela.loadFile(path.join(__dirname, '../frontend/index.html'));
}

app.whenReady().then(criarJanela);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});