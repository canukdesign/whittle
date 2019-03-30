import { ChoicesModule } from './choices.module';

describe('ChoicesModule', () => {
  let choicesModule: ChoicesModule;

  beforeEach(() => {
    choicesModule = new ChoicesModule();
  });

  it('should create an instance', () => {
    expect(choicesModule).toBeTruthy();
  });
});
