// Summer animation with bright sun and rays
function createSummerAnimation(container) {
    // Clear any existing animations
    container.innerHTML = '';
    
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Create sun
    const sun = document.createElement('div');
    sun.className = 'sun';
    sun.style.position = 'absolute';
    sun.style.borderRadius = '50%';
    sun.style.backgroundColor = '#ffbe0b';
    sun.style.opacity = '0';
    
    // Position in top third of the container
    const centerX = containerWidth / 2;
    const centerY = containerHeight / 3;
    
    sun.style.left = `${centerX}px`;
    sun.style.top = `${centerY}px`;
    sun.style.width = '0';
    sun.style.height = '0';
    sun.style.transform = 'translate(-50%, -50%)';
    
    // Add sun glow using box-shadow
    sun.style.boxShadow = '0 0 60px 30px rgba(255, 190, 11, 0.7), 0 0 100px 60px rgba(255, 190, 11, 0.5), 0 0 140px 90px rgba(255, 190, 11, 0.3)';
    
    // Animation
    sun.style.animation = 'growSun 2s ease-out forwards';
    
    container.appendChild(sun);
    
    // Add rays after a short delay
    setTimeout(() => {
      // Create sun rays
      const rayCount = 18;
      
      for (let i = 0; i < rayCount; i++) {
        const ray = document.createElement('div');
        ray.className = 'sun-ray';
        ray.style.position = 'absolute';
        ray.style.width = '4px';
        ray.style.height = '60px';
        ray.style.backgroundColor = '#ffbe0b';
        ray.style.left = `${centerX}px`;
        ray.style.top = `${centerY}px`;
        ray.style.transformOrigin = '50% 0';
        ray.style.transform = `translateX(-50%) rotate(${i * (360 / rayCount)}deg)`;
        ray.style.opacity = '0';
        
        // Animation
        ray.style.animation = 'fadeIn 1s ease-out forwards';
        ray.style.animationDelay = `${1.5 + i * 0.05}s`;
        
        container.appendChild(ray);
      }
    }, 1000);
  }