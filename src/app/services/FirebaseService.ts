import { AngularFirestore } from "@angular/fire/compat/firestore"

export class FirebaseService {
    constructor(
      public afs: AngularFirestore,
    ){}
    addUser(value){
      return new Promise<any>((resolve, reject) => {
        this.afs.collection('/users').add({
          name: value.name
     
        })
        .then((res) => {
          resolve(res)
        },err => reject(err))
      })
    }
  }