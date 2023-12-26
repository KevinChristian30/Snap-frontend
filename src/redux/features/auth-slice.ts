import CurrentUserResponseDTO from "@/dto/response/CurrentUserResponse.dto";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: CurrentUserResponseDTO;
}

const initialState: InitialState = {
  value: new CurrentUserResponseDTO("", [], "", false)
}

export const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    signOut: () => {
      return initialState;
    },
    signIn: (_, action: PayloadAction<CurrentUserResponseDTO>) => {
      return {
        value: action.payload
      }
    }
  }
});

export const { signOut, signIn } = auth.actions;
export default auth.reducer;