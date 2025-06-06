window.addEventListener('load', () => {
    // Get the canvas element from our HTML
    const canvas = document.querySelector('#gameCanvas');
    const c = canvas.getContext('2d'); // This is the context on which we will draw

    // Set the canvas dimensions
    canvas.width = 1024;
    canvas.height = 576;

    // Fill the canvas with a solid color initially
    c.fillStyle = '#F2E8CF';
    c.fillRect(0, 0, canvas.width, canvas.height);

    // The Game Loop
    function animate() {
        // This creates an infinite loop, calling 'animate' before the next frame is painted
        window.requestAnimationFrame(animate);

        // Clear and redraw the canvas for the new frame
        c.fillStyle = '#F2E8CF';
        c.fillRect(0, 0, canvas.width, canvas.height);

        // ---- ALL GAME LOGIC (player updates, physics) GOES HERE ----
        // For example:
        // player1.update();
        // player2.update();
    }

    // Start the loop
    animate();
});