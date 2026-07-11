window.onload = function() {
    createBackgroundConfetti();
};

function createBackgroundConfetti() {
    var bg = document.getElementById("confetti-bg");
    var colors = ['#d85a7f', '#7f53ac', '#ffd700', '#22d3ee', '#818cf8', '#fb923c'];
    var pieceCount = 150;

    for (var i = 0; i < pieceCount; i++) {
        var piece = document.createElement("div");
        piece.className = "confetti-piece";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = Math.random() * 12 + 5 + "px";
        piece.style.height = piece.style.width;
        piece.style.animationDuration = Math.random() * 5 + 3 + "s";
        piece.style.animationDelay = Math.random() * 5 + "s";
        bg.appendChild(piece);
    }
}

function startCelebration() {
    var firstScene = document.getElementById("first-scene");
    if (firstScene) firstScene.classList.add("hidden");

    var secondScene = document.getElementById("second-scene");
    if (secondScene) secondScene.classList.remove("hidden");

    var audio = document.getElementById("birthday-audio");
    if (audio) {
        audio.play().catch(function(error) {
            console.log("المتصفح حجب التشغيل التلقائي:", error);
        });
    }

    confetti({
        particleCount: 300,
        spread: 120,
        origin: { y: 0.5 },
        colors: ['#d85a7f', '#7f53ac', '#ffd700', '#ffffff'],
        scalar: 1.2
    });

    setTimeout(() => {
        confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 } });
    }, 200);
}

// دالة فتح الهدية المضحكة
function openGift() {
    // 1. إخفاء أيقونة الهدية الكبيرة
    var giftBox = document.getElementById("gift-box");
    if (giftBox) giftBox.classList.add("hidden");

    // 2. إظهار حاوية المقلب (الصورة والنص)
    var giftSurprise = document.getElementById("gift-surprise");
    if (giftSurprise) giftSurprise.classList.remove("hidden");

    // تفجير ألوان احتفالاً بالصدمة المضحكة
    confetti({ 
        particleCount: 80, 
        spread: 60, 
        origin: { y: 0.75 },
        colors: ['#ffd700', '#7f53ac', '#ff69b4']
    });
}
