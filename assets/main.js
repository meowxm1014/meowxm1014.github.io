console.clear();
console.log(`

                               ¸____¸*¸
                          ¸ ¸ //¯¯¯¯*¸*
                ¸ . . . ./'·. ',
          , · ':::            /
      ,·':::                   ' ·,
     ;:::                          ;        ██▄  ▄██  ▄▄▄  ██████  ▄▄▄▄ ▄▄▄▄   ▄▄▄  ▄▄▄▄  ▄▄▄▄▄▄ ▄▄▄▄ ████▄
     ;:::                          ;        ██ ▀▀ ██ ██▀██ ██▄▄   ███▄▄ ██▄█▀ ██▀██ ██▄█▄   ██  ███▄▄  ▄▄██
     ',:::                        ,'        ██    ██ ▀███▀ ██▄▄▄▄ ▄▄██▀ ██    ▀███▀ ██ ██   ██  ▄▄██▀ ▄▄▄█▀
       ' .:::                  , '
           ' · . . . . . . · '


    [*] Moesports 3 Utils
    [*] A collection of utilities and downloads
    [>] Run \`start()\`

`);

document.addEventListener("DOMContentLoaded", function () {
    const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

    const ffElem = document.getElementById('firefox-shortcut');
    const chromeElem = document.getElementById('chrome-shortcut');

    if (isFirefox) {
        ffElem.style.display = 'inline';
    } else {
        chromeElem.style.display = 'inline';
    }
});

const detectDevTools = () => {
    const threshold = 160;

    const check = () => {
        const widthDiff = window.outerWidth - window.innerWidth > threshold;
        const heightDiff = window.outerHeight - window.innerHeight > threshold;

        if (widthDiff || heightDiff) {
            document.getElementById("devtool-open").style = "display: inline;"
            document.getElementById("original").style = "display: none;"
            document.getElementById("title-image").style = "display: none;"
            window.removeEventListener('resize', check);
        }
    };

    window.addEventListener('resize', check);
    check();
};

detectDevTools();

const downloadEmptyTxt = () => {
    const blob = new Blob([""], { type: "text/plain" });
    const link = document.createElement("a");
    link.download = "portable.txt";
    link.href = window.URL.createObjectURL(blob);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
};

function prism() {
    window.open('https://github.com/PrismLauncher/PrismLauncher/releases/download/10.0.5/PrismLauncher-Windows-MinGW-w64-Portable-10.0.5.zip', '_blank');
}
function openttd() {
    window.open('https://cdn.openttd.org/openttd-releases/15.2/openttd-15.2-windows-win64.zip', '_blank');
    window.open('https://cdn.openttd.org/opengfx-releases/8.0/opengfx-8.0-all.zip', '_blank');
    window.open('https://cdn.openttd.org/opensfx-releases/1.0.3/opensfx-1.0.3-all.zip', '_blank');

}
function dolphin() {
    window.open('https://dl.dolphin-emu.org/releases/2512/dolphin-2512-x64.7z', '_blank');
    downloadEmptyTxt();
}
function drive() {
    window.open('https://www.drive.google.com', '_blank');
}