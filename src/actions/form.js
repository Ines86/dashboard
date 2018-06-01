
export const addValues = (
  {
    firstName = "",
    lastName = "",
    email = "",
    sex = "",
    favoriteColor = "",
    employed = undefined,
    notes = ""
  } = {}
) => ({
  type: 'ADD_VALUES',
  person: {
    firstName,
    lastName,
    email,
    sex,
    favoriteColor,
    employed,
    notes
  }
});

export const addWizardValues = (
  {
    firstName = "",
    lastName = "",
    email = "",
    sex = "",
    employed = undefined,
    notes = ""
  } = {}
) => ({
  type: 'ADD_WIZARD_VALUES',
  person: {
    firstName,
    lastName,
    email,
    sex,
    employed,
    notes
  }
});
