// Empty card template data
const positions = [
    { id: "Add7", position: "LStriker" },
    { id: "Add9", position: "MStriker" },
    { id: "Add11", position: "RStriker" },
    { id: "Add6", position: "LeftM" },
    { id: "Add10", position: "MiddleM" },
    { id: "Add8", position: "RightM" },
    { id: "Add3", position: "LDefense" },
    { id: "Add5", position: "M1Defense" },
    { id: "Add4", position: "M2Defense" },
    { id: "Add2", position: "RDefense" },
    { id: "Add0", position: "Goal" }
  ];
  
  // Function to create an empty player card
  function generateEmptyPlayerCard(position) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add(position.position);
    cardDiv.setAttribute('data-id', position.id);
  
    // Empty Card HTML structure
    cardDiv.innerHTML = `
        <div class="absolute w-[12vw] h-[20vw] bg-contain bg-no-repeat bg-center p-[1rem] z-10 rounded-md shadow-lg relative" style="background-image: url('https://selimdoyranli.com/cdn/fut-player-card/img/card_bg.png');">
            <!-- Player Card Top Section -->
            <div class="relative text-[#e9cc74] hidden">
            <!-- Player Info -->
            <div class="absolute left-[0.6rem] top-[1.2rem]">
                <div class="text-lg font-bold leading-none">N/A</div>
                <div class="text-sm uppercase font-light">Position: ${position.position}</div>
                <div class="mt-[0.3rem]">
                <img class="w-[1.5rem] h-[1rem] object-contain" src="" alt="N/A">
                </div>
                <div class="mt-[0.3rem]">
                <img class="w-[1.5rem] h-[1.5rem] object-contain" src="" alt="N/A">
                </div>
            </div>
            <!-- Player Image -->
            <div class="w-[6rem] h-auto mx-auto overflow-hidden relative bottom-[-0.8rem]">
                <img class="w-full h-full object-contain" src="" alt="N/A">
            </div>
            </div>
    
            <!-- Player Card Bottom Section -->
            <div class="relative text-[#e9cc74] text-sm mt-[0.5rem] px-[0.5rem] hidden">
            <div class="text-center text-base uppercase font-bold border-b-[1px] border-[#e9cc74] pb-[0.5rem]">
                Player Name
            </div>
            <div class="flex justify-between mt-[0.5rem]">
                <div class="flex flex-col items-end pr-[0.3rem] border-r-[1px] border-[#e9cc74]">
                <div><span class="font-bold">N/A</span> PAC</div>
                <div><span class="font-bold">N/A</span> SHO</div>
                <div><span class="font-bold">N/A</span> PAS</div>
                </div>
                <div class="flex flex-col items-start pl-[0.3rem]">
                <div><span class="font-bold">N/A</span> DRI</div>
                <div><span class="font-bold">N/A</span> DEF</div>
                <div><span class="font-bold">N/A</span> PHY</div>
                </div>
            </div>
            </div>
        </div>
        <img src="assets/media/add.png" alt="Add" id="${position.id}" onclick="OpenModal('${position.id}')" class="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[4vw] h-auto cursor-pointer transition-transform duration-200 hover:scale-110">
    `;
  
    return cardDiv;
  }
  
  // Function to display empty player cards
  function displayEmptyCards() {
    const playersContainer = document.getElementById('playersContainer');
    positions.forEach(position => {
      const playerCard = generateEmptyPlayerCard(position);
      playersContainer.appendChild(playerCard);
    });
  }
  
  // Call the function to display empty cards when the page loads
  window.onload = displayEmptyCards;
  


// Function to open the modal
function OpenModal(id) {
    const modal = document.getElementById('Modal');
    modal.classList.remove('hidden');
}

// Function to close the modal
function CloseModal() {
    const modal = document.getElementById('Modal');
    modal.classList.add('hidden');
}
