const images = [
    {
        src: 'static/img/content/projects/2.jpg',
        name: 'Service of the future',
        categories: ['Design', 'Development']
    },
    {
        src: 'static/img/content/projects/1.jpg',
        name: 'Service of the future',
        categories: ['Design', 'Development']
    },
    {
        src: 'static/img/content/projects/3.jpg',
        name: 'Service of the future',
        categories: ['Design', 'Development']
    },
    {
        src: 'static/img/content/projects/4.jpg',
        name: 'Service of the future',
        categories: ['Design', 'Development']
    },
    {
        src: 'static/img/content/projects/5.jpg',
        name: 'Service of the future',
        categories: ['Design', 'Development']
    },
    {
        src: 'static/img/content/projects/6.jpg',
        name: 'Service of the future',
        categories: ['Design', 'Development']
    },
    {
        src: 'static/img/content/projects/7.jpg',
        name: 'Service of the future',
        categories: ['Design', 'Development']
    },
    {
        src: 'static/img/content/projects/8.jpg',
        name: 'Service of the future',
        categories: ['Design', 'Development']
    },
    {
        src: 'static/img/content/projects/9.jpg',
        name: 'Service of the future',
        categories: ['Design', 'Development']
    },
    {
        src: 'static/img/content/projects/10.jpg',
        name: 'Service of the future',
        categories: ['Design', 'Development']
    },
]
const collage = document.querySelector('.projects__inner');
let lastCountColumnsConfigure; // optimization renering
const getCountColumns = function () {
    if (window.innerWidth > 1599) return 5
    if (window.innerWidth > 1439) return 4
    if (window.innerWidth > 1023) return 3
    if (window.innerWidth > 767) return 2
    return 1
}
const updateColumnsCount = function () {
    let columnsCount = getCountColumns();
    if (lastCountColumnsConfigure && lastCountColumnsConfigure === columnsCount) return false;
    lastCountColumnsConfigure = columnsCount;
    collage.innerHTML = '';
    let createColumn = () => {
        let column = document.createElement('div');
        column.classList.add("projects__column");
        return column;
    }
    let i = 0;
    while (columnsCount > i) {
        collage.appendChild(createColumn());
        i++;
    }
}
const getMinHeightColumn = function () {
    const columnList = document.querySelectorAll('.projects__inner .projects__column');
    let miiHeightEl;
    for (let i = 1; i <= columnList.length; i++) {
        if (!miiHeightEl || columnList[i - 1].scrollHeight < miiHeightEl.scrollHeight) miiHeightEl = columnList[i - 1];
    }
    return miiHeightEl
}

async function configureColumns(idx = 0) {
    if (idx == 0) {
        if (updateColumnsCount() === false) return;
    }


    let item = document.createElement("div");
    item.classList.add('projects__item');

    let img = document.createElement("img");
    img.src = images[idx].src;

    let name = document.createElement("div");
    name.classList.add('projects__name');
    name.appendChild(document.createTextNode(images[idx].name));

    let categories = document.createElement("div");
    categories.classList.add('projects__categories');
    categories.appendChild(document.createTextNode(images[idx].categories.join(', ')));

    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(categories);

    getMinHeightColumn().appendChild(item);

    await new Promise((res, rej) => {
        img.onload = (e) => {
            res(idx);
        };
    }).then((idx) => {
        if (images.length != idx + 1) configureColumns(idx + 1)
    })

}

configureColumns(0);

window.addEventListener('resize', () => {
    configureColumns(0)
})

// *********************************
//  TOGGLE FILTER BUTTON
// *********************************
const openFilterModal = function () {
    document.querySelector('.projects__filter-modal-choise').classList.toggle('is-open');
    document.querySelector('body').classList.toggle('overflow-hidden');
}

document.querySelector('.projects__filter-button').addEventListener('click', openFilterModal)
document.querySelector('.projects__filter-modal-choise-close').addEventListener('click', openFilterModal)
