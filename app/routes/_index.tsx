import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import movieBackground from "~/assets/Movies-background.png"

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Movies" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <div style={{ backgroundImage: `url(${movieBackground})`, width: "100vw", height: "100vh" }} className="flex items-center justify-center h-screen">
        <Link to="/movies" className="bg-[#7e53d7a6] hover:bg-[#3e2e6b] text-white font-bold py-2 px-4 rounded-[4px] absolute mx-auto text-xl">Got To Movies</Link>     
      </div>
    </div>
  );
}
