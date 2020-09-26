import Validator from '../contracts/Validator';


abstract class BaseValidator implements Validator {
  protected nextValidator: Validator | null = null;
  protected score = 0;

  public getScore(): number {
    return this.score;
  }

  public setNext(validator: Validator): Validator {
    this.nextValidator = validator;
    return validator;
  }

  public handle(content: string): boolean {
    if (this.nextValidator) {
      return this.nextValidator.handle(content);
    }
    return false;
  }

  public increaseScore(incrementBy = 1): void {
    this.score += incrementBy;
  }

  
}

export default BaseValidator;
