/* ---------------- NODE JS EXPRESS LISTENERS APP AT LOCALHOST 3000 ----------------- */
    var express = require('express');
    var app = express();

    app.get('/', function (req, res) {
        //res.send('Hello World!');
        //require('js/app.js');
        res.render('index.html');
    });
    /*app.get('/debug', function (req, res) {
        
        res.send('OPENING DEBUG TOOLS ! ', JSON.stringify(gui));
        gui.Window.get().showDevTools();
        
    });
    app.get('/*', function (req, res) {
      res.send('GET PAGE NAME !');
    });*/

    /*var server = app.listen(3000, function () {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Example app listening at http://%s:%s', host, port);
    });*/


	//var prettyBytes = require('pretty-bytes');

	//$('.stats').append('Number of cpu cores: <span>' + os.cpus().length + '</span>');
	//$('.stats').append('Free memory: <span>' + prettyBytes(os.freemem())+ '</span>');

	
//window.location.href = "http://localhost:3000";

/* ------------------- NW GUI LISTENERS ADD DEBUG MODE AND MORE --------------- */
/*window.requireNode = window.require;
window.require = undefined; 

var gui = requireNode('nw.gui');
var win = gui.Window.get();

var platform = requireNode('./components/platform');
var updater = requireNode('./components/updater');
var menus = requireNode('./components/menus');
var settings = requireNode('./components/settings');
var windowBehaviour = requireNode('./components/window-behaviour');
var dispatcher = requireNode('./components/dispatcher');

var debug = true;
//require('nw.gui').Window.get().showDevTools();

// Ensure there's an app shortcut for toast notifications to work on Windows
if (platform.isWindows) {
    gui.App.createShortcut(process.env.APPDATA + "\\Microsoft\\Windows\\Start Menu\\Programs\\Klout.lnk");
}

// Add dispatcher events
dispatcher.addEventListener('win.alert', function(data) {
    data.win.window.alert(data.message);
});

dispatcher.addEventListener('win.confirm', function(data) {
    data.callback(data.win.window.confirm(data.message));
});

// Window state
windowBehaviour.restoreWindowState(win);
windowBehaviour.bindWindowStateEvents(win);

// Check for update
if (settings.checkUpdateOnLaunch) {
    updater.checkAndPrompt(gui.App.manifest, win);
}

// Run as menu bar app
if (settings.asMenuBarAppOSX) {
    win.setShowInTaskbar(false);
    menus.loadTrayIcon(win);
}

// Load the app menus
menus.loadMenuBar(win)
if (platform.isWindows) {
    menus.loadTrayIcon(win);
}

// Adjust the default behaviour of the main window
windowBehaviour.set(win);
windowBehaviour.setNewWinPolicy(win);


if(debug){
    gui.Window.get().showDevTools();
    // Add a context menu
    //menus.injectContextMenu(win, window, document);

    // Reload the app periodically until it loads
    var reloadIntervalId = setInterval(function() {
        if (win.window.navigator.onLine) {
            clearInterval(reloadIntervalId);
        } else {
            win.reload();
        }
    }, 10 * 1000);

}*/