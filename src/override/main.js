// 取得 minNum(最小值) ~ maxNum(最大值) 之間的亂數
function getRandom(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}


// 隨機產生不重覆的n個數字
function getRandomArray(minNum, maxNum, n) {
    // 儲存產生的陣列
    let rdmArray = [n];
    for (let i = 0; i < n; i++) {
        // 暫存的亂數
        let rdm = 0;
        let exist;
        do {
            // 此亂數是否已存在
            exist = false;
            // 取得亂數
            rdm = getRandom(minNum, maxNum);
            // 檢查亂數是否存在於陣列中，若存在則繼續回圈
            if (rdmArray.indexOf(rdm) != -1) exist = true;
            // 產生沒出現過的亂數時離開迴圈
        } while (exist);
        rdmArray[i] = rdm;
    }
    let imgsArray = rdmArray;
    creatCardLayout(imgsArray);
}

function creatCardLayout(array) {
    let element = '';
    for (let index = 0; index < array.length; index++) {
        element +=
            `<div class="card">
                <img class="card-img" src="/images/bg/${array[index]}.jpg" alt="Card BoA_${array[index]} image">
            </div>`;
    }
    $('.card-columns').html(element);
}

getRandomArray(1, 105, 9);

/* ---- particles.js config ---- */

particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "color": {
            "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.6,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#000",
            "opacity": 0.4,
            "width": 1
        },
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});