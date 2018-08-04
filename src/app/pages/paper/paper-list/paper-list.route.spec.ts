import { PAPER_LIST_ROUTE } from './paper-list.route';
import { Route } from '@angular/router';

describe('PAPER_LIST_ROUTE', () => {
  let route: Route;

  beforeEach(() => {
    route = PAPER_LIST_ROUTE;
  });

  it('should create an route instance', () => {
    expect(route).toBeTruthy();
  });
  it('should have empty path', () => {
    expect(route.path).not.toBeNull();
    expect(route.path).toEqual('papers');
  });
  it('should have component', () => {
    expect(route.component).not.toBeNull();
  });
  it('should have data', () => {
    expect(route.data).not.toBeNull();
  });
});
