import { Suspense } from "react";
import SearchClient from "./_components/SearchClient";

export default function SearchPage() {
  return (
    <Suspense fallback={<p className="text-center">Loading...</p>}>
      <SearchClient />
    </Suspense>
  );
}
