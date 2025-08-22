import { Suspense } from "react";

export default function ProjectFormLazyLoaded(component) {
  const fallback = (
    <div className="h-[75vh] flex flex-col items-start justify-start">
      <p>Loading data...</p>
      {/* <span className="spinner size-15 border-3 text-center mr-2 mb-0.5 !border-green-700 !border-b-transparent"></span> */}
    </div>
  );

  return <Suspense fallback={fallback}>{component}</Suspense>;
}
