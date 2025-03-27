function typeletters(phrase, tagid) {
    let tag = document.getElementById(tagid);
    tag.innerHTML = "";  // Clear previous content
    tag.style = "white-space: pre-line;"

    let totalDelay = 0; // Tracks cumulative delay
    const MIN_DELAY = 30; // Minimum delay per letter
    const MAX_DELAY = 100; // Maximum delay per letter

    for (let i = 0; i < phrase.length; i++) {
        let delay = Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1)) + MIN_DELAY;
        totalDelay += delay; // Accumulate delay

        setTimeout(function () {
            // Create a new span element
            let span = document.createElement("span");
            span.textContent = phrase[i];

            tag.appendChild(span);  // Append instead of overwriting
        }, totalDelay); // Use accumulated delay to maintain order
    }
}

typeletters("Hello\nWorld.", "hello-world")

var homeDiv = document.getElementById("intro");

function easeBackgroundSaturation(){
    for (let i = 0; i <= 10; i ++){
        setTimeout(function (){
            homeDiv.style = `filter: saturate(${i/10});`
          }, i);
    }   
}

easeBackgroundSaturation();

var navBottom = document.getElementById("nav-bottom");
const scrollContainer = document.getElementById("scroll-wrapper");


function scrollEvent() {
  const sections = document.querySelectorAll(".scroll-section");
  let activeSection = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect(); //create a rectangle that contains all content of section

    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) { //if the top of the rectangle is past top of the screen
      activeSection = section; // Store the active section
    }
  });

  if (activeSection) {
    const sectionId = activeSection.id; // Get section's ID
    // Define navigation updates based on section ID
    const navTextMap = {
      "intro": { text: "Home", color: "white" },
      "project-section": { text: "Projects", color: "#b0b0b0" },
      "about": { text: "About", color: "lightblue" },
      "contact": { text: "Contact", color: "lightorange" }
    };

    if (sectionId != "intro"){
      navBottom.children[0].style.display = "block";
      navBottom.children[1].style.display = "none";
      
    }
    else if (sectionId != "project-section"){
      navBottom.children[0].style.display = "none";
      navBottom.children[1].style.display = "block";
    }
    // Update nav based on active section
    if (navTextMap[sectionId]) {
      navBottom.style.color = navTextMap[sectionId].color;
    }
  }
}


scrollContainer.addEventListener("scroll", scrollEvent);

scrollEvent();


/*animDivs.forEach((div, i) => {
  div.style.animationDuration = 30+ "s";
  div.style.animationDelay = `${30/animDivs.length* (animDivs.length - i)*-1}s`; // Dynamically sets delay
});*/