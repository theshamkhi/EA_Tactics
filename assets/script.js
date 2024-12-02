document.addEventListener('DOMContentLoaded', () => {
    // Load saved players from localStorage
    const savedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    
    // Loop through the saved players and populate their cards
    savedPlayers.forEach(player => {
        populatePlayerCard(player);
    });
});

// Listen for form submission
document.getElementById('playerForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const playerData = {
        name: document.getElementById('name').value,
        photo: document.getElementById('photo').value,
        position: document.getElementById('position').value,
        nationality: document.getElementById('nationality').value,
        flag: document.getElementById('flag').value,
        club: document.getElementById('club').value,
        logo: document.getElementById('logo').value,
        rating: document.getElementById('rating').value,
        pace: document.getElementById('pace').value,
        shooting: document.getElementById('shooting').value,
        passing: document.getElementById('passing').value,
        dribbling: document.getElementById('dribbling').value,
        defending: document.getElementById('defending').value,
        physical: document.getElementById('physical').value,
        diving: document.getElementById('diving').value,
        handling: document.getElementById('handling').value,
        kicking: document.getElementById('kicking').value,
        reflexes: document.getElementById('reflexes').value,
        speed: document.getElementById('speed').value,
        positioning: document.getElementById('positioning').value,
    };

    // Update localStorage
    const savedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    const existingIndex = savedPlayers.findIndex(p => p.position === playerData.position);

    if (existingIndex !== -1) {
        // Update the existing player
        savedPlayers[existingIndex] = playerData;
    } else {
        // Add new player
        savedPlayers.push(playerData);
    }
    localStorage.setItem('players', JSON.stringify(savedPlayers));

    // Update the player card
    populatePlayerCard(playerData);

    // Close the modal and reset form
    CloseModal();
    e.target.reset();
});

  
// Function to populate a player card (updated with delete button)
function populatePlayerCard(player) {
    const { position, name, photo, nationality, flag, club, logo, rating, diving, handling, kicking, reflexes, speed, positioning, pace, shooting, passing, dribbling, defending, physical } = player;

    if (!position) {
        console.error('Invalid position:', position);
        return;
    }

    const positionCard = document.querySelector(`.players .${position}`);

    if (!positionCard) {
        console.error('Position card not found for position:', position);
        return;
    }

    let cardHTML = `
        <!-- Player Card Top -->
        <div class="relative group text-[#e9cc74] player-card" data-position="${position}">
        <div class="relative group text-[#e9cc74] player-card" data-position="${position}">
            <button 
                class="modify-button text-xl absolute z-20 top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                onclick="modifyPlayer('${position}')">
                ✎
            </button>
            <button 
                class="delete-button text-xl absolute z-20 top-16 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                onclick="deletePlayerCard('${position}')">
                🗑️
            </button>

            <div class="PlayerData absolute text-left pt-[2rem] text-uppercase">
                <div class="text-xl font-bold">${rating}</div>
                <div class="text-xl font-bold">${position}</div>
                <div class="block w-[1.7rem] h-auto my-[0.3rem]">
                    <img class="w-full h-full object-contain" src="${flag}" alt="${nationality}">
                </div>
                <div class="block w-[1.7rem] h-auto">
                    <img class="w-full h-full object-contain" src="${logo}" alt="${club}">
                </div>
            </div>
            <div class="PlayerImg w-[9.4vw] h-auto mx-auto overflow-hidden">
                <img class="w-full h-full object-contain relative bottom-0" src="${photo}" alt="${name}">
            </div>
        </div>
        <!-- Player Card Bottom -->
        <div class="relative">
            <div class="text-[#e9cc74] w-[90%] mx-auto py-[0.3rem]">
                <div class="PlayerName text-center text-base font-bold uppercase py-[0.3rem] leading-none">
                    <span class="text-shadow">${name}</span>
                </div>
                <div class="PlayerData flex justify-center py-[0.5rem]">`;

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
        Add9: "ST",
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
    const position = positionMap[positionId] || positionId;

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
    // Reset all input fields in the modal
    document.querySelectorAll("#Modal input").forEach(input => {
        input.value = "";
    });
    document.getElementById("Modal").classList.add("hidden");
}


// Fetch player data from the external JSON file
async function fetchPlayerData() {
    try {
        const response = await fetch('https://theshamkhi.github.io/FUTXpert/assets/data/data.json');
        const data = await response.json();
        return data.players;  // Assuming the data has a `players` array
    } catch (error) {
        console.error('Error fetching player data:', error);
        return [];
    }
}

// Function to autofill the form when the player name is entered
async function autofillForm(playerName) {
    const playersData = await fetchPlayerData();  // Fetch data when the function is called
    const player = playersData.find(p => p.name.toLowerCase() === playerName.toLowerCase());
    
    if (player) {
        // Autofill the form fields with player data
        document.getElementById('photo').value = player.photo;
        document.getElementById('position').value = player.position;
        document.getElementById('nationality').value = player.nationality;
        document.getElementById('flag').value = player.flag;
        document.getElementById('club').value = player.club;
        document.getElementById('logo').value = player.logo;
        document.getElementById('rating').value = player.rating;
        document.getElementById('pace').value = player.pace;
        document.getElementById('shooting').value = player.shooting;
        document.getElementById('passing').value = player.passing;
        document.getElementById('dribbling').value = player.dribbling;
        document.getElementById('defending').value = player.defending;
        document.getElementById('physical').value = player.physical;
        document.getElementById('diving').value = player.diving;
        document.getElementById('handling').value = player.handling;
        document.getElementById('kicking').value = player.kicking;
        document.getElementById('reflexes').value = player.reflexes;
        document.getElementById('speed').value = player.speed;
        document.getElementById('positioning').value = player.positioning;
    }
}

// Example: Add an event listener to the input field where the user enters the player name
document.getElementById('name').addEventListener('input', function () {
    const playerName = this.value.trim();
    
    if (playerName) {
        autofillForm(playerName);
    }
});

function modifyPlayer(position) {
    const savedPlayers = JSON.parse(localStorage.getItem('players')) || [];
    const player = savedPlayers.find(p => p.position === position);

    if (player) {
        // Pre-fill the form with existing player data
        document.getElementById('name').value = player.name;
        document.getElementById('photo').value = player.photo;
        document.getElementById('position').value = player.position;
        document.getElementById('nationality').value = player.nationality;
        document.getElementById('flag').value = player.flag;
        document.getElementById('club').value = player.club;
        document.getElementById('logo').value = player.logo;
        document.getElementById('rating').value = player.rating;
        document.getElementById('pace').value = player.pace;
        document.getElementById('shooting').value = player.shooting;
        document.getElementById('passing').value = player.passing;
        document.getElementById('dribbling').value = player.dribbling;
        document.getElementById('defending').value = player.defending;
        document.getElementById('physical').value = player.physical;
        document.getElementById('diving').value = player.diving;
        document.getElementById('handling').value = player.handling;
        document.getElementById('kicking').value = player.kicking;
        document.getElementById('reflexes').value = player.reflexes;
        document.getElementById('speed').value = player.speed;
        document.getElementById('positioning').value = player.positioning;

        // Open the modal
        OpenModal(player.position);
    }
}



// // Fetch data from the JSON file
const savedPlayers = JSON.parse(localStorage.getItem('players')) || []; // players on localStorage

// Fetch player data
fetch('https://theshamkhi.github.io/FUTXpert/assets/data/data.json')
    .then(response => response.json())
    .then(data => {
        const players = data.players; // Get players array
        const playerSlider = document.getElementById('playerSlider');

        // Filter players that are not in localStorage based on player name
        const playersNotInLocalStorage = players.filter(player => {
            return !savedPlayers.some(savedPlayer => savedPlayer.name === player.name);
        });

        // Loop through and create player cards for players not in localStorage
        playersNotInLocalStorage.forEach(player => {
            let cardHTML = `
                <div class="relative w-[300px] h-[485px] bg-cover bg-center p-[2.5rem] z-10" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');">
                    
                    <!-- Player Card Top -->
                    <div class="flex relative text-[#e9cc74]">
                        <div class="absolute text-left pt-[2rem] text-uppercase">
                            <div class="text-2xl font-light">${player.rating}</div>
                            <div class="text-xl font-light">${player.position}</div>
                            
                            <div class="block w-[2rem] h-[25px] my-[0.3rem]">
                                <img class="w-full h-full object-contain" src="${player.flag}" alt="${player.nationality}">
                            </div>
                            
                            <div class="block w-[2.1rem] h-[40px]">
                                <img class="w-full h-full object-contain" src="${player.logo}" alt="${player.club}">
                            </div>
                        </div>
                        
                        <div class="w-[220px] h-auto mx-auto overflow-hidden">
                            <img class="w-full h-full object-contain relative bottom-0" src="${player.photo}" alt="${player.name}">
                        </div>
                    </div>
                
                    <!-- Player Card Bottom -->
                    <div class="relative">
                        <div class="text-[#e9cc74] w-[90%] mx-auto py-[0.3rem_0]">
                            
                            <div class="text-center text-xl uppercase border-b-2 border-[#e9cc74] py-[1rem]">
                                <span class="text-shadow">${player.name}</span>
                            </div>
                
                            <div class="flex justify-center my-[0.5rem]">`;

            // Condition for goalkeepers
            if (player.position === "GK") {
                cardHTML += ` 
                    <div class="border-r-2 pr-[2.3rem]">
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.diving}</span><span class="font-light">DIV</span>
                        </span>
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.handling}</span><span class="font-light">HAN</span>
                        </span>
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.kicking}</span><span class="font-light">KIC</span>
                        </span>
                    </div>
                    <div class="pl-[2.3rem]">
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.reflexes}</span><span class="font-light">REF</span>
                        </span>
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.speed}</span><span class="font-light">SPD</span>
                        </span>
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.positioning}</span><span class="font-light">POS</span>
                        </span>
                    </div>`;
            } else {
                cardHTML += ` 
                    <div class="border-r-2 pr-[2.3rem]">
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.pace}</span><span class="font-light">PAC</span>
                        </span>
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.shooting}</span><span class="font-light">SHO</span>
                        </span>
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.passing}</span><span class="font-light">PAS</span>
                        </span>
                    </div>
                    <div class="pl-[2.3rem]">
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.dribbling}</span><span class="font-light">DRI</span>
                        </span>
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.defending}</span><span class="font-light">DEF</span>
                        </span>
                        <span class="flex text-lg uppercase">
                            <span class="font-bold mr-[0.3rem]">${player.physical}</span><span class="font-light">PHY</span>
                        </span>
                    </div>`;
            }

            cardHTML += `
                            </div>
                        </div>
                    </div>
                </div>`;

            // Append each card to the slider
            playerSlider.innerHTML += cardHTML;
        });
    })
    .catch(error => console.error('Error fetching player data:', error));

