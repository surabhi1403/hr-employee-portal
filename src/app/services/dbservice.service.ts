import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DbService {
  dbPath = "users";
  constructor(public db: AngularFirestore) {}

  documentToDomainObject = (_) => {
    const object = _.payload.doc.data();
    object.id = _.payload.doc.id;
    return object;
  };

  getAvatars() {
    return this.db.collection(this.dbPath).valueChanges();
  }

  getUser(userKey) {
    return this.db
      .collection(this.dbPath)
      .doc(userKey)
      .snapshotChanges()
      .pipe(map((actions: any) => actions.map(this.documentToDomainObject)));
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection(this.dbPath).doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection(this.dbPath).doc(userKey).delete();
  }

  getUsers() {
    return this.db
      .collection(this.dbPath)
      .snapshotChanges()
      .pipe(map((actions: any) => actions.map(this.documentToDomainObject)));
  }

  searchUsers(searchValue) {
    return this.db
      .collection(this.dbPath, (ref) =>
        ref
          .where("nameToSearch", ">=", searchValue)
          .where("nameToSearch", "<=", searchValue + "\uf8ff")
      )
      .snapshotChanges();
  }

  searchUsersByAge(value) {
    return this.db
      .collection(this.dbPath, (ref) => ref.orderBy("age").startAt(value))
      .snapshotChanges();
  }

  createUser(value, avatar) {
    return this.db.collection(this.dbPath).add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age),
      avatar: avatar,
    });
  }
}
