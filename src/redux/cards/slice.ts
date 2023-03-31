import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ICardsState {
  cards: string[];
}

const initialState: ICardsState = {
  cards: [],
};

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    getAllCards: (state, action) => {
      state.cards = ["teste1, teste2, teste3"];
    },
  },
});

export const { getAllCards } = cardSlice.actions;

// Aqui eu entro no slice de nome "cards" e pego o estado para exportar
export const selectCards = (state: RootState) => state.cards;

export default cardSlice.reducer;
