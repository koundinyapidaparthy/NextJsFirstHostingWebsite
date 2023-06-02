"use client";
import Header from "./Header";
import React from "react";
import UserDetailsContext from "./UserDetailsContext";
export default function RootLayout({ children }) {
  const [userDetails, setUserDetails] = React.useState();

  return (
    <html>
      <body>
        <UserDetailsContext.Provider
          value={{
            userDetails,
            setUserDetails,
          }}
        >
          <Header />
          {children}
        </UserDetailsContext.Provider>
      </body>
    </html>
  );
}
