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
    <IsAuthenticated className="relative flex min-h-full">
      <LeftSidebar />
      <div className="grow-[1] mx-8 bg-blue-500">
        {children}
      </div>
      <RightSidebar />
    </IsAuthenticated>
  );
}
