import {gsap, TweenMax, Sine} from "gsap";

// *********************
// CIRCLE WAVE ANIMATION
// *********************

let settings = {
    numPoints: 10,
    centerX: window.innerWidth < 768 ? 45 : 75,
    centerY: window.innerWidth < 768 ? 45 : 75,
    minRadius: window.innerWidth < 768 ? 33.6 : 56,
    maxRadius: window.innerWidth < 768 ? 36 : 60,
    minDuration: 0.7,
    maxDuration: 1
}
document.querySelectorAll('.circle-button__circle-wave').forEach(el => {
    el.querySelectorAll('path').forEach(el2 => {
        createBlob({
            element: el2,
            ...settings
        });
    })
})

// createBlob({
//     element: document.querySelector("#path2"),
//     ...settings,
//     minRadius: 56,
// });

function createBlob(options) {

    options.points = [];
    var slice = (Math.PI * 2) / options.numPoints;
    var startAngle = random(Math.PI * 2);

    options.tl = gsap.timeline({
        onUpdate: update
    });

    for (var i = 0; i < options.numPoints; i++) {

        var angle = startAngle + i * slice;
        var duration = random(options.minDuration, options.maxDuration);

        var point = {
            x: options.centerX + Math.cos(angle) * options.minRadius,
            y: options.centerY + Math.sin(angle) * options.minRadius
        };

        var tween = TweenMax.to(point, duration, {
            x: options.centerX + Math.cos(angle) * options.maxRadius,
            y: options.centerY + Math.sin(angle) * options.maxRadius,
            repeat: -1,
            yoyo: true,
            ease: Sine.easeInOut
        });

        options.tl.add(tween, -random(duration));
        options.points.push(point);
    }

    function update() {
        options.element.setAttribute("d", cardinal(options.points, true, 1));
    }

    return options;
}

// Cardinal spline - a uniform Catmull-Rom spline with a tension option
function cardinal(data, closed, tension) {

    if (data.length < 1) return "M0 0";
    if (tension == null) tension = 1;

    var size = data.length - (closed ? 0 : 1);
    var path = "M" + data[0].x + " " + data[0].y + " C";

    for (var i = 0; i < size; i++) {

        var p0, p1, p2, p3;

        if (closed) {
            p0 = data[(i - 1 + size) % size];
            p1 = data[i];
            p2 = data[(i + 1) % size];
            p3 = data[(i + 2) % size];

        } else {
            p0 = i == 0 ? data[0] : data[i - 1];
            p1 = data[i];
            p2 = data[i + 1];
            p3 = i == size - 1 ? p2 : data[i + 2];
        }

        var x1 = p1.x + (p2.x - p0.x) / 6 * tension;
        var y1 = p1.y + (p2.y - p0.y) / 6 * tension;

        var x2 = p2.x - (p3.x - p1.x) / 6 * tension;
        var y2 = p2.y - (p3.y - p1.y) / 6 * tension;

        path += " " + x1 + " " + y1 + " " + x2 + " " + y2 + " " + p2.x + " " + p2.y;
    }

    return closed ? path + "z" : path;
}

function random(min, max) {
    if (max == null) {
        max = min;
        min = 0;
    }
    if (min > max) {
        var tmp = min;
        min = max;
        max = tmp;
    }
    return min + (max - min) * Math.random();
}

function setSvgViewBox() {
    document.querySelectorAll('.circle-button__circle-wave').forEach(el => {
        if (window.innerWidth < 768) {
            el.setAttribute('viewBox', '0 0 90 90')
        } else {
            el.setAttribute('viewBox', '0 0 150 150')
        }
    });
}

setSvgViewBox();
window.addEventListener('resize', setSvgViewBox)
