

window.onload = function() {
   

    document.body.style.display = 'block'; 
    document.body.style.opacity = '0'; 
    setTimeout(function() {
        document.body.style.transition = 'opacity 1s ease'; 
        document.body.style.opacity = '1'; 
    }, 100); 

    
    var bubbleContainer = document.getElementById('bubble-container');

    

    
    function createBubble(x, y) {
        var bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = x + 'px';
        bubble.style.top = y + 'px';
        bubbleContainer.appendChild(bubble);

        
        bubble.addEventListener('animationend', function() {
            bubble.remove();
        });
    }

    var isMouseDown = false;

    var lastBubbleTime = 0;


document.addEventListener('mousedown', function(event) {
    
    isMouseDown = true;

   
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
   
    createBubble(mouseX, mouseY);

    lastBubbleTime = Date.now();
});


document.addEventListener('mousemove', function(event) {
 
    if (isMouseDown) {
     
        var currentTime = Date.now();

       
        if (currentTime - lastBubbleTime >= 100) {
            
            var mouseX = event.clientX;
            var mouseY = event.clientY;
            
            
            createBubble(mouseX, mouseY);

           
            lastBubbleTime = currentTime;
        }
    }
});


document.addEventListener('mouseup', function(event) {
    
    isMouseDown = false;
});

    var dialogueIndex = 0;
    var dialogues = [
        "Okay, this goes way deeper than I thought",
        "But it's okay! Our oxygen tanks should last...",
        "...3 more minutes", 
        "I've heard rumours that this dimension's portal often wanders around in disguise..",
        "..."
    ];

   
    function displayDialogue() {
        var speechBubble = document.getElementById('speechBubble');
        var dialogue = document.getElementById('dialogue');
        dialogue.textContent = dialogues[dialogueIndex];
        speechBubble.classList.remove('hidden');

        
        dialogueIndex++;

        
        if (dialogueIndex === dialogues.length) {
            setTimeout(function() {
                speechBubble.classList.add('hidden');
            }, 3000); 
        }
    }

    
    document.body.addEventListener('click', function() {
        displayDialogue();
    });


    function getRandomDelay() {
        return Math.random() * 8000 + 2000; 
    }
    
    
    
    function moveFish() {
        var fish = document.getElementById('fish-container');
        var fishWidth = fish.offsetWidth;
        var randomDelay = getRandomDelay();
        var screenHeight = window.innerHeight;
        var randomTop = Math.floor(Math.random() * (screenHeight - 100)); 
    
        
        fish.style.left = '-' + fishWidth + 'px';
        fish.style.top = randomTop + 'px'; 
    
        
        setTimeout(function() {
            var screenWidth = window.innerWidth;
            
            
            fish.style.transition = 'left 4s linear'; 
            fish.style.left = screenWidth + 'px';
    
           
            setTimeout(function() {
                fish.style.transition = 'none'; 
                fish.style.left = '-' + fishWidth * 2 + 'px'; 
                
                
                setTimeout(moveFish, randomDelay);
            }, 4000); 
    
        }, randomDelay); 
    }
    

   
    moveFish();

};

function goToNextPage() {
    window.location.href = 'page4.html';
}

