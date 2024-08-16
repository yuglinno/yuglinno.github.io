function changeNavbarColor() {
    const navbar = document.querySelector('.navbar');
    let r = 30, g = 0, b = 80;
    let direction = 1; 

    setInterval(() => {
        
        r += direction * 3;
        g += direction * 0;
        b += direction * 3;

        
        if (r >= 255 || r <= 0) direction *= -1;

        
        navbar.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }, 30); 
}


window.onload = changeNavbarColor;