let centralButton = document.querySelector('.showreels-buttons__item_1');
let leftButton = document.querySelector('.showreels-buttons__item_2');
let rightButton = document.querySelector('.showreels-buttons__item_3');

centralButton.addEventListener('mouseover', () => {
    centralButton.classList.add('circle-button--hide_scale_0')
    leftButton.classList.remove('circle-button--hidden-on-the-left')
    rightButton.classList.remove('circle-button--hidden-on-the-right')
    setTimeout(()=> {
        leftButton.classList.remove('circle-button--disable-hover')
        rightButton.classList.remove('circle-button--disable-hover')
    },600)

})

