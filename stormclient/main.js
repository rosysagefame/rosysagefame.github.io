/* RAIN */
const rainEl = document.getElementById("rain");
for (let i = 0; i < 90; i++) {
    const d = document.createElement("div");
    d.className = "drop";
    d.style.cssText = `left:${Math.random() * 100}%;height:${Math.random() * 55 + 18}px;animation-duration:${(Math.random() * 0.5 + 0.45).toFixed(2)}s;animation-delay:${(Math.random() * 2).toFixed(2)}s;opacity:${(Math.random() * 0.45 + 0.08).toFixed(2)};`;
    rainEl.appendChild(d);
}

/* LIGHTNING */
const cv = document.getElementById("bolt");
const cx = cv.getContext("2d");
const resize = () => {
    cv.width = innerWidth;
    cv.height = innerHeight;
};
resize();
addEventListener("resize", resize);
function seg(x1, y1, x2, y2, off, d) {
    if (d <= 0 || off < 1.5) {
        cx.moveTo(x1, y1);
        cx.lineTo(x2, y2);
        return;
    }
    const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * off;
    const my = (y1 + y2) / 2 + (Math.random() - 0.5) * off * 0.28;
    seg(x1, y1, mx, my, off / 2, d - 1);
    seg(mx, my, x2, y2, off / 2, d - 1);
}
function flash() {
    const x = Math.random() * cv.width;
    cx.clearRect(0, 0, cv.width, cv.height);
    cx.strokeStyle = "#7dd3fc";
    cx.lineWidth = 1.2;
    cx.globalAlpha = 0.5;
    cx.beginPath();
    seg(x, 0, x + (Math.random() - 0.5) * 180, cv.height * 0.65, 110, 6);
    cx.stroke();
    setTimeout(() => {
        cx.clearRect(0, 0, cv.width, cv.height);
        cx.globalAlpha = 1;
    }, 70);
}
setInterval(() => {
    if (Math.random() < 0.38) flash();
}, 2000);

/* TICKER */
const items = [
    ["v1.0.2", "Latest Release"],
    ["Modules", "50+"],
    ["MC 1.8.9-1.21.11", "Supported"],
    ["AC Bypasses", "Constantly Updated"],
];
const track = document.getElementById("ticker");
[...items, ...items].forEach(([k, v]) => {
    const el = document.createElement("div");
    el.className = "tick";
    el.innerHTML = `<b>${k}</b>${v}`;
    track.appendChild(el);
});

/* OS TABS */
function switchOS(os) {
    document
        .querySelectorAll(".os-tab")
        .forEach((t) => t.classList.remove("active"));
    document
        .querySelectorAll(".os-panel")
        .forEach((p) => p.classList.remove("active"));
    document.getElementById("tab-" + os).classList.add("active");
    document.getElementById("panel-" + os).classList.add("active");
}

/* MODULES */
const mods = [
    "AimAssist",
    "AutoClicker",
    "BlockHit",
    "HitFlick",
    "HitSelect",
    "Reach",
    "SilentAura",
    "JumpReset",
    "WTap",
    "TriggerBot",
    "CrystalAura",
    "AntiDebuff",
    "ESP",
    "Chams",
    "Fullbright",
    "Health Indicators",
    "ItemESP",
    "Nametags",
    "Projectiles",
    "StorageESP",
    "AutoFish",
    "AutoPearl",
    "BackTrack",
    "Blink",
    "Clutch",
    "FakeLag",
    "HitSwap",
    "AutoAnchor",
    "KnockbackDelay",
    "Scaffold",
    "Velocity",
    "WindCharge",
    "AntiAFK",
    "AutoTool",
    "ChestSteal",
    "FastPlace",
    "Freecam",
    "SafeWalk",
    "Parkour",
    "XRay",
    "ArmorSwitch",
    "AutoArmor",
    "AutoTotem",
    "InventoryCleaner",
    "InventoryManager",
    "Refill",
    "ThrowDebuff",
    "ThrowPot",
    "Flight",
    "Speed",
    "Timer",
];
const grid = document.getElementById("mods-grid");
mods.forEach((name) => {
    const el = document.createElement("div");
    el.className = "mod-pill";
    el.innerHTML = `<span class="mod-diamond"></span><span class="mod-name">${name}</span>`;
    grid.appendChild(el);
});

/* REVEAL */
const obs = new IntersectionObserver(
    (es) =>
        es.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("on");
        }),
    { threshold: 0.1 },
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
