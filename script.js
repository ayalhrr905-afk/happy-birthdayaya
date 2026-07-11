// ⬇️ كود جديد تماماً لتشغيل مفرقعات الخلفية المستمرة ⬇️
window.onload = function() {
    createBackgroundConfetti();
};

function createBackgroundConfetti() {
    var bg = document.getElementById("confetti-bg");
    var colors = ['#d85a7f', '#7f53ac', '#ffd700', '#22d3ee', '#818cf8', '#fb923c'];
    var pieceCount = 150; // عدد القصاصات في الخلفية

    for (var i = 0; i < pieceCount; i++) {
        var piece = document.createElement("div");
        piece.className = "confetti-piece";

        // خصائص عشوائية لكل قطعة
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.width = Math.random() * 12 + 5 + "px";
        piece.style.height = piece.style.width;
        piece.style.animationDuration = Math.random() * 5 + 3 + "s"; // سرعات مختلفة
        piece.style.animationDelay = Math.random() * 5 + "s"; // تأخير مختلف

        bg.appendChild(piece);
    }
}

// ⬇️ تعديل دالة الاحتفال لتكون "أقوى" بمليون مرة عند الضغط ⬇️
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

    // 💥 تفجير قصاصات أقوى وأضخم فوق البطاقة 💥
    confetti({
        particleCount: 300, // عدد ضخم جداً
        spread: 120, // انتشار واسع
        origin: { y: 0.5 }, // من وسط الشاشة
        colors: ['#d85a7f', '#7f53ac', '#ffd700', '#ffffff'], // ألوان قوية
        scalar: 1.2 // حجم أكبر قليلاً
    });

    // تفجير إضافي من الجوانب لزيادة البهجة
    setTimeout(() => {
        confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 } });
        confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 } });
    }, 200);
}
