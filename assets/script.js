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
    const position = document.getElementById('position').value;
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
        <div class="relative group text-[#e9cc74] player-card" data-position="${position}">
            <button 
                class="delete-button absolute z-20 inset-0 m-auto w-[4vw] h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center transform hover:scale-110 cursor-pointer"
                onclick="deletePlayerCard('${position}')">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48">
                    <linearGradient id="wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#f44f5a"></stop>
                        <stop offset=".443" stop-color="#ee3d4a"></stop>
                        <stop offset="1" stop-color="#e52030"></stop>
                    </linearGradient>
                    <path fill="url(#wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                    <path d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414	c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414	c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414	C33.973,30.997,33.973,29.731,33.192,28.95z" opacity=".05"></path>
                    <path d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414	c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414	c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414	c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414	C33.425,30.839,33.425,29.889,32.839,29.303z" opacity=".07"></path>
                    <path fill="#fff" d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485	c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142	C30.047,15.124,30.681,15.124,31.071,15.515z"></path>
                    <path fill="#fff" d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343	c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142	C32.876,30.047,32.876,30.681,32.485,31.071z"></path>
                </svg>
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



// // Fetch data from the JSON file
// fetch('https://theshamkhi.github.io/FUTXpert/assets/data/data.json')
//     .then(response => response.json())
//     .then(data => {
//         const players = data.players; // Get players array
//         const playerSlider = document.getElementById('playerSlider');
        
//         players.forEach(player => {
//             let cardHTML = `
//                 <div class="relative w-[300px] h-[485px] bg-cover bg-center p-[2.5rem] z-10" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');">
                    
//                     <!-- Player Card Top -->
//                     <div class="flex relative text-[#e9cc74]">
//                         <div class="absolute text-left pt-[2rem] text-uppercase">
//                             <div class="text-2xl font-light">${player.rating}</div>
//                             <div class="text-xl font-light">${player.position}</div>
                            
//                             <div class="block w-[2rem] h-[25px] my-[0.3rem]">
//                                 <img class="w-full h-full object-contain" src="${player.flag}" alt="${player.nationality}">
//                             </div>
                            
//                             <div class="block w-[2.1rem] h-[40px]">
//                                 <img class="w-full h-full object-contain" src="${player.logo}" alt="${player.club}">
//                             </div>
//                         </div>
                        
//                         <div class="w-[220px] h-auto mx-auto overflow-hidden">
//                             <img class="w-full h-full object-contain relative bottom-0" src="${player.photo}" alt="${player.name}">
//                         </div>
//                     </div>
                
//                     <!-- Player Card Bottom -->
//                     <div class="relative">
//                         <div class="text-[#e9cc74] w-[90%] mx-auto py-[0.3rem_0]">
                            
//                             <div class="text-center text-xl uppercase border-b-2 border-[#e9cc74] py-[1rem]">
//                                 <span class="text-shadow">${player.name}</span>
//                             </div>
                
//                             <div class="flex justify-center my-[0.5rem]">`;

//             // Condition for goalkeepers
//             if (player.position === "GK") {
//                 cardHTML += `
//                     <div class="border-r-2 pr-[2.3rem]">
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.diving}</span><span class="font-light">DIV</span>
//                         </span>
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.handling}</span><span class="font-light">HAN</span>
//                         </span>
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.kicking}</span><span class="font-light">KIC</span>
//                         </span>
//                     </div>
//                     <div class="pl-[2.3rem]">
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.reflexes}</span><span class="font-light">REF</span>
//                         </span>
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.speed}</span><span class="font-light">SPD</span>
//                         </span>
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.positioning}</span><span class="font-light">POS</span>
//                         </span>
//                     </div>`;
//             } else {
//                 cardHTML += `
//                     <div class="border-r-2 pr-[2.3rem]">
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.pace}</span><span class="font-light">PAC</span>
//                         </span>
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.shooting}</span><span class="font-light">SHO</span>
//                         </span>
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.passing}</span><span class="font-light">PAS</span>
//                         </span>
//                     </div>
//                     <div class="pl-[2.3rem]">
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.dribbling}</span><span class="font-light">DRI</span>
//                         </span>
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.defending}</span><span class="font-light">DEF</span>
//                         </span>
//                         <span class="flex text-lg uppercase">
//                             <span class="font-bold mr-[0.3rem]">${player.physical}</span><span class="font-light">PHY</span>
//                         </span>
//                     </div>`;
//             }

//             cardHTML += `
//                             </div>
//                         </div>
//                     </div>
//                 </div>`;

//             // Append each card to the slider
//             playerSlider.innerHTML += cardHTML;
//         });
//     })
//     .catch(error => console.error('Error fetching player data:', error));
