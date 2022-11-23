
var likes = document.getElementsByClassName("like");
console.log(likes);
for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener("click", function () {
    if (like.firstChild.style.color == "red") {
      like.firstChild.style.color = "black";
    } else {
      like.firstChild.style.color = "red";
    }
  });
}
var plus = document.getElementsByClassName("plus-btn");
for (let i = 0; i < plus.length; i++) {
  let oneplus = plus[i];
  oneplus.addEventListener("click", function () {
    oneplus.previousElementSibling.value++;
  });
}
var minus = document.getElementsByClassName("minus-btn");
for (let i = 0; i < minus.length; i++) {
  let oneplus = minus[i];
  oneplus.addEventListener("click", function () {
    if (oneplus.nextElementSibling.value > 1) {
      oneplus.nextElementSibling.value--;
    }
  });
}
var del = document.getElementsByClassName("delete")
for (let i = 0; i < del.length; i++) {
  let onedel = del[i];
  onedel.addEventListener("click", function () {

    onedel.parentElement.remove();
  })
}



var prices = document.getElementsByClassName('price');
var price = 0;

for (var i = 0; i < prices.length; i++) {
  let oneprices = prices[i].innerHTML.replace();

  price += parseInt(oneprices)
}


