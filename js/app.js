document.querySelectorAll('.select li').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.select li').forEach(li => li.classList.remove('selected'));
      item.classList.add('selected');
    });
  });
  


  const toggle = document.getElementById('toggleBtn');

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      console.log("Bouton activé");
    } else {
      console.log("Bouton désactivé");
    }
    console.log(toogle)
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const selectItems = document.querySelectorAll(".select li");
    const cards = document.querySelectorAll(".card");
  
    selectItems.forEach(item => {
      item.addEventListener("click", function () {
        selectItems.forEach(el => el.classList.remove("selected"));
        
        this.classList.add("selected");
  
        const selectedValue = this.textContent.trim();
        
        cards.forEach(card => {
          const toggleBtn = card.querySelector("#toggleBtn");
          if (selectedValue === "All") {
            card.style.display = "block";
          } else if (selectedValue === "Active" && toggleBtn.checked) {
            card.style.display = "block";
          } else if (selectedValue === "Inactive" && !toggleBtn.checked) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });
  