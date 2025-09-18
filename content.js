// Check if sidebar already exists to avoid duplicates
if (!document.getElementById('sidebar-docker-extension')) {
  // Load sidebar HTML
  fetch(chrome.runtime.getURL('sidebar.html'))
    .then(response => response.text())
    .then(html => {
      // Create a temporary container to parse the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;
      
      // Extract the sidebar element
      const sidebar = tempDiv.querySelector('#sidebar-docker-extension');
      
      // Add sidebar to page
      document.body.appendChild(sidebar);
      
      // Get references to elements
      const toggleButton = sidebar.querySelector('#sidebar-toggle');
      
      // Toggle functionality
      let isCollapsed = false;
      toggleButton.addEventListener('click', () => {
        if (isCollapsed) {
          sidebar.style.right = '0px';
          toggleButton.innerHTML = '▶';
          isCollapsed = false;
        } else {
          sidebar.style.right = '-400px';
          toggleButton.innerHTML = '◀';

          isCollapsed = true;
        }
      });
      
      // Adjust page content to make room for sidebar
      const originalMarginRight = document.body.style.marginRight;
      document.body.style.marginRight = '400px';
      document.body.style.transition = 'margin-right 0.3s ease';
      
      // Handle page unload
      window.addEventListener('beforeunload', () => {
        document.body.style.marginRight = originalMarginRight;
      });
    })
    .catch(error => {
      console.error('Error loading sidebar:', error);
    });
}