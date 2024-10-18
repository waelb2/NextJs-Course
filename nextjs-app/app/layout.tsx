import "@styles/globals.css";
import { RootLayoutProps } from "../types/interfaces";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "WaelsAI",
  description: "Discover and share AI prompts",
};
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Provider>
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
