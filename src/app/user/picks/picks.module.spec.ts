import { PicksModule } from './picks.module';

describe('PicksModule', () => {
  let picksModule: PicksModule;

  beforeEach(() => {
    picksModule = new PicksModule();
  });

  it('should create an instance', () => {
    expect(picksModule).toBeTruthy();
  });
});
