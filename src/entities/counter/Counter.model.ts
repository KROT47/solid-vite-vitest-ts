import { createApi, createStore } from 'effector';

export const $counterState = createStore<number>(0);

export const counterApi = createApi($counterState, {
  inc: (state) => state + 1,
  dec: (state) => state - 1,
});
