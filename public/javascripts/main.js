gsap.registerPlugin(ScrollTrigger)
let show = document.getElementById('show-nav')
let close = document.getElementById('close-btn')
let nav = document.querySelector('#navigation')
function SmoothScroll() {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        // console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

}
SmoothScroll()
function Navigation() {

    show.addEventListener('click', () => {
        gsap.to(nav, {
            right: 0,
            duration: 1,
            ease: "power1.inOut"
        })
    })

    close.addEventListener('click', () => {
        gsap.to(nav, {
            right: '-50vw',
            duration: 1,
            ease: "power1.inOut"
        })
    })


}
Navigation()

let cards = document.querySelectorAll('.card')
let StackArea = document.querySelector('.stack-area')
let left = document.querySelector('.stack-area #left')
let right = document.querySelector('.stack-area .right')
let faculty = document.querySelector('#faculty')

function rotateCards() {
    let angle = 0
    cards.forEach((card) => {
        if (card.classList.contains('active')) {
            card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`
        } else {
            card.style.transform = `rotate(${angle}deg)`
            angle = angle - 10
        }
        // console.log(angle)
    })
}
rotateCards()

window.addEventListener('scroll', () => {
    let proportion = StackArea.getBoundingClientRect().top / window.innerHeight;
    // console.log(proportion)

    if (proportion <= 0) {
        let n = cards.length

        let index = Math.ceil((proportion * n) / 2)

        index = Math.abs(index) - 1;
        for (let i = 0; i < n; i++) {
            if (i <= index) {
                cards[i].classList.add('active')
            } else {
                cards[i].classList.remove('active')

            }
        }
        rotateCards()


    }
})
const btn = document.querySelectorAll('button.btn')
btn.forEach((button) => {
    button.onmousemove = (e) => {
        // console.log(e)
        const x = e.pageX - button.offsetLeft;
        const y = e.pageY - button.offsetTop;

        button.style.setProperty('--x', x + 'px')
        button.style.setProperty('--y', y + 'px')
    }
})

// Text-Animation
SplitType.create('section#hero h1')

SplitType.create('footer #footer-down h1')


