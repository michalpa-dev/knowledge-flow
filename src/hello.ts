interface Developer {
  name: string;
  yearsOfExperience: number;
}

function createWelcomeMessage(
  developer: Developer
): string {
  return `Hello ${developer.name}, welcome to KnowledgeFlow!`;
}

const developer: Developer = {
  name: "Developer",
  yearsOfExperience: 4
};

console.log(createWelcomeMessage(developer));