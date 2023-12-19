import "@/app/globals.css";
import IsAuthenticated from "@/components/guards/IsAuthenticated";
import LeftSidebar from "@/components/navigations/LeftSidebar";
import RightSidebar from "@/components/navigations/RightSidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IsAuthenticated className="relative flex">
      <LeftSidebar />
      {children}
      <RightSidebar />
    </IsAuthenticated>
  );
}
