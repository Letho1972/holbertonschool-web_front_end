function changeMode(size, weight, transform, background, color) {
    return function () {
      document.body.style.fontSize = size;
      document.body.style.fontWeight = weight;
      document.body.style.textTransform = transform;
      document.body.style.backgroundColor = background;
      document.body.style.color = color;
    };
  }
  
  function main() {
    var spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    var darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    var screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  
    const paragraph = document.createTextNode("Welcome Holberton!");
    document.body.appendChild(paragraph);
  
    const spookyButton = document.createElement("button");
    spookyButton.textContent = "Spooky";
    spookyButton.addEventListener("click", spooky);
    document.body.appendChild(spookyButton);
  
    const darkModeButton = document.createElement("button");
    darkModeButton.textContent = "Dark mode";
    darkModeButton.addEventListener("click", darkMode);
    document.body.appendChild(darkModeButton);
  
    const screamModeButton = document.createElement("button");
    screamModeButton.textContent = "Scream mode";
    screamModeButton.addEventListener("click", screamMode);
    document.body.appendChild(screamModeButton);
  }
  
  main();
  