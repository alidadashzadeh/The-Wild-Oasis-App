import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid item-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin Data...</p>
    </div>
  );
}
