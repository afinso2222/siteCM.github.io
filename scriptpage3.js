window.onload = function() {

    document.body.style.display = 'block'; 
    document.body.style.opacity = '0'; 
    setTimeout(function() {
        document.body.style.transition = 'opacity 1s ease'; 
        document.body.style.opacity = '1'; 
    }, 100); 

    document.addEventListener('click', function(event) {
        createBubble(event.clientX, event.clientY);
    });

    var nuvem = document.getElementById('nuvem');
    
   
    var offsetX, offsetY;
    
   
    function mouseDown(event) {
        
        offsetX = event.clientX - nuvem.offsetLeft;
        offsetY = event.clientY - nuvem.offsetTop;
        
       
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseUp);
        
        
        event.preventDefault();
    }
    
    
    function mouseMove(event) {
       
        var newX = event.clientX - offsetX;
        var newY = event.clientY - offsetY;
        
        
        nuvem.style.left = newX + 'px';
        nuvem.style.top = newY + 'px';
    }
    
   
    function mouseUp() {
        
        document.removeEventListener('mousemove', mouseMove);
        document.removeEventListener('mouseup', mouseUp);
    }
    
   
    nuvem.addEventListener('mousedown', mouseDown);

    
    var arrowLink = document.getElementById('arrow-link');
    arrowLink.addEventListener('click', function(event) {
        event.preventDefault();
    });

    var dialogueIndex = 0;
    var dialogues = [
        "Well... looks like we landed in the doodle dimension.",
        "Everything here was hand-drawn by a child...",
        "...or was it?", 
        "..."
    ];

   
    function displayDialogue() {
        var speechBubble = document.getElementById('speechBubble');
        var dialogue = document.getElementById('dialogue');
        dialogue.textContent = dialogues[dialogueIndex];
        speechBubble.classList.remove('hidden');
        playDialogueSound()
        
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
};

var audio = document.getElementById('backgroundmusic3');
audio.volume = 0.5; 


document.body.addEventListener('click', function() {
    audio.play();
}, { once: true });

function playDialogueSound() {
    var dialogueSound = document.getElementById('dialogueSound');
    dialogueSound.play();
}

function goToNextPage() {
    window.location.href = 'page4.html';
}


   
