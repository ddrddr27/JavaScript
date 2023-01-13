const slides = document.querySelectorAll('.slide')

function clearActiveClasses() {
    for (const slide of slides) {
 
     slide.classList.remove('active')
    }
 }
 

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
       //slide.classList.remove('active')

        slide.classList.add('active')
    })
}



