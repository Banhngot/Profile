// header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Type effect

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer!', 'Freelancer!', 'UI Designer', 'Youtube'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
    
})