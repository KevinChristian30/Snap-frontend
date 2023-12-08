import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-screen w-screen">{children}</div>;
}
