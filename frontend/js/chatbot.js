document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('chat-form');
    const input = form.querySelector('.user-entry__input');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const userMessage = input.value.trim();
        if (userMessage === '') return; // Ignore empty inputs

        // Clear the input field, so the user can use it again
        input.value = '';

        // Append the user's message to the chat window
        appendUserMessage(userMessage);

        // Get bot response from the server
        getBotResponse(userMessage);
    });

    function appendUserMessage(message) {
        const chatWindow = document.querySelector('.form-window');
        const userBubble = document.createElement('div');
        userBubble.classList.add('pat-bubble', 'user-bubble');
        userBubble.textContent = message;
        chatWindow.appendChild(userBubble);
        chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the latest message
    }

    function appendBotResponse(message) {
        const chatWindow = document.querySelector('.form-window');
        const botBubble = document.createElement('div');
        botBubble.classList.add('pat-bubble', 'bot-bubble');
        chatWindow.appendChild(botBubble);

        // Type the response with animation
        TypeEffect(message, botBubble);
    }

    function TypeEffect(text, element) {
        const delay = 50; // Delay between each character (customizable)
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, delay);
            }
        }

        type();
    }

    // Here you can connect that to your endpoint (Server) and pass the userMessage to the function below
     // for creating a server it depends on what Programming lang. you like Python , Java and etc...
    function getBotResponse() {
        const animeQuotes = [
          "People become stronger because they have things they can’t forget. That’s what you call growth.",
          "If you don’t like your destiny, don’t accept it. Instead have the courage to change it the way you want it to be!",
          "The world isn’t perfect. But it’s there for us, doing the best it can….that’s what makes it so damn beautiful.",
          "You should never give up on life, no matter how you feel. No matter how badly you want to give up, never run away from your feelings.",
          "Life is not a game of luck. If you wanna win, work hard."
        ];
      
        const randomIndex = Math.floor(Math.random() * animeQuotes.length);
        const randomQuote = animeQuotes[randomIndex];
      
        appendBotResponse(randomQuote);
      }
      
});
