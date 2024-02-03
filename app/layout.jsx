import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
export const metadata = {
  icons:{icon:"/assets/images/logo.png"},
  apple:"/assets/images/logo.png",
  title: "AlgoBlog",
  description:
    "Share your lifestyle, fashion, idea, morden, tech, science, art, music, food, travel, sport, politics, business, education, health, entertainment, other with the world.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};
export default RootLayout;
