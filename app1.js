var pronouns = ["the", "our"];
var adjs = ["great", "big"];
var nouns = ["jogger", "racoon"];

for (let pronoun of pronouns) {
  for (let adj of adjs) {
    for (let noun of nouns) {
      console.log(pronoun + adj + noun + ".com");
    }
  }
}
