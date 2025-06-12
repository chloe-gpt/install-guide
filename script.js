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

const versionNumber = "v5.3.1";
function insertVersion(elementId) {
  document.getElementById(elementId).textContent = versionNumber;
}

const AU_versionNumber = "16.0.2";
function insertAUVersion(elementId) {
  document.getElementById(elementId).textContent = AU_versionNumber;
}

const channel = "public-beta";
function insertChannel(elementId) {
  document.getElementById(elementId).textContent = channel;
}

insertVersion('version');
insertAUVersion('au-version');
insertChannel('channel');