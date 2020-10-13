const faders = document.querySelectorAll('.fader');

const options = {
    threshold: 0.5,
    rootmarg: "0px 0px -100px 0px"

};

const apperscrol = new IntersectionObserver(function(entries, apperscrol) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('app');
            apperscrol.unobserve(entry.target);
        }
        
    })
}, options);

faders.forEach(fader => {
    apperscrol.observe(fader);
})

