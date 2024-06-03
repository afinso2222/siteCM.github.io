
window.onload = function() {
    document.body.style.display = 'block'; 
    document.body.style.opacity = '0'; 
    setTimeout(function() {
        document.body.style.transition = 'opacity 1s ease'; 
        document.body.style.opacity = '1'; 
    }, 100); 
};

document.getElementById('bagel').addEventListener('click', function() {
    
    document.getElementById('spaceBackground').style.opacity = '0';

    
    setTimeout(function() {
        window.location.href = 'page2.html'; 
    }, 1000); 
});

var audio = document.getElementById('backgroundMusic');
audio.volume = 0.5; 


document.body.addEventListener('click', function() {
    audio.play();
}, { once: true });

function playDialogueSound() {
    var dialogueSound = document.getElementById('dialogueSound');
    dialogueSound.play();
}

function goToNextPage() {
    window.location.href = 'page3.html';
}



