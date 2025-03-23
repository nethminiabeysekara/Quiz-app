export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: string
}

export const quizData: QuizQuestion[] = [
  {
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system",
      "A server-side framework",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
  },
  {
    question: "Which company developed React?",
    options: ["Google", "Facebook (Meta)", "Microsoft", "Amazon"],
    correctAnswer: "Facebook (Meta)",
  },
  {
    question: "What is JSX in React?",
    options: [
      "A database query language",
      "A styling framework",
      "A syntax extension that allows HTML in JavaScript",
      "A testing framework",
    ],
    correctAnswer: "A syntax extension that allows HTML in JavaScript",
  },
  {
    question: "What is a React component?",
    options: [
      "A CSS file",
      "A reusable piece of code that returns UI elements",
      "A database table",
      "A JavaScript variable",
    ],
    correctAnswer: "A reusable piece of code that returns UI elements",
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A physical component of the computer",
      "A lightweight copy of the actual DOM",
      "A new HTML specification",
      "A browser extension",
    ],
    correctAnswer: "A lightweight copy of the actual DOM",
  },
  {
    question: "What hook is used to add state to a functional component?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: "useState",
  },
  {
    question: "What does the useEffect hook do?",
    options: [
      "Manages component state",
      "Creates context for components",
      "Performs side effects in functional components",
      "Optimizes rendering performance",
    ],
    correctAnswer: "Performs side effects in functional components",
  },
  {
    question: "What is React Router used for?",
    options: ["State management", "API calls", "Navigation and routing in React applications", "Form validation"],
    correctAnswer: "Navigation and routing in React applications",
  },
  {
    question: "What is Redux?",
    options: ["A state management library", "A React component", "A styling framework", "A testing tool"],
    correctAnswer: "A state management library",
  },
  {
    question: "What is the purpose of keys in React lists?",
    options: [
      "To style list items",
      "To help React identify which items have changed, added, or removed",
      "To create hyperlinks",
      "To encrypt data",
    ],
    correctAnswer: "To help React identify which items have changed, added, or removed",
  },
]

