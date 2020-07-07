import { atom, selector } from "recoil";

export const todoListState = atom({
  key: 'todoListState',
  default: JSON.parse(localStorage.getItem('todo')),
});

export const checkedItemIdState = atom({
  key: 'checkedItemIndexState',
  default: JSON.parse(localStorage.getItem('todo')).length ? JSON.parse(localStorage.getItem('todo')).id : null,
});

export const checkedItemState = selector({
  key: 'checkedItemState',
  get: ({ get }) => {
    const id = get(checkedItemIdState);
    const list = get(todoListState);
    return list.find(item => item.id === id) || list[0];
  }
});

export const colorPickerState = atom({
  key: 'colorPicker',
  default: '#000000',
})