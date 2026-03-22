export type Project = {
  name: string;
  description: string;
  tech: string[];
  github: string;
};

export const projects: Project[] = [
  {
    name: "SafePath AI",
    description:
      "AI road hazard detection system using computer vision to identify potholes, animals, and vehicles with real-time safety cues.",
    tech: ["Python", "OpenCV", "Computer Vision"],
    github: "https://github.com/Prajith-VL/GEN-AI-project-SafePath-AI",
  },
  {
    name: "TruthLens",
    description:
      "AI fake news detection web application that classifies content using TF-IDF and logistic regression.",
    tech: ["Python", "TF-IDF", "Logistic Regression", "React", "FastAPI"],
    github: "https://github.com/Prajith-VL/TruthLens",
  },
  {
    name: "CAPE – Context Aware Personal Executive",
    description:
      "AI personal knowledge assistant integrating Gmail, Drive, and Sheets with semantic search powered by LLM retrieval.",
    tech: ["Python", "FAISS", "LLM", "Firebase", "Google Workspace APIs"],
    github: "https://github.com/ldmembers/infygen",
  },
];
