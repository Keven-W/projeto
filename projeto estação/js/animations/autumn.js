// Autumn animation with falling leaves
function createAutumnAnimation(container) {
    // Clear any existing animations
    container.innerHTML = '';
    
    const containerWidth = container.offsetWidth;
    
    // Create falling leaves
    const leafCount = Math.min(30, Math.floor(containerWidth / 40));
    const leafShapes = [
      'M12,21.5C7.3,21.5,3.5,17.7,3.5,13S7.3,4.5,12,4.5s8.5,3.8,8.5,8.5S16.7,21.5,12,21.5z',
      'M12,4.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5s8.5-3.8,8.5-8.5S16.7,4.5,12,4.5z M12,19c-3.3,0-6-2.7-6-6s2.7-6,6-6s6,2.7,6,6S15.3,19,12,19z',
      'M12,4.5L3.5,13L12,21.5L20.5,13L12,4.5z'
    ];
    
    const leafColors = ['#fb8500', '#fd9e02', '#e85d04', '#dc2f02', '#d00000'];
    
    for (let i = 0; i < leafCount; i++) {
      const leaf = document.createElement('div');
      leaf.className = 'leaf';
      leaf.style.position = 'absolute';
      leaf.style.width = '24px';
      leaf.style.height = '24px';
      
      // Use SVG for leaf shape
      const leafSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      leafSvg.setAttribute('viewBox', '0 0 24 24');
      leafSvg.setAttribute('width', '100%');
      leafSvg.setAttribute('height', '100%');
      leafSvg.style.display = 'block';
      
      const leafPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const randomShape = leafShapes[Math.floor(Math.random() * leafShapes.length)];
      leafPath.setAttribute('d', randomShape);
      leafPath.setAttribute('fill', leafColors[Math.floor(Math.random() * leafColors.length)]);
      
      leafSvg.appendChild(leafPath);
      leaf.appendChild(leafSvg);
      
      // Random horizontal position
      const left = Math.random() * containerWidth;
      leaf.style.left = `${left}px`;
      leaf.style.top = '-50px';
      
      // Random size variation
      const scale = 0.7 + Math.random() * 0.6;
      leaf.style.transform = `scale(${scale})`;
      
      // Random animation duration and delay
      const duration = 5 + Math.random() * 10;
      const delay = Math.random() * 15;
      leaf.style.animation = `fallLeaf ${duration}s linear ${delay}s infinite`;
      
      container.appendChild(leaf);
    }
  }