import Head from "next/head";
import Image from "next/image";

function Login() {
  return (
    <section className="overflow-hidden flex flex-col text-center h-screen">
      <Head>
        <title>Login</title>
      </Head>
      <div className="mb-[10vw] w-full relative min-h-screen flex justify-center items-center flex-col py-20 px-10 h-full">
        <div className="max-w-[650px] flex flex-col">
          <Image
            src="https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/8d8e67a6e4069a67b43dd9031faac3c4d5dc77e0/public/images/cta-logo-one.svg"
            height={100}
            width={400}
            objectFit="contain"
          />
          <button className="font-semibold bg-[#0063e5] my-3 w-full tracking-wider text-lg py-4 border border-transparent rounded hover:bg-[#0483ee]">
            GET ALL THERE
          </button>
          <h2 className="text-[#f3f3f3] text-xs mb-6 tracking-wider">
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </h2>
          <Image
            src="https://github.com/CleverProgrammers/cp-disney-plus-clone/blob/master/public/images/cta-logo-two.png?raw=true"
            height={30}
            width={400}
            objectFit="contain"
          />
        </div>

        <div className="bg-login-background bg-top bg-cover h-full bg-no-repeat absolute top-0 right-0 left-0 z-[-1]" />
      </div>
    </section>
  );
}

export default Login;

// mb-[2vw] max-w-[650px] flex-wrap flex flex-col justify-center mt-0 items-center text-center mx-auto transition ease-out duration-200 w-full
