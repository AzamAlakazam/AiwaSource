const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');
    const links = document.querySelectorAll('.links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('navact');

        links.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `linkfade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });

        burger.classList.toggle('toggle');

    });


}


navSlide();


