document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
});

function submitForm() {
  var form = document.getElementById("myForm");
  var xhr = new XMLHttpRequest();
  xhr.open("POST", form.action, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      alert(xhr.responseText);
      closePopup();
    }
  };
  xhr.send(new FormData(form));
}

function showPopup() {
  document.getElementById("popup-booking").style.display = "block";
}

function closePopup() {
  document.getElementById("popup-booking").style.display = "none";
}

function submitForm() {

  alert("Form submitted successfully!");
  closePopup();
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-118px";
  }
  prevScrollpos = currentScrollPos;
}