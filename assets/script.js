document.addEventListener('DOMContentLoaded', () => {
    // Load saved players from localStorage on page load
    const savedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    savedPlayers.forEach((player) => populatePlayerCard(player));
});

// Listen for form submission
document.getElementById('playerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const photo = document.getElementById('photo').value;
    const position = document.getElementById('position').value.toUpperCase();
    const nationality = document.getElementById('nationality').value;
    const flag = document.getElementById('flag').value;
    const club = document.getElementById('club').value;
    const logo = document.getElementById('logo').value;
    const rating = document.getElementById('rating').value;
    const pace = document.getElementById('pace').value;
    const shooting = document.getElementById('shooting').value;
    const passing = document.getElementById('passing').value;
    const dribbling = document.getElementById('dribbling').value;
    const defending = document.getElementById('defending').value;
    const physical = document.getElementById('physical').value;
    const diving = document.getElementById('diving').value;
    const handling = document.getElementById('handling').value;
    const kicking = document.getElementById('kicking').value;
    const reflexes = document.getElementById('reflexes').value;
    const speed = document.getElementById('speed').value;
    const positioning = document.getElementById('positioning').value;

    // Validate position
    const positionCard = document.querySelector(`.players .${position}`);
    if (!positionCard || positionCard.classList.contains('filled')) {
    alert('Invalid position or position already filled!');
    return;
    }

    // Player object
    const player = {
    name,
    photo,
    position,
    nationality,
    flag,
    club,
    logo,
    rating,
    pace,
    shooting,
    passing,
    dribbling,
    defending,
    physical,
    diving,
    handling,
    kicking,
    reflexes,
    speed,
    positioning, 
    };

    // Populate player card
    populatePlayerCard(player);

    // Save to localStorage
    savePlayerToLocalStorage(player);

    // Close the modal after saving the data
    CloseModal();

    // Reset form
    e.target.reset();
});
  
// Function to populate a player card (updated with delete button)
function populatePlayerCard(player) {
    const { position, name, photo, 
            nationality, flag, club, logo, rating, 
            diving, handling, kicking, reflexes, speed, positioning, 
            pace, shooting, passing, dribbling, defending, physical } = player;

    const positionCard = document.querySelector(`.players .${position}`);

    if (!positionCard) return;

    let cardHTML = `
        <!-- Player Card Top -->
        <div class="flex relative text-[#e9cc74] player-card" data-position="${position}">
            <div class="absolute top-0 right-0">
                <button class="delete-button text-red-800" onclick="deletePlayerCard('${position}')">X</button>
            </div>
            <div class="absolute text-left pt-[2rem] text-uppercase">
                <div class="text-xl font-bold">${rating}</div>
                <div class="text-xl font-bold">${position}</div>
                <div class="block w-[1.7rem] h-auto my-[0.3rem]">
                    <img class="w-full h-full object-contain" src="${flag}" alt="${nationality}">
                </div>
                <div class="block w-[1.7rem] h-auto">
                    <img class="w-full h-full object-contain" src="${logo}" alt="${club}">
                </div>
            </div>
            <div class="w-[9.4vw] h-auto mx-auto overflow-hidden">
                <img class="w-full h-full object-contain relative bottom-0" src="${photo}" alt="${name}">
            </div>
        </div>
        <!-- Player Card Bottom -->
        <div class="relative">
            <div class="text-[#e9cc74] w-[90%] mx-auto py-[0.3rem_0]">
                <div class="text-center text-sm font-bold uppercase border-b-2 border-[#e9cc74] py-[0.4rem]">
                    <span class="text-shadow">${name}</span>
                </div>
                <div class="flex justify-center my-[0.5rem]">`;

    // Add goalkeeper or field player stats
    if (position === "GK") {
        cardHTML += `
            <div class="border-r-2 border-[#e9cc74] pr-[1.5rem]">
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${diving}</span><span class="font-light">DIV</span>
                </span>
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${handling}</span><span class="font-light">HAN</span>
                </span>
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${kicking}</span><span class="font-light">KIC</span>
                </span>
            </div>
            <div class="pl-[1.5rem]">
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${reflexes}</span><span class="font-light">REF</span>
                </span>
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${speed}</span><span class="font-light">SPD</span>
                </span>
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${positioning}</span><span class="font-light">POS</span>
                </span>
            </div>`;
    } else {
        cardHTML += `
            <div class="border-r-2 border-[#e9cc74] pr-[1.5rem]">
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${pace}</span><span class="font-light">PAC</span>
                </span>
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${shooting}</span><span class="font-light">SHO</span>
                </span>
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${passing}</span><span class="font-light">PAS</span>
                </span>
            </div>
            <div class="pl-[1.5rem]">
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${dribbling}</span><span class="font-light">DRI</span>
                </span>
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${defending}</span><span class="font-light">DEF</span>
                </span>
                <span class="flex text-xs uppercase">
                    <span class="font-bold mr-[0.3rem]">${physical}</span><span class="font-light">PHY</span>
                </span>
            </div>`;
    }

    cardHTML += `
                </div>
            </div>
        </div>
    `;

    positionCard.innerHTML = cardHTML;

    positionCard.classList.add('filled');
}

// Function to delete a player card
function deletePlayerCard(position) {
    const positionCard = document.querySelector(`.players .${position}`);
    if (!positionCard) return;

    // Remove card content
    positionCard.innerHTML = '';
    positionCard.classList.remove('filled');

    // Update localStorage
    const savedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    const updatedPlayers = savedPlayers.filter((player) => player.position !== position);
    localStorage.setItem('players', JSON.stringify(updatedPlayers));
}

  
// Function to save player data to localStorage
function savePlayerToLocalStorage(player) {
    const savedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    savedPlayers.push(player);
    localStorage.setItem('players', JSON.stringify(savedPlayers));
}

// Open Modal and Prefill Position
function OpenModal(positionId) {
    // Map position IDs to actual position names
    const positionMap = {
        Add9: "CF",
        Add11: "RW",
        Add7: "LW",
        Add10: "CM",
        Add8: "RM",
        Add6: "LM",
        Add5: "CB1",
        Add4: "CB2",
        Add2: "RB",
        Add3: "LB",
        Add0: "GK",
    };

    // Get the position name
    const position = positionMap[positionId] || "";

    // Prefill the position input
    document.getElementById("position").value = position;

    // Show specific attributes for goalkeepers
    if (position === "GK") {
        document.getElementById("goalkeeperAttributes").classList.remove("hidden");
        document.getElementById("fieldPlayerAttributes").classList.add("hidden");
    } else {
        document.getElementById("goalkeeperAttributes").classList.add("hidden");
        document.getElementById("fieldPlayerAttributes").classList.remove("hidden");
    }

    // Show the modal
    document.getElementById("Modal").classList.remove("hidden");
}

// Close Modal
function CloseModal() {
    // Clear the position field and hide the modal
    document.getElementById("position").value = "";
    document.getElementById("Modal").classList.add("hidden");
}

