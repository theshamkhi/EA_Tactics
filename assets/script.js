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
  
  // Function to populate a player card
  function populatePlayerCard(player) {
    const { position, name, photo, nationality, flag, club, logo, rating } = player;
    const positionCard = document.querySelector(`.players .${position}`);
  
    if (!positionCard) return;
  
    positionCard.innerHTML = `
      <img src="${photo}" alt="${name}" style="width: 40px; height: 40px; border-radius: 50%;">
      <p>${name}</p>
      <p>Rating: ${rating}</p>
      <img src="${flag}" alt="${nationality}" style="width: 20px;" title="${nationality}">
      <img src="${logo}" alt="${club}" style="width: 30px;" title="${club}">
    `;
    positionCard.classList.add('filled');
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

    // Show the modal
    document.getElementById("Modal").classList.remove("hidden");
}

// Close Modal
function CloseModal() {
    // Clear the position field and hide the modal
    document.getElementById("position").value = "";
    document.getElementById("Modal").classList.add("hidden");
}
