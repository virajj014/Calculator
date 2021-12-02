let display = document.getElementById("display");
let mybtn = document.querySelectorAll("button");
let currentdisplay = "";
for (item of mybtn) {
  item.addEventListener("click", (e) => {
    mybtntext = e.target.innerText;
    console.log(mybtntext);

    if (mybtntext == "C") {
      currentdisplay = "";
      display.value = currentdisplay;
    } else if (mybtntext == "=") {
      display.value = eval(currentdisplay);
    } else {
      currentdisplay += mybtntext;
      display.value = currentdisplay;
    }
  });
}
