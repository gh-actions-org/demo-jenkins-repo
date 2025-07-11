// index.js

function greet(name) {
    return `Hello, ${name}!`;
}

// Only for Node.js test environment
if (typeof module !== 'undefined') {
    module.exports = { greet };
}

// DOM interaction (not tested)
document.getElementById?.('clickButton')?.addEventListener('click', () => {
    alert('You clicked the button!');
});
