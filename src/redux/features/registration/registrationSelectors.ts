import {selectCurrentLanguage} from '@features/language';
import {RootState} from '@redux/store';

export const selectRegistrationLoading = (state: RootState) =>
  state.registration.isLoading;
export const selectRegistrationError = (state: RootState) =>
  state.registration.error;
export const selectRegistrationToken = (state: RootState) =>
  state.registration.userData.token;
export const selectRegistrationUserData = (state: RootState) =>
  state.registration.userData;

export const selectRegistrationTexts = (state: RootState, name: string) =>
  state.registration.texts[name][selectCurrentLanguage(state)];

export const selectRegistrationLists = (state: RootState, name: string) =>
  state.registration.lists[name][selectCurrentLanguage(state)];

export const selectRegistrationListByIndex =
  (index: number) => (state: RootState, name: string) =>
    state.registration.lists[name][selectCurrentLanguage(state)][index];

export const selectRegistrationForm = (state: RootState, name: string) =>
  state.registration.form[name][selectCurrentLanguage(state)];

export const selectRegistrationTextsObject =
  (keys: string[]) =>
  (state: RootState): Record<string, string> => {
    const currentLanguage = selectCurrentLanguage(state);
    const texts = state.registration.texts;

    return keys.reduce((result, key) => {
      result[key] = texts[key][currentLanguage];
      return result;
    }, {});
  };

export const selectRegistrationFormObject =
  (keys: string[]) =>
  (state: RootState): Record<string, string> => {
    const currentLanguage = selectCurrentLanguage(state);
    const form = state.registration.form;

    return keys.reduce((result, key) => {
      result[key] = form[key][currentLanguage];
      return result;
    }, {});
  };
