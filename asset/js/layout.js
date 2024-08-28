// Handle mobile
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const mbnavBtn = $('#header .mbnav-btn')
const barsContent = $('#header .bars-content')
const svg = mbnavBtn.querySelector('svg')
const img = mbnavBtn.querySelector('img')

let isActive = false;

mbnavBtn.onclick = () => {

    svg.classList.toggle('active')
    img.classList.toggle('active')

    barsContent.classList.toggle('active')
}

function fillProgressBars() {
    const fillHeight = document.querySelector('.balance-value');
    const fillWidth = document.querySelector('.balance-value-mobile');
    const valElement = document.querySelector('.val');
    const targetVal = 69420;

    let height = 0;
    let width = 0;
    let currentVal = 0;

    const interval = setInterval(() => {
        if (height >= 80 && width >= 80) {
            clearInterval(interval);
        } else {
            if (height < 80) {
                height++;
                currentVal = Math.floor((targetVal / 80) * height);
                fillHeight.style.height = height + '%';
            }
            if (width < 80) {
                width++;
                currentVal = Math.floor((targetVal / 80) * width);
                fillWidth.style.width = width + '%';
            }
            valElement.textContent = currentVal;
        }
    }, 100);
}

window.onload = fillProgressBars;


  
document.addEventListener("DOMContentLoaded", function() {
    const buttonBoost = document.querySelector("#content .yp-body .profile-wrapper .gray-box .types-box .top-left button");
    const contentPercent = document.querySelector(".detail-percent .content-percent");

    if (buttonBoost && contentPercent) {
        // Khi hover vào buttonBoost, hiển thị contentPercent
        buttonBoost.addEventListener('mouseenter', () => {
            contentPercent.style.display = 'block';
        });

        // Khi rời khỏi buttonBoost, ẩn contentPercent
        buttonBoost.addEventListener('mouseleave', () => {
            contentPercent.style.display = 'none';
        });

        // Để đảm bảo rằng contentPercent không bị ẩn khi di chuột qua nó
        contentPercent.addEventListener('mouseenter', () => {
            contentPercent.style.display = 'block';
        });

        // Khi rời khỏi contentPercent, ẩn nó
        contentPercent.addEventListener('mouseleave', () => {
            contentPercent.style.display = 'none';
        });
    }
});




  const quotes = [
    {
        element: 'strength-quote-1',
        text: '““Every day a 100x is loading, you must be risk on and hodl with conviction to really make it””'
    },
    {
        element: 'strength-quote-2',
        text: '““Every day a 100x is loading, you must be risk on and hodl with conviction to really make it””'
    },
    {
        element: 'strength-quote-3',
        text: '“Watching the chart, community working hard.”'
    },
    {
        element: 'strength-quote-4',
        text: '““Every day a 100x is loading, you must be risk on and hodl with conviction to really make it””'
    }
];

function typeQuote(quote, elementId, index = 0) {
    if (index < quote.length) {
        document.getElementById(elementId).textContent += quote.charAt(index);
        setTimeout(() => typeQuote(quote, elementId, index + 1), 50);
    }
}

quotes.forEach((q, idx) => {
    setTimeout(() => typeQuote(q.text, q.element), idx * 800); // Tạo khoảng cách thời gian giữa các đoạn
});


// Lấy tất cả các cặp nút bằng cách chọn theo lớp phù hợp
const buttons1 = document.querySelectorAll("#content .yp-body .profile-wrapper .ptype-item .content .left");
const buttons2 = document.querySelectorAll("#content .yp-body .profile-wrapper .ptype-item .content .right");

// Duyệt qua các nút, và gán sự kiện click cho từng cặp
buttons1.forEach((button1, index) => {
    const button2 = buttons2[index];

    button2.addEventListener("click", () => {
        button1.classList.remove("acctive");
        button2.classList.add("acctive");
        button1.classList.add("noacctive2");
    });

    button1.addEventListener("click", () => {
        button2.classList.remove("acctive");
        button1.classList.add("acctive");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item .content-right");

    items.forEach((item, index) => {
        typeEffect(item, index * 500); // Mỗi đoạn văn bắt đầu sau khi đoạn trước đó nhập xong
    });

    function typeEffect(element, delay) {
        const text = element.textContent;
        element.textContent = ""; // Xóa nội dung ban đầu
        let i = 0;

        setTimeout(() => {
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval); // Dừng khi kết thúc
                }
            }, 50); // Tốc độ nhập (ms)
        }, delay);
    }
});







const analyzeAgain = document.querySelector(".analyzeAgain i");
if(analyzeAgain) {
    analyzeAgain.addEventListener("click", () => {
        const noitice = document.querySelector(".noitice");
        if(noitice) {
            noitice.style.display = "none";
        }
    });
}

const buttonAgain = document.querySelector("#content .yp-body .profile-wrapper .anl-btn-wrapper button, #content .op-body .profile-wrapper .anl-btn-wrapper button");
if(buttonAgain) {
    buttonAgain.addEventListener("click", () => {
        const noitice = document.querySelector(".noitice");
        if(noitice) {
            noitice.style.display = "block";
        }
    });
}


document.getElementById('export-btn').addEventListener('click', function(event) {
    const degenContainer = document.querySelector('#degen-container img');
    degenContainer.style.display = "block";

    // Ngăn chặn sự kiện click lan ra ngoài để không ẩn img ngay lập tức khi nhấp vào export-btn
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    const degenContainer = document.querySelector('#degen-container img');
    const isClickInside = degenContainer.contains(event.target);

    // Nếu click ra ngoài img, ẩn nó đi
    if (!isClickInside) {
        degenContainer.style.display = "none";
    }
});



const buttonGost = document.querySelector(".button-goost button");
if(buttonGost) {
    console.log(buttonGost);
    const quest = document.querySelector(".Quest");
    if(buttonGost && quest) {
        // Khi nhấn vào buttonGost, chuyển đổi trạng thái hiển thị của quest
        buttonGost.onclick = (event) => {
            if (quest.style.display === 'block') {
                quest.style.display = 'none';
            } else {
                quest.style.display = 'block';
            }
        }
    }
}
const questContainer = document.querySelector(".quest-container");
const closeButton = document.querySelector(".close-button");

if (buttonGost && questContainer && closeButton) {
    // Khi nhấn vào buttonGost, hiển thị hoặc ẩn questContainer
    buttonGost.addEventListener('click', () => {
        questContainer.style.display = 'block';
    });

    // Khi nhấn vào closeButton, ẩn questContainer
    closeButton.addEventListener('click', () => {
        questContainer.style.display = 'none';
    });
}
