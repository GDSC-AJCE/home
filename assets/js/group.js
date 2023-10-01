const payload = {
    secret: "gdscajce123"
}

const JSONpayload = JSON.stringify(payload)

const urlGroup = 'https://shy-fawn-fatigues.cyclic.app/group-scores';
const groupData = []


const rankingsBody = document.querySelector("#rankings > tbody");

function loadRankings () {
    const request = new XMLHttpRequest();

    request.open("post", urlGroup);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    const requestBody = JSON.stringify(payload);
    
    request.onload = () => {
        try {
            const json = JSON.parse(request.responseText);
            console.log(json);
            populateRankings(json);
        } catch (e) {
            console.warn("Could not load Group Rankings! :(", e);
        }
    };

    request.send(requestBody);
}


function populateRankings(json) {
    json.forEach((player, playerIndex) => {
        const tr = document.createElement("tr");

        const properties = ['index', 'group', 'score'];

        properties.forEach((property, propertyIndex) => {
            const td = document.createElement("td");
            if (property === 'index') {
                td.textContent = playerIndex + 1;
            }else{
                td.textContent = (player[property] !== undefined && player[property] !== null) ? player[property] : '-';
            }
            tr.appendChild(td);
        });

        rankingsBody.appendChild(tr);
    });
    const loading = document.getElementById('bar');
    loading.classList.add('d-none');
}


document.addEventListener("DOMContentLoaded", () => { loadRankings (); });

function performSearch() {
    var value = document.getElementById('search-leaderboard').value.toLowerCase();

    $("table").find("tr").each(function(index) {
        if (index === 0) return;

        var if_td_has = false;
        $(this).find('td').each(function () {
            if_td_has = if_td_has || $(this).text().toLowerCase().indexOf(value) !== -1;
        });

        $(this).toggle(if_td_has);
    });
}

$("#search-leaderboard").keyup(performSearch);

document.getElementById('clear-search').addEventListener('click', function() {
    document.getElementById('search-leaderboard').value = '';
    performSearch();
});


