import firebase from 'firebase';
import firestore from 'firebase/firestore';
import { saveData, uriToBlob, downloadImage } from './utility';
 
export async function VendorSignUp(email, password, object) {
  await firebase.auth().createUserWithEmailAndPassword(email, password).
    then(async (user) => {
      alert('Sign Up Successful! we send a message to the email...To verify your email address, click the link and sign')
      let actions = [user.user.sendEmailVerification()]
      await Promise.all(actions).then(async () => {
        if(object.image === '') {
            await saveData('Vendor_Login', user.user.uid, { name: object.name, fullName: object.fullName, businesName: object.businesName, email: object.email, flag: true, uid: user.user.uid, image: '', phoneNumber: object.phoneNumber, website: object.website, location: object.location, typeLocation: object.typeLocation ,reviews:0 ,rating:0})
        } 
        else{
            let file = await uriToBlob(object.image)
            const uploadTask = firebase.storage().ref(`VendorImages/${object.imagePath}`).put(file);
            console.log('file',file)
            uploadTask.on('state_changed',
              (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                if (progress == 100) {  }
              }, (error) => {
                console.log('error 1', error);
              },
              async () => {  
                await downloadImage('VendorImages', object.imagePath).then(async (uri) => {
                  if (uri) {
                    console.log('uri',uri)
                    await saveData('Vendor_Login', user.user.uid, { name: object.name, fullName: object.fullName, businesName: object.businesName, email: object.email, flag: true, uid: user.user.uid, image: uri, phoneNumber: object.phoneNumber, website: object.website, location: object.location, typeLocation: object.typeLocation,reviews:0 ,rating:0 })
                  }
                })
              }
          )
        }

      }).catch((error) => { alert(error.message) })

    }).catch((error)=> {
      alert(error.code + ': ' + error.message);
    });
}
export async function signInWithEmail(email, password) {
  let success = true;
  await firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    success = false;
    alert(error.code + ': ' + error.message);
  });
  return success;
}
export async function signInWithPhoneNumber(phoneNo, password) {
  let success = true;
  await firebase.auth().signInWithEmailAndPassword(phoneNo, password).catch(function (error) {
    success = false;
    alert(error.code + ': ' + error.message);
  });
  return success;
}
export async function getCurrentUserId() {
  var user = firebase.auth().currentUser;
  if (user != null) {
    return user.uid;
  }
}
