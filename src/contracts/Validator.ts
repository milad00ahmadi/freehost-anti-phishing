interface Validator {
  setNext(validator: Validator): Validator;

  handle(content: string): boolean;
}
export default Validator;