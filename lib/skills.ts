export type SkillCategory = {
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    items: ["Python", "Java (Beginner)", "C", "JavaScript"],
  },
  {
    title: "AI / Machine Learning",
    items: [
      "Machine Learning",
      "Computer Vision",
      "TF-IDF",
      "Logistic Regression",
      "Large Language Models",
    ],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "React", "Node.js", "FastAPI"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
];
