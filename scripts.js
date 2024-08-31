// function toggleDropdown(event) {
//     event.stopPropagation(); // Prevent the click event from propagating to the document
//     const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
//     dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
//   }



//   function toggleDropdown() {
//     const dropdown = document.getElementById(".dropdown-menu");
//     if (dropdown.style.display === "none" || dropdown.style.display === "") {
//         dropdown.style.display = "block";
//     } else {
//         dropdown.style.display = "none";
//     }
// }
  
//   // Close the dropdown menu when clicking outside of it
//   document.addEventListener('click', () => {
//     const dropdownMenus = document.querySelectorAll('.dropdown-menu');
//     dropdownMenus.forEach(menu => {
//       menu.style.display = 'none';
//     });
//   });


function toggleDropdown(event) {
  const targetElement = event.currentTarget;
  const otherDropdowns = document.querySelectorAll('.dropdown');

  otherDropdowns.forEach(dropdown => {
      if (dropdown !== targetElement) {
          dropdown.classList.remove('active');
      }
  });

  targetElement.classList.toggle('active');

  event.stopPropagation();
}

document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown')) {
      const dropdowns = document.querySelectorAll('.dropdown');
      dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
  }
});