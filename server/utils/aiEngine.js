const natural = require("natural");

const TfIdf = natural.TfIdf;

const dataset = [
  "Frontend Developer Internship React",
  "Backend Developer Node.js Internship",
  "Machine Learning Project Python",
  "Data Science Course",
  "Web Development Bootcamp"
];

function getRecommendations(userSkills) {
  const tfidf = new TfIdf();

  dataset.forEach(item => tfidf.addDocument(item));
  tfidf.addDocument(userSkills);

  let scores = [];

  dataset.forEach((item, i) => {
    const score = tfidf.tfidf(userSkills, i);
    scores.push({ item, score });
  });

  return scores.sort((a, b) => b.score - a.score).slice(0, 3);
}

module.exports = getRecommendations;