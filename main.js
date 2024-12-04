const { app, BrowserWindow, ipcMain } = require('electron');
const shell = require('shelljs');
const os = require('os');

// Desabilitar aceleração de hardware antes de app.whenReady()
app.disableHardwareAcceleration();

let mainWindow;

app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile('index.html');

  // Executar comandos no WSL com shelljs
  const command = 'wsl.exe'; 

  // Função para executar comandos e retornar a saída
  const executeCommand = (cmd) => {
    return new Promise((resolve, reject) => {
      shell.exec(cmd, { async: true, silent: true }, (code, stdout, stderr) => {
        if (code !== 0) {
          reject(stderr);
        } else {
          resolve(stdout);
        }
      });
    });
  };

  // Enviar a saída do terminal para a janela do Electron
  executeCommand(command).then((output) => {
    mainWindow.webContents.send('terminal-output', output);
  }).catch((error) => {
    mainWindow.webContents.send('terminal-output', `Erro: ${error}`);
  });

  // Lidar com a entrada do terminal da janela do Electron
  ipcMain.on('terminal-input', (event, input) => {
    executeCommand(input).then((output) => {
      mainWindow.webContents.send('terminal-output', output);
    }).catch((error) => {
      mainWindow.webContents.send('terminal-output', `Erro: ${error}`);
    });
  });
});

// Fechar o aplicativo quando a janela for fechada
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
