function copyCode(codeBlockId, button) {
  const code = document.getElementById(codeBlockId).innerText;
  navigator.clipboard.writeText(code).then(() => {
    const originalText = button.innerText;
    button.innerText = 'Code copied!';
    setTimeout(() => {
      button.innerText = originalText;
    }, 1500); // Revert after 1.5 seconds
  });
}

const version_number = "v5.3.1";
function insertVersion(elementId) {
  document.getElementById(elementId).textContent = version_number;
}

const au_version = "16.0.2";
function insertAUVersion(elementId) {
  document.getElementById(elementId).textContent = au_version;
}

/*const update_channel = "public-beta";
function insertChannel(elementId) {
  document.getElementById(elementId).textContent = update_channel;
}*/

insertVersion('version_number');
insertAUVersion('au_version');
/*insertChannel('update_channel');*/