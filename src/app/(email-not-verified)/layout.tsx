import "@/app/globals.css";
import IsAuthenticated from "@/components/guards/IsAuthenticated";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IsAuthenticated
      className="relative flex min-h-full"
      config={{ emailMustBeVerified: false }}
    >
      {children}
    </IsAuthenticated>
  );
}
