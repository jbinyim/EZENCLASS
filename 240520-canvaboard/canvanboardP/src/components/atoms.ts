import { atom, selector } from "recoil";

export interface IToDo {
  id: number;
  text: string;
  category: "To_Do" | "Doing" | "Done";
}

export const categoryState = atom({
  key: "category",
  default: "To_Do",
});

export const toDoState = atom<IToDo[]>({
  key: "todo",
  default: [],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);

    // if (category === "To_Do") {
    //   return toDos.filter((todo) => todo.category === "To_Do");
    // }
    // if (category === "Doing") {
    //   return toDos.filter((todo) => todo.category === "Doing");
    // }
    // if (category === "Done") {
    //   return toDos.filter((todo) => todo.category === "Done");
    // }
  },
});
