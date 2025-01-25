import { create } from "zustand";
import { type Question } from "../types";
import confetti from "canvas-confetti";
import { persist, devtools } from "zustand/middleware";
//devtolss tener extension devtool redux

interface State {
  questions: Question[];
  currentQuestion: number;
  fetchQuestions: (limit: number) => Promise<void>;
  selectAnswer: (questionId: number, answerIndex: number) => void;
  goNextQuestion: () => void;
  goPreviusQuestion: () => void;
  reset: () => void;
}

export const useQuestionStore = create<State>()(
  devtools(
    persist(
      (set, get) => {
        return {
          questions: [],
          currentQuestion: 0,

          fetchQuestions: async (limit: number) => {
            const res = await fetch("http://localhost:5173/data.json");
            const json = await res.json();

            const questions = json
              .sort(() => Math.random() - 0.5)
              .slice(0, limit);
            set({ questions }, undefined, "FETCH_QUESTIONS");
          },

          selectAnswer: (questionId: number, answerIndex: number) => {
            const { questions } = get();
            // estructureClone para clonar el objeto
            const newQuestions = structuredClone(questions);
            // indice de la pregunta
            const questionIndex = newQuestions.findIndex(
              (q) => q.id === questionId
            );
            //obtenemos info de la pregunta
            const questionInfo = newQuestions[questionIndex];
            // averiguamos si el usuario ha selecciona la respuesta correcta
            const isCorrectUserAnswer =
              questionInfo.correctAnswer === answerIndex;
            if (isCorrectUserAnswer) confetti();
            // cambiar esta info en la copia de la pregunta
            newQuestions[questionIndex] = {
              ...questionInfo,
              isCorrectUserAnswer,
              userSelectedAnswer: answerIndex,
            };
            // actu estado

            set({ questions: newQuestions }, undefined, "SELECT_ANSWER");
          },

          goNextQuestion: () => {
            const { currentQuestion, questions } = get();
            const nextQuestion = currentQuestion + 1;

            if (nextQuestion < questions.length) {
              set(
                { currentQuestion: nextQuestion },
                undefined,
                "NEXT_QUESTION"
              );
            }
          },

          goPreviusQuestion: () => {
            const { currentQuestion } = get();
            const previusQuestion = currentQuestion - 1;

            if (previusQuestion >= 0) {
              set(
                { currentQuestion: previusQuestion },
                undefined,
                "PREVIUS_QUESTION"
              );
            }
          },

          reset: () => {
            set({ currentQuestion: 0, questions: [] }, undefined, "RESET");
          },
        };
      },
      {
        name: "questions",
      }
    )
  )
);
