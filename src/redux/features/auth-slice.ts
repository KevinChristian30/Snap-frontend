import CurrentUserResponseDTO from "@/dto/response/CurrentUserResponse.dto";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: CurrentUserResponseDTO;
}

const initialState: InitialState = {
  value: {
    email: "",
    is_email_verified: false,
    roles: [],
    username: ""
  }
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
        value: {
          email: action.payload.email,
          is_email_verified: action.payload.is_email_verified,
          roles: action.payload.roles,
          username: action.payload.username
        }
      }
    }
  }
});

export const { signOut, signIn } = auth.actions;
export default auth.reducer;