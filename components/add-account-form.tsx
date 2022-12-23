import PrimaryButton from "./primary-button";
import Loader from "./loader";
import React, { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useAuth } from "../context/AuthContext";
import ToastNotification from "./toast";
const AddAccount = ({ uid }) => {
  const { user } = useAuth();
  const accountNameRef = useRef(null);
  const [notification, setNotification] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userAccountsCollectionRef = collection(
    db,
    "users/" + user.uid + "/accounts"
  );
  const addAccount = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(userAccountsCollectionRef);
    try {
      await addDoc(userAccountsCollectionRef, {
        accountName: accountName,
      });
      accountNameRef.current.value = "";
      setIsLoading(false);
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
      }, 3000);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
    setIsLoading(false);
  };
  return (
    <div>
      <form className="flex-col h-[40vh] flex" onSubmit={addAccount}>
        <input
          ref={accountNameRef}
          type="text"
          name="accountName"
          id="accountName"
          placeholder="Account Name"
          required
          onChange={(e) => setAccountName(e.target.value)}
        />
        <div className="flex-col align-bottom justify-end mt-2">
          <PrimaryButton
            isLoading={isLoading}
            textField={isLoading ? <Loader /> : "Add Account"}
          />
        </div>
      </form>
      <ToastNotification
        toastTitle="Account Created Successfully"
        notification={notification}
      />
    </div>
  );
};

export default AddAccount;
