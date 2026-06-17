const teamData = [
    { img: "images/team/01.png", name: "Vedant", design: "Developer" },
    { img: "images/team/01.png", name: "Rahul", design: "Designer" },
    { img: "images/team/01.png", name: "Manish", design: "Manager" },
    { img: "images/team/01.png", name: "Ashitosh", design: "Designer" }
];

const container = document.getElementById("teamContainer");

teamData.forEach(member => {
    container.innerHTML += `
        <div class="teamMembers">
            <div class="teamCard">
                <div class="PicBox">
                    <img src="${member.img}" class="img-fluid">
                </div>
                <div class="PicDetials">
                    <h6 class="name">${member.name}</h6>
                    <p class="design">${member.design}</p>
                </div>
            </div>
        </div>
    `;
});
