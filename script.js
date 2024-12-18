document.addEventListener('play', function(e){
    var audioPlayers = document.getElementsByTagName('audio');
    for(var i = 0, len = audioPlayers.length; i < len;i++){
        if(audioPlayers[i] != e.target){
            audioPlayers[i].pause();
        }
    }
}, true);

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function () {
        this.classList.toggle('open');
        navMenu.style.right = this.classList.contains('open') ? '0' : '-100%';
    });

    // Set initial hidden state for music and videos sections
    const musicSection = document.getElementById('music');
    const videosSection = document.getElementById('videos');

    musicSection.classList.add('hidden');
    videosSection.classList.add('hidden');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }

    const observer = new IntersectionObserver(handleIntersection);

    observer.observe(musicSection);
    observer.observe(videosSection);
});



//Other aniamtions
// Intersection Observer for Animations
const animateOnScroll = new IntersectionObserver((entries, animateOnScroll) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            animateOnScroll.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.animate').forEach(el => {
    animateOnScroll.observe(el);
});
