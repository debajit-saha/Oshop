import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('/categories', ref => {
      let q = ref.orderByChild('name');
      return q;
    }).snapshotChanges().pipe(
      map(actions => actions.map(a => ({ $key: a.key, ...a.payload.val() }))
      ));
  }
}
