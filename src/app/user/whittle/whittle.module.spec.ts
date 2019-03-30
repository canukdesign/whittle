import { WhittleModule } from './whittle.module';

describe('WhittleModule', () => {
  let whittleModule: WhittleModule;

  beforeEach(() => {
    whittleModule = new WhittleModule();
  });

  it('should create an instance', () => {
    expect(whittleModule).toBeTruthy();
  });
});
