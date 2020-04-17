export class PersonnummerError extends Error {
  constructor () {
    super('Invalid swedish social security number');
  }
}