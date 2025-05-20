// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body className="antialiased">
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   );
// }
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ro">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;700;900&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-[Nunito]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
