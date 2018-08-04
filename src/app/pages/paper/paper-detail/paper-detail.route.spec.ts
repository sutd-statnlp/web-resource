import { PAPER_DETAIL_ROUTE } from './paper-detail.route';
import { Route } from '@angular/router';

describe('PAPER_DETAIL_ROUTE', () => {
  let route: Route;

  beforeEach(() => {
    route = PAPER_DETAIL_ROUTE;
  });

  it('should create an route instance', () => {
    expect(route).toBeTruthy();
  });
  it('should have empty path', () => {
    expect(route.path).not.toBeNull();
    expect(route.path).toEqual('papers/:id');
  });
  it('should have component', () => {
    expect(route.component).not.toBeNull();
  });
  it('should have data', () => {
    expect(route.data).not.toBeNull();
  });
});
