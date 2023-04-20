fetch("people.json")
    .then(response => response.json())
    .then(data => {
        const teamMembers = data.teamMembers;

        // Loop through team members and create HTML elements
        for (let i = 0; i < teamMembers.length; i++) {
            const member = teamMembers[i];

            // Create container for team member
            const memberContainer = document.createElement("div");
            memberContainer.className = "member";

            // Create image element for team member
            const image = document.createElement("img");
            image.src = member.image;
            image.alt = member.name;
            memberContainer.appendChild(image);

            // Create name element for team member
            const name = document.createElement("h2");
            name.textContent = member.name;
            memberContainer.appendChild(name);

            // Create title element for team member
            const title = document.createElement("h3");
            title.textContent = member.title;
            memberContainer.appendChild(title);

            // Create bio element for team member
            const bio = document.createElement("p");
            bio.textContent = member.bio;
            memberContainer.appendChild(bio);

            // Add team member container to the page
            const teamMembersContainer = document.getElementById("team-members");
            teamMembersContainer.appendChild(memberContainer);
        }
    })