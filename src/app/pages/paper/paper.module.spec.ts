import { PaperModule } from './paper.module';

describe('PaperModule', () => {
  let paperModule: PaperModule;

  beforeEach(() => {
    paperModule = new PaperModule();
  });

  it('should create an instance', () => {
    expect(paperModule).toBeTruthy();
  });
});
