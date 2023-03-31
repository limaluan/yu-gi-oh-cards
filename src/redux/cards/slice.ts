import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { api } from "../../services/api";

interface ICard {
  name: string;
  card_images: [
    image: {
      image_url: string;
    }
  ];
  quantity: number;
}

interface ICardsState {
  cards: ICard[];
  deck: ICard[];
  showCard: ICard;
  status: "idle" | "loading" | "failed";
}

const initialState: ICardsState = {
  cards: [],
  deck: [],
  showCard: {} as ICard,
  status: "idle",
};

export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
  try {
    const { data } = await api.get("");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

const cardSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    nextCard: (state) => {
      const index = state.cards.findIndex(
        (card) => card.name === state.showCard.name
      );
      state.showCard = state.cards[index + 1];
    },
    previousCard: (state) => {
      const index = state.cards.findIndex(
        (card) => card.name === state.showCard.name
      );
      index ? (state.showCard = state.cards[index - 1]) : "";
    },
    addToDeck: (state, { payload }) => {
      state.deck = [...state.deck, payload];
    },
    removeFromDeck: (state, { payload }) => {
      const newDeck = state.deck.filter((card) => card.name != payload.name);
      state.deck = newDeck;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCards.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.cards = payload;
        state.showCard = state.cards[0];
      })
      .addCase(fetchCards.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addToDeck, nextCard, previousCard, removeFromDeck } = cardSlice.actions;

// Aqui eu entro no slice de nome "cards" e pego o estado para exportar
export const selectCards = (state: RootState) => state.cards;

export default cardSlice.reducer;
