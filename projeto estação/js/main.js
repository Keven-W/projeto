// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const seasonButtons = document.querySelectorAll('.season-button');
    const seasonName = document.querySelector('.season-name');
    const seasonDescription = document.querySelector('.season-description');
    const seasonInfo = document.querySelector('.season-info');
    const animationContainer = document.querySelector('.animation-container');
    const snowman = document.getElementById('winter-snowman');
    
    // CSS Variables for theme
    const root = document.documentElement;
    
    // Function to update the season content
    function updateSeason(seasonId) {
      const season = getSeasonById(seasonId);
      
      if (!season) return;
      
      // Update active button
      seasonButtons.forEach(button => {
        if (button.dataset.season === seasonId) {
          button.classList.add('active');
        } else {
          button.classList.remove('active');
        }
      });
      
      // Hide the info panel and snowman
      seasonInfo.classList.remove('visible');
      snowman.classList.remove('visible');
      
      // After a short delay, update content and show again
      setTimeout(() => {
        // Update season information
        seasonName.textContent = season.name;
        seasonDescription.textContent = season.description;
        
        // Update theme colors
        root.style.setProperty('--current-color', season.color);
        root.style.setProperty('--current-bg', 
          seasonId === 'winter' ? 'var(--winter-bg-dark)' : season.backgroundColor
        );
        
        // Show the info panel
        seasonInfo.classList.add('visible');
        
        // Show snowman for winter
        if (seasonId === 'winter') {
          snowman.classList.add('visible');
        }
        
        // Create animation based on season
        switch (seasonId) {
          case 'spring':
            createSpringAnimation(animationContainer);
            break;
          case 'summer':
            createSummerAnimation(animationContainer);
            break;
          case 'autumn':
            createAutumnAnimation(animationContainer);
            break;
          case 'winter':
            createWinterAnimation(animationContainer);
            break;
        }
      }, 300);
    }
    
    // Add click event listeners to season buttons
    seasonButtons.forEach(button => {
      button.addEventListener('click', () => {
        const seasonId = button.dataset.season;
        updateSeason(seasonId);
      });
    });
    
    // Initialize with spring season
    updateSeason('spring');
  });