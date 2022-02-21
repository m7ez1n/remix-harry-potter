var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/home/m7he4rt/development/harry-potter/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/components/container.tsx
init_react();
var Container = ({ children }) => /* @__PURE__ */ React.createElement("main", {
  className: "container grid gap-8 px-10 pt-6 pb-10 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
}, children);
var container_default = Container;

// app/components/navigation.tsx
init_react();
var import_remix2 = __toModule(require_remix());
var import_fa = __toModule(require("react-icons/fa"));

// app/components/logo.tsx
init_react();
var RemixLogo = () => {
  return /* @__PURE__ */ React.createElement("svg", {
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor"
  }, /* @__PURE__ */ React.createElement("title", {
    id: "remix-run-logo-title"
  }, "Remix Logo"), /* @__PURE__ */ React.createElement("path", {
    d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
  }));
};
var logo_default = RemixLogo;

// app/components/navigation.tsx
var classNameActiveRoute = (currentRoute) => {
  if (!currentRoute) {
    return "text-gray-600 border border-white bg-gray-50 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded";
  }
  return "text-white bg-indigo-600 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded";
};
var Navigation = () => {
  const { pathname } = (0, import_remix2.useLocation)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "py-5 bg-white rounded shadow-lg px-7"
  }, /* @__PURE__ */ React.createElement("nav", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center pr-6 space-x-3 lg:pr-16"
  }, /* @__PURE__ */ React.createElement(logo_default, null)), /* @__PURE__ */ React.createElement("ul", {
    className: "flex-auto space-x-2 md:flex"
  }, /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/characters",
    className: classNameActiveRoute(pathname === "/characters")
  }, "Characters"), /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/spells",
    className: classNameActiveRoute(pathname === "/spells")
  }, "Spells"), /* @__PURE__ */ React.createElement(import_remix2.NavLink, {
    to: "/books",
    className: classNameActiveRoute(pathname === "/books")
  }, "Books")), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center pl-2 space-x-5 "
  }, /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: "https://github.com/m7he4rt/remix-harry-potter"
  }, /* @__PURE__ */ React.createElement(import_fa.FaGithub, {
    size: 24,
    className: "cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
  })))));
};
var navigation_default = Navigation;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JXTRGRCZ.css";

// route:/home/m7he4rt/development/harry-potter/app/root.tsx
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => {
  return { title: "Simple Harry Potter documentation" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(navigation_default, null), /* @__PURE__ */ React.createElement(container_default, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:/home/m7he4rt/development/harry-potter/app/routes/characters.tsx
var characters_exports = {};
__export(characters_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => characters_default,
  loader: () => loader
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/components/characterCard.tsx
init_react();
var CharacterCard = ({
  character,
  hogwartsHouse,
  interpretedBy,
  image,
  hogwartsStudent,
  nickname
}) => /* @__PURE__ */ React.createElement("div", {
  className: "max-w-xs"
}, /* @__PURE__ */ React.createElement("div", {
  className: "relative bg-white border rounded"
}, /* @__PURE__ */ React.createElement("div", {
  className: "p-2 photo-wrapper"
}, /* @__PURE__ */ React.createElement("img", {
  className: "w-32 h-32 mx-auto rounded-full",
  src: image,
  alt: character
})), /* @__PURE__ */ React.createElement("div", {
  className: "p-2"
}, /* @__PURE__ */ React.createElement("h3", {
  className: "text-xl font-medium leading-8 text-center text-gray-900"
}, character), /* @__PURE__ */ React.createElement("div", {
  className: "text-xs font-semibold text-center text-gray-400"
}, /* @__PURE__ */ React.createElement("p", null, interpretedBy)), /* @__PURE__ */ React.createElement("table", {
  className: "my-3 text-xs"
}, /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
  className: "px-2 py-2 font-semibold text-gray-500"
}, "Hogwarts House"), /* @__PURE__ */ React.createElement("td", {
  className: "px-2 py-2"
}, hogwartsHouse)), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
  className: "px-2 py-2 font-semibold text-gray-500"
}, "Nickname"), /* @__PURE__ */ React.createElement("td", {
  className: "px-2 py-2"
}, nickname)), /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("td", {
  className: "px-2 py-2 font-semibold text-gray-500"
}, "Hogwarts Student"), /* @__PURE__ */ React.createElement("td", {
  className: "px-2 py-2"
}, hogwartsStudent ? "Yes" : "No")))))));
var characterCard_default = CharacterCard;

// route:/home/m7he4rt/development/harry-potter/app/routes/characters.tsx
var loader = async () => {
  const res = await fetch("https://fedeperin-harry-potter-api-en.herokuapp.com/characters");
  return {
    characters: await res.json()
  };
};
function ErrorBoundary() {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-red-500"
  }, "Whoops this route characters.tsx have an error \u{1F4A3}");
}
function characters_default() {
  const { characters } = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, characters.map((character) => /* @__PURE__ */ React.createElement(characterCard_default, __spreadProps(__spreadValues({}, character), {
    key: `key-for-character-${character.id}`
  }))));
}

// route:/home/m7he4rt/development/harry-potter/app/routes/spells.tsx
var spells_exports = {};
__export(spells_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  default: () => spells_default,
  loader: () => loader2
});
init_react();
var import_remix5 = __toModule(require_remix());

// app/components/spellCard.tsx
init_react();
var SpellCard = ({ spell, use }) => /* @__PURE__ */ React.createElement("div", {
  className: "relative bg-white border rounded"
}, /* @__PURE__ */ React.createElement("div", {
  className: "p-4"
}, /* @__PURE__ */ React.createElement("h3", {
  className: "text-lg font-bold"
}, /* @__PURE__ */ React.createElement("p", {
  className: "stretched-link"
}, spell)), /* @__PURE__ */ React.createElement("p", null, use)));
var spellCard_default = SpellCard;

// route:/home/m7he4rt/development/harry-potter/app/routes/spells.tsx
var loader2 = async () => {
  const res = await fetch("https://fedeperin-harry-potter-api-en.herokuapp.com/spells");
  return {
    spells: await res.json()
  };
};
function ErrorBoundary2() {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-red-500"
  }, "Whoops this route spells.tsx have an error \u{1F4A3}");
}
function spells_default() {
  const { spells } = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, spells.map((spell) => /* @__PURE__ */ React.createElement(spellCard_default, __spreadProps(__spreadValues({}, spell), {
    key: `key-for-spell-${spell.id}`
  }))));
}

// route:/home/m7he4rt/development/harry-potter/app/routes/books.tsx
var books_exports = {};
__export(books_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => books_default,
  loader: () => loader3
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/components/bookCard.tsx
init_react();
var SpellCard2 = ({
  author,
  description,
  releaseDay,
  title
}) => /* @__PURE__ */ React.createElement("div", {
  className: "relative bg-white border rounded"
}, /* @__PURE__ */ React.createElement("div", {
  className: "p-4"
}, /* @__PURE__ */ React.createElement("h3", {
  className: "text-lg font-bold"
}, /* @__PURE__ */ React.createElement("p", {
  className: "stretched-link"
}, title)), /* @__PURE__ */ React.createElement("div", {
  className: "flex justify-between px-2 py-4"
}, /* @__PURE__ */ React.createElement("p", {
  className: "text-sm font-bold text-gray-900"
}, "Author"), /* @__PURE__ */ React.createElement("p", {
  className: "text-sm text-gray-600"
}, author)), /* @__PURE__ */ React.createElement("div", {
  className: "flex justify-between px-2 py-4"
}, /* @__PURE__ */ React.createElement("p", {
  className: "text-sm font-bold text-gray-900"
}, "Release Day"), /* @__PURE__ */ React.createElement("p", {
  className: "text-sm text-gray-600"
}, releaseDay)), /* @__PURE__ */ React.createElement("div", {
  className: "flex flex-col px-2 py-4"
}, /* @__PURE__ */ React.createElement("p", {
  className: "text-sm font-bold text-black"
}, "Description"), /* @__PURE__ */ React.createElement("p", {
  className: "pt-2 text-sm text-gray-600"
}, description))));
var bookCard_default = SpellCard2;

// route:/home/m7he4rt/development/harry-potter/app/routes/books.tsx
var loader3 = async () => {
  const res = await fetch("https://fedeperin-harry-potter-api-en.herokuapp.com/books");
  return {
    books: await res.json()
  };
};
function ErrorBoundary3() {
  return /* @__PURE__ */ React.createElement("h1", {
    className: "text-red-500"
  }, "Whoops this route books.tsx have an error \u{1F4A3}");
}
function books_default() {
  const { books } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, books.map((book) => /* @__PURE__ */ React.createElement(bookCard_default, __spreadValues({
    key: `key-for-book-${book.id}`
  }, book))));
}

// route:/home/m7he4rt/development/harry-potter/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  loader: () => loader4
});
init_react();
var import_remix7 = __toModule(require_remix());
var loader4 = () => (0, import_remix7.redirect)("/characters");

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "880eb43e", "entry": { "module": "/build/entry.client-SNFQWXZF.js", "imports": ["/build/_shared/chunk-EKOHDC4D.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-T5CWQRKF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/books": { "id": "routes/books", "parentId": "root", "path": "books", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/books-BMKTNXFK.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/characters": { "id": "routes/characters", "parentId": "root", "path": "characters", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/characters-FACFXBE6.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-SPOOURVB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/spells": { "id": "routes/spells", "parentId": "root", "path": "spells", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/spells-PYKJPNOD.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-880EB43E.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/characters": {
    id: "routes/characters",
    parentId: "root",
    path: "characters",
    index: void 0,
    caseSensitive: void 0,
    module: characters_exports
  },
  "routes/spells": {
    id: "routes/spells",
    parentId: "root",
    path: "spells",
    index: void 0,
    caseSensitive: void 0,
    module: spells_exports
  },
  "routes/books": {
    id: "routes/books",
    parentId: "root",
    path: "books",
    index: void 0,
    caseSensitive: void 0,
    module: books_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb250YWluZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2xvZ28udHN4IiwgInJvdXRlOi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb3V0ZXMvY2hhcmFjdGVycy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY2hhcmFjdGVyQ2FyZC50c3giLCAicm91dGU6L2hvbWUvbTdoZTRydC9kZXZlbG9wbWVudC9oYXJyeS1wb3R0ZXIvYXBwL3JvdXRlcy9zcGVsbHMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NwZWxsQ2FyZC50c3giLCAicm91dGU6L2hvbWUvbTdoZTRydC9kZXZlbG9wbWVudC9oYXJyeS1wb3R0ZXIvYXBwL3JvdXRlcy9ib29rcy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvYm9va0NhcmQudHN4IiwgInJvdXRlOi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvbTdoZTRydC9kZXZlbG9wbWVudC9oYXJyeS1wb3R0ZXIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvbTdoZTRydC9kZXZlbG9wbWVudC9oYXJyeS1wb3R0ZXIvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb3V0ZXMvY2hhcmFjdGVycy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvbTdoZTRydC9kZXZlbG9wbWVudC9oYXJyeS1wb3R0ZXIvYXBwL3JvdXRlcy9zcGVsbHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb3V0ZXMvYm9va3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9jaGFyYWN0ZXJzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jaGFyYWN0ZXJzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNoYXJhY3RlcnNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3NwZWxsc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc3BlbGxzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNwZWxsc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYm9va3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jvb2tzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJvb2tzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwifi9jb21wb25lbnRzL2NvbnRhaW5lclwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiU2ltcGxlIEhhcnJ5IFBvdHRlciBkb2N1bWVudGF0aW9uXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkgPT4gKFxuICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JpZCBnYXAtOCBweC0xMCBwdC02IHBiLTEwIG14LWF1dG8gc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTRcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvbWFpbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsICJpbXBvcnQgeyBOYXZMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuaW1wb3J0IFJlbWl4TG9nbyBmcm9tIFwifi9jb21wb25lbnRzL2xvZ29cIjtcblxuY29uc3QgY2xhc3NOYW1lQWN0aXZlUm91dGUgPSAoY3VycmVudFJvdXRlOiBib29sZWFuKTogc3RyaW5nID0+IHtcbiAgaWYgKCFjdXJyZW50Um91dGUpIHtcbiAgICByZXR1cm4gXCJ0ZXh0LWdyYXktNjAwIGJvcmRlciBib3JkZXItd2hpdGUgYmctZ3JheS01MCBjdXJzb3ItcG9pbnRlciBweC0zIHB5LTIuNSBmb250LW5vcm1hbCB0ZXh0LXhzIGxlYWRpbmctMyBzaGFkb3ctbWQgcm91bmRlZFwiO1xuICB9XG5cbiAgcmV0dXJuIFwidGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGN1cnNvci1wb2ludGVyIHB4LTMgcHktMi41IGZvbnQtbm9ybWFsIHRleHQteHMgbGVhZGluZy0zIHNoYWRvdy1tZCByb3VuZGVkXCI7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS01IGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LWxnIHB4LTdcIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwci02IHNwYWNlLXgtMyBsZzpwci0xNlwiPlxuICAgICAgICAgIDxSZW1peExvZ28gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgtYXV0byBzcGFjZS14LTIgbWQ6ZmxleFwiPlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICB0bz1cIi9jaGFyYWN0ZXJzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lQWN0aXZlUm91dGUocGF0aG5hbWUgPT09IFwiL2NoYXJhY3RlcnNcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgQ2hhcmFjdGVyc1xuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgdG89XCIvc3BlbGxzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lQWN0aXZlUm91dGUocGF0aG5hbWUgPT09IFwiL3NwZWxsc1wiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTcGVsbHNcbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIHRvPVwiL2Jvb2tzXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lQWN0aXZlUm91dGUocGF0aG5hbWUgPT09IFwiL2Jvb2tzXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJvb2tzXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHBsLTIgc3BhY2UteC01IFwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL203aGU0cnQvcmVtaXgtaGFycnktcG90dGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8RmFHaXRodWJcbiAgICAgICAgICAgICAgc2l6ZT17MjR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLWdyYXktODAwXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiIsICJjb25zdCBSZW1peExvZ28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCA2NTkgMTY1XCJcbiAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICB4bWxuc1hsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJyZW1peC1ydW4tbG9nby10aXRsZVwiXG4gICAgICByb2xlPVwiaW1nXCJcbiAgICAgIHdpZHRoPVwiMTA2XCJcbiAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgID5cbiAgICAgIDx0aXRsZSBpZD1cInJlbWl4LXJ1bi1sb2dvLXRpdGxlXCI+UmVtaXggTG9nbzwvdGl0bGU+XG4gICAgICA8cGF0aCBkPVwiTTAgMTYxVjEzNkg0NS41NDE2QzUzLjE0ODYgMTM2IDU0LjgwMDMgMTQxLjYzOCA1NC44MDAzIDE0NVYxNjFIMFogTTEzMy44NSAxMjQuMTZDMTM1LjMgMTQyLjc2MiAxMzUuMyAxNTEuNDgyIDEzNS4zIDE2MUg5Mi4yMjgzQzkyLjIyODMgMTU4LjkyNyA5Mi4yNjUzIDE1Ny4wMyA5Mi4zMDI4IDE1NS4xMDdDOTIuNDE5NSAxNDkuMTI4IDkyLjU0MTEgMTQyLjg5NCA5MS41NzE3IDEzMC4zMDRDOTAuMjkwNSAxMTEuODcyIDgyLjM0NzMgMTA3Ljc3NiA2Ny43NDE5IDEwNy43NzZINTQuODAyMUgwVjc0LjI0SDY5Ljc5MThDODguMjQwNyA3NC4yNCA5Ny40NjUxIDY4LjYzMiA5Ny40NjUxIDUzLjc4NEM5Ny40NjUxIDQwLjcyOCA4OC4yNDA3IDMyLjgxNiA2OS43OTE4IDMyLjgxNkgwVjBINzcuNDc4OEMxMTkuMjQ1IDAgMTQwIDE5LjcxMiAxNDAgNTEuMkMxNDAgNzQuNzUyIDEyNS4zOTUgOTAuMTEyIDEwNS42NjUgOTIuNjcyQzEyMi4zMiA5NiAxMzIuMDU3IDEwNS40NzIgMTMzLjg1IDEyNC4xNlpcIiAvPlxuICAgICAgPHBhdGggZD1cIk0yMjkuNDMgMTIwLjU3NkMyMjUuNTkgMTI5LjUzNiAyMTguNDIyIDEzMy4zNzYgMjA3LjE1OCAxMzMuMzc2QzE5NC42MTQgMTMzLjM3NiAxODQuMzc0IDEyNi43MiAxODMuMzUgMTEyLjY0SDI2My40NzhWMTAxLjEyQzI2My40NzggNzAuMTQzNyAyNDMuMjU0IDQ0LjAzMTcgMjA1LjExIDQ0LjAzMTdDMTY5LjUyNiA0NC4wMzE3IDE0Mi45MDIgNjkuODg3NyAxNDIuOTAyIDEwNS45ODRDMTQyLjkwMiAxNDIuMzM2IDE2OS4wMTQgMTY0LjM1MiAyMDUuNjIyIDE2NC4zNTJDMjM1LjgzIDE2NC4zNTIgMjU2LjgyMiAxNDkuNzYgMjYyLjcxIDEyMy42NDhMMjI5LjQzIDEyMC41NzZaTTE4My44NjIgOTIuNjcxN0MxODUuMzk4IDgxLjkxOTcgMTkxLjI4NiA3My43Mjc3IDIwNC41OTggNzMuNzI3N0MyMTYuODg2IDczLjcyNzcgMjIzLjU0MiA4Mi40MzE3IDIyNC4wNTQgOTIuNjcxN0gxODMuODYyWlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTM4NS4yNTYgNjYuNTU5N0MzODAuMzkyIDUzLjI0NzcgMzY5Ljg5NiA0NC4wMzE3IDM0OS42NzIgNDQuMDMxN0MzMzIuNTIgNDQuMDMxNyAzMjAuMjMyIDUxLjcxMTcgMzE0LjA4OCA2NC4yNTU3VjQ3LjEwMzdIMjcyLjYxNlYxNjEuMjhIMzE0LjA4OFYxMDUuMjE2QzMxNC4wODggODguMDYzOCAzMTguOTUyIDc2Ljc5OTcgMzMyLjUyIDc2Ljc5OTdDMzQ1LjA2NCA3Ni43OTk3IDM0OC4xMzYgODQuOTkxNyAzNDguMTM2IDEwMC42MDhWMTYxLjI4SDM4OS42MDhWMTA1LjIxNkMzODkuNjA4IDg4LjA2MzggMzk0LjIxNiA3Ni43OTk3IDQwOC4wNCA3Ni43OTk3QzQyMC41ODQgNzYuNzk5NyA0MjMuNCA4NC45OTE3IDQyMy40IDEwMC42MDhWMTYxLjI4SDQ2NC44NzJWODkuNTk5N0M0NjQuODcyIDY1Ljc5MTcgNDU1LjY1NiA0NC4wMzE3IDQyNC4xNjggNDQuMDMxN0M0MDQuOTY4IDQ0LjAzMTcgMzkxLjQgNTMuNzU5NyAzODUuMjU2IDY2LjU1OTdaXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNDc4LjQzNiA0Ny4xMDRWMTYxLjI4SDUxOS45MDhWNDcuMTA0SDQ3OC40MzZaTTQ3OC4xOCAzNi4zNTJINTIwLjE2NFYwSDQ3OC4xOFYzNi4zNTJaXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNNjU0LjU0IDQ3LjEwMzVINjExLjc4OEw1OTIuMzMyIDc0LjIzOTVMNTczLjM4OCA0Ny4xMDM1SDUyNy41NjRMNTY4Ljc4IDEwMy4xNjhMNTIzLjk4IDE2MS4yOEg1NjYuNzMyTDU4OS41MTYgMTMwLjMwNEw2MTIuMyAxNjEuMjhINjU4LjEyNEw2MTMuMDY4IDEwMS4zNzZMNjU0LjU0IDQ3LjEwMzVaXCIgLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbWl4TG9nbztcbiIsICJpbXBvcnQgeyBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgQ2hhcmFjdGVyQ2FyZCwgeyBDaGFyYWN0ZXJQcm9wcyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvY2hhcmFjdGVyQ2FyZFwiO1xuXG50eXBlIExvYWRlckNoYXJhY3RlciA9IHtcbiAgY2hhcmFjdGVyczogQ2hhcmFjdGVyUHJvcHNbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vZmVkZXBlcmluLWhhcnJ5LXBvdHRlci1hcGktZW4uaGVyb2t1YXBwLmNvbS9jaGFyYWN0ZXJzXCJcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGNoYXJhY3RlcnM6IGF3YWl0IHJlcy5qc29uKCksXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+XG4gICAgICBXaG9vcHMgdGhpcyByb3V0ZSBjaGFyYWN0ZXJzLnRzeCBoYXZlIGFuIGVycm9yIFx1RDgzRFx1RENBM1xuICAgIDwvaDE+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgeyBjaGFyYWN0ZXJzIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckNoYXJhY3Rlcj4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Y2hhcmFjdGVycy5tYXAoKGNoYXJhY3RlcikgPT4gKFxuICAgICAgICA8Q2hhcmFjdGVyQ2FyZFxuICAgICAgICAgIHsuLi5jaGFyYWN0ZXJ9XG4gICAgICAgICAga2V5PXtga2V5LWZvci1jaGFyYWN0ZXItJHtjaGFyYWN0ZXIuaWR9YH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCB0eXBlIENoYXJhY3RlclByb3BzID0ge1xuICBpZDogbnVtYmVyO1xuICBjaGFyYWN0ZXI6IHN0cmluZztcbiAgaG9nd2FydHNIb3VzZTogc3RyaW5nO1xuICBpbnRlcnByZXRlZEJ5OiBzdHJpbmc7XG4gIGltYWdlOiBzdHJpbmc7XG4gIG5pY2tuYW1lOiBzdHJpbmc7XG4gIGhvZ3dhcnRzU3R1ZGVudDogYm9vbGVhbjtcbn07XG5cbmNvbnN0IENoYXJhY3RlckNhcmQgPSAoe1xuICBjaGFyYWN0ZXIsXG4gIGhvZ3dhcnRzSG91c2UsXG4gIGludGVycHJldGVkQnksXG4gIGltYWdlLFxuICBob2d3YXJ0c1N0dWRlbnQsXG4gIG5pY2tuYW1lLFxufTogT21pdDxDaGFyYWN0ZXJQcm9wcywgXCJpZFwiPikgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXhzXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSBib3JkZXIgcm91bmRlZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTIgcGhvdG8td3JhcHBlclwiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0zMiBoLTMyIG14LWF1dG8gcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgIGFsdD17Y2hhcmFjdGVyfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtIGxlYWRpbmctOCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAge2NoYXJhY3Rlcn1cbiAgICAgICAgPC9oMz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgIDxwPntpbnRlcnByZXRlZEJ5fTwvcD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cIm15LTMgdGV4dC14c1wiPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTIgcHktMiBmb250LXNlbWlib2xkIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICBIb2d3YXJ0cyBIb3VzZVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtMiBweS0yXCI+e2hvZ3dhcnRzSG91c2V9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0yIHB5LTIgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgTmlja25hbWVcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTIgcHktMlwiPntuaWNrbmFtZX08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTIgcHktMiBmb250LXNlbWlib2xkIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICBIb2d3YXJ0cyBTdHVkZW50XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0yIHB5LTJcIj57aG9nd2FydHNTdHVkZW50ID8gXCJZZXNcIiA6IFwiTm9cIn08L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyQ2FyZDtcbiIsICJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IFNwZWxsQ2FyZCwgeyBTcGVsbFByb3BzIH0gZnJvbSBcIn4vY29tcG9uZW50cy9zcGVsbENhcmRcIjtcblxudHlwZSBMb2FkZXJTcGVsbHMgPSB7XG4gIHNwZWxsczogU3BlbGxQcm9wc1tdO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9mZWRlcGVyaW4taGFycnktcG90dGVyLWFwaS1lbi5oZXJva3VhcHAuY29tL3NwZWxsc1wiXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBzcGVsbHM6IGF3YWl0IHJlcy5qc29uKCksXG4gIH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gRXJyb3JCb3VuZGFyeSgpIHtcbiAgcmV0dXJuIChcbiAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+XG4gICAgICBXaG9vcHMgdGhpcyByb3V0ZSBzcGVsbHMudHN4IGhhdmUgYW4gZXJyb3IgXHVEODNEXHVEQ0EzXG4gICAgPC9oMT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IHNwZWxscyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJTcGVsbHM+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge3NwZWxscy5tYXAoKHNwZWxsKSA9PiAoXG4gICAgICAgIDxTcGVsbENhcmQgey4uLnNwZWxsfSBrZXk9e2BrZXktZm9yLXNwZWxsLSR7c3BlbGwuaWR9YH0gLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCB0eXBlIFNwZWxsUHJvcHMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHNwZWxsOiBzdHJpbmc7XG4gIHVzZTogc3RyaW5nO1xufTtcblxuY29uc3QgU3BlbGxDYXJkID0gKHsgc3BlbGwsIHVzZSB9OiBPbWl0PFNwZWxsUHJvcHMsIFwiaWRcIj4pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy13aGl0ZSBib3JkZXIgcm91bmRlZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RyZXRjaGVkLWxpbmtcIj57c3BlbGx9PC9wPlxuICAgICAgPC9oMz5cbiAgICAgIDxwPnt1c2V9PC9wPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWxsQ2FyZDtcbiIsICJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IEJvb2tDYXJkLCB7IEJvb2tQcm9wcyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvYm9va0NhcmRcIjtcblxudHlwZSBMb2FkZXJCb29rcyA9IHtcbiAgYm9va3M6IEJvb2tQcm9wc1tdO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9mZWRlcGVyaW4taGFycnktcG90dGVyLWFwaS1lbi5oZXJva3VhcHAuY29tL2Jvb2tzXCJcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGJvb2tzOiBhd2FpdCByZXMuanNvbigpLFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoKSB7XG4gIHJldHVybiAoXG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgV2hvb3BzIHRoaXMgcm91dGUgYm9va3MudHN4IGhhdmUgYW4gZXJyb3IgXHVEODNEXHVEQ0EzXG4gICAgPC9oMT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBjb25zdCB7IGJvb2tzIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckJvb2tzPigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtib29rcy5tYXAoKGJvb2spID0+IChcbiAgICAgICAgPEJvb2tDYXJkIGtleT17YGtleS1mb3ItYm9vay0ke2Jvb2suaWR9YH0gey4uLmJvb2t9IC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJleHBvcnQgdHlwZSBCb29rUHJvcHMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHJlbGVhc2VEYXk6IHN0cmluZztcbiAgYXV0aG9yOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59O1xuXG5jb25zdCBTcGVsbENhcmQgPSAoe1xuICBhdXRob3IsXG4gIGRlc2NyaXB0aW9uLFxuICByZWxlYXNlRGF5LFxuICB0aXRsZSxcbn06IE9taXQ8Qm9va1Byb3BzLCBcImlkXCI+KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgYm9yZGVyIHJvdW5kZWRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN0cmV0Y2hlZC1saW5rXCI+e3RpdGxlfTwvcD5cbiAgICAgIDwvaDM+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB4LTIgcHktNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtYm9sZCB0ZXh0LWdyYXktOTAwXCI+QXV0aG9yPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj57YXV0aG9yfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC0yIHB5LTRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPlJlbGVhc2UgRGF5PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj57cmVsZWFzZURheX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBweC0yIHB5LTRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1ibGFja1wiPkRlc2NyaXB0aW9uPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPntkZXNjcmlwdGlvbn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTcGVsbENhcmQ7XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gKCkgPT4gcmVkaXJlY3QoXCIvY2hhcmFjdGVyc1wiKTtcbiIsICJleHBvcnQgZGVmYXVsdCB7J3ZlcnNpb24nOic4ODBlYjQzZScsJ2VudHJ5Jzp7J21vZHVsZSc6Jy9idWlsZC9lbnRyeS5jbGllbnQtU05GUVdYWkYuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUVLT0hEQzRELmpzJ119LCdyb3V0ZXMnOnsncm9vdCc6eydpZCc6J3Jvb3QnLCdwYXJlbnRJZCc6dW5kZWZpbmVkLCdwYXRoJzonJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm9vdC1UNUNXUVJLRi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2Jvb2tzJzp7J2lkJzoncm91dGVzL2Jvb2tzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2Jvb2tzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2Jvb2tzLUJNS1ROWEZLLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2NoYXJhY3RlcnMnOnsnaWQnOidyb3V0ZXMvY2hhcmFjdGVycycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidjaGFyYWN0ZXJzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2NoYXJhY3RlcnMtRkFDRlhCRTYuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtU1BPT1VSVkIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL3NwZWxscyc6eydpZCc6J3JvdXRlcy9zcGVsbHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonc3BlbGxzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL3NwZWxscy1QWUtKUE5PRC5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX19LCd1cmwnOicvYnVpbGQvbWFuaWZlc3QtODgwRUI0M0UuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLDRCQUE0QjtBQUFBLE1BQ3pELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsb0NBQW9DO0FBQUEsTUFDakUsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFL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
