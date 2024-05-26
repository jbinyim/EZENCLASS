import { atom, selector } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  key: "toDos",
  default: {
    to_do: ["javascript", "typescript"],
    doing: ["html", "css", "react"],
    done: ["node"],
  },
});
