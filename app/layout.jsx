'use client';

import "../src/index.css";
import { AuthProvider } from "../src/contexts/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Kings and Queens</title>
        <meta name="description" content="Admin Console" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
