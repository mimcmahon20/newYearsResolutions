const days = document.querySelectorAll(".day");
const months = document.querySelectorAll(".month");

const optionsDay = {
    root: null,
    rootMargin: "0px",
    threshold: .25
};

const optionsMonth = {
    root: null,
    rootMargin: "0px",
    threshold: 0
};

let counterDay = 1250;

const observerDay = new IntersectionObserver(function(entries, observerDay) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.style.opacity = "1";
            observerDay.unobserve(entry.target);
            return;
        }
        // entry.target.classList.add("appear");
        entry.target.style.animation = "appear 1s ease-out forwards";
        entry.target.style.animationDelay = counterDay + "ms";
        counterDay = counterDay + Math.log(counterDay);
        observerDay.unobserve(entry.target);
        console.log(entry.target);
    });
}, optionsDay);

let counterMonth = 250;

const observerMonth = new IntersectionObserver(function(entries, observerMonth) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.style.opacity = "1";
            observerMonth.unobserve(entry.target);
            return;
        }
        // entry.target.classList.add("appear");
        entry.target.style.animation = "appear 1s ease-out forwards";
        entry.target.style.animationDelay = counterMonth + "ms";
        counterMonth += 100;
        observerMonth.unobserve(entry.target);
        
    });
}, optionsMonth);


days.forEach(day => { 
    // day.style.transition = "all 15000ms " + counterDay + "ms ease-out";
    // if(counterDay > 60000) {
    //     counterDay = 250;
    // } else {
    //     counterDay += 2500;
    // }

    
    
    observerDay.observe(day);
});


months.forEach(month => {
    // month.style.transition = "all 1s ease-out";
    // if(counterMonth < 1000) { 
    //     counterMonth += 200;
    // }
    
    observerMonth.observe(month);
});

