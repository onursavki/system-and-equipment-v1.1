// Sistem Bilgisi Verileri
const systemData = [
  {
    img: "https://i.hizliresim.com/9g4m2ya.png",
    title: "İşlemci Mimarisi",
    description: "11. Nesil Tiger Lake",
    dateAdded: "2021-07-24"
  },
  {
    img: "https://i.hizliresim.com/fxr21yq.png",
    title: "İşlemci",
    description: "Intel® Tiger Lake Core™ i7-11800H 8C/16T; 24MB L3; 8GT/s; 2.3GHz > 4.6GHz; 45W; 10nm SuperFin",
    dateAdded: "021-07-24"
  },
  {
    img: "https://i.hizliresim.com/bqc494h.jpg",
    title: "Ekran Kartı",
    description: "nVIDIA® GeForce® RTX3060 Max-Performance 6GB GDDR6 192-Bit DX12 (En Yüksek Grafik Gücü; 90Watt + 15 Watt DB 2.0)",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "Ekran",
    description: "17,3\" FHD 1920x1080 144Hz IPS Mat LED Ekran",
    dateAdded: "021-07-24"
  },
  {
    img: "https://i.hizliresim.com/bii9t7v.png",
    title: "Bellek",
    description: "Kingston FURY Impact 32GB (2x16GB) DDR4 1.2V 3200MHz SODIMM",
    dateAdded: "021-07-24"
  },
  {
    img: "https://i.hizliresim.com/a8x8irr.png",
    title: "1.Port M2 SSD",
    description: "A1TB Kingston KC3000 M.2 SSD NVMe PCIe 4.0 Gen4 (Okuma: 7000MB/s - Yazma: 6000MB/s)",
    dateAdded: "021-07-24"
  },
  {
    img: "https://i.hizliresim.com/sx1spen.png",
    title: "2.Port M2 SSD PCIe Gen3x4",
    description: "512GB SAMSUNG PM9A1 M.2 SSD PCIe 4.0 x4 (Okuma: 6900 MB/s - Yazma: 5000 MB/s)",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "2.5\" SSD/HDD",
    description: "",
    dateAdded: "021-07-24"
  },
  {
    img: "https://i.hizliresim.com/6vzxfdg.png",
    title: "İşletim Sistemi",
    description: "Microsoft Windows 11 Pro<br />Sürüm 24H2 (İS Derlemesi 26100.3775)",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "Klavye",
    description: "RGB Tek Bölge Aydınlatmalı Klavye (Türkçe Q)",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "Kamera",
    description: "HD Kamera",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "Kablosuz Ağ",
    description: "HD Intel® Wi-Fi 6 AX201, 2x2 AX + Bluetooth 5.1 M.2 2230 (2,4 Gbps)",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "Hoparlör",
    description: "HD 2x 2W Hoparlör",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "Ses Sistemi",
    description: "HD SOUND BLASTER™ Cinema 6",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "USB 2.0",
    description: "1x USB 2.0 Portu",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "USB 3.2",
    description: "3x USB 3.2 Gen1 Portu (Type-A)",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "HDMI",
    description: "1x HDMI 2.0 Portu (HDCP desteği)",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "Mini Display",
    description: "1x Mini Display Portu 1.2",
    dateAdded: "021-07-24"
  },
  {
    img: "",
    title: "Display Port Çıkış Desteği",
    description: "USB 3.2 Gen2 Portu Type-C – Display Port 1.4 (Ortak Port)",
    dateAdded: "021-07-24"
  }
];

// Ekipman Bilgisi Verileri
const equipmentData = [
  {
    img: "https://i.hizliresim.com/n4gtndg.png",
    title: "HyperX QuadCast 2 S",
    description: "USB Yayıncı / Oyuncu Mikrofonu Siyah",
    dateAdded: "2025-04-15"
  },
  {
    img: "https://i.hizliresim.com/34157hi.png",
    title: "Logitech G29",
    description: "Driving Force Yarış Direksiyonu + Logitech Driving Force Shifter",
    dateAdded: "2022-05-05"
  },
  {
    img: "https://i.hizliresim.com/ogrdxxh.png",
    title: "Logitech G300s",
    description: "Kablolu Optik Oyuncu Mouse",
    dateAdded: ""
  },
  {
    img: "",
    title: "Logitech MK235",
    description: "USB Kablosuz Türkçe Klavye ve Mouse Seti - Siyah",
    dateAdded: ""
  },
  {
    img: "https://i.hizliresim.com/cmytias.png",
    title: "Monster Pusat",
    description: "Pusat Reflex Force Oyuncu Mouse",
    dateAdded: "2024-10-01"
  },
  {
    img: "https://i.hizliresim.com/kjgyrsa.png",
    title: "Monster Pusat",
    description: "Pusat 1080p Full HD Webcam",
    dateAdded: "2021-09-01"
  },
  {
    img: "https://i.hizliresim.com/trn0x8i.png",
    title: "Monster Pusat",
    description: "Pusat Notebook Soğutucu",
    dateAdded: ""
  },
  {
    img: "https://i.hizliresim.com/6l2euhu.png",
    title: "Monster Pusat",
    description: "Pusat K3 Pro Mekanik Oyuncu Klavyesi",
    dateAdded: ""
  },
  {
    img: "https://i.hizliresim.com/mb5210j.png",
    title: "SteelSeries Arctis 5",
    description: "7.1 Surround (2019 Edition) RGB Oyuncu Kulaklık - Siyah",
    dateAdded: "2020-02-08"
  },
  {
    img: "https://i.hizliresim.com/cpb1iau.png",
    title: "SteelSeries Arctis 9",
    description: "7.1 Surround Wireless + Bluetooth Oyuncu Kulaklık - Siyah",
    dateAdded: "2024-01-10"
  },
  {
    img: "https://i.hizliresim.com/kdij191.png",
    title: "Tp-Link UH720",
    description: "2 Şarj Portlu + USB 3.0 7-Portlu Hub",
    dateAdded: "2020-09-10"
  },
  {
    img: "https://i.hizliresim.com/j8xayxm.png",
    title: "Philips 242E1GAJ",
    description: "23.8\" 144Hz 1ms (HDMI+Display) FreeSync Full HD Monitör",
    dateAdded: "2021-09-27"
  },
  {
    img: "https://i.hizliresim.com/r5q3amn.png",
    title: "X RANGER",
    description: "XRancer Cross Tam Profesyonel Oyuncu Koltuğu (Siyah)",
    dateAdded: "2021-11-26"
  }
];

// "YAKINDA" veya "YENİ" etiketi için tarih kontrolü
function getLabel(dateAdded) {
  const today = new Date();
  const addedDate = new Date(dateAdded);
  const diffTime = today - addedDate;
  const diffDays = diffTime / (1000 * 3600 * 24); // Farkı gün cinsinden hesapla

  if (addedDate > today) {
    return " <span class='soon'>YAKINDA</span>";
  }

  if (diffDays <= 15) {
    return " <span class='new'>YENİ</span>";
  }

  return "";
}

// Description boşsa veya özel durum varsa işleme
function checkDescription(description) {
  if (!description || description.trim() === "") {
    return `<span style="color: #ff3547;"><span style="position: relative; top: -2px;" data-uk-icon="icon: ban"></span> Takılı Değil</span>`;
  }

  if (description.includes("Takılı Değil")) {
    return `<span style="color: #ff3547;"><span style="position: relative; top: -2px;" data-uk-icon="icon: ban"></span> ${description}</span>`;
  }

  description = description.replace(/\((.*?)\)/g, (match, p1) => {
    return `(<i>${p1}</i>)`;
  });

  return description;
}

// Sistemi Yükleme
const systemTable = document.getElementById("systemTableBody");
systemData.forEach(item => {
  const label = getLabel(item.dateAdded);
  const description = checkDescription(item.description);
  const imgSrc = item.img && item.img.trim() !== "" ? item.img : "https://i.hizliresim.com/go41is7.png";

  systemTable.innerHTML += `
    <tr>
      <td>
        <img src="${imgSrc}" alt="Logo" style="max-width: 50px; ${imgSrc === 'https://i.hizliresim.com/go41is7.png' ? 'opacity: 0.2;' : ''}">
      </td>
      <td><b>${item.title}${label}</b></td>
      <td>${description}</td>
    </tr>
  `;
});

// Ekipmanı Yükleme
const equipmentTable = document.getElementById("equipmentTableBody");
equipmentData.forEach(item => {
  const label = getLabel(item.dateAdded);
  const description = checkDescription(item.description);
  const imgSrc = item.img && item.img.trim() !== "" ? item.img : "https://i.hizliresim.com/go41is7.png";

  equipmentTable.innerHTML += `
    <tr>
      <td>
        <img src="${imgSrc}" alt="Logo" style="max-width: 50px; ${imgSrc === 'https://i.hizliresim.com/go41is7.png' ? 'opacity: 0.2;' : ''}">
      </td>
      <td><b>${item.title}${label}</b></td>
      <td>${description}</td>
    </tr>
  `;
});

// Tablodaki tüm <th> etiketlerine erişiyoruz
const thElements = document.querySelectorAll('th');
thElements.forEach(th => {
  th.style.color = '#007bff';
});
