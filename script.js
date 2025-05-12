document.getElementById('rollDice').onclick = () => {
    parent.postMessage({ pluginMessage: { type: 'roll-dice' } }, '*')
} 