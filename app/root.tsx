// import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#292727] text-white">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: any) {
  console.error(error);
  return (
    <html lang="en">
      <body>
        <div className="mb-3">
          <div className="text-3xl mb-2">Details</div>
          <div className="p-4 rounded shadow-lg border bg-rose-200 border-rose-600">
            <div className="text-gray-700 font-bold text-xl mb-2">
              Uh oh... Sorry something went wrong!
            </div>
            <p>{error?.message}</p>
          </div>
        </div>
      </body>
    </html>
  );
}
