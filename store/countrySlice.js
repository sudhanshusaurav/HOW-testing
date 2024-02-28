import {
  AddCountry,
  GetAllCountries,
  UpdateCountry,
} from "@/services/countryService";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    try {
      console.log("fetching countries...");
      const res = await GetAllCountries();
      return res.data.data;
    } catch (error) {}
  }
);

export const addNewCountry = createAsyncThunk(
  "countries/addNewCountry",
  async (values) => {
    try {
      const res = await AddCountry(values);
      toast.success(res.data.message);
      return res.data.data;
    } catch (error) {}
  }
);

export const updateCountryById = createAsyncThunk(
  "countries/updateCountryById",
  async (values) => {
    try {
      const res = await UpdateCountry(values);
      return res.data.data;
    } catch (error) {}
  }
);

const countrySlice = createSlice({
  name: "country",
  initialState: {
    countries: [],
    status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    newlyAddedCountry: null,
  },
  reducers: {
    resetCountryStatus(state, { payload }) {
      state.status = null;
    },
    resetNewlyAddedCountry(state, { payload }) {
      state.newlyAddedCountry = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.status = "success";
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(updateCountryById.fulfilled, (state, action) => {
        const index = state.countries.findIndex(
          (country) => country._id === action.payload._id
        );
        if (index !== -1) {
          const countries = [...state.countries];
          countries[index] = action.payload;
          state.countries = countries;
          state.status = "success";
        }
      })
      .addCase(addNewCountry.fulfilled, (state, action) => {
        state.status = "success";
        state.newlyAddedCountry = action.payload;
        state.countries = [action.payload, ...state.countries];
      });
  },
});

export const SelectAllCountries = (state) => state.countries.countries;
export const selectNewlyAddedCountry = (state) =>
  state.countries.newlyAddedCountry;
export const fetchCountryStatus = (state) => state.countries.status;
export const selectCountryById = (state, countryId) =>
  state.countries.countries.find((country) => country._id === countryId);

export const { resetCountryStatus, resetNewlyAddedCountry } =
  countrySlice.actions;

export default countrySlice.reducer;
