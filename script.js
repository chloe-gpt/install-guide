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
