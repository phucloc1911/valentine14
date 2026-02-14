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
const lyricsData = [
    { time: 16, text: "Nhiều khi kiếm đâu cổ tích trên đời" },
    { time: 20, text: "Thật là điều may mắn nếu như có người" },
    { time: 25, text: "Cầm tay bước đi đến cuối con đường, bao giờ thì sẽ tới." },
    { time: 33, text: "Dẫu anh không là chàng hoàng tử, mà em đắm say" },
    { time: 38, text: "Chỉ là giản đơn thôi như hình hài anh lúc này" },
    { time: 42, text: "Anh vẫn muốn quỳ gối trước nàng công chúa đẹp nhất đêm nay." },
    { time: 50, text: "Điều anh muốn là luôn thấy em cười" },
    { time: 56, text: "Chẳng cần phải lo lắng vì anh ở đây rồi" },
    { time: 60, text: "Để anh che chở em hết quãng đường ngày sau nhé" },
    { time: 69, text: "Ngày đầu tiên cùng nhau sống suốt đời" },
    { time: 73, text: "Cùng nhìn về phía trước cầm tay mãi không rời" },
    { time: 78, text: "Và con tim cùng chung một nhịp khi ta có đôi." },
    { time: 85, text: "Điều anh mong thật ra chẳng xa xôi đâu" },
    { time: 91, text: "Chỉ cần ta cùng nhau đến khi bạc đầu" },
    { time: 96, text: "Dù mai sao nhiều điều làm ta lo âu." },
    { time: 100, text: "Yes or No! Yes or No!" },
    { time: 103, text: "Dẫu anh không là chàng hoàng tử mà em đắm say" },
    { time: 108, text: "Chỉ là giản đơn thôi như hình hài anh lúc này" },
    { time: 112, text: "Anh vẫn muốn quỳ gối trước nàng công chúa đẹp nhất đêm nay." },
    { time: 121, text: "Điều anh muốn là luôn thấy em cười" },
    { time: 126, text: "Chẳng cần phải lo lắng vì anh ở đây rồi" },
    { time: 130, text: "Để anh che chở em hết quãng đường ngày sau nhé" },

];

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