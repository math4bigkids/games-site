// script.js

// Sample database of games
const gamesDB = [
    { id: 1, title: 'Game 1', category: 'Action', url: 'game1.html' },
    { id: 2, title: 'Game 2', category: 'Adventure', url: 'game2.html' },
    // ... 98 more games
];

// Sample soundboard
const soundboard = [
    { id: 1, sound: 'meme1.mp3', title: 'Meme Sound 1' },
    { id: 2, sound: 'meme2.mp3', title: 'Meme Sound 2' },
    // ... 48 more sounds
];

// Dark/Light mode toggle
function toggleMode() {
    const currentMode = localStorage.getItem('mode') || 'light';
    if (currentMode === 'light') {
        document.body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light');
    }
}

// Favorites system
let favorites = [];

function toggleFavorite(gameId) {
    if (favorites.includes(gameId)) {
        favorites = favorites.filter(id => id !== gameId);
    } else {
        favorites.push(gameId);
    }
}

// Recently played games tracker
let recentlyPlayed = [];

function addRecentlyPlayed(gameId) {
    if (!recentlyPlayed.includes(gameId)) {
        recentlyPlayed.push(gameId);
    }
}

// Search and filter functionality
function searchGames(query) {
    return gamesDB.filter(game => game.title.toLowerCase().includes(query.toLowerCase()));
}

// Modal for game player
function openGameModal(gameId) {
    const game = gamesDB.find(g => g.id === gameId);
    if (game) {
        // Open game in fullscreen modal
        console.log('Opening game:', game.title);
    } else {
        console.error('Game not found');
    }
}

// Input validation and XSS protection
function validateInput(input) {
    const safeInput = input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Proceed with safe input
    return safeInput;
}