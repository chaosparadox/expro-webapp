import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../../components/primary-button";
const Login = () => {
  function handleSubmit(event) {
    event.preventDefaut();
  }
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
            <form className="flex-col h-[40vh] flex" onSubmit={handleSubmit}>
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
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
