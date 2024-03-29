const daily = document.getElementById("choice").children[0];
const weekly = document.getElementById("choice").children[1];
const monthly = document.getElementById("choice").children[2];

daily.addEventListener("click", function(){
  const array = Array.from(document.getElementsByClassName("daily"));
  array.forEach((element) => {
    element.style.display = "block";
  })
  const array2 = Array.from(document.getElementsByClassName("weekly"));
  array2.forEach((element) => {
    element.style.display = "none";
  })
  const array3 = Array.from(document.getElementsByClassName("monthly"));
  array3.forEach((element) => {
    element.style.display = "none";
  })
}
)

weekly.addEventListener("click", function(){
  const array = Array.from(document.getElementsByClassName("daily"));
  array.forEach((element) => {
    element.style.display = "none";
  })
  const array2 = Array.from(document.getElementsByClassName("weekly"));
  array2.forEach((element) => {
    element.style.display = "block";
  })
  const array3 = Array.from(document.getElementsByClassName("monthly"));
  array3.forEach((element) => {
    element.style.display = "none";
  })
}
)

monthly.addEventListener("click", function(){
  const array = Array.from(document.getElementsByClassName("daily"));
  array.forEach((element) => {
    element.style.display = "none";
  })
  const array2 = Array.from(document.getElementsByClassName("weekly"));
  array2.forEach((element) => {
    element.style.display = "none";
  })
  const array3 = Array.from(document.getElementsByClassName("monthly"));
  array3.forEach((element) => {
    element.style.display = "block";
  })
}
)
