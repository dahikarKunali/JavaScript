const $ = (s, e = document) => e.querySelector(s), $$ = (s, e = document) => [...e.querySelectorAll(s)];
const D = DATA, L = D.links, img = n => `assets/img/${n}.jpg`;

/* nav */
const secs = [["home","Home"],["about","About"],["education","Education"],["skills","Skills"],["projects","Projects"],["experience","Experience"],["achievements","Certificates"],["contributions","Activities"],["gallery","Gallery"],["contact","Contact"]];
$("#links").innerHTML = secs.map(([i, t]) => `<a href="#${i}">${t}</a>`).join("");
$("#links").onclick = () => $("#links").classList.remove("open");
$("#burger").onclick = () => $("#links").classList.toggle("open");
const th = $("#theme"), setTheme = t => { document.documentElement.dataset.theme = t; th.textContent = t === "dark" ? "🌙" : "☀️"; };
th.onclick = () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
$("#yr").textContent = new Date().getFullYear();

/* hero */
$("#tagline").textContent = D.tagline;
const soc = [["GitHub", L.github], ["LinkedIn", L.linkedin], ["HackerRank", L.hackerrank], ["Email", "mailto:" + L.email]];
$("#heroSocial").innerHTML = soc.map(([t, h]) => `<a href="${h}" target="_blank" rel="noopener">${t}</a>`).join("");
let ri = 0, ci = 0, del = false;
(function type() {
  const w = D.roles[ri]; $("#typed").textContent = w.slice(0, ci);
  if (!del && ci++ === w.length) { del = true; return setTimeout(type, 1400); }
  if (del && --ci < 0) { del = false; ci = 0; ri = (ri + 1) % D.roles.length; }
  setTimeout(type, del ? 35 : 80);
})();

/* about */
$("#aboutTxt").innerHTML = D.about.map(p => `<p>${p}</p>`).join("");
$("#facts").innerHTML = D.facts.map(([i, k, v]) => `<div class="fact"><span>${i}</span><div><small>${k}</small>${v}</div></div>`).join("");
const nAct = D.contrib.reduce((a, c) => a + c[2].length, 0);
$("#stats").innerHTML = [[D.sems.length, "Semesters Completed"], [D.projects.length, "Projects Built"], [D.certs.length - 1, "Certificates"], [nAct, "Events & Activities"]]
  .map(([n, t]) => `<div class="stat reveal"><b data-n="${n}">0</b><span>${t}</span></div>`).join("");

/* education */
const gc = g => "g g" + g[0];
function showSem(i) {
  const s = D.sems[i]; $$(".tab", $("#semTabs")).forEach((b, j) => b.classList.toggle("on", i === j));
  $("#semBox").innerHTML = `<div class="tw"><table><tr><th>Subject</th><th>Credits</th><th>CA / P</th><th>TE</th><th>Total GP</th><th>Grade</th></tr>` +
    s.rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td><td><span class="${gc(r[5])}">${r[5]}</span></td></tr>`).join("") +
    `</table></div><div class="gpa"><span>Semester ${s.n} GPA${s.calc ? " (calculated)*" : ""}</span><b>${s.gpa.toFixed(2)}</b></div>`;
}
$("#semTabs").innerHTML = D.sems.map((s, i) => `<button class="tab">Semester ${s.n}</button>`).join("") + `<button class="tab" disabled style="opacity:.6;cursor:default">Sem 5 · Ongoing</button>`;
$$(".tab", $("#semTabs")).forEach((b, i) => { if (D.sems[i]) b.onclick = () => showSem(i); });
showSem(D.sems.length - 1);
$("#gpaChart").innerHTML = D.sems.map(s => `<div class="gc"><div data-v="${s.gpa.toFixed(2)}" data-h="${s.gpa * 10}%"></div><small>Sem ${s.n}</small></div>`).join("");
$("#gpaNote").textContent = D.sems.some(s => s.calc) ? "* Calculated by credit-weighted average of the subjects listed for that semester." : "";

/* skills */
$("#bars").innerHTML = D.skills.bars.map(([k, v]) => `<div class="bar"><p><span>${k}</span><span>${v}%</span></p><i><b data-w="${v}%"></b></i></div>`).join("");
$("#skillGroups").innerHTML = D.skills.groups.map(([h, t]) => `<div class="sg"><h4>${h}</h4><div class="tags">${t.map(x => `<span>${x}</span>`).join("")}</div></div>`).join("");
$("#course").innerHTML = D.skills.coursework.map(x => `<span>${x}</span>`).join("");

/* projects */
const cats = ["All", ...new Set(D.projects.flatMap(p => p.cat))];
$("#pFilter").innerHTML = cats.map((c, i) => `<button class="fbtn${i ? "" : " on"}">${c}</button>`).join("");
function drawProj(c) {
  $("#projGrid").innerHTML = D.projects.filter(p => c === "All" || p.cat.includes(c)).map(p => `<article class="card pc reveal in"><div class="pi">${p.icon}</div><span class="st">● ${p.status}</span><h3>${p.t}</h3><p>${p.d}</p><ul>${p.f.map(f => `<li>${f}</li>`).join("")}</ul>
  <div class="tags">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>${p.links.length ? `<div class="pl">${p.links.map(([t, h]) => `<a href="${h}" target="_blank" rel="noopener">${t} ↗</a>`).join("")}</div>` : ""}</article>`).join("");
}
$("#pFilter").onclick = e => { if (e.target.matches(".fbtn")) { $$(".fbtn", $("#pFilter")).forEach(b => b.classList.toggle("on", b === e.target)); drawProj(e.target.textContent); } };
drawProj("All");

/* internship */
const I = D.internship;
$("#intern").innerHTML = `<div><span class="kd">Internship</span><h3>${I.role}</h3><p class="org">${I.org}</p><p class="meta">📍 ${I.place} · 🗓 ${I.when} · 👩‍🏫 Industry Guide: ${I.guide}</p>
  <b>Key Responsibilities &amp; Contributions</b><ul>${I.points.map(p => `<li>${p}</li>`).join("")}</ul><div class="tags">${I.tech.map(t => `<span>${t}</span>`).join("")}</div><p class="meta" style="margin-top:16px"><b>Key learning:</b> ${I.learn}</p></div>
  <div><img src="${I.cert}" alt="Internship certificate" id="intImg"></div>`;

/* lightbox */
let lbList = [], lbI = 0; const lb = $("#lb");
function lbShow() { $("img", lb).src = lbList[lbI][0]; $("#lbc").textContent = lbList[lbI][1]; }
function openLb(list, i) { lbList = list; lbI = i; lbShow(); lb.classList.add("on"); }
const step = d => { lbI = (lbI + d + lbList.length) % lbList.length; lbShow(); };
$(".pv", lb).onclick = () => step(-1); $(".nx", lb).onclick = () => step(1); $(".x", lb).onclick = () => lb.classList.remove("on");
lb.onclick = e => { if (e.target === lb) lb.classList.remove("on"); };
document.onkeydown = e => { if (!lb.classList.contains("on")) return; if (e.key === "Escape") lb.classList.remove("on"); if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); };
$("#intImg").onclick = () => openLb([[I.cert, I.role + " — " + I.org]], 0);

/* certificates */
$("#certGrid").innerHTML = D.certs.map((c, i) => `<article class="card cert reveal" data-i="${i}"><div class="im"><img src="${img(c.i)}" alt="${c.t}" loading="lazy"></div><div class="ct"><span class="kd">${c.k}</span><h4>${c.t}</h4><p>${c.o}${c.d ? " · " + c.d : ""}</p></div></article>`).join("");
$("#certGrid").onclick = e => { const a = e.target.closest(".cert"); if (a) openLb(D.certs.map(c => [img(c.i), c.t]), +a.dataset.i); };

/* contributions */
$("#contrib").innerHTML = D.contrib.map(([i, h, l]) => `<div class="card cg reveal"><h3>${i} ${h}</h3><ul>${l.map(x => `<li>${x}</li>`).join("")}</ul></div>`).join("");

/* gallery */
const gcats = ["All", ...new Set(D.gallery.map(g => g[2]))];
$("#gFilter").innerHTML = gcats.map((c, i) => `<button class="fbtn${i ? "" : " on"}">${c}</button>`).join("");
let gcur = [];
function drawGal(c) {
  gcur = D.gallery.filter(g => c === "All" || g[2] === c);
  $("#galGrid").innerHTML = gcur.map((g, i) => `<figure class="gi" data-i="${i}"><img src="${img(g[0])}" alt="${g[1]}" loading="lazy"><span>${g[1]}</span></figure>`).join("");
}
$("#gFilter").onclick = e => { if (e.target.matches(".fbtn")) { $$(".fbtn", $("#gFilter")).forEach(b => b.classList.toggle("on", b === e.target)); drawGal(e.target.textContent); } };
$("#galGrid").onclick = e => { const f = e.target.closest(".gi"); if (f) openLb(gcur.map(g => [img(g[0]), g[1]]), +f.dataset.i); };
drawGal("All");

/* career + contact */
$("#ci").textContent = D.career.interests; $("#cg").textContent = D.career.goals;
$("#ctags").innerHTML = D.career.tags.map(t => `<span>${t}</span>`).join("");
$("#cList").innerHTML = [["✉️", "Personal", L.email, "mailto:" + L.email], ["🎓", "College", L.collegeEmail, "mailto:" + L.collegeEmail], ["💼", "LinkedIn", "kunali-dahikar", L.linkedin], ["🐙", "GitHub", "dahikarKunali", L.github], ["🏆", "HackerRank", "@kunalidahikar05", L.hackerrank], ["📍", "Location", "Nagpur, Maharashtra, India", "#contact"]]
  .map(([i, k, v, h]) => `<a href="${h}" target="_blank" rel="noopener"><span>${i}</span><div><small style="color:var(--mu)">${k}</small><br>${v}</div></a>`).join("");
$("#form").onsubmit = e => { e.preventDefault(); location.href = `mailto:${L.email}?subject=${encodeURIComponent("Portfolio message from " + $("#fn").value)}&body=${encodeURIComponent($("#fm").value + "\n\n— " + $("#fn").value + " (" + $("#fe").value + ")")}`; };

/* scroll effects */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; const t = e.target; t.classList.add("in"); io.unobserve(t);
  $$("[data-w]", t).forEach(b => b.style.width = b.dataset.w);
  $$("[data-h]", t).forEach(b => b.style.height = b.dataset.h);
  $$("[data-n]", t).forEach(b => { if (!b.classList.contains("sec")) { const n = +b.dataset.n; let k = 0; const iv = setInterval(() => { b.textContent = ++k; if (k >= n) clearInterval(iv); }, 900 / n); } });
}), { threshold: .15 });
$$(".reveal, .card, .stat").forEach(e => io.observe(e));
const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) $$("#links a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
$$("section").forEach(s => spy.observe(s));
addEventListener("scroll", () => { const h = document.documentElement; $("#progress").style.width = (scrollY / (h.scrollHeight - innerHeight) * 100) + "%"; $("#top").classList.toggle("show", scrollY > 500); });
$("#top").onclick = () => scrollTo({ top: 0, behavior: "smooth" });

/* hero particle network */
(function () {
  const c = $("#net"), x = c.getContext("2d"); let W, H, P = [];
  const rs = () => { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; P = Array.from({ length: Math.min(70, W / 18) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: Math.random() - .5, vy: Math.random() - .5 })); };
  addEventListener("resize", rs); rs();
  (function draw() {
    x.clearRect(0, 0, W, H); x.fillStyle = "#9b8cff"; x.strokeStyle = "rgba(124,92,255,.25)";
    P.forEach((p, i) => { p.x = (p.x + p.vx + W) % W; p.y = (p.y + p.vy + H) % H; x.beginPath(); x.arc(p.x, p.y, 2, 0, 7); x.fill();
      for (let j = i + 1; j < P.length; j++) { const d = Math.hypot(p.x - P[j].x, p.y - P[j].y); if (d < 120) { x.beginPath(); x.moveTo(p.x, p.y); x.lineTo(P[j].x, P[j].y); x.stroke(); } } });
    requestAnimationFrame(draw);
  })();
})();
