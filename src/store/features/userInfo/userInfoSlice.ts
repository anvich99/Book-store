import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserInfo, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";
import { AuthValues } from "types";

interface UserState {
  email: string | null;
  creationTime: string | undefined;
}

export const fetchSignUpUser = createAsyncThunk<UserState, AuthValues>(
  "user/fetchSignUpUser",
  async ({ email, password }) => {
    // try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    return { email: user.email, creationTime: user.metadata.creationTime };
    // } catch (error) {}
  },
);

const initialState = {} as UserState;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state, { payload }) => {});
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.email = payload.email;
      state.creationTime = payload.creationTime;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {});
  },
});

export default userSlice.reducer;
