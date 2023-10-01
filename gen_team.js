const data = [
  {
    name: "Jonat J Mathew",
    linkedin: "https://www.linkedin.com/in/jonat-j-mathew06/",
    github: "https://github.com/SoulReaper06",
    imagePath: "Jonat J.jpg",
    position: "President",
  },
  {
    name: "Hazna R Mohammed",
    imagePath: "nw - Hazna R Mohammed.jpeg",
    position: "Vice President",
  },
  {
    name: "Vivek Nair",
    linkedin: "https://www.linkedin.com/in/vivek-nair-63b63a20b/",
    github: "https://github.com/vivek2002-nair",
    imagePath: "Vivek Nair.jpg",
    position: "Technical Lead",
  },

  {
    name: "SUMAYYA MAHEEN",
    linkedin: "https://www.linkedin.com/in/sumayya-maheen-7a1b74218",
    github: "https://github.com/Sumayya-Maheen",
    imagePath:
      "SumayyaMaheen_CSE_S5_B - SUMAYYA MAHEEN B.Tech CSE B 2020-2024.jpg",
    position: "Marketing Team",
  },
  {
    name: "Akhil L",
    linkedin: "https://www.linkedin.com/in/akhil-l-7a2551219/",
    github: "https://github.com/AkhilLV",
    imagePath: "Akhil L.jpeg",
    position: "Web Lead",
  },

  {
    name: "Sam Stephen Thomas",
    imagePath: "P1050059 (3) - Sam Stephen Thomas.jpg",
    position: "Management Lead",
  },
  {
    name: "Abishek R Paleri",
    imagePath: "Abishek R Paleri.jpg",
    position: "Design Lead",
  },
  {
    name: "Zameel Hassan",
    linkedin: "https://www.linkedin.com/in/zameel-hassan-83016420b/",
    github: "https://github.com/Zameelhassan",
    imagePath: "Zameel Hassan.png",
    position: "Python Lead",
  },
  {
    name: "JIBU K SAMUEL",
    linkedin: "https://www.linkedin.com/in/jibu-k-samuel/",
    imagePath: "JIBU K SAMUEL.jpg",
    position: "Google Cloud Facilitator",
  },
  {
    name: "EARWIN JOSEPH",
    imagePath: "EARWIN JOSEPH.jpg",
    position: "Marketing Team",
  },
  {
    name: "Sharon Baby Thomas",
    linkedin: "https://www.linkedin.com/in/sharon-baby-thomas-a411a5228",
    imagePath: "IMG_20221110_022910 - Sketch Sharon.jpg",
    position: "",
  },
  {
    name: "Ria Mariam Mathews",
    linkedin: "https://www.linkedin.com/in/ria-mariam-mathews-721571207/",
    imagePath:
      "Screenshot_2022-11-03-08-44-41-116_com.miui.gallery - Ria Mariam Mathews.jpg",
    position: "Design Team",
  },

  {
    name: "Melvin Tom Varghese",
    imagePath: "Melvin Tom Varghese.jpg",
    position: "Marketing Team",
  },
  {
    name: "Neha Samson",
    imagePath: "Neha Samson.jpg",
    position: "",
  },
  {
    name: "Nikitha Mary Varghese",
    imagePath: "Nikitha Mary Varghese.jpg",
    position: "Management Team",
  },
  {
    name: "Sebin Thomas",
    linkedin: "https://www.linkedin.com/in/sebin-thomas-44a6231b0/",
    imagePath: "Remini20210527201156855 - Sebin Thomas.jpg",
    position: "Management Team",
  },
  {
    name: "JOSHWA THOMAS",
    linkedin: "https://www.linkedin.com/in/joshwa-thomas-67b64a206",
    github: "https://github.com/Jtc345",
    imagePath: "JOSHWA THOMAS.png",
    position: "Management Team",
  },

  {
    name: "Asif Shereef",
    imagePath: "asif shereef.jpg",
    position: "Management Team",
  },
];

const team = document.querySelector(".team-js");
console.log(team);
let HTML = "";

data.forEach((member) => {
  HTML += `<div
    class="col-lg-2 col-md-6 d-flex align-items-stretch"
    data-aos="fade-up"
    data-aos-delay="100"
    >
    <div class="member">
      <div class="member-img">
        <img
          src="./team-photos-compressed/${member.imagePath}"
          class="img-fluid"
          alt=""
          loading="lazy"
        />
        <div class="social">
          ${
            member.github
              ? `<a href="${member.github}">
                <i class="bi bi-github"></i>
              </a>`
              : ""
          }
          ${
            member.linkedin
              ? `<a href="${member.linkedin}">
                <i class="bi bi-linkedin"></i>
              </a>`
              : ""
          }
        </div>
      </div>
      <div class="member-info">
        <h4>${member.name}</h4>
        <span>${member.position}</span>
      </div>
    </div>
    </div>`;
});

team.insertAdjacentHTML("beforeend", HTML);
