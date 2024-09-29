const ctx = document.getElementById('pieChart').getContext('2d');
    let currentPercentage = 0;
    const targetPercentage = 79.5;
    let isClaiming = false;

    const totalClaim = 94278.16;
    let currentClaimed = 0;
    const unlockedPercentage = 81.76;

    // Khởi tạo biểu đồ Pie Chart tròn
    const pieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [currentPercentage, 100 - currentPercentage],
                backgroundColor: ['#FFEE64', '#D5D8DC'], // Màu cho phần đã claim và phần còn lại
                borderWidth: 0 // Loại bỏ viền không mong muốn
            }]
        },
        options: {
            cutout: '75%', // Tạo vòng tròn rỗng ở giữa
            rotation: 0, // Bắt đầu từ đỉnh
            circumference: 360, // Hiển thị vòng tròn đầy đủ
            plugins: {
                legend: {
                    display: false // Ẩn nhãn
                }
            },
            maintainAspectRatio: false, // Đảm bảo tỷ lệ luôn chính xác
            responsive: true // Đảm bảo biểu đồ có thể co dãn theo kích thước màn hình
        }
    });

    // Hàm tạo hiệu ứng hoa giấy và pháo hoa
    function fireConfetti() {
        // Hiệu ứng hoa giấy rơi từ trên xuống
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Pháo hoa lớn từ giữa màn hình
        confetti({
            particleCount: 300,
            angle: 90,
            spread: 360,
            startVelocity: 50,
            origin: { x: 0.5, y: 0.5 },
            colors: ['#bb0000', '#ffffff', '#FFD700']
        });
    }

    // Hàm bắt đầu quá trình claim
    function startClaim() {
        if (!isClaiming) {
            isClaiming = true;
            document.getElementById('spinner').style.visibility = 'visible';
            setTimeout(function() {
                updatePieChart();
            }, 1000); // Giả lập thời gian xử lý
        }
    }

    // Hàm cập nhật biểu đồ và làm đầy dần phần trăm
    function updatePieChart() {
        if (currentPercentage < targetPercentage) {
            currentPercentage += 1; // Tăng dần giá trị
            currentClaimed = (totalClaim * currentPercentage / 100).toFixed(1);

            // Cập nhật biểu đồ
            pieChart.data.datasets[0].data = [currentPercentage, 100 - currentPercentage];
            pieChart.update();

            // Cập nhật nội dung văn bản
            document.getElementById('claimed-percentage').textContent = currentPercentage;
            document.getElementById('claimed-values').textContent = `${currentClaimed}/${totalClaim}`;
            document.getElementById('unlocked-percentage').textContent = `${unlockedPercentage}% Unlocked`;

            setTimeout(updatePieChart, 30); // Hiệu ứng làm đầy dần sau 30ms
        } else {
            document.getElementById('claimed-percentage').textContent = targetPercentage;
            document.getElementById('spinner').style.visibility = 'hidden'; // Ẩn spinner khi hoàn thành
            isClaiming = false;

            // Kích hoạt hiệu ứng hoa giấy và pháo hoa
            fireConfetti();
        }
    }