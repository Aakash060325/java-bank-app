import "./globals.css";

export const metadata = {
  title: "ToDo List - Organize Your Tasks",
  description: "A beautiful and efficient todo list application built with Next.js. Organize your tasks, track your progress, and boost your productivity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
