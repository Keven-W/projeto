// Winter animation with snowflakes
function createWinterAnimation(container) {
    // Clear any existing animations
    container.innerHTML = '';
    
    const containerWidth = container.offsetWidth;
    
    // Create snowflakes
    const snowflakeCount = Math.min(90, containerWidth / 20);
    
    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.position = 'absolute';
      
      // Create SVG snowflake
      const snowflakeSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      snowflakeSvg.setAttribute('viewBox', '0 0 24 24');
      snowflakeSvg.setAttribute('width', '100%');
      snowflakeSvg.setAttribute('height', '100%');
      snowflakeSvg.style.display = 'block';
      
      // Create snowflake path
      const snowflakePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      snowflakePath.setAttribute('d', 'M12 2L12 22M3.5 6.5L20.5 17.5M3.5 17.5L20.5 6.5M2 12L22 12');
      snowflakePath.setAttribute('stroke', 'white');
      snowflakePath.setAttribute('stroke-width', '1.5');
      snowflakePath.setAttribute('stroke-linecap', 'round');
      snowflakePath.setAttribute('fill', 'none');
      
      snowflakeSvg.appendChild(snowflakePath);
      snowflake.appendChild(snowflakeSvg);
      
      // Random size
      const size = 8 + Math.floor(Math.random() * 16);
      snowflake.style.width = `${size}px`;
      snowflake.style.height = `${size}px`;
      
      // Random horizontal position
      const left = Math.random() * containerWidth;
      snowflake.style.left = `${left}px`;
      snowflake.style.top = '-50px';
      
      // Random animation duration and delay
      const duration = 5 + Math.random() * 10;
      const delay = Math.random() * 10;
      
      snowflake.style.animation = `snowfall ${duration}s linear ${delay}s infinite`;
      
      // Add subtle swaying effect
      const swayAmount = 50 + Math.random() * 100;
      const sway = Math.random() > 0.3 ? swayAmount : -swayAmount;
      snowflake.style.animationTimingFunction = `cubic-bezier(0.37, 0, 0.63, 1)`;
      
      container.appendChild(snowflake);
    }
  }