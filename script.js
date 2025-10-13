function openLevel(level) {
  const lightbox = document.getElementById("lightbox");
  const inner = document.getElementById("lightbox-inner");

  lightbox.classList.remove("hidden");
  setTimeout(() => lightbox.classList.add("show"), 10);

  if (level === 1) {
    inner.innerHTML = `
      <h2>Level 1</h2>
      <img src="images/level1_detail.png" alt="Level 1 Map" style="width:100%; border-radius:10px;">
      <h3 style="margin-top:10px;">LEVEL 1 HALLS</h3>
      <div class="arrow">⬇️</div>
      <img src="images/eventhall_level1.png" alt="Event Hall Map" style="width:100%; border-radius:10px; margin-top:10px;">
      <p>Choose a booth to view details:</p>
      <div class="booth-buttons">
        ${Array.from({ length: 10 }, (_, i) => `<button onclick="showBooth(${i + 1})">${i + 1}</button>`).join('')}
      </div>
    `;
  } else {
    inner.innerHTML = `
      <h2>Level ${level}</h2>
      <img src="images/level${level}_detail.png" alt="Level ${level} Map" style="width:100%; border-radius:10px;">
      <p>Details for Level ${level}.</p>
    `;
  }
}

function showBooth(num) {
  const inner = document.getElementById("lightbox-inner");
  const boothData = {
    1: { 
      title: "Kementerian Booth", 
      logo: "images/booth1_kementerian.png"
    },
    2: { 
      title: "Energy Street", 
      logo: "images/booth2_energystreet.png"
    },
    3: { 
      title: "Kampung Kamek Pavilion", 
      logo: "images/booth3_kampungkamek.png"
    },
    4: { 
      title: "Treasures of Sarawak", 
      logo: "images/booth4_treasures.png" 
    },
    5: { 
      title: "Sarawak Dreams – Section 1", 
      logo: "images/booth5_sarawakdreams1.png"
    },
    6: { 
      title: "Sarawak Dreams – Section 2", 
      logo: "images/booth6_sarawakdreams2.png"
    },
    7: { 
      title: "Sarawak Dreams – Section 3", 
      logo: "images/booth7_sarawakdreams3.png"
    },
    8: { 
      title: "Sarawak Dreams – Section 4", 
      logo: "images/booth8_sarawakdreams4.png"
    },
    9: { 
      title: "Sarawak Dreams – Section 5", 
      logo: "images/booth9_sarawakdreams5.png"
    },
    10: { 
      title: "Sarawak Dreams – Section 6", 
      logo: "images/booth10_sarawakdreams6.png" 
    },
  };

  const booth = boothData[num];
  inner.innerHTML = `
    <div class="booth-info">
      <h2>${booth.title}</h2>
      <img src="${booth.logo}" alt="${booth.title}" style="width:150px; border-radius:10px; margin-top:10px;">
      <button class="back-btn" onclick="backToLevel()">⬅ Back to Booths</button>
    </div>
  `;
}

function backToLevel() {
  openLevel(1);
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("show");
  setTimeout(() => lightbox.classList.add("hidden"), 400);
}