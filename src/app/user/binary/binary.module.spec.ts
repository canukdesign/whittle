import { BinaryModule } from './binary.module';

describe('BinaryModule', () => {
  let binaryModule: BinaryModule;

  beforeEach(() => {
    binaryModule = new BinaryModule();
  });

  it('should create an instance', () => {
    expect(binaryModule).toBeTruthy();
  });
});
