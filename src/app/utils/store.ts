import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/let';

export function onStateChangeObservable(store, path) {
  return Observable.create((observer) => {
    store.select(state => _.get(state, 'reducer.' + path))
      .subscribe((result) => {
        observer.next(result);
      });
  });
}
