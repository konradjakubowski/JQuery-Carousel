$(function() {
    var carouselList = $("#carousel ul");
    
    // uruchom funkcję changeSlide() co 3 sekundy
    function picsInterval() {
        setInterval(changeSlide, 6000);
    }
    
    // animacja CSS slajdu, trwa 0,5 sekundy, na koniec moveFirstSlide
    function changeSlide() {
        carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
    }
    
    // funkcja callback do wykonania na koniec animacji.
    // znajdź 1 list item (img) , znajdź ostatni list item (img)
    function moveFirstSlide() {     
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);        // dodaj pierwszy img po ostatnim img
        carouselList.css({ marginLeft: 0 });                    // reset marginesu 
    }
    
    picsInterval();
});