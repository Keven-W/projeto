// Spring animation with blooming flowers
function createSpringAnimation(container) {
    // Clear any existing animations
    container.innerHTML = '';
    
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Create flowers
    const flowerCount = Math.min(15, Math.floor(containerWidth * containerHeight / 50000));
    
    for (let i = 0; i < flowerCount; i++) {
      // Create flower container
      const flower = document.createElement('div');
      flower.className = 'flower';
      flower.style.position = 'absolute';
      flower.style.width = '24px';
      flower.style.height = '24px';
      flower.style.borderRadius = '50%';
      flower.style.opacity = '0';
      
      // Random positions
      const left = Math.random() * containerWidth;
      const top = Math.random() * containerHeight;
      
      flower.style.left = `${left}px`;
      flower.style.top = `${top}px`;
      
      // Random flower colors
      const colors = ['#ff7eb9', '#ff65a3', '#7eb5ff', '#80ff72', '#fff07c'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      flower.style.backgroundColor = color;
      
      // Random delay
      const delay = Math.random() * 2;
      flower.style.animationDelay = `${delay}s`;
      
      // Add flower petals
      const petalCount = 5 + Math.floor(Math.random() * 3);
      for (let j = 0; j < petalCount; j++) {
        const petal = document.createElement('div');
        petal.style.position = 'absolute';
        petal.style.width = '16px';
        petal.style.height = '16px';
        petal.style.borderRadius = '50%';
        petal.style.backgroundColor = color;
        petal.style.top = '50%';
        petal.style.left = '50%';
        petal.style.transform = `translate(-50%, -50%) rotate(${j * (360 / petalCount)}deg) translateY(-6px)`;
        flower.appendChild(petal);
      }
      
      // Center
      const center = document.createElement('div');
      center.style.position = 'absolute';
      center.style.width = '12px';
      center.style.height = '12px';
      center.style.borderRadius = '50%';
      center.style.backgroundColor = '#ffdf3a';
      center.style.top = '50%';
      center.style.left = '50%';
      center.style.transform = 'translate(-50%, -50%)';
      flower.appendChild(center);
      
      // Apply animation
      flower.style.animation = 'bloomFlower 3s ease-out forwards';
      
      container.appendChild(flower);
    }
  }