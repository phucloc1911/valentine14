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
