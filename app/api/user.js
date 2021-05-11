import app from "../auth/firebase";

// Example of user
const listing = {
  name: "Bertrand Gogniat",
  email: "bertrand-7@hotmail.com",
  profilPicture:
    "https://firebasestorage.googleapis.com/v0/b/trido-1e318.appspot.com/o/listings%2F3CJfdy8Yeip70ruWz6La%20%3A%200?alt=media&token=7aedc052-988c-4571-961f-00df78a9b8f1",
  listings: ["listing1", "listing2"],
};

//Reference to the firestore collection for the listings
const refFireStore = app.firestore().collection("users");
const refFireStoreListings = app.firestore().collection("listings");
//Reference to the storage for the
const refStorage = app.storage().ref("usersProfilPicture/");

const getUserInfo = async (userId) => {
  return await refFireStore.doc(userId).get();
};

const addUserInfo = async (userId, email, name) => {
  const data = new Object({
    name: name,
    email: email,
    registerAt: new Date(),
    profilPicture: "",
    listings: [], //Document ID for the listings
  });

  await refFireStore
    .doc(userId)
    .set(data)
    .then(() => {
      console.log("User added! " + userId);
    })
    .catch((error) => {
      console.error("Error adding user: ", error);
    });
};

const getListings = async (userId) => {
  let listings = [];
  await refFireStoreListings
    .where("publisher", "==", userId.toString())
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots

        listings.push(doc.data());
        //console.log(doc.id, " => ", doc.data());
      });
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

  return listings;
};

const updateProfil = async (image, userId) => {
  let urlProfil;
  const response = await fetch(image);
  const blob = await response.blob();

  let ref = refStorage.child(image);

  await ref.put(blob).catch((error) => console.log(error));

  await ref
    .getDownloadURL()
    .then((url) => {
      console.log(url);
      urlProfil = url;
    })
    .catch((error) => console.log(error));

  await refFireStore
    .doc(userId)
    .update({
      profilPicture: urlProfil,
    })
    .then(() => console.log("Profile picture updated updated"))
    .catch((error) => console.log(error));
};

export default { addUserInfo, updateProfil, getUserInfo, getListings };
