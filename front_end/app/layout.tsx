import React from "react";
import "./globals.css";
import MenuButton from './components/MenuButton/MenuButton';

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>my-data-repository</title>
      </head>
      <body>
        <header>
          <MenuButton onClick={() => console.log('clicked!')} />
          <h1 className="title">Hello WebSite !!</h1>
        </header>
        <div>
          <nav>
            <ul>
              <li><button>$ cd ~</button></li>
              <li><button>$ whoami</button></li>
              <li><button>$ echo $HOBBY</button></li>
              <li><button>$ cat .my-tech</button></li>
              <li><button>$ ssh ryuta@contact</button></li>
            </ul>
          </nav>
          <main>{children}</main>
        </div>
        <footer>
          <small>© 2026 You are an idiot!!</small>
        </footer>
      </body>
    </html>
  );
}