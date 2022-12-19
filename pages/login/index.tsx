import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/router";
import React, { useState } from "react";
import PrimaryButton from "../../components/primary-button";
const Login = () => {
  const router = useRouter();
  const { user, login } = useAuth();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e: any) => {
    e.preventDefault();

    console.log(user);
    try {
      await login(data.email, data.password);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
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
            <h3>Welcome back 👋</h3>
            <h2>Let’s sign you in.</h2>
          </div>
          <div>
            <form className="flex-col h-[40vh] flex" onSubmit={handleLogin}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e: any) =>
                  setData({
                    ...data,
                    email: e.target.value,
                  })
                }
                value={data.email}
                required
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                onChange={(e: any) =>
                  setData({
                    ...data,
                    password: e.target.value,
                  })
                }
                value={data.password}
                required
              />
              <h6 className="text-right text-gray-400">Forgot password?</h6>
              <div className="flex-col align-bottom justify-end mt-12">
                <PrimaryButton textField={"Sign In"} />
                <br />
                <br />
                <Link href="/signup">
                  <h6 className="text-center text-gray-400">
                    Don’t have an account?
                    <span className="text-white">&nbsp;Register</span>
                  </h6>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
