const project_themes = [
  "note taking",
  "calculator",
  ""
]

const use = [
  "implement",
  "leverage",
  "utilize",
]

const strategies = [
  "strategies",
  "techniques",
  "methods",
  "technologies",
]

const excited = [
  "passionate",
  "eager",
  "driven",
]

const connectors = [
  "adjacent",
  "based",
  "oriented",
]

const adjectives = [
  "passionate",
  "eager",
  "driven",
  "versatile",
  "dedicated",
]

{["bridging t"]} {glaze} {}

const verbs = [
  "building",
  "creating",
  "innovating",
  "crafting",
]

const glaze = [
  "powerful",
  "innovative",
  "groundbreaking",
  "seamless",
  "impactful",
  "efficient",
  "modern",
]

const things = [
  "web application",
  "pipeline",
  "productivity suite",
  "web solution",
  "system",
  "API",
  "b2b saas",
]

const title = [
  "developer",
  "builder",
  "vibe coder",
  "prodigy",
]

const catagories = [
  "deep learning",
  "machine learning",
  "full stack",
  "AI",
]

const results = [
  "actionable insights",
  "user retention",
  "ARR",
]

const tech_adjective = [
  "scaleable",
  "agentic",
  "efficient",
  "intelligent",
  "AI-powered",
  "cloud-based",
  "cryptological",
  "generative",
  "no-code",
  "data-driven",
  "real-time",
  "NLP",
  "user-centric",
]

const unsorted = [
  "evaluation",
  "data preprocessing",
  "model training",
  "deployment",
]




var i = 0

function get(list) {
    var n  = list.length
    i += 1 + Math.floor(4 * Math.random())
    return list[i % n]
}


function nonsentence(which = 1) {
    switch (which) {
        case 1: 
            return `${get(excited)} about ${get(verbs)} ${get(tech_adjective)} and ${get(tech_adjective)} ${get(things)}s`
        case 2: 
            return `${get(excited)} to ${get(use)} ${get(glaze)} ${get(tech_adjective)} ${get(things)} ${get(connectors)} ${get(strategies)}`
    }
}

function intro(which = 1) {
    switch (which) {
        case 1:
            return `hi, i'm william, a ${get(adjectives)} ${get(title)} ${nonsentence(1)}, and ${nonsentence(2)}.`
        case 2:
            return `hey, my names william. i like ${get(verbs)} things.`
    }
}

function technologies(which = 1) {
    switch (which) {
        case 1:
            return ``
    }
}

function hobbies(which = 1) {
    switch (which) {
        case 1:
            return `hi, i'm william, a ${get(adjectives)} ${get(title)} ${nonsentence(1)}, ${nonsentence(2)}.`
    }
}

function tagline(which = 1) {
    switch (which) {
        case 1:
            return `If it's about solving problems and building cool stuff, I'm ready to jump in and get started! Let's create something great together!`
    }
}

function project(which = 1) {
    switch (which) {
        case 1:
            return `If it's about solving problems and building cool stuff, I'm ready to jump in and get started! Let's create something great together!`
    }
}


function algo() {
    console.log(intro(2))
}





// Create more possible sentence structures for nonsentences
// Consider how your gonna style the webpages, thats probably gonna be the fun part
// Make it a 50/50 chance whether or not there will be a navbar which can take you too the anchors
algo()