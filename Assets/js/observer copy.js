const secfaders = document.querySelectorAll('.faders1');

const options = {
    threshold: 0,
    rootmarg: "0px 0px -20px 0px"

};

const apperscrol = new IntersectionObserver(function(entries, apperscrol) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('apps');
            apperscrol.unobserve(entry.target);
        }
        
    })
}, options);

secfaders.forEach(faders => {
    apperscrol.observe(faders);
})

