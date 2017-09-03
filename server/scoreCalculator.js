const addScoreForAgent = (score, agentName) => {
  if (agentName === 'Kjekk og stram' || agentName === 'Indisk sommer' || agentName === 'Au au' || agentName === 'Alderstilpasset opplæring') {
    return score +30;
  }

  if (agentName === 'Politisk fravær' || agentName === 'Sehr teuer') {
    return score + 50;
  }

  if (agentName === 'Lose yourself') {
    return score +40;
  }
  return score + 10;
};

// first 10 tags => 10 points, next 10 tags => 20 points, etc.
const addScoreForTagCount = (score, prevTagCount, nextTagCount) => {
  if (prevTagCount === nextTagCount) return score;

  const prevTagDividedBy10 = Math.floor(prevTagCount/10);
  const nextTagDividedBy10 = Math.floor(nextTagCount/10);

  let scoreInc = 0;

  if (nextTagDividedBy10 > prevTagDividedBy10) {
    const diff = nextTagDividedBy10 - prevTagDividedBy10;

    if (diff === 1) {
      scoreInc = nextTagDividedBy10*10;
    } else {
      for (let block10 = nextTagDividedBy10-diff; block10 > nextTagDividedBy10; block10++) {
        scoreInc += block10*10;
      }
    }
  }

  return score + scoreInc;
}

const addNewTags = (myTags, collectedTags, addedAgentTags) => {
  const tagsIdontHave = addedAgentTags.filter( tag => myTags.indexOf(tag) === -1);
  const tagsNotInCollection = tagsIdontHave.filter( tag => collectedTags.indexOf(tag) === -1);
  return collectedTags.concat(tagsNotInCollection);
};

 const addScoreForTagNewTags = (score, myTags, newTags) => {
  let scoreInc = 0;
  newTags.forEach( tag => {
    scoreInc += myTags[tag];
  });
  return score + scoreInc;
};

const addTagsForNewAgent = (myTags, newTags) => {
  if (!newTags) return myTags;

  newTags.forEach( tag => {
    myTags[tag] = (myTags[tag]||0)+1;
  });

  return myTags;
};

exports.addScoreForAgent = addScoreForAgent;
exports.getNewCollectedTags = addNewTags;
exports.addScoreForTagCount = addScoreForTagCount;
exports.addScoreForTagNewTags = addScoreForTagNewTags;
exports.addTagsForNewAgent = addTagsForNewAgent;