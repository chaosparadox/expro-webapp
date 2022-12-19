import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Link from "next/link";
import PrimaryButton from "../../components/primary-button";
const SignUp = () => {
  const { user, register } = useAuth();
  console.log(user);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = async (e: any) => {
    e.preventDefault();

    try {
      await register(data.email, data.password);
    } catch (err) {
      console.log(err);
    }

    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <div className="container mx-auto px-6">
        <div className="h-screen flex-col justify-center align-middle space-y-4">
          <div className="p-4 mb-12">
            <Image
              src="/assets/login-light.svg"
              width={180}
              height={50}
              alt="login-light"
              className="m-auto dark:block hidden"
            ></Image>
            <Image
              src="/assets/login-dark.svg"
              width={180}
              height={50}
              alt="login-dark"
              className="m-auto dark:hidden"
            ></Image>
          </div>
          <div className="">
            <h2>
              Fill in your
              <br /> details below.
            </h2>
          </div>
          <div>
            <form className="flex-col h-[40vh] flex" onSubmit={handleSignup}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                onChange={(e: any) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                value={data.email}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                onChange={(e: any) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
                value={data.password}
              />
              <div className="flex-col align-bottom justify-end mt-12">
                <PrimaryButton textField={"Sign In"} />
                <h6 className="text-center text-gray-400">
                  <br />
                  Already have an account?
                  <Link href="/login">
                    <span className="text-white">&nbsp;Login</span>
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
