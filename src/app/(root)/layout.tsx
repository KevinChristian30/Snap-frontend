import "@/app/globals.css";
import IsAuthenticated from "@/components/guards/IsAuthenticated";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <IsAuthenticated>{children}</IsAuthenticated>
}
