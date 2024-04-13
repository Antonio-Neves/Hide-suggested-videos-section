// This function hides the specified section
function hideBottomGrid() {
  const bottomGrid = document.getElementById('bottom-grid');
  if (bottomGrid) {
    bottomGrid.style.display = 'none';
  }
}

// Listen for changes in the DOM
const observer = new MutationObserver(hideBottomGrid);
observer.observe(document.body, { childList: true, subtree: true });

// Initially hide the section
hideBottomGrid();
