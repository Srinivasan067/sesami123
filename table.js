const rfqs = [
    { company: "Mandai Park Development Pte Ltd*", type: "Tender", refNo: "WRS-ACRFW-T24-10-00629", description: "Installation of cladding for RFW Flex 3 Habitat Perimeter Fence", startingDate: "04 Oct 2024 14:00:00", closingDate: "21 Oct 2024 16:00:00", submission: "Electronic" },
    { company: "Mandai Park Development Pte Ltd*", type: "Tender", refNo: "WRS-ACRFW-T24-10-00629", description: "Installation of cladding for RFW Flex 3 Habitat Perimeter Fence", startingDate: "04 Oct 2024 14:00:00", closingDate: "21 Oct 2024 16:00:00", submission: "Electronic" },
    { company: "WORLD AQUATICS CHAMPIONSHIPS SINGAPORE PTE. LTD.", type: "Tender", refNo: "WAC/TN/0000000008", description: "Full Design & Build of Temporary WCH Arena and Other Supporting Infrastructure for Hosting of WAC25 and WAMC25", startingDate: "04 Oct 2024 12:00:00", closingDate: "24 Oct 2024 12:00:00", submission: "Electronic" },
    { company: "CAG", type: "RFQ", refNo: "2024/00833", description: "Supply, delivery and laying of precast concrete slabs at Changi Airport Terminal 3 Baggage Claim Hall", startingDate: "04 Oct 2024 10:00:00", closingDate: "25 Oct 2024 12:00:00", submission: "Electronic" },
    { company: "CAG", type: "Tender", refNo: "2024/00824", description: "SITE-WIDE MAINTENANCE FOR CHANGI EAST DEVELOPMENT", startingDate: "04 Oct 2024 09:00:00", closingDate: "25 Oct 2024 16:00:00", submission: "Electronic" },
    { company: "CAG", type: "Tender", refNo: "2024/00824", description: "SITE-WIDE MAINTENANCE FOR CHANGI EAST DEVELOPMENT", startingDate: "04 Oct 2024 09:00:00", closingDate: "25 Oct 2024 16:00:00", submission: "Electronic" },
    { company: "TUAS POWER GENERATION PTE. LTD.", type: "Tender", refNo: "0040007783", description: "THE PROVISION OF STATUTORY INSPECTION AND LOAD TESTING OF LIFTING GEARS, LIFTING APPLIANCES AND LIFTING MACHINES AT TUAS POWER STATION STAGES I, II & CCP5 FOR A PERIOD OF THREE (3) YEARS", startingDate: "04 Oct 2024 00:00:00", closingDate: "29 Nov 2024 11:00:00", submission: "Electronic" },
    { company: "TUAS POWER GENERATION PTE. LTD.", type: "Tender", refNo: "0040007772", description: "THE PROVISION OF SEAWATER INTAKE LINE FIBREGLASS REINFORCED PLASTIC (FRP) COATING REPAIR AT TUAS POWER STATION", startingDate: "04 Oct 2024 00:00:00", closingDate: "01 Nov 2024 11:00:00", submission: "Electronic" },
    { company: "TUAS POWER GENERATION PTE. LTD.", type: "Tender", refNo: "0040007769", description: "RENEWAL OF ADOBE ACROBAT PRO LICENSES FOR TUAS POWER", startingDate: "04 Oct 2024 00:00:00", closingDate: "25 Oct 2024 11:00:00", submission: "Electronic" },
    { company: "TUAS POWER GENERATION PTE. LTD.", type: "Tender", refNo: "0040007780", description: "THE TESTING OF DIESEL OIL FOR TUAS POWER STATION FOR A PERIOD OF TWELVE (12) MONTHS", startingDate: "04 Oct 2024 00:00:00", closingDate: "25 Oct 2024 11:00:00", submission: "Electronic" }
];

let currentPage = 1;
const rowsPerPage = 5;

function displayTable() {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedRfqs = rfqs.slice(startIndex, endIndex);

    const tableBody = document.getElementById("rfqTableBody");
    tableBody.innerHTML = "";

    paginatedRfqs.forEach((rfq, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${rfq.company}</td>
            <td>${rfq.type}</td>
            <td>${rfq.refNo}</td>
            <td>${rfq.description}</td>
            <td>${rfq.startingDate}</td>
            <td>${rfq.closingDate}</td>
            <td>${rfq.submission}</td>
            <td><button class="view-btn" data-id="${startIndex + index}">View</button></td>
        `;
        tableBody.appendChild(row);
    });

    document.getElementById("pageInfo").innerText = `Page ${currentPage} of ${Math.ceil(rfqs.length / rowsPerPage)}`;
    document.getElementById("prevPage").disabled = currentPage === 1;
    document.getElementById("nextPage").disabled = currentPage === Math.ceil(rfqs.length / rowsPerPage);
}

function openPopup(id) {
    const rfq = rfqs[id];
    const popupDetails = document.getElementById("popupDetails");
    popupDetails.innerHTML = `
        <p><strong>Buyer Company:</strong> ${rfq.company}</p>
        <p><strong>Type:</strong> ${rfq.type}</p>
        <p><strong>RFQ Ref. No:</strong> ${rfq.refNo}</p>
        <p><strong>Description:</strong> ${rfq.description}</p>
        <p><strong>Starting Date:</strong> ${rfq.startingDate}</p>
        <p><strong>Closing Date:</strong> ${rfq.closingDate}</p>
        <p><strong>Submission:</strong> ${rfq.submission}</p>
        <hr>
        <p>Some Request to Participate may be subject to buyer's approval. SWC reserves the rights to invite additional suppliers to submit a quote.</p>
        <p>To participate in the RFQ/Tender, please login or register now to <a href="https://swc-portal.example.com" target="_blank">SWC Portal</a> or <a href="https://sesami-portal.example.com" target="_blank">SESAMi World Connect Portal</a>.</p>
        <p><strong>To Login:</strong></p>
        <p><a href="https://swc-portal.example.com/login" target="_blank">Click here to Login to SWC E-Procurement Portal</a></p>
        <p><a href="https://sesami-portal.example.com/login" target="_blank">Click here to Login to SESAMi World Connect Portal E-Procurement Portal</a></p>
        <p><strong>Register:</strong></p>
        <p><a href="https://swc-portal.example.com/register" target="_blank">Click here to register to SWC E-Procurement Portal</a></p>
        <p><a href="https://sesami-portal.example.com/register" target="_blank">Click here to Register to SESAMi World Connect Portal E-Procurement Portal</a></p>
    `;
    document.getElementById("popupModal").style.display = "block";
}

// Event listeners
document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayTable();
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage < Math.ceil(rfqs.length / rowsPerPage)) {
        currentPage++;
        displayTable();
    }
});

document.getElementById("rfqTableBody").addEventListener("click", (event) => {
    if (event.target.classList.contains("view-btn")) {
        const id = event.target.getAttribute("data-id");
        openPopup(id);
    }
});

document.querySelector(".close").onclick = function() {
    document.getElementById("popupModal").style.display = "none";
};

window.onclick = function(event) {
    if (event.target == document.getElementById("popupModal")) {
        document.getElementById("popupModal").style.display = "none";
    }
};

displayTable();
