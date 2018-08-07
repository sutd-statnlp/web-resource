import { DiscussionListPipe } from './discussion-list.pipe';

describe('DiscussionListPipe', () => {
  let pipe: DiscussionListPipe;

  beforeEach(() => {
    pipe = new DiscussionListPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return discussions that have matching title and sub', () => {
    let discussions = pipe.transform(
      [
        {
          title: 'Hello World',
          sub: `Let's make a Hello World app for fun!`
        }
      ], 'hell')
    expect(discussions).not.toBeNull();
    expect(discussions.length).toBeGreaterThan(0);
  });
});
