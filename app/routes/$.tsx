import { Link } from "@remix-run/react";
export default function ErroPage() {
  <>
    <div className="text-white m-auto text-xl">some thing went wrong, please return to home page</div>
    <Link
      to="/movies"
      className="bg-[#7e53d7a6] hover:bg-[#3e2e6b] text-white font-bold py-2 px-4 rounded-[4px] absolute mx-auto text-xl"
    >
      Got To Movies
    </Link>
  </>;
}
