import { app, Menu } from "electron";
import createWindow from "./createWindow";


function setAppMenu() {
    // テンプレートの定義
    const template = [
        {
            label: "File",
            submenu: [
                { label: "New Window", accelerator: "CmdOrCtrl+N", click: createWindow },
                { type: "separator" },
                { label: "Close", accelerator: "CmdOrCtrl+W", role: "close" }
            ]
        },
        {
            label: "Edit",
            submenu: [
                { label: "Copy", accelerator: "CmdOrCtrl+C", role: "copy" },
                { label: "Past", accelerator: "CmdOrCtrl+V", role: "past" },
                { label: "Cut", accelerator: "CmdOrCtrl+V", role: "cut" },
                { label: "Select All", accelerator: "CmdOrCtrl+A", role: "selectall" }
            ]
        },
        {
            label: "View",
            submenu: [
                {
                    label: "Reload",
                    accelerator: "CmdOrCtrl+R",
                    click: (item, focuseWindow) => focuseWindow && focuseWindow.reload()
                },
                {
                    label: "Toggle DevTools",
                    accelerator: process.platform === "darwin" ? "Alt+Command+I" : "Ctrl+Shift+I",
                    click: (item, focuseWindow) => focuseWindow && focuseWindow.toggleDevTools()
                }
            ]
        }
    ];
    
    //macOS特有の処理
    if(process.platform === "darwin") {
        //テンプレート先頭にメインメニューを追加
        template.unshift({
            label: app.getName(),
            submenu: [
                { role: "about" },
                { type: "separator" },
                { role: "service", submenu: [] },
                { type: "separator" },
                { role: "hide" },
                { role: "hideother" },
                { role: "unhide" },
                { type: "separator" },
                { role: "quit" }
            ]
        });
        //テンプレート末尾にウィンドウメニューを追加
        template.push({
            role: "window",
            submenu: [
                { role: "minimaize" },
                { role: "zoom" }
            ]
        });
    }
    //テンプレートからMenuオブジェクトを作成
    const appMenu = Menu.buildFromTemplate(template);
    //作成したMenuオブジェクトをアプリケーションに設定
    Menu.setApplicationMenu(appMenu);
}

export default setAppMenu;