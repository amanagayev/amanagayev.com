function goTo(i) {
    document.documentElement.scrollTo({top: i, behavior: 'smooth'});
};

let projects, contact, section2;

projects = 1600;
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
