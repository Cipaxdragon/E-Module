const buttonMap = {
  profil: 'Profil',
  prakata: 'Prakata',
  'daftar-isi': 'Daftar Isi',
  modul: 'Modul',
  'layanan-bimbingan': 'Layanan Bimbingan',
  'daftar-pustaka': 'Daftar Pustaka',
};

let activeButton = null;

let buttons = document.querySelectorAll('.dropdown-button');
var baton = document.querySelectorAll('.baton');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
      if (button.classList.contains('clicked-button')) {
          button.classList.remove('clicked-button');
          
      } else {
        
        button.classList.add('clicked-button');
          
      }
  });
});


function toggleDropdown(buttonId) {

  const dropdownButton = document.getElementById(buttonId);
  const ubah = document.getElementById(buttonId);
  const hapus_1 = document.getElementById('1');
  const hapus_2 = document.getElementById('2');
  const hapus_3 = document.getElementById('3');
  const hapus_4 = document.getElementById('4');
  const hapus_5 = document.getElementById('5');
  const hapus_6 = document.getElementById('6');

  const dropdownContent = document.getElementById(buttonId.replace('button', 'content'));

  
  var container = document.querySelector('.container');
  if (window.innerWidth <= 500) {
      if (activeButton) {
          // Ambil elemen dengan class 'container'

          // Periksa apakah elemen ditemukan
          if (container) {
              // Ubah properti 'flex-wrap' menjadi 'wrap'
              container.style.flexWrap = 'wrap';
          }
    
      }
      if(buttonId == 'profil'){
        hapus_2.style.display = 'none';
        hapus_3.style.display = 'none';
        hapus_4.style.display = 'none';
        hapus_5.style.display = 'none';
        hapus_6.style.display = 'none';
      }
      if(buttonId == 'prakata'){
        hapus_1.style.display = 'none';
        hapus_3.style.display = 'none';
        hapus_4.style.display = 'none';
        hapus_5.style.display = 'none';
        hapus_6.style.display = 'none';
      }
      if(buttonId == 'prakata'){
        hapus_1.style.display = 'none';
        hapus_3.style.display = 'none';
        hapus_4.style.display = 'none';
        hapus_5.style.display = 'none';
        hapus_6.style.display = 'none';
      }
      if(buttonId == 'daftar-isi'){
        hapus_1.style.display = 'none';
        hapus_2.style.display = 'none';
        hapus_4.style.display = 'none';
        hapus_5.style.display = 'none';
        hapus_6.style.display = 'none';
      }
      if(buttonId == 'modul'){
        hapus_1.style.display = 'none';
        hapus_2.style.display = 'none';
        hapus_3.style.display = 'none';
        hapus_5.style.display = 'none';
        hapus_6.style.display = 'none';
      }
      if(buttonId == 'modul'){
        hapus_1.style.display = 'none';
        hapus_2.style.display = 'none';
        hapus_3.style.display = 'none';
        hapus_5.style.display = 'none';
        hapus_6.style.display = 'none';
      }
      if(buttonId == 'layanan-bimbingan'){
        hapus_1.style.display = 'none';
        hapus_2.style.display = 'none';
        hapus_3.style.display = 'none';
        hapus_4.style.display = 'none';
        hapus_6.style.display = 'none';
      }
      
      if(buttonId == 'daftar-pustaka'){
        hapus_1.style.display = 'none';
        hapus_2.style.display = 'none';
        hapus_3.style.display = 'none';
        hapus_4.style.display = 'none';
        hapus_5.style.display = 'none';
      }
      
      
    
  }


  if (window.getComputedStyle(dropdownContent).getPropertyValue('display') === 'flex') {
      hapus_1.style.display = 'block';
      hapus_2.style.display = 'block';
      hapus_3.style.display = 'block';
      hapus_4.style.display = 'block';
      hapus_5.style.display = 'block';
      hapus_6.style.display = 'block';

          container.style.flexWrap = 'nowrap';

      dropdownButton.classList.remove('active');
      dropdownContent.style.display = 'none';
      activeButton = null;
  } else {
      dropdownButton.classList.add('active');
      dropdownContent.style.display = 'flex';
      activeButton = dropdownButton;
  }
}

function toggleList(listId) {
  const listContent = document.getElementById(listId);
  if (window.getComputedStyle(listContent).getPropertyValue('display') === 'flex') {
      listContent.style.display = 'none';
  } else {
      listContent.style.display = 'flex';
  }
}

// Menambahkan event listener ke semua tombol dropdown
document.querySelectorAll('.dropdown-button').forEach((button) => {
  button.addEventListener('click', function() {
      const buttonId = button.id;
      toggleDropdown(buttonId);
  });
});

// Menambahkan event listener ke semua tombol list dropdown
for (const key in buttonMap) {
  const listId = `list-${key}`;
  const listButton = document.getElementById(key);
  if (listButton) {
      listButton.addEventListener('click', function() {
          toggleList(listId);
      });
  }
}