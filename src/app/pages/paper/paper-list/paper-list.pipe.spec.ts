import { PaperListPipe } from './paper-list.pipe';

describe('PaperListPipe', () => {
  let pipe: PaperListPipe;
  beforeEach(() => {
    pipe = new PaperListPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('should return list of pappers that have matching title and abstract', () => {
    let papers = pipe.transform([
      {
        title: 'Hello World',
        abs: `Let's make a Hello World app for fun!`
      }
    ], 'hell')
    expect(papers).not.toBeNull();
    expect(papers.length).toBeGreaterThan(0);
  });
});
