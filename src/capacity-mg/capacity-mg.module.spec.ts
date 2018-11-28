import { CapacityMgModule } from './capacity-mg.module';

describe('CapacityMgModule', () => {
  let capacityMgModule: CapacityMgModule;

  beforeEach(() => {
    capacityMgModule = new CapacityMgModule();
  });

  it('should create an instance', () => {
    expect(capacityMgModule).toBeTruthy();
  });
});
