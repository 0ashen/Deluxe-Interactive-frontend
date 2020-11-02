import './pupup-main-menu/pupup-main-menu'
import './main-content/2.showreels-buttons/showreels-buttons'
import './main-content/3.projects/projects'
import './main-content/1.description-company/description-company'

import './circle-button/circle-button'


// disable all animations
document.querySelector('body').classList.add('disable-animation');

// general welcome animation
document.addEventListener('DOMContentLoaded', async () => {
    const delay = (ms = 100) => new Promise((res) => {
        if (document.querySelector('body').classList.contains('disable-animation')) res()
        setTimeout(() => {
            res()
        }, ms)
    })


    await delay(400)  // start delay

    // show three words
    document.querySelector('.pupup-welcome-animation').classList.add('pupup-welcome-animation--show-text')
    await delay(2000) // pupup-welcome-animation.scss:89

    // hide welcome animation
    document.querySelector('.pupup-welcome-animation').classList.add('pupup-welcome-animation--hide')
    await delay(1600) // pupup-welcome-animation.scss:19

    // show main content
    document.querySelector('.header').classList.add('header--show')
    await delay(500)

    document.querySelector('.main-content').classList.add('main-content--show')
    await delay(1000)

    document.querySelector('.pupup-welcome-animation').classList.add('pupup-welcome-animation--disaplay-none')
})
