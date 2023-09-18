var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-A64PKGN6.css";

// app/root.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: "bg-[#292727] text-white", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mb-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-3xl mb-2", children: "Details" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4 rounded shadow-lg border bg-rose-200 border-rose-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-gray-700 font-bold text-xl mb-2", children: "Uh oh... Sorry something went wrong!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: error == null ? void 0 : error.message }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

// app/routes/movies/$movieId.tsx
var movieId_exports = {};
__export(movieId_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => MovieDetails,
  loader: () => loader,
  meta: () => meta
});
var import_react4 = require("@remix-run/react");

// app/api/movies.ts
async function getMovies(search, tag) {
  try {
    return search || tag ? (moviesArray.forEach((movie) => {
      search && (movie.searchRate += (movie.title.toLowerCase().includes(search.toLowerCase()) ? 1 : 0) + (movie.synopsis.toLowerCase().includes(search.toLowerCase()) ? 1 : 0)), tag && (movie.searchRate += movie.genre.includes(tag) ? 1 : 0);
    }), moviesArray.filter((movie) => movie.searchRate !== 0).sort((a, b) => b.searchRate - a.searchRate)) : moviesArray;
  } catch (error) {
    console.error(error);
  }
}
async function getMovieById(id) {
  return moviesArray.find((m) => m.imdbid === id);
}
var moviesArray = [
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNzY3YTUwYTQtNjkwNy00OTAyLWE0OWEtYmE3MGIyOWZkODY1XkEyXkFqcGdeQXVyMjkyNzYwMTc@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Adventure", "Animation"],
    imdbid: "tt9580138",
    title: "Mortal Kombat Legends: Scorpion's Revenge",
    imdbrating: 7.4,
    released: 2020,
    synopsis: "Hanzo Hasashi loses his clan, family, and his life during an attack by a rival ninja clan. He is given the chance to compete in an interdimensional tournament to save his loved ones.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Thriller"],
    imdbid: "tt8936646",
    title: "Extraction",
    imdbrating: 6.7,
    released: 2020,
    synopsis: "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNzU1ZTE4YzAtOWNkYi00YWE4LThmY2YtMDNlYzU2ZTgxYTc2XkEyXkFqcGdeQXVyODQzNTE3ODc@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Comedy", "Crime"],
    imdbid: "tt8851668",
    title: "The Lovebirds",
    imdbrating: 6,
    released: 2020,
    synopsis: "A couple (Issa Rae and Kumail Nanjiani) experiences a defining moment in their relationship when they are unintentionally embroiled in a murder mystery.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMTdkOTEwYjMtNDA1YS00YzVlLTg0NWUtMmQzNDZhYWUxZmIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Comedy", "Crime"],
    imdbid: "tt8629748",
    title: "Spenser Confidential",
    imdbrating: 6.2,
    released: 2020,
    synopsis: "When two Boston police officers are murdered, ex-cop Spenser teams up with his no-nonsense roommate, Hawk, to take down criminals.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNjg4MjRhZjgtNTIxOS00MmRjLTg4NTEtNjBkNzkwZjAxMjMyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Horror", "Thriller"],
    imdbid: "tt8244784",
    title: "The Hunt",
    imdbrating: 6.5,
    released: 2020,
    synopsis: "Twelve strangers wake up in a clearing. They don't know where they are, or how they got there. They don't know they've been chosen - for a very specific purpose - The Hunt.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNzMyOWRjYjUtMjc2OC00MWUyLWEzODktYWZlZDYxYjk4MDViXkEyXkFqcGdeQXVyODE0OTU5Nzg@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Comedy"],
    imdbid: "tt8242084",
    title: "My Spy",
    imdbrating: 6.3,
    released: 2020,
    synopsis: "A hardened CIA operative finds himself at the mercy of a precocious 9-year-old girl, having been sent undercover to surveil her family.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Drama", "Sci-Fi"],
    imdbid: "tt7737786",
    title: "Greenland",
    imdbrating: 6.4,
    released: 2020,
    synopsis: "A family struggles for survival in the face of a cataclysmic natural disaster.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMzQ3NTQxMjItODBjYi00YzUzLWE1NzQtZTBlY2Y2NjZlNzkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Adventure", "Comedy"],
    imdbid: "tt7713068",
    title: "Birds of Prey",
    imdbrating: 6,
    released: 2020,
    synopsis: "After splitting with the Joker, Harley Quinn joins superheroes Black Canary, Huntress and Renee Montoya to save a young girl from an evil crime lord.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNDJiZDliZDAtMjc5Yy00MzVhLThkY2MtNDYwNTQ2ZTM5MDcxXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Adventure", "Fantasy"],
    imdbid: "tt7556122",
    title: "The Old Guard",
    imdbrating: 6.6,
    released: 2020,
    synopsis: "A covert team of immortal mercenaries are suddenly exposed and must now fight to keep their identity a secret just as an unexpected new member is discovered.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BOTE3MzRkODctZjJmNi00NTI1LTk3NmItZTMxNzg2NWJkZDBiXkEyXkFqcGdeQXVyNjQyNjgwNjU@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Horror", "Sport"],
    imdbid: "tt7397552",
    title: "Adrenaline Rush",
    imdbrating: 7.1,
    released: 2020,
    synopsis: "",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BYTUwODExOTItNTQ1Mi00MGI5LWI0NjQtMDBiYWQ2ZjFkMDI2XkEyXkFqcGdeQXVyNTg3NDYxMDI@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Adventure", "Drama"],
    imdbid: "tt7370170",
    title: "Ride Hard: Live Free",
    imdbrating: 8.2,
    released: 2020,
    synopsis: "Ride Hard, Live Free Savagery reigns. The world has been thrown into an unrelenting dystopia of unchecked violence. Governments have dissolved. Survival has been reduced to a more primitive...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BYjE2MjIwMmYtM2ZiMy00MzdmLTkyNTYtNmFiNjM5MDJhMGVmXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Crime", "Mystery"],
    imdbid: "tt7149730",
    title: "The Silencing",
    imdbrating: 6.2,
    released: 2020,
    synopsis: "A reformed hunter living in isolation on a wildlife sanctuary becomes involved in a deadly game of cat and mouse when he and the local Sheriff set out to track a vicious killer who may have kidnapped his daughter years ago.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BOGJmZjcxNTAtYjViZS00YzJmLTlkMzgtZmVkYTQ5YjUwMjIyXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Adventure", "Sci-Fi"],
    imdbid: "tt6723592",
    title: "Tenet",
    imdbrating: 7.3,
    released: 2020,
    synopsis: "Armed with only one word -- Tenet -- and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMjU3ODRmMWMtMDU5OS00ZWFkLWI1NjMtNzZkN2Y0MjQ2YzlmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzMxMDc0Njk@._V1_UY268_CR137,0,182,268_AL_.jpg"
    ],
    genre: ["Action"],
    imdbid: "tt6359464",
    title: "Red Cargo",
    imdbrating: 7.4,
    released: 2020,
    synopsis: "Two undercover agents sent to get rid of rhino poaching syndicate, become the hunted after discovering that high ranking government officials are implicated.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BZWI2MTRiYjAtODlhNi00YzkzLWI1NjYtODkxZGI2NmQ2NDIyXkEyXkFqcGdeQXVyMjQwODkxNzg@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Crime", "Thriller"],
    imdbid: "tt6075690",
    title: "Operation Agneepath",
    imdbrating: 8.6,
    released: 2020,
    synopsis: "Shehzad Khan Rana (Shakib Khan) is a loyal officer of Bangladesh. He has the task to stop Julfiqar Mirza (Misa Sawdagar) who was planning a terrorist attack in Bangladesh. In the pursuit of...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BZTFkZjYxNWItZmE2MC00MGE4LWIxYTgtZmIzOWM1YmI2YWEzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Drama", "History"],
    imdbid: "tt6048922",
    title: "Greyhound",
    imdbrating: 7,
    released: 2020,
    synopsis: "Early in World War II, an inexperienced U.S. Navy captain must lead an Allied convoy being stalked by Nazi U-boat wolfpacks.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNGNhZTk5M2MtMzUzYy00NmZkLTljZmItZTU5MDU4Y2M0N2I4XkEyXkFqcGdeQXVyMjM1NTY3Njk@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Horror"],
    imdbid: "tt5654204",
    title: "#Slaughterhouse",
    imdbrating: 6.8,
    released: 2020,
    synopsis: "A romantic spring getaway turns sinister when unexpected visitors join the party in a high-tech house that no one can escape.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BN2NiYzMyZmQtMDBkNC00Y2NkLWI1NjctZmQyNjM3ZWQ5YTc4XkEyXkFqcGdeQXVyMzAyNDMxMDQ@._V1_UY268_CR3,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Thriller"],
    imdbid: "tt5612690",
    title: "No Remorse",
    imdbrating: 6.2,
    released: 2020,
    synopsis: "",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMTg4NjQwNjk0NV5BMl5BanBnXkFtZTgwMzcyNTc1NzE@._V1_UY268_CR3,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Comedy", "Crime"],
    imdbid: "tt5274150",
    title: "Banned, Exploited & Blacklisted: The Underground Work of Controversial Filmmaker Shane Ryan",
    imdbrating: 6.2,
    released: 2020,
    synopsis: "A collection of Ryan's work including short films, music videos, trailers/clips from both released feature films and uncompleted features, concept trailers, behind-the-scenes footage, interviews, and Ryan's childhood filmmaker beginnings.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMThlZjkzMzAtMGNiMy00ZjNiLWI4N2UtOTY5NTkyMGRiNTI4L2ltYWdlXkEyXkFqcGdeQXVyMTg1MTg3Njc@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Comedy", "Crime"],
    imdbid: "tt4424284",
    title: "Seth and Tia",
    imdbrating: 6.7,
    released: 2020,
    synopsis: "Two patients, Seth and Tia develop a friendship during their stay in a mental institution. They decide to make a plan to break out, but they can't do it alone,so they ally with an enemy ...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMjM4NTEyNjAxMl5BMl5BanBnXkFtZTgwNzMzMDc0NTE@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Adventure", "Documentary"],
    imdbid: "tt3807352",
    title: "Chasing Red",
    imdbrating: 8.9,
    released: 2020,
    synopsis: "Everyone has heard of Pamplona's Running of the Bulls, yet so few know much about it. Even fewer know that there is an elite group of runners who brave dozens of bull runs each year, ...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BYTQwNmFlY2ItOTQwMy00YzYxLWE4Y2EtNWZmNTc4Y2RkZWU2XkEyXkFqcGdeQXVyNTc2NTUxNA@@._V1_UY268_CR11,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Animation", "Horror"],
    imdbid: "tt3518152",
    title: "Necroland",
    imdbrating: 7.9,
    released: 2020,
    synopsis: "In the near future, Earth has changed even more for the worse as far as weather and human behavior. Different seasonal conditions appear around every corner. Half the population has ...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMDM3YjZlMjctNmNiMC00NTIxLWE2OWMtNmU2NDMzNTUxNGFiXkEyXkFqcGdeQXVyNTA4NDgzMw@@._V1_UY268_CR1,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Crime"],
    imdbid: "tt3290322",
    title: "The Runners",
    imdbrating: 6,
    released: 2020,
    synopsis: "When his little sister is abducted from a homecoming after-party in rural East Texas, Ryan is in a race against the clock to save her before she disappears into the underworld of sex trafficking forever.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMjc1ZTNhODctNTdmZC00YjJiLTljYWItOGI1Nzc3MTMzMzM2XkEyXkFqcGdeQXVyODM3MzI1NA@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Comedy"],
    imdbid: "tt3279024",
    title: "Lumpia with a Vengeance",
    imdbrating: 7.8,
    released: 2020,
    synopsis: "The LUMPIA-armed hero reappears in Fogtown and teams up with high school student Rachel to prevent a mysterious crime syndicate from destroying their town, and her parents' dream wedding.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BOGJlMTc5YmYtYjFlNi00ZDJiLWFhNWMtMjc0NDBjOWNkNjA1XkEyXkFqcGdeQXVyMTA5NzExNzM1._V1_UY268_CR110,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Crime", "Drama"],
    imdbid: "tt1838556",
    title: "Honest Thief",
    imdbrating: 6,
    released: 2020,
    synopsis: "A bank robber tries to turn himself in because he's falling in love and wants to live an honest life...but when he realizes the Feds are more corrupt than him, he must fight back to clear his name.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Comedy", "Crime"],
    imdbid: "tt1502397",
    title: "Bad Boys for Life",
    imdbrating: 6.5,
    released: 2020,
    synopsis: "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BY2QyZTJmZTMtM2Q3Zi00NjUyLTk5NzctOTg0MjI4OWEwYjg3XkEyXkFqcGdeQXVyNzU3NjUxMzE@._V1_UY268_CR9,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Adventure", "Animation"],
    imdbid: "tt12093878",
    title: "LEGO DC: Shazam - Magic & Monsters",
    imdbrating: 6.2,
    released: 2020,
    synopsis: "When the boy hero Shazam is offered to join the Justice League he is reluctant about it, but when his rivals the Monster Society put the League in peril he's the only one who can save them.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNTkyMzU2NDgtZjEwYy00MjA1LThlNGYtNzNmZmYzYTFkMmQ4XkEyXkFqcGdeQXVyMTEyNDI0NjIy._V1_UY268_CR21,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Adventure", "Animation"],
    imdbid: "tt12064860",
    title: "Super Mario Bros. Z 4K",
    imdbrating: 8.6,
    released: 2020,
    synopsis: "The complete original Super Mario Bros. Z series remastered in 4K video quality in one video.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BMTYyOTIwYmYtZmQyMi00MTUwLWI2ZDItYTBjNDVhMWFhNWFlXkEyXkFqcGdeQXVyMTE1NjI5NTc2._V1_UY268_CR9,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Adventure", "Mystery"],
    imdbid: "tt12059646",
    title: "Anonymous Vol. 1 - The Dreamland Adventures the Mysteries of Atlantis",
    imdbrating: 7.8,
    released: 2020,
    synopsis: "A Agent inside a dark NASA division using alien technology is hi-jacked by a new nation in Antarctica rising from the roots of Hitler's Vrill society. Agent Schwartz turns to his Russian ...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNWIxOTNiZGItZjNiMi00OTY2LTk5NjYtYjlmNDhkYjE1OGNiXkEyXkFqcGdeQXVyOTEyNjEzNjg@._V1_UY268_CR3,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Drama"],
    imdbid: "tt12043434",
    title: "A Free Can Gangster",
    imdbrating: 7.7,
    released: 2020,
    synopsis: "A young Senegalese immigrant is trying to survive in London after the home office has rejected his application for residency.Lost his father from prostate Cancer, he need to find away to ...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BYTlhYjRmYmUtYTJlMS00OWMyLTk4MzUtMDQ3ODU3MWZjMDNkXkEyXkFqcGdeQXVyODk1MzE0Mzk@._V1_UY268_CR147,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Adventure", "Animation"],
    imdbid: "tt12042710",
    title: "Enchantimals: Spring Into Harvest Hills",
    imdbrating: 6.1,
    released: 2020,
    synopsis: "",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BZDBiZGQ0YjgtNzY1Mi00MTNiLThjODktMjBhMDA4OGQ5M2YwXkEyXkFqcGdeQXVyNjA0MDQ1NTc@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Drama"],
    imdbid: "tt11946452",
    title: "Crossing the Line",
    imdbrating: 6.8,
    released: 2020,
    synopsis: 'A Mexican Sicario runs into a world of challenges when the cartel leader, "The Viper" assigns a Middle Eastern Hitman to accompany him on missions. The Iraqi methods are different than the established norms of the cartel.',
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNjEzYzI2YTktNjRmZS00MmE1LWFhMjgtMWI3OTU3MzQ1ZDAzXkEyXkFqcGdeQXVyMjExMDE1MzQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action"],
    imdbid: "tt11942126",
    title: "007: Shadows",
    imdbrating: 8.4,
    released: 2020,
    synopsis: "",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BZTgyNWM0NDktOWI5Ny00YjhhLWJjZmMtOTc0ODM0MjQzOTdlXkEyXkFqcGdeQXVyNjQ4Njg2NDc@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Crime", "Drama"],
    imdbid: "tt11899710",
    title: "Hitter Twist",
    imdbrating: 7.6,
    released: 2020,
    synopsis: "A genius, seventeen-year-old drug dealer/musician comes to realize that the 'victimless crime' of helping his friends get high has connected him with vicious mobsters and ruthless thieves. ...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BN2EzYzhlNjUtNjE5Ni00MzE1LWE2NDgtZDEwYjY5N2ZhNjQ0XkEyXkFqcGdeQXVyMTE4NzcwOTM4._V1_UY268_CR3,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Comedy", "Horror"],
    imdbid: "tt11890562",
    title: "Concrete shark",
    imdbrating: 7.8,
    released: 2020,
    synopsis: "The director of the concrete plant fell into the concrete mixer. The devil from hell turned him into a concrete shark. Save the world from another monster will locksmiths Michael and Azamat.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BYjg0YTMwZWItODg0NC00YTRjLWE5MTAtZTdmNjQ0Y2Q0NGEzXkEyXkFqcGdeQXVyMTkwNzExODQ@._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Mystery", "Thriller"],
    imdbid: "tt11714030",
    title: "Hell Hole",
    imdbrating: 7.1,
    released: 2020,
    synopsis: "Just outside a desolate ghost town, inside a long-abandoned gold mine, lurks a dark being, conjured by the Shanowah tribe ages ago to destroy those that threatened to wipe out their people....",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BZDk4ZDM0YmQtOTRjMC00MmYyLTgyZjAtNzE3YzVhZWM3MmMzXkEyXkFqcGdeQXVyMTEyOTgxMDA5._V1_UX182_CR0,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Comedy"],
    imdbid: "tt11690838",
    title: "The Legend of Baron To'a",
    imdbrating: 6.3,
    released: 2020,
    synopsis: "Fritz, a young Tongan man grappling with his wrestling superstar father Baron To'a's legacy, both metaphorically and literally following in his deceased father's footsteps by fighting for the return of his dad's stolen championship belt.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BOTY1MTQ1NzgtZTQwNi00ZjA2LTllNWUtNjY0MzY1ZDI1YjM5XkEyXkFqcGdeQXVyMTAwNDYzNzgz._V1_UY268_CR159,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Biography", "Documentary"],
    imdbid: "tt11634288",
    title: "Battle of Little Bighorn",
    imdbrating: 6,
    released: 2020,
    synopsis: "The U.S. expands westward after the Civil War displacing the last of the free-roaming Native Americans onto Reservations. This show focuses special attention on General George A. Custer and...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BOGQzZDE2MDctNTUwNy00MDY1LThlOTItMzE5MWViNTFjMDBiXkEyXkFqcGdeQXVyODkxNzcyODc@._V1_UY268_CR98,0,182,268_AL_.jpg"
    ],
    genre: ["Action"],
    imdbid: "tt11343368",
    title: "Pocket Full of Game",
    imdbrating: 6.4,
    released: 2020,
    synopsis: "Porsha is a female hustler who has it all money, beauty, respect. She earned it all by being loyal and respecting the codes of the street. A chance encounter with a stick up kid named Fresh introduces her to a whole new world.",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BOWJlY2M2NTktZWYxYi00ZWNjLTlhNmMtYjM0ZjBjY2JhZTgxXkEyXkFqcGdeQXVyMTAxMzMxNjk2._V1_UY268_CR7,0,182,268_AL_.jpg"
    ],
    genre: ["Action"],
    imdbid: "tt11207956",
    title: "Sierra Sisters: The Hunt for Blackbeards Treasure",
    imdbrating: 7.6,
    released: 2020,
    synopsis: "Follow treasure hunting sisters Hera and Athena as they embark on a journey to find the legendary treasure of Blackbeard the pirate. Along the way they encounter shadowy figures and ...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BNjdjOTI0NmYtNGEzYy00MmE3LWFkNDItZmU2YWJkODFmNjg1XkEyXkFqcGdeQXVyNTE3Njk0Ng@@._V1_UY268_CR16,0,182,268_AL_.jpg"
    ],
    genre: ["Action"],
    imdbid: "tt11131480",
    title: "16 Bars",
    imdbrating: 7.5,
    released: 2020,
    synopsis: "This story follows Drew (played by emerging musical artist, Vyse), an aspiring young rapper as he is faced with the life struggles that led to his residence in a group home while balancing ...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BZjk0ZTk4OTQtYWYyZC00MTU5LTkxMjQtZDRlYjRkN2Y3ZjA5XkEyXkFqcGdeQXVyOTA1MDE3OA@@._V1_UY268_CR4,0,182,268_AL_.jpg"
    ],
    genre: ["Action", "Comedy"],
    imdbid: "tt11041352",
    title: "Action",
    imdbrating: 6.2,
    released: 2020,
    synopsis: "An American action star from the 90's is shooting a movie in Bulgaria, while three of his (now grown up) fans try to meet their childhood idol. After a series of bad decisions, the three ...",
    searchRate: 0
  },
  {
    imageurl: [
      "https://m.media-amazon.com/images/M/MV5BM2VhNWU2NWUtOGQ5Ni00OTNmLWFiZWItYzlhYzAzNjZlMzY3XkEyXkFqcGdeQXVyODQ1NDg4NjQ@._V1_UY268_CR43,0,182,268_AL_.jpg"
    ],
    genre: ["Action"],
    imdbid: "tt10937188",
    title: "Justice League Extinction",
    imdbrating: 7.4,
    released: 2020,
    synopsis: "A year has passed since the mother boxes were destroyed. Unaware to the Justice League, the boxes have released a power surge that has attracted the attention of their creator, Brainiac.",
    searchRate: 0
  }
];

// app/components/ui/movieBanner.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function MovieBanner({ movie }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full h-full flex justify-between items-revert bg-[#141bed1a] flex-col sm:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "w-full h-full flex flex-col justify-between items-start gap-0 sm:gap-[108px]", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Link, { to: "/movies", className: "text-white p-5 text-2xl hover:underline", children: "Go Back" }, void 0, !1, {
        fileName: "app/components/ui/movieBanner.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "text-6xl font-bold flex justify-between text-white bg-slate-700/60 p-5 w-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: movie.title }, void 0, !1, {
          fileName: "app/components/ui/movieBanner.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "hidden sm:block", children: movie.released }, void 0, !1, {
          fileName: "app/components/ui/movieBanner.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ui/movieBanner.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ui/movieBanner.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        src: movie.imageurl[0],
        className: "w-[230px] h-[280px] m-auto",
        alt: movie.title
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/movieBanner.tsx",
        lineNumber: 21,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/movieBanner.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/movieBanner.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/movies/$movieId.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), loader = async ({ params }) => await getMovieById(params.movieId), meta = ({ data }) => [{ title: data.title, description: data.description }];
function MovieDetails() {
  let movie = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(MovieBanner, { movie }, void 0, !1, {
      fileName: "app/routes/movies/$movieId.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "m-3 mr-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "font-bold text-xl", children: "Movies story" }, void 0, !1, {
          fileName: "app/routes/movies/$movieId.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-center w-[200px] bg-amber-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-lg font-medium text-black", children: [
          "IMDB Rate: ",
          movie.imdbrating,
          "/10"
        ] }, void 0, !0, {
          fileName: "app/routes/movies/$movieId.tsx",
          lineNumber: 27,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/routes/movies/$movieId.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/movies/$movieId.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-[#d3d3d3] font-medium text-lg", children: movie.synopsis }, void 0, !1, {
        fileName: "app/routes/movies/$movieId.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/movies/$movieId.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/movies/$movieId.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
function ErrorBoundary2({ error }) {
  return console.error(error), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "en", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mb-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-3xl mb-2", children: "Details" }, void 0, !1, {
      fileName: "app/routes/movies/$movieId.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-4 rounded shadow-lg border bg-rose-200 border-rose-600", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "text-gray-700 font-bold text-xl mb-2", children: "Uh oh... Sorry something went wrong!" }, void 0, !1, {
        fileName: "app/routes/movies/$movieId.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: error == null ? void 0 : error.message }, void 0, !1, {
        fileName: "app/routes/movies/$movieId.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/movies/$movieId.tsx",
      lineNumber: 44,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/movies/$movieId.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/movies/$movieId.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/movies/$movieId.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/movies/index.tsx
var movies_exports = {};
__export(movies_exports, {
  default: () => MoviesIndex,
  loader: () => loader2,
  meta: () => meta2
});
var import_react6 = require("react"), import_react7 = require("@remix-run/react");

// app/components/ui/movieCard.tsx
var import_react5 = require("@remix-run/react");

// app/components/ui/card.tsx
var React = __toESM(require("react"));

// app/lit/utils.ts
var import_clsx = require("clsx"), import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// app/components/ui/card.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
));
Card.displayName = "Card";
var CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 24,
    columnNumber: 3
  },
  this
));
CardHeader.displayName = "CardHeader";
var CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 36,
    columnNumber: 3
  },
  this
));
CardTitle.displayName = "CardTitle";
var CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 51,
    columnNumber: 3
  },
  this
));
CardDescription.displayName = "CardDescription";
var CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { ref, className: cn("p-6 pt-0", className), ...props }, void 0, !1, {
  fileName: "app/components/ui/card.tsx",
  lineNumber: 63,
  columnNumber: 3
}, this));
CardContent.displayName = "CardContent";
var CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  },
  void 0,
  !1,
  {
    fileName: "app/components/ui/card.tsx",
    lineNumber: 71,
    columnNumber: 3
  },
  this
));
CardFooter.displayName = "CardFooter";

// app/components/ui/movieCard.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function MovieCard({ movie }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card, { className: "group hover:scale-105 hover:shadow-2xl animation-duration-2000 p-0 w-fit border-none relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardHeader, { className: "hidden group-hover:block absolute top-1 right-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "hover:cursor-default text-white text-xl font-bold rounded-[10px] bg-slate-700/60 p-2", children: movie.released }, void 0, !1, {
      fileName: "app/components/ui/movieCard.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/movieCard.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardContent, { className: "p-0 m-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_react5.Link,
      {
        title: movie.title,
        to: movie.imdbid,
        className: "m-0 p-0 w-fit",
        prefetch: "intent",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "img",
          {
            src: movie.imageurl[0],
            alt: movie.title,
            className: "m-0 w-64 rounded-t-[10px]"
          },
          void 0,
          !1,
          {
            fileName: "app/components/ui/movieCard.tsx",
            lineNumber: 30,
            columnNumber: 11
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/ui/movieCard.tsx",
        lineNumber: 24,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ui/movieCard.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardFooter, { className: "p-0 bg-[#7e53d7a6] pt-3 rounded-b-[10px]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(CardTitle, { className: "m-1 mr-0 h-[30px] w-[240px] text-ellipsis whitespace-nowrap overflow-hidden hover:cursor-default ", children: movie.title }, void 0, !1, {
      fileName: "app/components/ui/movieCard.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/ui/movieCard.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ui/movieCard.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/movies/index.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let url = new URL(request.url), search = url.searchParams.get("search"), tag = url.searchParams.get("tag");
  return getMovies(search, tag);
}, meta2 = () => [{ title: "Movies", description: "List of movies" }];
function MoviesIndex() {
  let movies = (0, import_react7.useLoaderData)(), tags = [
    "Action",
    "Thriller",
    "Comedy",
    "Adventure",
    "Drama",
    "Animation",
    "Sci-Fi",
    "Horror",
    "History",
    "Mystery",
    "Sport",
    "Fantasy",
    "Crime",
    "Family"
  ], submit = (0, import_react7.useSubmit)(), formRef = (0, import_react6.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { onChange: () => {
      formRef && submit(formRef.current, { replace: !0 });
    }, className: "flex relative flex-row-reverse bg-[#121212] h-[130px] sm:h-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_react7.Form,
        {
          ref: formRef,
          method: "get",
          id: "filter-form",
          reloadDocument: !0,
          className: "py-5 mx-0 sm:mx-7",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "select",
              {
                form: "filter-form",
                name: "tag",
                defaultValue: "",
                className: "text-black w-24 sm:w-fit rounded-[10px] h-9 sm:h-full py-2 px-3 mx-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: "", children: "All" }, void 0, !1, {
                    fileName: "app/routes/movies/index.tsx",
                    lineNumber: 65,
                    columnNumber: 13
                  }, this),
                  tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: tag, children: tag }, tag, !1, {
                    fileName: "app/routes/movies/index.tsx",
                    lineNumber: 67,
                    columnNumber: 15
                  }, this))
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/movies/index.tsx",
                lineNumber: 59,
                columnNumber: 11
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              "input",
              {
                type: "search",
                name: "search",
                placeholder: "Type a title...",
                className: "border-2 rounded-[10px] mx-2 py-2 px-3 text-black w-fit"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/movies/index.tsx",
                lineNumber: 72,
                columnNumber: 11
              },
              this
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/movies/index.tsx",
          lineNumber: 52,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_react7.Link,
        {
          to: "/movies",
          className: "absolute top-20 sm:top-6 font-bold text-2xl left-[40%] sm:left-[10%]",
          children: "Movies"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/movies/index.tsx",
          lineNumber: 79,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/movies/index.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "font-sans grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-4 justify-items-center", children: movies.length != 0 ? movies.map((movie) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MovieCard, { movie }, movie.imdbid, !1, {
      fileName: "app/routes/movies/index.tsx",
      lineNumber: 88,
      columnNumber: 33
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "m-auto absolute text-gray-300 font-bold text-2xl", children: "Sorry we can't get the movies now, please try again later :(" }, void 0, !1, {
      fileName: "app/routes/movies/index.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/movies/index.tsx",
      lineNumber: 86,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/movies/index.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  meta: () => meta3
});
var import_react8 = require("@remix-run/react");

// app/assets/Movies-background.png
var Movies_background_default = "/build/_assets/Movies-background-SUR73RAU.png";

// app/routes/_index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta3 = () => [
  { title: "Movies" },
  { name: "description", content: "Welcome to Remix!" }
];
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { style: { backgroundImage: `url(${Movies_background_default})`, width: "100vw", height: "100vh" }, className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react8.Link, { to: "/movies", className: "bg-[#7e53d7a6] hover:bg-[#3e2e6b] text-white font-bold py-2 px-4 rounded-[4px] absolute mx-auto text-xl", children: "Got To Movies" }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-CHRDCWIA.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-HGWBNGUI.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-BYL4V7CY.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-AD6M7IPD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: "_index", index: void 0, caseSensitive: void 0, module: "/build/routes/_index-OSKZHKCT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/movies/$movieId": { id: "routes/movies/$movieId", parentId: "root", path: "movies/:movieId", index: void 0, caseSensitive: void 0, module: "/build/routes/movies/$movieId-UXVRUO37.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/movies/index": { id: "routes/movies/index", parentId: "root", path: "movies", index: !0, caseSensitive: void 0, module: "/build/routes/movies/index-7YWZ3T43.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "24d33b59", hmr: { runtime: "/build/_shared\\chunk-BYL4V7CY.js", timestamp: 1695045212013 }, url: "/build/manifest-24D33B59.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/movies/$movieId": {
    id: "routes/movies/$movieId",
    parentId: "root",
    path: "movies/:movieId",
    index: void 0,
    caseSensitive: void 0,
    module: movieId_exports
  },
  "routes/movies/index": {
    id: "routes/movies/index",
    parentId: "root",
    path: "movies",
    index: !0,
    caseSensitive: void 0,
    module: movies_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: "_index",
    index: void 0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
