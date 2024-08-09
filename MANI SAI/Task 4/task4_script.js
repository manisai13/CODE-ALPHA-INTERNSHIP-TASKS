function sendMessage() {
    const input = document.getElementById('chat-input').value;
    if (input) {
        const outputDiv = document.getElementById('chat-output');
        const messageDiv = document.createElement('div');
        messageDiv.textContent = 'User: ' + input;
        outputDiv.appendChild(messageDiv);
        document.getElementById('chat-input').value = '';

        // Simulating a response from ChatGPT
        setTimeout(() => {
            const botDiv = document.createElement('div');
            botDiv.textContent = 'ChatGPT: ' + getBotResponse(input);
            outputDiv.appendChild(botDiv);
            outputDiv.scrollTop = outputDiv.scrollHeight;
        }, 1000);
    }
}

function getBotResponse(input) {
    // Simple example responses
    const responses = {
        'hello': 'Hi there!',
        'how are you': 'I am just a bot, but I am doing great!',
        'bye': 'Goodbye!'
    };

    return responses[input.toLowerCase()] || "I'm sorry, I don't understand.";
}