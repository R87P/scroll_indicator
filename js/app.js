window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    let scrolled = (winScroll / height) * 100;

    document.getElementById('progress-bar').style.width = scrolled + '%';

    console.log('winScroll:' + winScroll);
    console.log('height:' + height);
    console.log('scrolled:' + scrolled);
}