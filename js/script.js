const days = document.querySelectorAll(".day");
const months = document.querySelectorAll(".month");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        }
        entry.target.classList.add("appear");
        observer.unobserve(entry.target);
    });
}, options);

let counterDay = 250;

days.forEach(day => { 
    day.style.transition = "all 500ms " + counterDay + "ms ease-out";
    if(counterDay > 6000) {
        counterDay = 250;
    } else {
        counterDay += 25;
    }
    
    observer.observe(day);
});

let counterMonth = 300;

months.forEach(month => {
    month.style.transition = "all 1s " + counterMonth + "ms ease-out";
    if(counterMonth < 1000) { 
        counterMonth += 200;
    } 
    observer.observe(month);
});


