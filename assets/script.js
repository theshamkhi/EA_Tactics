// Fetch data from the JSON file and display player cards
fetch('https://theshamkhi.github.io/FUTXpert/assets/data/data.json')
    .then(response => response.json())
    .then(data => {
        const players = data.players; // Get players array
        const playerSlider = document.getElementById('playerSlider');
        
        players.forEach(player => {
            // Create a player card HTML structure
            const cardHTML = `
                <div class="relative w-[300px] h-[485px] bg-cover bg-center p-[2.5rem] z-10" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');">
                    
                    <!-- Player Card Top -->
                    <div class="flex relative text-[#e9cc74]">
                        <div class="absolute text-left pt-[2rem] text-uppercase">
                            <div class="text-2xl font-light">${player.rating}</div> <!-- Rating -->
                            <div class="text-xl font-light">${player.position}</div> <!-- Position -->
                            
                            <!-- Flag -->
                            <div class="block w-[2rem] h-[25px] my-[0.3rem]">
                                <img class="w-full h-full object-contain" src="${player.flag}" alt="${player.nationality}">
                            </div>
                            
                            <!-- Club Logo -->
                            <div class="block w-[2.1rem] h-[40px]">
                                <img class="w-full h-full object-contain" src="${player.logo}" alt="${player.club}">
                            </div>
                        </div>
                        
                        <!-- Player Picture -->
                        <div class="w-[220px] h-auto mx-auto overflow-hidden">
                            <img class="w-full h-full object-contain relative bottom-0" src="${player.photo}" alt="${player.name}">
                        </div>
                    </div>
                
                    <!-- Player Card Bottom -->
                    <div class="relative">
                        <div class="text-[#e9cc74] w-[90%] mx-auto py-[0.3rem_0]">
                            
                            <!-- Player Name -->
                            <div class="text-center text-xl uppercase border-b-2 border-[#e9cc74] py-[1rem]">
                                <span class="text-shadow">${player.name}</span>
                            </div>
                
                            <!-- Player Features -->
                            <div class="flex justify-center my-[0.5rem]">
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
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>
            `;
            // Append each generated card to the slider container
            playerSlider.innerHTML += cardHTML;
        });
    })
    .catch(error => console.error('Error fetching player data:', error));

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
