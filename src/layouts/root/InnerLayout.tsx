import { useOutlet } from "react-router";

export default function InnerLayout() {
  const outlet = useOutlet();
  return (
    <div className="inner-body" data-testid="inner-layout">
      {outlet}
    </div>
  );
}
