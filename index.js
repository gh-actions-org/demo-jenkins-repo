function greet(name) {
    return `Hello, ${name}!`;
}

// Only run DOM code when in a browser
if (typeof document !== 'undefined') {
    document.getElementById?.('clickButton')?.addEventListener('click', () => {
        alert('You clicked the button!');
    });
}

module.exports = { greet };
