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
  



  //non fonctionelle :



  function removeCard(element) {
    let card = element.closest(".card");
    if (card) {
        card.remove();
    }
}


  fetch('../data/data.json')
    .then(response => response.json())
    .then(items => {
        const $wrapper = document.querySelector(".items-wrapper");

        items.forEach(function(item) {
            const $card = document.createElement("div");
            $card.classList.add("card");

            const $info = document.createElement("div");
            $info.classList.add("info");

            const $image = document.createElement("img");
            $image.src = item.logo;
            $image.alt = item.name;

            const $details = document.createElement("div");
            $details.classList.add("details");

            const $name = document.createElement("h2");
            $name.textContent = item.name;

            const $description = document.createElement("p");
            $description.textContent = item.description;

            const $action = document.createElement("div");
            $action.classList.add("extensions-action");

            const $removeItem = document.createElement("li");
            $removeItem.textContent = "remove";

            const $switchLabel = document.createElement("label");
            $switchLabel.classList.add("switch");

            const $toggleBtn = document.createElement("input");
            $toggleBtn.type = "checkbox";
            $toggleBtn.id = "toggleBtn";
            $toggleBtn.checked = item.isActive;

            const $slider = document.createElement("span");
            $slider.classList.add("slider");

            $switchLabel.appendChild($toggleBtn);
            $switchLabel.appendChild($slider);

            $info.appendChild($image);
            $info.appendChild($details);
            $details.appendChild($name);
            $details.appendChild($description);

            $action.appendChild($removeItem);
            $action.appendChild($switchLabel);

            $card.appendChild($info);
            $card.appendChild($action);

            $wrapper.appendChild($card);
        });
    })
    .catch(error => console.error("Erreur lors du chargement du JSON :", error));
