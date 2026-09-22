const DATA = {
    South: [
        {
            state: "Andhra Pradesh",
            category: "INFRA-2",
            active: 38,
            withdrawn: 6,
            pending: 5,
            districts: [
                {
                    name: "Guntur",
                    count: 11,
                    value: 1420,
                    active: 8,
                    withdrawn: 2,
                    pending: 1,
                    sample: "Amaravati Happy Nest",
                    status: "Withdraw EC",
                    cat: "INFRA-2",
                },
                {
                    name: "Krishna",
                    count: 9,
                    value: 980,
                    active: 7,
                    withdrawn: 1,
                    pending: 1,
                    sample: "Vijayawada Riverfront Housing",
                    status: "Granted",
                    cat: "INFRA-2",
                },
                {
                    name: "Visakhapatnam",
                    count: 14,
                    value: 2110,
                    active: 9,
                    withdrawn: 1,
                    pending: 4,
                    sample: "Vizag Tech Corridor Phase II",
                    status: "Under Review",
                    cat: "Industry-1",
                },
                {
                    name: "Chittoor",
                    count: 5,
                    value: 340,
                    active: 4,
                    withdrawn: 0,
                    pending: 1,
                    sample: "Tirupati Logistics Park",
                    status: "Granted",
                    cat: "INFRA-1",
                },
            ],
        },
        {
            state: "Telangana",
            category: "Industry-1",
            active: 31,
            withdrawn: 3,
            pending: 8,
            districts: [
                {
                    name: "Hyderabad",
                    count: 18,
                    value: 3260,
                    active: 14,
                    withdrawn: 1,
                    pending: 3,
                    sample: "Hitec City Data Campus",
                    status: "Granted",
                    cat: "Industry-1",
                },
                {
                    name: "Rangareddy",
                    count: 10,
                    value: 1120,
                    active: 7,
                    withdrawn: 1,
                    pending: 2,
                    sample: "Shamshabad Warehousing Hub",
                    status: "Under Review",
                    cat: "INFRA-2",
                },
                {
                    name: "Warangal",
                    count: 6,
                    value: 410,
                    active: 5,
                    withdrawn: 0,
                    pending: 1,
                    sample: "Warangal Textile Park",
                    status: "Granted",
                    cat: "Industry-1",
                },
            ],
        },
        {
            state: "Karnataka",
            category: "Industry-1",
            active: 26,
            withdrawn: 4,
            pending: 6,
            districts: [
                {
                    name: "Bengaluru Urban",
                    count: 16,
                    value: 2870,
                    active: 12,
                    withdrawn: 1,
                    pending: 3,
                    sample: "Outer Ring Road IT SEZ",
                    status: "Granted",
                    cat: "Industry-1",
                },
                {
                    name: "Mysuru",
                    count: 7,
                    value: 560,
                    active: 6,
                    withdrawn: 0,
                    pending: 1,
                    sample: "Mysuru Heritage Housing",
                    status: "Granted",
                    cat: "INFRA-2",
                },
                {
                    name: "Belagavi",
                    count: 5,
                    value: 295,
                    active: 3,
                    withdrawn: 1,
                    pending: 1,
                    sample: "Belagavi Agro Processing Unit",
                    status: "Under Review",
                    cat: "Industry-2",
                },
            ],
        },
        {
            state: "Tamil Nadu",
            category: "INFRA-2",
            active: 29,
            withdrawn: 2,
            pending: 7,
            districts: [
                {
                    name: "Chennai",
                    count: 15,
                    value: 2430,
                    active: 11,
                    withdrawn: 1,
                    pending: 3,
                    sample: "OMR Coastal Residences",
                    status: "Granted",
                    cat: "INFRA-2",
                },
                {
                    name: "Coimbatore",
                    count: 9,
                    value: 740,
                    active: 7,
                    withdrawn: 0,
                    pending: 2,
                    sample: "Coimbatore Textile Cluster",
                    status: "Granted",
                    cat: "Industry-1",
                },
                {
                    name: "Madurai",
                    count: 6,
                    value: 355,
                    active: 4,
                    withdrawn: 1,
                    pending: 1,
                    sample: "Madurai Ring Road Housing",
                    status: "Under Review",
                    cat: "INFRA-2",
                },
            ],
        },
    ],
    North: [
        {
            state: "Uttar Pradesh",
            category: "INFRA-2",
            active: 41,
            withdrawn: 9,
            pending: 11,
            districts: [
                {
                    name: "Lucknow",
                    count: 12,
                    value: 1580,
                    active: 9,
                    withdrawn: 2,
                    pending: 1,
                    sample: "Gomti Nagar Extension Homes",
                    status: "Granted",
                    cat: "INFRA-2",
                },
                {
                    name: "Noida",
                    count: 19,
                    value: 3040,
                    active: 12,
                    withdrawn: 3,
                    pending: 4,
                    sample: "Noida Expressway Twin Towers",
                    status: "Under Review",
                    cat: "INFRA-2",
                },
                {
                    name: "Varanasi",
                    count: 6,
                    value: 410,
                    active: 5,
                    withdrawn: 0,
                    pending: 1,
                    sample: "Kashi Riverside Housing",
                    status: "Granted",
                    cat: "INFRA-1",
                },
            ],
        },
        {
            state: "Haryana",
            category: "INFRA-2",
            active: 24,
            withdrawn: 5,
            pending: 4,
            districts: [
                {
                    name: "Gurugram",
                    count: 17,
                    value: 2960,
                    active: 12,
                    withdrawn: 2,
                    pending: 3,
                    sample: "Dwarka Expressway Residences",
                    status: "Granted",
                    cat: "INFRA-2",
                },
                {
                    name: "Faridabad",
                    count: 8,
                    value: 610,
                    active: 6,
                    withdrawn: 1,
                    pending: 1,
                    sample: "Faridabad Industrial Estate",
                    status: "Under Review",
                    cat: "Industry-1",
                },
            ],
        },
        {
            state: "Rajasthan",
            category: "Industry-1",
            active: 19,
            withdrawn: 3,
            pending: 6,
            districts: [
                {
                    name: "Jaipur",
                    count: 11,
                    value: 970,
                    active: 8,
                    withdrawn: 1,
                    pending: 2,
                    sample: "Jaipur Ring Road Township",
                    status: "Granted",
                    cat: "INFRA-2",
                },
                {
                    name: "Jodhpur",
                    count: 5,
                    value: 280,
                    active: 4,
                    withdrawn: 0,
                    pending: 1,
                    sample: "Jodhpur Solar Park Extension",
                    status: "Granted",
                    cat: "Industry-2",
                },
            ],
        },
        {
            state: "Punjab",
            category: "INFRA-1",
            active: 14,
            withdrawn: 2,
            pending: 3,
            districts: [
                {
                    name: "Ludhiana",
                    count: 7,
                    value: 390,
                    active: 5,
                    withdrawn: 1,
                    pending: 1,
                    sample: "Ludhiana Cycle Valley Estate",
                    status: "Granted",
                    cat: "Industry-1",
                },
                {
                    name: "Mohali",
                    count: 6,
                    value: 340,
                    active: 4,
                    withdrawn: 0,
                    pending: 2,
                    sample: "Mohali IT Park Housing",
                    status: "Under Review",
                    cat: "INFRA-2",
                },
            ],
        },
    ],
    West: [
        {
            state: "Maharashtra",
            category: "INFRA-2",
            active: 52,
            withdrawn: 11,
            pending: 14,
            districts: [
                {
                    name: "Mumbai Suburban",
                    count: 22,
                    value: 4870,
                    active: 16,
                    withdrawn: 2,
                    pending: 4,
                    sample: "Bandra-Kurla Vertical Towers",
                    status: "Granted",
                    cat: "INFRA-2",
                },
                {
                    name: "Pune",
                    count: 18,
                    value: 2340,
                    active: 12,
                    withdrawn: 2,
                    pending: 4,
                    sample: "Hinjewadi Phase IV Campus",
                    status: "Under Review",
                    cat: "Industry-1",
                },
                {
                    name: "Thane",
                    count: 12,
                    value: 1610,
                    active: 9,
                    withdrawn: 1,
                    pending: 2,
                    sample: "Ghodbunder Road Township",
                    status: "Granted",
                    cat: "INFRA-2",
                },
                {
                    name: "Nagpur",
                    count: 6,
                    value: 390,
                    active: 5,
                    withdrawn: 0,
                    pending: 1,
                    sample: "Nagpur MIHAN Logistics Park",
                    status: "Granted",
                    cat: "Industry-1",
                },
            ],
        },
        {
            state: "Gujarat",
            category: "Industry-1",
            active: 33,
            withdrawn: 4,
            pending: 9,
            districts: [
                {
                    name: "Ahmedabad",
                    count: 14,
                    value: 1980,
                    active: 10,
                    withdrawn: 1,
                    pending: 3,
                    sample: "SG Highway Business District",
                    status: "Granted",
                    cat: "Industry-1",
                },
                {
                    name: "Surat",
                    count: 11,
                    value: 1240,
                    active: 8,
                    withdrawn: 1,
                    pending: 2,
                    sample: "Surat Diamond Bourse Annex",
                    status: "Granted",
                    cat: "Industry-1",
                },
                {
                    name: "Vadodara",
                    count: 5,
                    value: 320,
                    active: 3,
                    withdrawn: 1,
                    pending: 1,
                    sample: "Vadodara Chemical Park",
                    status: "Under Review",
                    cat: "Industry-2",
                },
            ],
        },
        {
            state: "Goa",
            category: "INFRA-1",
            active: 6,
            withdrawn: 1,
            pending: 2,
            districts: [
                {
                    name: "North Goa",
                    count: 4,
                    value: 210,
                    active: 3,
                    withdrawn: 0,
                    pending: 1,
                    sample: "Candolim Coastal Resort",
                    status: "Under Review",
                    cat: "INFRA-1",
                },
                {
                    name: "South Goa",
                    count: 2,
                    value: 95,
                    active: 2,
                    withdrawn: 0,
                    pending: 0,
                    sample: "Colva Beachfront Villas",
                    status: "Granted",
                    cat: "INFRA-1",
                },
            ],
        },
    ],
    East: [
        {
            state: "West Bengal",
            category: "INFRA-2",
            active: 22,
            withdrawn: 5,
            pending: 6,
            districts: [
                {
                    name: "Kolkata",
                    count: 13,
                    value: 1650,
                    active: 9,
                    withdrawn: 2,
                    pending: 2,
                    sample: "New Town Eco-Housing",
                    status: "Granted",
                    cat: "INFRA-2",
                },
                {
                    name: "Howrah",
                    count: 6,
                    value: 410,
                    active: 4,
                    withdrawn: 1,
                    pending: 1,
                    sample: "Howrah Riverfront Redevelopment",
                    status: "Under Review",
                    cat: "INFRA-1",
                },
            ],
        },
        {
            state: "Odisha",
            category: "Industry-1",
            active: 17,
            withdrawn: 2,
            pending: 5,
            districts: [
                {
                    name: "Khordha",
                    count: 8,
                    value: 560,
                    active: 6,
                    withdrawn: 1,
                    pending: 1,
                    sample: "Bhubaneswar Smart Housing",
                    status: "Granted",
                    cat: "INFRA-2",
                },
                {
                    name: "Jajpur",
                    count: 6,
                    value: 720,
                    active: 5,
                    withdrawn: 0,
                    pending: 1,
                    sample: "Jajpur Steel Corridor Unit",
                    status: "Granted",
                    cat: "Industry-1",
                },
            ],
        },
        {
            state: "Jharkhand",
            category: "Industry-2",
            active: 11,
            withdrawn: 1,
            pending: 3,
            districts: [
                {
                    name: "Ranchi",
                    count: 6,
                    value: 340,
                    active: 4,
                    withdrawn: 1,
                    pending: 1,
                    sample: "Ranchi Ring Road Residences",
                    status: "Under Review",
                    cat: "INFRA-2",
                },
                {
                    name: "Dhanbad",
                    count: 4,
                    value: 280,
                    active: 3,
                    withdrawn: 0,
                    pending: 1,
                    sample: "Dhanbad Coal Belt Processing",
                    status: "Granted",
                    cat: "Industry-2",
                },
            ],
        },
    ],
    Central: [
        {
            state: "Madhya Pradesh",
            category: "Industry-1",
            active: 19,
            withdrawn: 3,
            pending: 5,
            districts: [
                {
                    name: "Indore",
                    count: 9,
                    value: 830,
                    active: 6,
                    withdrawn: 1,
                    pending: 2,
                    sample: "Indore Super Corridor Homes",
                    status: "Granted",
                    cat: "INFRA-2",
                },
                {
                    name: "Bhopal",
                    count: 7,
                    value: 520,
                    active: 5,
                    withdrawn: 1,
                    pending: 1,
                    sample: "Bhopal Lakefront Township",
                    status: "Under Review",
                    cat: "INFRA-2",
                },
            ],
        },
        {
            state: "Chhattisgarh",
            category: "Industry-2",
            active: 9,
            withdrawn: 1,
            pending: 2,
            districts: [
                {
                    name: "Raipur",
                    count: 5,
                    value: 310,
                    active: 4,
                    withdrawn: 0,
                    pending: 1,
                    sample: "Raipur New Capital Extension",
                    status: "Granted",
                    cat: "INFRA-1",
                },
                {
                    name: "Durg",
                    count: 3,
                    value: 190,
                    active: 2,
                    withdrawn: 1,
                    pending: 0,
                    sample: "Durg Steel Ancillary Park",
                    status: "Granted",
                    cat: "Industry-2",
                },
            ],
        },
    ],
    Northeast: [
        {
            state: "Assam",
            category: "INFRA-1",
            active: 8,
            withdrawn: 1,
            pending: 3,
            districts: [
                {
                    name: "Kamrup Metro",
                    count: 5,
                    value: 260,
                    active: 3,
                    withdrawn: 1,
                    pending: 1,
                    sample: "Guwahati Riverside Estate",
                    status: "Under Review",
                    cat: "INFRA-1",
                },
                {
                    name: "Dibrugarh",
                    count: 2,
                    value: 90,
                    active: 2,
                    withdrawn: 0,
                    pending: 0,
                    sample: "Dibrugarh Tea Belt Housing",
                    status: "Granted",
                    cat: "INFRA-1",
                },
            ],
        },
        {
            state: "Meghalaya",
            category: "INFRA-1",
            active: 3,
            withdrawn: 0,
            pending: 1,
            districts: [
                {
                    name: "East Khasi Hills",
                    count: 2,
                    value: 70,
                    active: 2,
                    withdrawn: 0,
                    pending: 0,
                    sample: "Shillong Hillside Homes",
                    status: "Granted",
                    cat: "INFRA-1",
                },
            ],
        },
    ],
};

const REGION_ORDER = [
    "North",
    "South",
    "East",
    "West",
    "Central",
    "Northeast",
];
let activeRegion = "South";

function fmtCr(n) {
    return n >= 1000 ? (n / 1000).toFixed(1) + "k" : n.toString();
}

function enrich(region) {
    const states = DATA[region].map((s, idx) => {
        const projects = s.active + s.withdrawn + s.pending;
        const value = s.districts.reduce((a, d) => a + d.value, 0);
        return { ...s, projects, value, idx };
    });
    const topProjects = Math.max(...states.map((s) => s.projects));
    const topValue = Math.max(...states.map((s) => s.value));
    states.forEach((s) => {
        s.badges = [];
        if (s.projects === topProjects)
            s.badges.push({ label: "Most projects", alt: false });
        if (s.value === topValue)
            s.badges.push({ label: "Highest value", alt: true });
    });
    return states.sort((a, b) => b.value - a.value);
}

function showView(id) {
    document
        .querySelectorAll(".view")
        .forEach((v) => v.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    window.scrollTo({ top: 0, behavior: "instant" });
}

function renderKPIs() {
    const allStates = REGION_ORDER.flatMap((r) => DATA[r]);
    const totalProjects = allStates.reduce(
        (a, s) => a + s.active + s.withdrawn + s.pending,
        0,
    );
    const totalValue = allStates.reduce(
        (a, s) => a + s.districts.reduce((x, d) => x + d.value, 0),
        0,
    );
    const totalDistricts = allStates.reduce(
        (a, s) => a + s.districts.length,
        0,
    );
    const kpis = [
        { label: "Total EC filings", value: totalProjects, unit: "" },
        {
            label: "Cumulative value",
            value: "₹" + fmtCr(totalValue),
            unit: "Cr",
        },
        { label: "States tracked", value: allStates.length, unit: "" },
        { label: "Districts tracked", value: totalDistricts, unit: "" },
    ];
    document.getElementById("kpiRow").innerHTML = kpis
        .map(
            (k) => `
    <div class="kpi">
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}<span class="unit">${k.unit}</span></div>
    </div>`,
        )
        .join("");
}

function renderTabs() {
    document.getElementById("regionTabs").innerHTML = REGION_ORDER.map(
        (r) => `
    <button class="region-tab ${r === activeRegion ? "active" : ""}" data-region="${r}">
      ${r} <span class="count">${DATA[r].length}</span>
    </button>`,
    ).join("");
    document.querySelectorAll(".region-tab").forEach((btn) => {
        btn.addEventListener("click", () => {
            activeRegion = btn.dataset.region;
            renderTabs();
            renderStates();
        });
    });
}

function renderStates() {
    document.getElementById("sectionTitle").textContent =
        `${activeRegion} India — states`;
    const states = enrich(activeRegion);
    document.getElementById("stateGrid").innerHTML = states
        .map((s) => {
            const total = s.projects;
            const pctA = ((s.active / total) * 100).toFixed(0);
            const pctW = ((s.withdrawn / total) * 100).toFixed(0);
            const pctP = 100 - pctA - pctW;
            return `
    <button class="entity-card" data-region="${activeRegion}" data-idx="${s.idx}">
      <div class="badge-row">
        ${s.badges.map((b) => `<span class="badge ${b.alt ? "alt" : ""}">${b.label}</span>`).join("")}
      </div>
      <h3>${s.state}</h3>
      <div class="entity-meta">Lead category · <b style="color:var(--gold)">${s.category}</b></div>

      <div class="stat-strip">
        <div class="s"><div class="n">${total}</div><div class="l">EC filings</div></div>
        <div class="s"><div class="n">₹${fmtCr(s.value)} Cr</div><div class="l">Cumulative value</div></div>
        <div class="s"><div class="n">${s.districts.length}</div><div class="l">Districts</div></div>
      </div>

      <div class="status-bar">
        <div class="seg-active" style="width:${pctA}%"></div>
        <div class="seg-withdrawn" style="width:${pctW}%"></div>
        <div class="seg-pending" style="width:${pctP}%"></div>
      </div>
      <div class="status-legend">
        <span><i style="background:var(--green)"></i>Active ${pctA}%</span>
        <span><i style="background:var(--red)"></i>Withdrawn ${pctW}%</span>
        <span><i style="background:var(--muted-2)"></i>Pending ${pctP}%</span>
      </div>

      <div class="card-link">
        View ${s.districts.length} districts
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </div>
    </button>`;
        })
        .join("");

    document.querySelectorAll("#stateGrid .entity-card").forEach((card) => {
        card.addEventListener("click", () => {
            openStatePage(card.dataset.region, Number(card.dataset.idx));
        });
    });
}

function openStatePage(region, idx) {
    const s = DATA[region][idx];
    const total = s.active + s.withdrawn + s.pending;
    const value = s.districts.reduce((a, d) => a + d.value, 0);
    const pctA = ((s.active / total) * 100).toFixed(0);
    const pctW = ((s.withdrawn / total) * 100).toFixed(0);

    document.getElementById("crumbRegion").textContent = "Analytics";
    document.getElementById("crumbRegionName").textContent =
        region + " India";
    document.getElementById("crumbState").textContent = s.state;
    document.getElementById("stateTitle").textContent = s.state;
    document.getElementById("stateLede").textContent =
        `${s.districts.length} districts on record in ${region} India, led by ${s.category} filings. ${pctA}% of EC filings here are currently active, ${pctW}% withdrawn.`;

    document.getElementById("stateKpiRow").innerHTML = [
        { label: "EC filings", value: total, unit: "" },
        { label: "Cumulative value", value: "₹" + fmtCr(value), unit: "Cr" },
        { label: "Districts", value: s.districts.length, unit: "" },
        { label: "Lead category", value: s.category, unit: "" },
    ]
        .map(
            (k) => `
    <div class="kpi">
      <div class="kpi-label">${k.label}</div>
      <div class="kpi-value">${k.value}<span class="unit">${k.unit}</span></div>
    </div>`,
        )
        .join("");

    document.getElementById("districtSectionTitle").textContent =
        `${s.state} — districts`;

    const maxDistrictValue = Math.max(...s.districts.map((x) => x.value));

    document.getElementById("districtGrid").innerHTML = s.districts
        .map((d, j) => {
            const dTotal = d.active + d.withdrawn + d.pending;
            const dPctA = ((d.active / dTotal) * 100).toFixed(0);
            const dPctW = ((d.withdrawn / dTotal) * 100).toFixed(0);
            const dPctP = 100 - dPctA - dPctW;
            return `
    <button class="entity-card district-card" data-didx="${j}">
      <div class="badge-row">
        ${d.value === maxDistrictValue ? '<span class="badge">Highest value</span>' : ""}
      </div>
      <h3>${d.name}</h3>
      <div class="entity-meta">${s.state} · <b style="color:var(--gold)">${d.cat}</b></div>

      <div class="stat-strip">
        <div class="s"><div class="n">${d.count}</div><div class="l">EC filings</div></div>
        <div class="s"><div class="n">₹${fmtCr(d.value)} Cr</div><div class="l">Cumulative value</div></div>
      </div>

      <div class="status-bar">
        <div class="seg-active" style="width:${dPctA}%"></div>
        <div class="seg-withdrawn" style="width:${dPctW}%"></div>
        <div class="seg-pending" style="width:${dPctP}%"></div>
      </div>
      <div class="status-legend">
        <span><i style="background:var(--green)"></i>Active ${dPctA}%</span>
        <span><i style="background:var(--red)"></i>Withdrawn ${dPctW}%</span>
      </div>

      <div class="card-link">
        View project spotlight
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
      </div>
    </button>`;
        })
        .join("");

    document
        .querySelectorAll("#districtGrid .entity-card")
        .forEach((card) => {
            card.addEventListener("click", () => {
                openModal(s, s.districts[Number(card.dataset.didx)]);
            });
        });

    showView("viewState");
}

document.getElementById("crumbRegion").addEventListener("click", (e) => {
    e.preventDefault();
    showView("viewRegion");
});
document
    .getElementById("crumbRegionName")
    .addEventListener("click", (e) => {
        e.preventDefault();
        showView("viewRegion");
    });

function openModal(state, district) {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modalCard');
    modal.innerHTML = `
    <button class="modal-close" id="modalClose" aria-label="Close">✕</button>

    <div class="lock-icon">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    </div>

    <div class="m-eyebrow">${district.name}, ${state.state}</div>
    <h3>Register to view projects</h3>
    <p class="m-note">
      If you want to visit or see projects in ${district.name}, please register for access.
    </p>

    <div class="m-actions">
      <a class="btn-gold" href="register.html">Register for access</a>
      <a class="link-plain" href="login.html">Already have an account? Log in</a>
    </div>
  `;
    overlay.classList.add('open');
    document.getElementById('modalClose').addEventListener('click', closeModal);
}

function closeModal() {
    document.getElementById("modalOverlay").classList.remove("open");
}

document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

document.getElementById("modalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "modalOverlay") closeModal();
});

renderKPIs();
renderTabs();
renderStates();