import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "../../types";

const selecctHomePage = (state: IRootState) => state.homePage;

export const makeSelectAnimePage = createSelector(
    selecctHomePage,
    (homePage) => homePage.animePage
);