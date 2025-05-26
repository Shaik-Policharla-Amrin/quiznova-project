// User-related types
export interface User {
  id: string;
  email: string;
  name?: string;
}

// Quiz-related types
export interface Quiz {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  createdAt: Date;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctOptionIndex: number;
}

export interface QuizAttempt {
  quizId: string;
  answers: number[];
  score: number;
  completedAt: Date;
}

// Form types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData extends LoginFormData {
  name: string;
}