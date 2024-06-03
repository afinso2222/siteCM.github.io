window.onload = function() {



    document.body.style.display = 'block'; 
    document.body.style.opacity = '0'; 
    setTimeout(function() {
        document.body.style.transition = 'opacity 1s ease'; 
        document.body.style.opacity = '1'; 
    }, 100); 

    
var dialogueIndex = 0;
    var dialogues = [
        "Good job getting out of that one!",
        "...Unfortunately our jurney has come to an end",
        "By the time you're reading this....", 
        "...you're already starting to forget everything you saw",
        "And are ready to do it again" ,
        "And again" ,
        "Forever",
        "Because that's how the universe works! HAHAHA",
        "Now flick me away!! I DARE you!!"
    ];

   
    function displayDialogue() {
        var speechBubble = document.getElementById('speechBubble');
        var dialogue = document.getElementById('dialogue');
        dialogue.textContent = dialogues[dialogueIndex];
        speechBubble.classList.remove('hidden');
      playDialogueSound();
        
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

    var pedraastro = document.getElementById('pedraastro');
    var isDragging = false;
    var startX, startY, startTime;
    var moveX, moveY, moveTime;

    
    pedraastro.addEventListener('mousedown', function(event) {
        isDragging = true;
        startX = event.clientX - pedraastro.offsetLeft;
        startY = event.clientY - pedraastro.offsetTop;
        startTime = Date.now(); 
    });

   
    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            moveX = event.clientX - startX;
            moveY = event.clientY - startY;
            pedraastro.style.left = moveX + 'px';
            pedraastro.style.top = moveY + 'px';
        }
    });
    var audio = document.getElementById('backgroundMusic');
    audio.volume = 0.5; 
    
    
    document.body.addEventListener('click', function() {
        audio.play();
    }, { once: true });

  
    
    document.addEventListener('mouseup', function(event) {
        if (isDragging) {
            isDragging = false;
            moveTime = Date.now() - startTime;
            var velocityX = (event.clientX - startX) / moveTime;
            var velocityY = (event.clientY - startY) / moveTime;

           
            pedraastro.style.transition = 'left 1s, top 1s, transform 1s';
            pedraastro.style.left = (moveX + velocityX * 100) + 'px'; 
            pedraastro.style.top = (moveY + velocityY * 100) + 'px'; 
            pedraastro.style.transform = 'scale(0.05)'; 

            setTimeout(function() {
                window.location.href = 'index.html';
            }, 1600);
        }
    });
    function playDialogueSound() {
        var dialogueSound = document.getElementById('dialogueSound');
        dialogueSound.play();
    }
}