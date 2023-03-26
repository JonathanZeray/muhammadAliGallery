window.onload = function () {

// Logic for loading in images when coming to home page.

  function addAllBlocks() {
    let els = document.querySelectorAll(".tile");
    els.forEach((el) => {
      el.style.display = "block";
    });

    els.style.transform = "1s"
  }

  setTimeout(() => {
    addAllBlocks();
  }, 1000);

// Logic for replacing images with color blocks.

  function addColorBlock() {
    let elements = document.querySelectorAll(".galleryImage");
    elements.forEach((element) => {
      element.classList.remove('galleryImage');
    });
}

setTimeout(() => {
  addColorBlock();
}, 1600);

// Logic for mouse events

const gallery = document.getElementById("gallery");
window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal * -0.89,
        panY = maxY * yDecimal * -0.89;
 
  gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 8000,
    fill: "forwards",
    easing: "ease"
  })
}


// Logic for About page header.

const myText = new SplitType("#header-text");

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1,
});

}

