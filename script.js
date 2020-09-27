function goToContact() {
    document.documentElement.scrollTo({top: 10000, behavior: 'smooth'});
};

function goToSection2() {
    document.documentElement.scrollTo({top: 650, behavior: 'smooth'});
}

var downArrow = document.getElementById('goTo_section2');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        downArrow.style.display = 'none';
    } else {
        downArrow.style.display = 'block';
    }
}