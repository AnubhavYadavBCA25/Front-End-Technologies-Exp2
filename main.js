const updateBtn = document.getElementById('updateBtn');
const nameInput = document.getElementById('nameInput');
const bioInput = document.getElementById('bioInput');

const userName = document.getElementById('userName');
const userBio = document.getElementById('userBio');
const statusMessage = document.getElementById('statusMessage');

updateBtn.addEventListener('click', () => {
    let updated = false;

    if (nameInput.value.trim() !== "") {
        userName.textContent = nameInput.value;
        updated = true;
    }
    if (bioInput.value.trim() !== "") {
        userBio.textContent = bioInput.value;
        updated = true;
    }

    if (updated) {
        // Show success toast
        statusMessage.className = "show";
        setTimeout(() => { statusMessage.className = statusMessage.className.replace("show", ""); }, 3000);

        // Clear inputs
        nameInput.value = "";
        bioInput.value = "";
    }
});

// Add small hover effect to profile card via JS just for fun
const profileCard = document.getElementById('profileCard');
profileCard.addEventListener('mouseenter', () => {
    profileCard.style.borderColor = '#2ecc71';
});
profileCard.addEventListener('mouseleave', () => {
    profileCard.style.borderColor = '#3498db';
});