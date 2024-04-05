var now = new Date;
function createtime() {
    now.setTime(now.getTime() + 1e3);
    var e = new Date("01/01/1970 08:00:00"),
        t = Math.floor((now - e) / 1000),
        o = new Date("08/01/2022 00:00:00"),
        n = (now - o) / 1e3 / 60 / 60 / 24,
        r = Math.floor(n),
        i = (now - o) / 1e3 / 60 / 60 - 24 * r,
        s = Math.floor(i);
    1 == String(s).length && (s = "0" + s);
    var d = (now - o) / 1e3 / 60 - 1440 * r - 60 * s,
        l = Math.floor(d); 1 == String(l).length && (l = "0" + l);
    var g = (now - o) / 1e3 - 86400 * r - 3600 * s - 60 * l,
        b = Math.round(g); 1 == String(b).length && (b = "0" + b);
    let c = "";
    c = s < 22 && s >= 8 ? `<div style="font-size:13px;font-weight:bold">屋主已经运营寮舍 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 它已经伴随格林威治的灵光流逝了 ${t} 秒，直至与你一同到达永恒的彼方 </div>` : `<div style="font-size:13px;font-weight:bold"> 屋主已经运营寮舍 ${r} 天 ${s} 小时 ${l} 分 ${b} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 它已经伴随格林威治的灵光流逝了 ${t} 秒，直至与你一同到达永恒的彼方 </div>`, document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = c)
}
setInterval((() => { createtime() }), 1e3);