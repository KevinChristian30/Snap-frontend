import "@/app/globals.css";
import IsAuthenticated from "@/components/guards/IsAuthenticated";
import Bottombar from "@/components/navigations/Bottombar";
import LeftSidebar from "@/components/navigations/LeftSidebar";
import RightSidebar from "@/components/navigations/RightSidebar";
import Topbar from "@/components/navigations/Topbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IsAuthenticated
      className="relative flex min-h-full"
      config={{ emailMustBeVerified: true }}
    >
      <LeftSidebar />
      <div className="mx-0 grow-[1] md:mx-8">
        <Topbar />
        {children}
        <Bottombar />
      </div>
      <RightSidebar />
    </IsAuthenticated>
  );
}
