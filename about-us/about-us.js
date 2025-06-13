const teamMembers = [
  {
    image: "/img/members/Designer (5).jpeg",
    name: "James Whitaker",
    title: "Environmental Data Analyst",
    bio: "James specializes in air quality analytics and climate data modeling. He ensures the accuracy of environmental statistics across EcoPulse.",
    email: "james@ecopulse.com",
  },
  {
    image: "/img/members/Designer (6).jpeg",
    name: "Ethan Brooks",
    title: "Product & UX Designer",
    bio: "Ethan designs clean, accessible interfaces that help users connect with the planet's pulse. He believes in user-first environmental design.",
    email: "ethan@ecopulse.com",
  },
  {
    image: "/img/members/Designer (4).jpeg",
    name: "Nora Sullivan",
    title: "Community & Outreach Manager",
    bio: "Nora builds partnerships and educates communities on sustainability. She's the voice of EcoPulse across social channels and campaigns.",
    email: "nora@ecopulse.com",
  },
];

const container = document.querySelector(".team-container");

teamMembers.forEach((member) => {
  const card = document.createElement("div");
  card.className = "card_style";

  card.innerHTML = `<img src="${member.image}" alt="${member.name}" /> <h3 class="my-4">${member.name}</h3>
    <h5 class="my-2">${member.title}</h5>
    <p>${member.bio}</p>
    <p><strong>📧</strong> ${member.email}</p>
  `;

  container.append(card);
});
