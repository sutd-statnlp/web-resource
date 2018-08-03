import { DISCUSSION_DETAIL_ROUTE } from './discussion-detail.route';
import { Route } from '@angular/router';

describe('DISCUSSION_DETAIL_ROUTE', () => {
  let route: Route;

  beforeEach(() => {
    route = DISCUSSION_DETAIL_ROUTE;
  });

  it('should create an route instance', () => {
    expect(route).toBeTruthy();
  });
  it('should have empty path', () => {
    expect(route.path).not.toBeNull();
    expect(route.path).toEqual('discussions/:id');
  });
  it('should have component', () => {
    expect(route.component).not.toBeNull();
  });
  it('should have data', () => {
    expect(route.data).not.toBeNull();
  });
});
