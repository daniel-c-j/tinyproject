import { useEffect } from "react";
import { useNavigate } from "react-router";

// TODO
export default function NotFoundRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  });

  return <div>Not found. Will be redirected to home page...</div>;
}
