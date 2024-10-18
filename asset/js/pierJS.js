// const ctx = document.getElementById('pieChart').getContext('2d');
// let currentPercentage = 79.5;
// const targetPercentage = 82;
// let isClaiming = false;

// const totalClaim = 94278.16;
// let currentClaimed = 79.5;
// const unlockedPercentage = 81.76;

// if(ctx) {
//     // Khởi tạo biểu đồ Pie Chart tròn
//     const pieChart = new Chart(ctx, {
//         type: 'doughnut',
//         data: {
//             datasets: [{
//                 data: [79.5, 2.5, 18], // 79.5%, 2.5% (khoảng nhấp nháy), phần còn lại
//                 backgroundColor: ['#FFEE64', 'rgba(255, 247, 186, 1)', '#D5D8DC'], // Màu cho phần đã claim, phần nhấp nháy (đã đổi màu), và phần còn lại
//                 borderWidth: 0 // Loại bỏ viền không mong muốn
//             }]
//         },
//         options: {
//             cutout: '75%', // Tạo vòng tròn rỗng ở giữa
//             rotation: 0, // Bắt đầu từ đỉnh
//             circumference: 360, // Hiển thị vòng tròn đầy đủ
//             plugins: {
//                 legend: {
//                     display: false // Ẩn nhãn
//                 }
//             },
//             maintainAspectRatio: false, // Đảm bảo tỷ lệ luôn chính xác
//             responsive: true // Đảm bảo biểu đồ có thể co dãn theo kích thước màn hình
//         }
//     });
//     // Tạo lớp nhấp nháy nhắc click
//     function addBlinkingSegment() {
//         let isIncreasing = true;

//         // Tạo hiệu ứng nhấp nháy cho đoạn từ 79.5% đến 82.5%
//         function blinkEffect() {
//             const blinkOpacity = isIncreasing ? 1 : 0.1;
//             pieChart.data.datasets[0].backgroundColor[1] = `rgba(255, 247, 186, ${blinkOpacity})`; // Đổi màu thành #FFF7BA với opacity
//             pieChart.update();
//             isIncreasing = !isIncreasing;
//             if (!isClaiming) {
//                 setTimeout(blinkEffect, 500); // Hiệu ứng nhấp nháy mỗi 500ms
//             }
//         }

//         blinkEffect(); // Bắt đầu hiệu ứng nhấp nháy
//     }

//     // Gọi hàm nhấp nháy khi chưa click
//     addBlinkingSegment();

//     // Hàm tạo hiệu ứng hoa giấy và pháo hoa
//     function fireConfetti() {
//         // Hiệu ứng hoa giấy rơi từ trên xuống
//         confetti({
//             particleCount: 150,
//             spread: 70,
//             origin: { y: 0.6 }
//         });

//         // Pháo hoa lớn từ giữa màn hình
//         confetti({
//             particleCount: 300,
//             angle: 90,
//             spread: 360,
//             startVelocity: 50,
//             origin: { x: 0.5, y: 0.5 },
//             colors: ['#bb0000', '#ffffff', '#FFD700']
//         });
//     }

//     // Hàm bắt đầu quá trình claim
//     function startClaim() {
//         if (!isClaiming) {
//             isClaiming = true;
//             document.getElementById('spinner').style.visibility = 'visible';
//             setTimeout(function() {
//                 updatePieChart();
//             }, 1000); // Giả lập thời gian xử lý
//         }
//     }

//     // Hàm cập nhật biểu đồ và làm đầy dần phần trăm
//     function updatePieChart() {
//         if (currentPercentage < targetPercentage) {
//             currentPercentage += 1; // Tăng dần giá trị
//             currentClaimed = (totalClaim * currentPercentage / 100).toFixed(1);

//             // Cập nhật biểu đồ
//             pieChart.data.datasets[0].data = [currentPercentage, 100 - currentPercentage];
//             pieChart.update();

//             // Cập nhật nội dung văn bản
//             document.getElementById('claimed-percentage').textContent = currentPercentage;
//             document.getElementById('claimed-values').textContent = `${currentClaimed}/${totalClaim}`;
//             document.getElementById('unlocked-percentage').textContent = `${unlockedPercentage}% Unlocked`;

//             setTimeout(updatePieChart, 30); // Hiệu ứng làm đầy dần sau 30ms
//         } else {
//             // Khi đạt đến target, dừng nhấp nháy và đổi màu cố định
//             pieChart.data.datasets[0].backgroundColor = ['#FFEE64', '#D5D8DC']; // Đặt màu cho toàn bộ phần đã claim và phần còn lại
//             pieChart.data.datasets[0].data = [82, 18]; // Đặt lại dữ liệu sau khi claim
//             pieChart.update();

//             document.getElementById('claimed-percentage').textContent = targetPercentage;
//             document.getElementById('spinner').style.visibility = 'hidden'; // Ẩn spinner khi hoàn thành
//             isClaiming = false;

//             // Kích hoạt hiệu ứng hoa giấy và pháo hoa
//             fireConfetti();
//         }
//     }
// }





const dropdown = document.querySelector(".dropdown-content");
const d = document.querySelector(".dropdown-content-2");
const connecteddd = document.querySelector("#header .inner .connects a.wl");
const connect2 = document.querySelector("#header .inner .connects a.x.connected");
if (connecteddd) {
    connecteddd.addEventListener("mouseover", () => {
        dropdown.style.display = "block";
    });
    connecteddd.addEventListener("mouseout", () => {
        dropdown.style.display = "none";
    });
    connect2.addEventListener("mouseover", () => {
        d.style.display = "block";
    });
    connect2.addEventListener("mouseout", () => {
        d.style.display = "none";
    });
}
