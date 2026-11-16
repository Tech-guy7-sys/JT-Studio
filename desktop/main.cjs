const { app, BrowserWindow, session } = require("electron");
const path = require("node:path");
const APP_ICON = path.join(__dirname, "../build/icons/jt-studio.png");

function createWindow() {
  const window = new BrowserWindow({
    width: 1440,
    height: 920,
    minWidth: 860,
    minHeight: 620,
    title: "JT Studio",
    icon: APP_ICON,
    backgroundColor: "#0b0d16",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });

  window.loadFile(path.join(__dirname, "../index.html"));
}

app.whenReady().then(() => {
  if (process.platform === "win32") app.setAppUserModelId("world.jtech.jtstudio");
  session.defaultSession.setPermissionRequestHandler((_webContents, permission, callback) => {
    // JT Studio needs explicit browser permission for microphone-based recording.
    callback(permission === "media");
  });
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
