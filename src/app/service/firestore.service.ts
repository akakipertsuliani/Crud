import { Injectable } from '@angular/core';
import { Firestore, getDocs, query, where } from '@angular/fire/firestore';
import { collection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: Firestore) { }

  getUserDataFromRoom(uid: string) {
    const userCollection = collection(this.firestore,  "userData");
    const filterData = query(userCollection, where("RoomID", "==", uid));
    return getDocs(filterData);
  }
}
