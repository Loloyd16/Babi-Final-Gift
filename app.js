const observer = new IntersectionObserver ((entries) => {
    entries.forEach ((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classlist.add('show');
        } else {
            entry.target.classlist.remove('show')
        }
    });
});

const hiddenElemenets = document.querySelectorAll('.container');
hiddenElemenets.forEach((el) => observer.observe(el));
