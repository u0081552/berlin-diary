"use strict";

const events = [
  {
    year: 1907, title: "Alexei is born", location: "St. Petersburg, Russia", state: "Before they meet",
    summary: "Alexei Petrov is born into an intellectual Russian family that values science and education.",
    narrative: ["The recovered chronology begins in St. Petersburg in 1907. Alexei’s interest in science grows out of the world his family introduces him to.", "His childhood during the revolution and his family’s later move to Moscow remain open parts of the biography. They will shape the obligations he carries back to Russia in 1936."]
  },
  {
    year: 1908, title: "Friedrich is born", location: "Near Berlin, Germany", state: "Before they meet",
    summary: "Friedrich Bruch is born into a middle-class German family with an interest in engineering.",
    narrative: ["Friedrich’s early life begins near Berlin in 1908. Engineering gives him a practical way of understanding the world and eventually brings him into the same intellectual circles as Alexei.", "The family’s exact home, their relationships and Friedrich’s education are still open in the working biography."]
  },
  {
    year: 1926, title: "Alexei arrives in Berlin", location: "Berlin, Germany", state: "Before they meet",
    summary: "He comes to study science. University life opens onto a city of galleries, conversations and possibilities.",
    narrative: ["Alexei arrives in Berlin at eighteen or nineteen, depending on his birthday. The university in this period is Friedrich-Wilhelms-Universität, later Humboldt University.", "An existing image concept places him on a chilly April station platform with a short jacket and two pieces of luggage. An acquaintance takes his photograph. He looks excited and tired after the journey. The April date and exact station remain scene details to confirm."]
  },
  {
    year: 1927, title: "They meet as students", location: "Berlin, Germany", state: "Growing attachment",
    summary: "Alexei and Friedrich form a deep bond in Weimar Berlin. The friendship that will shape their lives begins.",
    narrative: ["Their first meeting belongs to the recovered chronology. Alexei turns twenty this year and Friedrich nineteen.", "The specific encounter is still to be written. Their attachment develops through university life and the city they explore together. The exact moment they become lovers remains open."]
  },
  {
    year: 1930, title: "A home together", location: "Berlin, Germany", state: "Together in Berlin",
    summary: "They share a home and a life within Berlin’s intellectual and artistic circles.",
    narrative: ["By 1930, the recovered chronology places them in a shared home. Alexei turns twenty-three and Friedrich twenty-two.", "The apartment gives the relationship a daily life. Their routines, disagreements and private language can develop here. Friedrichstraße appears as the location of their apartment in the later cabaret scene draft."]
  },
  {
    year: 1931, title: "An afternoon in Tiergarten", location: "Tiergarten, Berlin", state: "Together in Berlin", label: "Proposed scene date",
    summary: "A photograph preserves an intimate afternoon. The camera makes visible how they allow themselves to be seen by each other.",
    narrative: ["The Tiergarten photograph is a recurring scene in the project. Placing it in 1931 makes Alexei twenty-four and Friedrich twenty-three, four years after their first meeting.", "The proposed opening has Alexei trying to photograph Friedrich, who laughs and turns away. Their negotiation over the picture explores vulnerability inside an established relationship. The year and this version of the opening remain proposals."]
  },
  {
    year: 1935, title: "Walking home at dawn", location: "Spree river → Friedrichstraße, Berlin", state: "Together in Berlin", label: "Scene draft",
    summary: "After a night at a cabaret, they walk silently beside the Spree toward their apartment. The city is changing around them.",
    narrative: ["In the author’s scene, dawn begins to reach the streets. The Reichstag is visible across the river. Alexei and Friedrich are tired from a night together and walk toward their shared apartment on Friedrichstraße.", "With the recovered birth years they turn twenty-eight and twenty-seven. The scene sits eight years after their meeting. Its description of a new romance needs revision if it stays in 1935."]
  },
  {
    year: 1936, title: "Alexei leaves for Moscow", location: "Berlin → Moscow, USSR", state: "Separated",
    summary: "Family duty takes Alexei back to his parents. The visit becomes a separation that neither man knows how to end.",
    proposal: "Refused exit permission is a proposed explanation for his inability to return.",
    narrative: ["Alexei returns to Moscow to care for his parents. The recovered chronology says he is pressured to stay in the Soviet Union.", "One proposed reconciliation is that he expects to return to Berlin, then fails to obtain permission to leave the USSR again. The station farewell takes on its weight afterward, as an anticipated absence grows into years. The precise administrative mechanism and the parent needing care remain open."]
  },
  {
    year: 1939, title: "War begins in Europe", location: "Germany / USSR", state: "Separated",
    summary: "Germany invades Poland. Alexei and Friedrich have already been separated for three years.",
    narrative: ["The European war begins in September 1939. Their own separation began in 1936.", "Germany and the Soviet Union become direct military enemies in 1941. The chronology needs to preserve that distinction as each man’s life is drawn into the war."]
  },
  {
    year: 1940, title: "Friedrich is conscripted", location: "Germany", state: "Separated by war",
    summary: "He serves in an engineering role in the German Army while struggling with Nazi ideology.",
    narrative: ["The working biography places Friedrich’s conscription in 1940, the year he turns thirty-two.", "His unit, assignments and conduct remain to be specified. A proposed version makes him an engineer NCO. What he builds and the consequences of that work matter to his later understanding of himself."]
  },
  {
    year: 1941, title: "Their countries are at war", location: "Germany / Soviet Union", state: "Separated by war",
    summary: "Germany invades the Soviet Union. The distance between them becomes a front line.",
    narrative: ["Germany invades the Soviet Union on June 22, 1941. Alexei turns thirty-four and Friedrich thirty-three this year.", "Their wartime roles need individual detail. The proposed career for Alexei is applied physics and industrial measurement, giving him a route into technical work that later involves prisoner labor."]
  },
  {
    year: 1945, title: "Recognition in a prisoner camp", location: "Siberia, USSR", state: "Reunited in captivity",
    summary: "Alexei discovers Friedrich among German prisoners and secretly helps him survive. They have been apart for nine years.",
    proposal: "Camp 503 at Kemerovo and the repair-work assignment are proposed specifics.",
    narrative: ["The camp reunion is a central event in the recovered story. Friedrich is a prisoner. Alexei’s work gives him some authority over prisoners and a chance to help.", "The proposed setting is Camp 503 in Kemerovo. Alexei, a civilian technical specialist, recognizes Friedrich on a roster and recommends him for repair work based on his engineering skills. Their access to each other is limited, and the unequal freedom between them shapes every encounter. These individual assignments remain fictional proposals."]
  },
  {
    year: 1949, title: "Release, and another goodbye", location: "Soviet Union → Germany", state: "Separated again",
    summary: "Friedrich is repatriated. Leaving captivity means leaving Alexei behind.",
    proposal: "A return to family in Berlin’s Soviet sector is the proposed destination.",
    narrative: ["Friedrich’s release in 1949 separates them again. Alexei turns forty-two that year, Friedrich forty-one.", "The proposed bridge sends Friedrich through the Gronenfelde reception camp and back to family in the Soviet sector of Berlin. Repairing scientific instruments gives him work and a reason to remain there. His destination and the means by which the men maintain contact remain open."]
  },
  {
    year: 1958, title: "A reunion in East Berlin", location: "East Berlin", state: "Brief reunion",
    summary: "Alexei’s scientific visit brings them together for the first time since Friedrich’s release, nine years earlier.",
    proposal: "The November Moscow University delegation is a proposed setting for the visit.",
    narrative: ["Alexei’s scientific visit and their brief reunion belong to the recovered chronology. They turn fifty-one and fifty.", "A proposed historical setting is the Moscow University delegation that visited East Berlin in November 1958. The café encounter gives them room to ask what happened during the years apart. The visit ends with Alexei returning to Moscow."]
  },
  {
    year: 1960, title: "Alexei finds a way back", location: "Moscow ↔ East Berlin", state: "Periods together", label: "Proposed bridge",
    summary: "A visiting scientific appointment gives them periods together in Berlin, interrupted by Alexei’s returns to Moscow.",
    narrative: ["This appointment is a proposed addition that connects the brief 1958 visit to Alexei’s presence in East Berlin in 1961.", "A placement under the Moscow–Humboldt university exchange could be renewed for successive periods. Alexei’s right to stay would depend on his work. Friedrich would have his own home, employment and residence status in the GDR. The arrangement remains to be adopted and researched in detail."]
  },
  {
    year: 1961, title: "The city closes", location: "Berlin · August 13", state: "Life under restrictions",
    summary: "The Wall closes the border around West Berlin. Movement and surveillance press further into their private lives.",
    proposal: "Alexei’s visiting appointment and each man’s travel status still need definition.",
    narrative: ["The recovered draft places both men in East Berlin when the Wall goes up. Friedrich turns fifty-three, Alexei fifty-four.", "A Soviet visiting scientist and a GDR resident would face different permissions and obligations. Their decisions about staying together must grow out of those particular circumstances. The proposed appointment explains Alexei’s presence, while its renewals keep the future uncertain."]
  },
  {
    year: 1969, title: "They leave together", location: "Czechoslovakia → the West", state: "Escape",
    summary: "At sixty-two and sixty-one, they risk a final departure in the hope of a life they can share.",
    proposal: "Brno fair travel, a recall notice and a crossing into Bavaria are proposed details.",
    narrative: ["The recovered story gives 1969 as their escape year, during conference travel involving Czechoslovakia.", "The proposed version uses the Brno International Engineering Fair. Each man travels on separate professional authorization. An impending recall to Moscow gives them a reason to act. They reach Bavaria, then face separate residence and reception processes before moving to West Berlin. Their crossing and the outcome of those processes remain to be developed."]
  },
  {
    year: 1970, title: "A shared life in West Berlin", location: "West Berlin", state: "Together in West Berlin",
    summary: "They build a home together. Daily routines and affection share space with the effects of war, captivity and separation.",
    narrative: ["The recovered chronology gives them a shared life in West Berlin from 1970 to 1978. Alexei turns sixty-three in 1970, Friedrich sixty-two.", "Their work, friendships and domestic routines need space in the narrative. An old photograph displayed in their home is one proposed way to connect this life to their Berlin years before the war."]
  },
  {
    year: 1978, title: "Alexei dies", location: "West Berlin", state: "Friedrich is bereaved",
    summary: "Alexei dies of cancer. Friedrich begins the eleven years he will live after his companion’s death.",
    narrative: ["Alexei dies in 1978, aged seventy or seventy-one depending on his birthday. Friedrich turns seventy that year.", "The photographs and letters can become part of Friedrich’s life after loss. Preserving and identifying them is a proposed thread for these later years. The diagnosis, course of illness and specific circumstances of death remain open."]
  },
  {
    year: 1989, title: "The border opens", location: "Berlin · November 9", state: "Friedrich carries their memory",
    summary: "Friedrich witnesses the city opening again. In the recovered draft he dies shortly afterward.",
    narrative: ["Friedrich is eighty or eighty-one when he sees the border open on November 9, 1989. Alexei has been dead for eleven years.", "One proposed ending has Friedrich identify the two men in the Tiergarten photograph and pass it to someone he trusts. His final action would give their relationship a place in the record of the city. The draft’s timing of his death remains open."]
  }
];

const firstYear = events[0].year;
const lastYear = events.at(-1).year;
const eventContainer = document.getElementById("events");
const slider = document.getElementById("year-slider");
const currentYear = document.getElementById("current-year");
const currentState = document.getElementById("current-state");
const timeline = document.querySelector(".timeline");
const dateTicks = document.getElementById("date-ticks");
const marks = document.getElementById("event-marks");
const previousButton = document.getElementById("previous-event");
const nextButton = document.getElementById("next-event");
const narrative = document.getElementById("narrative");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let activeIndex = -1;
let anchors = [];
let scrollFrame = 0;
let lastLocationIndex = -1;
let narrativeTrigger = null;

function ageMarkup(year) {
  const alexeiAge = year > 1978 ? "deceased" : `${year - 1907}${year === 1978 ? " · dies this year" : ""}`;
  const friedrichAge = year < 1908 ? "not yet born" : `${year - 1908}${year === 1989 ? " · dies this year" : ""}`;
  return `<span class="age-person"><span class="age-name">Alexei</span><span class="age-value">${alexeiAge}</span></span>
    <span class="age-person"><span class="age-name">Friedrich</span><span class="age-value">${friedrichAge}</span></span>`;
}

eventContainer.innerHTML = events.map(event => `
  <article class="event" id="year-${event.year}" aria-labelledby="title-${event.year}">
    <p class="event-year">${event.year}</p>
    <div class="event-content">
      <p class="event-status">${event.state}${event.label ? ` · ${event.label}` : ""}</p>
      <h2 id="title-${event.year}">${event.title}</h2>
      <p class="event-location">${event.location}</p>
      <div class="age-pair" aria-label="Ages reached this year">${ageMarkup(event.year)}</div>
      <p class="event-summary">${event.summary}</p>
      <a class="read-more" href="#moment-${event.year}" data-year="${event.year}">Read more <span aria-hidden="true">↗</span><span class="sr-only"> about ${event.year}, ${event.title}</span></a>
      ${event.proposal ? `<p class="proposal-note">${event.proposal}</p>` : ""}
    </div>
  </article>
`).join("");

const articles = [...eventContainer.querySelectorAll(".event")];
const tickYears = [1907, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1989];
dateTicks.innerHTML = tickYears.map(year => `<button class="date-tick" type="button" style="top:${(year - firstYear) / (lastYear - firstYear) * 100}%" data-year="${year}" aria-label="Go to ${year}">${year}</button>`).join("");
marks.innerHTML = events.map(event => `<span class="event-mark" style="top:${(event.year - firstYear) / (lastYear - firstYear) * 100}%"></span>`).join("");
const eventMarks = [...marks.children];

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function focusOffset() {
  const headerHeight = document.querySelector(".site-header").getBoundingClientRect().height;
  return headerHeight + Math.min(150, Math.max(55, (window.innerHeight - headerHeight) * .18));
}

function measureAnchors() {
  const offset = focusOffset();
  anchors = articles.map(article => Math.max(0, window.scrollY + article.getBoundingClientRect().top - offset));
  const compactTrack = document.getElementById("timeline-track").clientHeight < 370;
  for (const tick of dateTicks.children) {
    tick.hidden = compactTrack && ![1907, 1930, 1960, 1989].includes(Number(tick.dataset.year));
  }
  syncFromScroll();
}

function scrollPositionForYear(year) {
  const nextIndex = events.findIndex(event => event.year >= year);
  if (nextIndex <= 0) return anchors[0];
  const previousIndex = nextIndex - 1;
  const fraction = (year - events[previousIndex].year) / (events[nextIndex].year - events[previousIndex].year);
  return anchors[previousIndex] + fraction * (anchors[nextIndex] - anchors[previousIndex]);
}

function yearForScrollPosition(position) {
  const nextIndex = anchors.findIndex(anchor => anchor >= position);
  if (nextIndex === -1) return lastYear;
  if (nextIndex === 0) return firstYear;
  const previousIndex = nextIndex - 1;
  const fraction = clamp((position - anchors[previousIndex]) / (anchors[nextIndex] - anchors[previousIndex]), 0, 1);
  return events[previousIndex].year + fraction * (events[nextIndex].year - events[previousIndex].year);
}

function updateNavigation(year, index) {
  slider.value = year;
  slider.style.setProperty("--progress", `${(year - firstYear) / (lastYear - firstYear) * 100}%`);
  currentYear.value = String(Math.round(year));
  currentState.textContent = events[index].state;
  slider.setAttribute("aria-valuetext", `${Math.round(year)}. ${events[index].title}.`);
  previousButton.disabled = index === 0;
  nextButton.disabled = index === events.length - 1;

  if (activeIndex === index) return;
  if (activeIndex >= 0) {
    articles[activeIndex].classList.remove("is-active");
    eventMarks[activeIndex].classList.remove("is-active");
  }
  activeIndex = index;
  articles[index].classList.add("is-active");
  eventMarks[index].classList.add("is-active");
  for (const tick of dateTicks.children) {
    if (Number(tick.dataset.year) === events[index].year) tick.setAttribute("aria-current", "date");
    else tick.removeAttribute("aria-current");
  }
  if (!narrative.open && lastLocationIndex !== index) {
    history.replaceState(null, "", `#year-${events[index].year}`);
    lastLocationIndex = index;
  }
}

function syncFromScroll() {
  if (!anchors.length) return;
  const position = window.scrollY;
  const year = yearForScrollPosition(position);
  let nearestIndex = 0;
  let nearestDistance = Infinity;
  anchors.forEach((anchor, index) => {
    const distance = Math.abs(anchor - position);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestIndex = index;
    }
  });
  updateNavigation(year, nearestIndex);
}

function goToYear(year, smooth = true) {
  measureAnchors();
  const boundedYear = clamp(year, firstYear, lastYear);
  window.scrollTo({ top: scrollPositionForYear(boundedYear), behavior: smooth && !reducedMotion.matches ? "smooth" : "instant" });
  if (!smooth || reducedMotion.matches) syncFromScroll();
}

function openNarrative(year, trigger = null) {
  const event = events.find(moment => moment.year === year);
  if (!event) return;
  narrativeTrigger = trigger;
  document.getElementById("narrative-date").textContent = event.year;
  document.getElementById("narrative-title").textContent = event.title;
  document.getElementById("narrative-location").textContent = event.location;
  document.getElementById("narrative-label").textContent = event.label || "Narrative outline";
  document.getElementById("narrative-ages").innerHTML = ageMarkup(event.year);
  document.getElementById("narrative-copy").innerHTML = event.narrative.map(paragraph => `<p>${paragraph}</p>`).join("");
  document.body.classList.add("has-dialog");
  if (!narrative.open) narrative.showModal();
  narrative.scrollTop = 0;
  history.replaceState(null, "", `#moment-${year}`);
  document.getElementById("close-narrative").focus();
}

slider.addEventListener("input", () => goToYear(Number(slider.value), false));
previousButton.addEventListener("click", () => goToYear(events[Math.max(0, activeIndex - 1)].year));
nextButton.addEventListener("click", () => goToYear(events[Math.min(events.length - 1, activeIndex + 1)].year));
dateTicks.addEventListener("click", event => {
  const tick = event.target.closest("[data-year]");
  if (tick) goToYear(Number(tick.dataset.year));
});
timeline.addEventListener("wheel", event => {
  if (event.ctrlKey || narrative.open) return;
  event.preventDefault();
  const unit = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? window.innerHeight : 1;
  window.scrollBy({ top: event.deltaY * unit, behavior: "instant" });
}, { passive: false });
eventContainer.addEventListener("click", event => {
  const link = event.target.closest(".read-more");
  if (!link || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  openNarrative(Number(link.dataset.year), link);
});
document.getElementById("close-narrative").addEventListener("click", () => narrative.close());
narrative.addEventListener("click", event => {
  const bounds = narrative.getBoundingClientRect();
  const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  if (event.target === narrative && outside) narrative.close();
});
narrative.addEventListener("close", () => {
  document.body.classList.remove("has-dialog");
  history.replaceState(null, "", `#year-${events[Math.max(0, activeIndex)].year}`);
  narrativeTrigger?.focus({ preventScroll: true });
});
window.addEventListener("scroll", () => {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    scrollFrame = 0;
    syncFromScroll();
  });
}, { passive: true });
window.addEventListener("resize", measureAnchors);

function followHash() {
  const match = location.hash.match(/^#(year|moment)-(\d{4})$/);
  if (!match) return;
  const year = Number(match[2]);
  if (!events.some(event => event.year === year)) return;
  goToYear(year, false);
  if (match[1] === "moment") openNarrative(year);
}

window.addEventListener("hashchange", followHash);
const initialHash = location.hash;
requestAnimationFrame(() => {
  measureAnchors();
  history.replaceState(null, "", initialHash || "#year-1927");
  followHash();
});
