// Overlay toggle functionality
const addButtons = document.querySelectorAll('[id^="Add"]');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeOverlay');

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        overlay.classList.remove('hidden');
    });
});

closeButton.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

// Modal toggle functionality
function OpenModal() {
    document.getElementById("Modal").classList.remove("hidden");
}
  
function CloseModal() {
    document.getElementById("Modal").classList.add("hidden");
}

// Fetch data from the JSON file
fetch('https://theshamkhi.github.io/FUTXpert/assets/data/data.json')
    .then(response => response.json())
    .then(data => {
        const players = data.players; // Get players array
        const playerSlider = document.getElementById('playerSlider');
        
        players.forEach(player => {
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


// Handle form submission
const playerForm = document.getElementById('playerForm');

playerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Extract form values
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
    const chosen = document.getElementById('LStriker');

    chosen.innerHTML = `
        <div class="absolute w-[12vw] h-auto bg-cover top-[25%] left-[19%] bg-center p-[2.5rem] z-10" 
            style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');">
            <!-- Top Section -->
            <div class="flex flex-col items-center text-[#e9cc74] relative">
                <!-- Rating and Position -->
                <div class="absolute top-0 left-0 text-left">
                    <div class="text-2xl font-light">${rating}</div>
                    <div class="text-xl font-light">${position}</div>
                    <div class="w-[2rem] h-[25px] my-[0.3rem]">
                        <img class="w-full h-full object-contain" src="${flag}" alt="${nationality}">
                    </div>
                    <div class="w-[2.1rem] h-[40px]">
                        <img class="w-full h-full object-contain" src="${logo}" alt="${club}">
                    </div>
                </div>
                <!-- Player Photo -->
                <div class="relative w-[80%] h-auto mx-auto overflow-hidden z-10">
                    <img class="w-full h-full object-contain" src="${photo}" alt="${name}">
                </div>
            </div>
            <!-- Name Section -->
            <div class="text-[#e9cc74] w-[90%] mx-auto mt-[1rem]">
                <div class="text-center text-xl uppercase border-b-2 border-[#e9cc74] py-[1rem]">
                    <span class="text-shadow">${name}</span>
                </div>
            </div>
            <!-- Stats Section -->
            <div class="flex justify-between w-[90%] mx-auto mt-[0.5rem] text-[#e9cc74]">
                <!-- Left Stats -->
                <div class="flex flex-col items-end pr-[1rem] border-r-2 border-[#e9cc74]">
                    <span class="flex text-lg uppercase">
                        <span class="font-bold mr-[0.3rem]">${pace}</span><span class="font-light">PAC</span>
                    </span>
                    <span class="flex text-lg uppercase">
                        <span class="font-bold mr-[0.3rem]">${shooting}</span><span class="font-light">SHO</span>
                    </span>
                    <span class="flex text-lg uppercase">
                        <span class="font-bold mr-[0.3rem]">${passing}</span><span class="font-light">PAS</span>
                    </span>
                </div>
                <!-- Right Stats -->
                <div class="flex flex-col items-start pl-[1rem]">
                    <span class="flex text-lg uppercase">
                        <span class="font-bold mr-[0.3rem]">${dribbling}</span><span class="font-light">DRI</span>
                    </span>
                    <span class="flex text-lg uppercase">
                        <span class="font-bold mr-[0.3rem]">${defending}</span><span class="font-light">DEF</span>
                    </span>
                    <span class="flex text-lg uppercase">
                        <span class="font-bold mr-[0.3rem]">${physical}</span><span class="font-light">PHY</span>
                    </span>
                </div>
            </div>
        </div>

    `;

    // Append card to the stadium
    // const stadium = document.querySelector('.players');
    // const addButton = document.getElementById('LStriker');

    //stadium.insertBefore(document.createRange().createContextualFragment(cardHTML), addButton);

    CloseModal();

    playerForm.reset();
});
