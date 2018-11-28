import { EchartsmoduleModule } from './echartsmodule.module';

describe('EchartsmoduleModule', () => {
  let echartsmoduleModule: EchartsmoduleModule;

  beforeEach(() => {
    echartsmoduleModule = new EchartsmoduleModule();
  });

  it('should create an instance', () => {
    expect(echartsmoduleModule).toBeTruthy();
  });
});
