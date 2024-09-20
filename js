
const mouseFollower = document.querySelector('.mouse-follower');
document.addEventListener('mousemove', (e) => {
    mouseFollower.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});


