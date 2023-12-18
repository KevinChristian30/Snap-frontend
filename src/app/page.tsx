import IsAuthenticated from "@/components/guards/IsAuthenticated";

export default function Home() {
  return (
    <IsAuthenticated>
      <h1 className="">Home</h1>
    </IsAuthenticated>
  );
}
