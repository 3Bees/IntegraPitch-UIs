
import * as firebase from "firebase";
import "firebase/firestore";
import { _storeData, _retrieveData } from './AsyncFuncs';
import { Platform } from 'react-native';
 
const config = {
  apiKey: "AIzaSyCoVEhH830x-4pf6cqdrn1J2vevdnHQtnM",
  authDomain: "scoutapp-1fc2c.firebaseapp.com",
  databaseURL: "https://scoutapp-1fc2c.firebaseio.com",
  projectId: "scoutapp-1fc2c",
  storageBucket: "scoutapp-1fc2c.appspot.com",
  messagingSenderId: "251339519580",
  appId: "1:251339519580:web:7d6f42b46ddee6a4bc9899",
  measurementId: "G-8FDM00F08X",
  timestampsInSnapshots: true
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export async function getAllOfCollection(collection) {
  let data = [];
  let querySnapshot = await firebase.firestore().collection(collection).get();
  querySnapshot.forEach(function (doc) {
    if (doc.exists) {
      //console.log(doc.data());
      data.push(doc.data());
    } else {
      console.log('No document found!');
    }
  });
  return data;
}
export async function getAllOfCollection2(collection) {
  let data = [];
  let querySnapshot = await firebase.firestore().collection(collection).get();
  querySnapshot.forEach(function (doc) {
    if (doc.exists) {
      //console.log(doc.data());
      data.push({ item: doc.data(), id: doc.id });
    } else {
      console.log('No document found!');
    }
  });
  return data;
}

export function getData(collection, doc, objectKey) {
  // check if data exists on the given path
  if (objectKey === undefined) {
    return firebase.firestore().collection(collection).doc(doc).get().then(function (doc) {
      if (doc.exists) {
        return doc.data();
      } else {
        return false;
      }
    })
  }
  else {
    return firebase.firestore().collection(collection).doc(doc).get().then(function (doc) {
      if (doc.exists && (doc.data()[objectKey] != undefined)) {
        return (doc.data()[objectKey]);
      } else {
        return false;
      }
    })
  }
}

export function getDataOrderBy(collection, doc, objectKey) {
  // check if data exists on the given path
  if (objectKey === undefined) {
    return firebase.firestore().collection(collection).doc(doc).get().then(function (doc) {
      if (doc.exists) {
        return doc.data();
      } else {
        return false;
      }
    }) 
  }
  else {
    return firebase.firestore().collection(collection).doc(doc).get().then(function (doc) {
      if (doc.exists && (doc.data()[objectKey] != undefined)) {
        return (doc.data()[objectKey]);
      } else {
        return false;
      }
    })
  }
}

export async function getDocRefByKeyValue(collection, key, value) {
  return firebase.firestore().collection(collection)
    .where(key, '==', value).get().then(function (querySnapshot) {
      return querySnapshot.docs[0];
    });
}

export async function getDocByKeyValue(collection, key, value) {
  let data = [];
  let querySnapshot = await firebase.firestore().collection(collection).where(key, "==", value).get();
  await querySnapshot.forEach(function (doc) {
    // console.log('doc id=>',doc.id)
    data.push(doc.data());
  });
  return data;
}
export async function getDocByKeyValueDocID(collection, key, value) {
  let data = [];
  let querySnapshot = await firebase.firestore().collection(collection).where(key, "==", value).get();
  await querySnapshot.forEach(function (doc) {
    // console.log('doc id=>',doc.id)
    data.push({ item: doc.data(), id: doc.id });
  });
  return data;
}

export async function getDocByKeyValue2(collection, key, value) {
  let data = [];
  let querySnapshot = await firebase.firestore().collection(collection).where(key, "==", value).get();
  await querySnapshot.forEach(function (doc) {
    data.push({ item: doc.data(), id: doc.id });
  });
  return data;
}
export async function getDocWithinRange(collection, doc, strSearch) {
  let strlength = strSearch.length;
  let strFrontCode = strSearch.slice(0, strlength - 1);
  let strEndCode = strSearch.slice(strlength - 1, strSearch.length);

  let startcode = strSearch;
  let endcode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);

  return firebase.firestore().collection(collection)
    .where(doc, '>=', startcode)
    .where(doc, '<', endcode).get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data());
      });
    });
}


export async function saveData(collection, doc, jsonObject) {
  await firebase.firestore().collection(collection).doc(doc).set(jsonObject, { merge: true }).catch(function (error) {
    console.error("Error writing document: ", error);
  });
  //console.log("Document successfully written!");

}

export async function saveDataWithoutDocId(collection, jsonObject) {
  let docRef = await firebase.firestore().collection(collection).doc();
  docRef.set(jsonObject);
  return docRef;
}

export async function addToArray(collection, doc, array, value) {
  let docRef = await
    firebase.firestore().collection(collection).doc(doc);
  // console.log('Value',value)
  let docData = await docRef.get();
  if (docData.exists && (docData.data()[array] != undefined)) {
    // console.log('update',value)
    docRef.update({
      [array]: firebase.firestore.FieldValue.arrayUnion(value)
    });

  }
  else {
    // console.log('saveData',value)
    saveData(collection, doc, { [array]: [value] });
  }
}

export async function updateArray(collection, doc, array, value, index) {
  let docRef = await firebase.firestore().collection(collection).doc(doc);
  let docData = await docRef.get();

  if (docData.exists && (docData.data()[array][index] != undefined)) {
    docRef.update({
      [array]: firebase.firestore.FieldValue.arrayRemove(docData.data()[array][index]),

    }).then(async () => {
      let docRef1 = await firebase.firestore().collection(collection).doc(doc);
      let docData1 = await docRef1.get();
      if (docData1.exists && (docData1.data()[array] != undefined)) {
        docRef1.update({
          [array]: firebase.firestore.FieldValue.arrayUnion(value),
        })
      }

    });
  }
}
export async function removeItemfromArray(collection, doc, array, index) {
  let docRef = await firebase.firestore().collection(collection).doc(doc);
  let docData = await docRef.get();

  if (docData.exists && (docData.data()[array][index] != undefined)) {
    docRef.update({
      [array]: firebase.firestore.FieldValue.arrayRemove(docData.data()[array][index]),

    })
  }
}

export async function addToArrayUpdate(collection, doc, array, value) {
  let docRef = await
    firebase.firestore().collection(collection).doc(doc);
  let docData = await docRef.get();
  if (docData.exists && (docData.data()[array] != undefined)) {
    docRef.set({
      [array]: firebase.firestore.FieldValue.arrayUnion(value)
    });
  }

}
export async function downloadImage(folder, imageName) {
  var storageRef = firebase.storage().ref();
  var pathRef = storageRef.child(folder + '/' + imageName);

  let url = await pathRef.getDownloadURL()
  return url;
}
export async function downloadImage2(imageName) {
  var storageRef = firebase.storage().ref();
  var pathRef = storageRef.child('/' + imageName);

  let url = await pathRef.getDownloadURL()
  return url;
}

export async function deleteDoc(collection, doc) {
  let db = firebase.firestore();
  await db.collection(collection).doc(doc).delete().catch(function (error) {
    console.error("Error removing document: ", error);
  });
}

export async function updateField(collection, doc, field, fieldValue) {
  // console.log('field',[field])
  let db = firebase.firestore();
  db.collection(collection).doc(doc).update({
    [field]: fieldValue
  }).catch(function (error) {
    console.error("Error removing document: ", error);
  });
}
export async function uriToBlob(uri) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      // return the blob
      resolve(xhr.response);
    };

    xhr.onerror = function () {
      // something went wrong
      reject(new Error('uriToBlob failed'));
    };
    // this helps us get a blob
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);

    xhr.send(null);
  });
}


export default firebase;