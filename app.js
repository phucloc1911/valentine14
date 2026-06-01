onload = () => {
    // Tự động phát nhạc vì người dùng đã tương tác (click nút) từ trang trước
    const music = document.getElementById('bg-music');
    if (music) {
        music.play().catch(e => console.log("Trình duyệt chặn phát tự động, cần click thêm 1 lần nữa."));
    }

    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};
// Danh sách lời bài hát và thời gian (giây) tương ứng
// Bạn hãy nghe nhạc và chỉnh lại số giây cho khớp nhé!


const music = document.getElementById('bg-music');
const lyricsContainer = document.getElementById('lyrics-container');

music.ontimeupdate = () => {
    const currentTime = music.currentTime;
    // Tìm câu hát phù hợp với thời gian hiện tại
    const currentLyric = lyricsData.find((l, index) => {
        const nextLyric = lyricsData[index + 1];
        return currentTime >= l.time && (!nextLyric || currentTime < nextLyric.time);
    });

    if (currentLyric) {
        lyricsContainer.innerText = currentLyric.text;
        lyricsContainer.style.opacity = 1;
    } else {
        lyricsContainer.style.opacity = 0;
    }
};
// Thêm chức năng cho nút Play Music
const musicBtn = document.getElementById('music-control');
if (musicBtn && music) {
    musicBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicBtn.innerText = "⏸️ Pause Music"; // Đổi chữ khi đang phát
        } else {
            music.pause();
            musicBtn.innerText = "🎵 Play Music"; // Đổi chữ khi tạm dừng
        }
    });
}
// --- TẠO ĐOM ĐÓM BAY LƯỢN KHẮP MÀN HÌNH ---
function createFireflies() {
    const numFireflies = 25; // Số lượng đom đóm (ông có thể tăng giảm tùy ý)
    
    for (let i = 0; i < numFireflies; i++) {
        let firefly = document.createElement('div');
        firefly.classList.add('firefly');
        
        // Vị trí xuất hiện ban đầu ngẫu nhiên trên màn hình
        firefly.style.left = Math.random() * 100 + 'vw';
        firefly.style.top = Math.random() * 100 + 'vh';
        
        // Hướng bay ngẫu nhiên (tọa độ đích)
        firefly.style.setProperty('--tx', (Math.random() * 100 - 50) + 'vw');
        firefly.style.setProperty('--ty', (Math.random() * 100 - 50) + 'vh');
        
        // Tốc độ bay (từ 8s đến 18s) và độ trễ ngẫu nhiên để bay không đều nhau
        let duration = Math.random() * 10 + 8; 
        let delay = Math.random() * 5; 
        
        // Gắn hiệu ứng chuyển động
        firefly.style.animation = `fly ${duration}s ${delay}s infinite ease-in-out alternate`;
        
        document.body.appendChild(firefly);
    }
}

// Gọi hàm để chạy luôn khi load trang
createFireflies();