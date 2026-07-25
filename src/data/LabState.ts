export let currentIdea = "";

export let launchScore = 0;


export function setIdea(idea: string) {

  currentIdea = idea;

}



export function calculateScore() {

  let score = 50;


  if (currentIdea.length > 20) {
    score += 15;
  }


  if (currentIdea.length > 50) {
    score += 10;
  }


  const idea = currentIdea.toLowerCase();


  if (
    idea.includes("ai") ||
    idea.includes("app") ||
    idea.includes("platform")
  ) {

    score += 15;

  }


  launchScore = Math.min(score, 100);


  return launchScore;

}