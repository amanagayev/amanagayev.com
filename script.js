function goTo(e) {
    document.documentElement.scrollTo({top: e, behavior: 'smooth'});
};

let contact, section2;

contact = 10000;
section2 = 650;

const downArrow = document.getElementById('goTo_section2');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70){
        downArrow.style.display = 'none';
    } else {
        downArrow.style.display = 'block';
    }
}
