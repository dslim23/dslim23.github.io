const firstLine = `<span class='bold'>David S. Lim</span> is an <span class='bold'>expert in using state-of-the-art AI to power transformative AI-first products</span>.`;

const linesText = `
At <span class='bold'>Stanford's Center for Research on Foundation Models</span>, he worked on evaluating and improving on models like <span class='bold'>GPT-4, DALLE, and Stable Diffusion</span>.
His HuggingFace models have <span class='bold'>3+ million downloads a month.</span>
David was a founding employee at <span class='bold'>Andrew Ng</span>'s AI startup, <span class='bold'>Woebot Health</span> ($114 million in funding to date). He led the AI/ML team at <span class='bold'>Spoke</span> (acquired by <span class='bold'>Okta</span>), scaling AI-powered help desks to serve millions of users worldwide.
He has advised Fortune 500 companies as well as top-tier VCs/investment firms on AI strategy. In addition, he has worked with startups to build AI-first products from the ground up and recruit top AI talent.
`.split("\n");

let typed;

// Function to start the typing effect
function initializeTyped() {
  typed = new Typed("#typed", {
    strings: [firstLine],
    typeSpeed: 5,
    backDelay: 500,
    backSpeed: 0,
    loop: false,
    cursorChar: "|",
    smartBackspace: false,
    showCursor: false,
    autoInsertCss: true,
    fadeOut: true,
    blink: false,
    onComplete: typeRestOfText,
  });
}

// Start the typing effect for the first line
initializeTyped();
// Function to start the typing effect for the rest of the lines after the first line
function typeRestOfText() {
  linesText.forEach((line, i) => {
    $("#fadein").append(`<p class='line' style='opacity: 0;'>${line}</p>`);
  });

  const delayTime = 300;
  const animateDuration = 1800;

  $(".line").each(function (i) {
    $(this)
      .delay(i * delayTime)
      .animate({ opacity: 1 }, animateDuration);
  });
}

// Function to stop the typing effect and display all the lines immediately
function loadAllLinesInstantly() {
  const fadeInDuration = 400;

  // destroy the typed instance to stop the typing effect
  if (typed) {
    typed.destroy();
  }

  // insert the full string in the span
  $("#typed").html(firstLine);

  // prepare rest of the lines for instant display
  if ($("#fadein").children().length === 0) {
    linesText.forEach((line) => {
      $("#fadein").append(`<p class='line' style='opacity: 0;'>${line}</p>`);
    });
  }

  // stop any ongoing animations and display all lines instantly
  $(".line").stop(true, true).animate({ opacity: 1 }, fadeInDuration);
}

// Add event listener to the body
$("body").on("click", loadAllLinesInstantly);
