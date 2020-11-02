const words = ['it', 'creative', 'websites', 'social'];
const node = document.querySelector('.blink-words');
const nodeB = node.querySelector('b');
const delay = (ms = 100) => new Promise((res) => {
    setTimeout(() => {
        res()
    }, ms)
})


let i = 0;
async function wordAnimation() {
    nodeB.innerText = words[i];
    await delay(50)

    node.style.width = nodeB.offsetWidth + 'px';
    await delay(1000)
    await delay(2000)

    node.style.width = 0;
    await delay(1000)

    nodeB.innerText = '';
    i = i + 1 >= words.length ? 0 : i + 1;
    await delay(200)
}

setInterval(()=> {
    wordAnimation()
},4350)
