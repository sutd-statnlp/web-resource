
import { Observable, of} from 'rxjs';
import { IModel } from './model.interace';

export abstract class AbstractService<T extends IModel> {
  protected list: T[];
  protected map: Map<string, number>;
  constructor () {
    this.list = [];
    this.map = new Map<string, number>();
  }
  loadMap(list: T[]): Map<string, number> {
    let map = new Map<string,number>();
    for (let index = 0; index < list.length; index++) {
      const item = list[index];
      map.set(item.id, index);
    }
    return map;
  }
  abstract getKeywords(): Observable<string[]>;
  abstract recent(): Observable<T[]>;
  abstract all(): Observable<T[]>;
  abstract special(): Observable<T[]>;
  getIndex(id: string): number {
    return this.map.get(id);
  }
  get(id: string): T {
    let index = this.getIndex(id);
    if (index === undefined) {
      return null;
    }
    return this.list[index];
  }
  setList(list: T[]): boolean {
    this.list = list;
    this.map = this.loadMap(list);
    return this.map.size > 0;
  }
  getOffsetID(id: string, offset: number): string {
    let index = this.getIndex(id);
    if (index === undefined) {
      return null;
    }
    index += offset;
    if (index >= this.list.length || index < 0) {
      return null;
    }
    return this.list[index].id;
  }
  getNextID(id: string): string {
    return this.getOffsetID(id, 1);
  }
  getPreviousID(id: string): string {
    return this.getOffsetID(id, -1);
  }
  getAbstractAll(): Observable<T[]>{
    return of(this.list);
  }
}
