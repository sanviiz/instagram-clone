import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);

  return (
    <div className="bg-gray-background">
      <div>dashboard</div>
    </div>
  );
}
