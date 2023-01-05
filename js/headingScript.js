const header = document.querySelector('.heading');
const lookOut = document.querySelector('.lookOut');
const half = document.querySelectorAll('.chunk');
const mSecond = document.querySelector('.secondM');
const resolution = document.querySelector('.resolutionHead');

const optionsHead = { 
    root: null,
    rootMargin: '0px',
    threshold: 0
};

let active = false;

appear = () => {
    half[0].style.opacity = '1';
    half[1].style.opacity = '1';
    console.log("happening");
}

const observerHead = new IntersectionObserver(function(entries,observerHead) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            resolution.classList.remove('resolutionIn');
            resolution.classList.add('resolutionOut');
            half[0].classList.remove('appear');
            half[1].classList.remove('appear');
            half[0].classList.add('dissapear');
            half[1].classList.add('dissapear');
            mSecond.classList.remove('moveOut');
            mSecond.classList.add('moveIn');
            header.classList.remove('whiteToBlue');
            header.classList.add('blueToWhite');
            active = true;
        }
        else {
            if(active) {
                resolution.classList.remove('resolutionOut');
                resolution.classList.add('resolutionIn');
                half[0].style.opacity = '0';
                half[1].style.opacity = '0';
                half[0].classList.remove('dissapear');
                half[1].classList.remove('dissapear');
                half[0].classList.add('appear');
                half[1].classList.add('appear');
                mSecond.classList.remove('moveIn');
                mSecond.classList.add('moveOut');
                header.classList.remove('blueToWhite');
                header.classList.add('whiteToBlue');
                active = false;
            }
        }
    });    
}, optionsHead);

observerHead.observe(lookOut);

