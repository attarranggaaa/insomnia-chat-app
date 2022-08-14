import Head from "next/head";

export const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Insomnia</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <div className="bg-center min-h-screen bg-base-200">
        <div className="h-screen max-h-screen grid md:grid-cols-6 grid-cols-1">
          {children}
        </div>
      </div>
    </>
  );
};