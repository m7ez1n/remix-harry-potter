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
    className: "flex-auto hidden space-x-2 md:flex"
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
var tailwind_default = "/build/_assets/tailwind-CK6WGBXJ.css";

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
var assets_manifest_default = { "version": "d6e27e69", "entry": { "module": "/build/entry.client-SNFQWXZF.js", "imports": ["/build/_shared/chunk-EKOHDC4D.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-4KLPFV2C.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/books": { "id": "routes/books", "parentId": "root", "path": "books", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/books-BMKTNXFK.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/characters": { "id": "routes/characters", "parentId": "root", "path": "characters", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/characters-FACFXBE6.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-SPOOURVB.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/spells": { "id": "routes/spells", "parentId": "root", "path": "spells", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/spells-PYKJPNOD.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-D6E27E69.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb290LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb250YWluZXIudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL25hdmlnYXRpb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2xvZ28udHN4IiwgInJvdXRlOi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb3V0ZXMvY2hhcmFjdGVycy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY2hhcmFjdGVyQ2FyZC50c3giLCAicm91dGU6L2hvbWUvbTdoZTRydC9kZXZlbG9wbWVudC9oYXJyeS1wb3R0ZXIvYXBwL3JvdXRlcy9zcGVsbHMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL3NwZWxsQ2FyZC50c3giLCAicm91dGU6L2hvbWUvbTdoZTRydC9kZXZlbG9wbWVudC9oYXJyeS1wb3R0ZXIvYXBwL3JvdXRlcy9ib29rcy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvYm9va0NhcmQudHN4IiwgInJvdXRlOi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL2hvbWUvbTdoZTRydC9kZXZlbG9wbWVudC9oYXJyeS1wb3R0ZXIvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL2hvbWUvbTdoZTRydC9kZXZlbG9wbWVudC9oYXJyeS1wb3R0ZXIvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb3V0ZXMvY2hhcmFjdGVycy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL2hvbWUvbTdoZTRydC9kZXZlbG9wbWVudC9oYXJyeS1wb3R0ZXIvYXBwL3JvdXRlcy9zcGVsbHMudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb3V0ZXMvYm9va3MudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9ob21lL203aGU0cnQvZGV2ZWxvcG1lbnQvaGFycnktcG90dGVyL2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9jaGFyYWN0ZXJzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9jaGFyYWN0ZXJzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImNoYXJhY3RlcnNcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL3NwZWxsc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvc3BlbGxzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcInNwZWxsc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvYm9va3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2Jvb2tzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImJvb2tzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTRcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwifi9jb21wb25lbnRzL2NvbnRhaW5lclwiO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIn4vY29tcG9uZW50cy9uYXZpZ2F0aW9uXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdGFpbHdpbmQuY3NzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6IFwiU2ltcGxlIEhhcnJ5IFBvdHRlciBkb2N1bWVudGF0aW9uXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxOYXZpZ2F0aW9uIC8+XG4gICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIDxMaXZlUmVsb2FkIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApO1xufVxuIiwgImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkgPT4gKFxuICA8bWFpbiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JpZCBnYXAtOCBweC0xMCBwdC02IHBiLTEwIG14LWF1dG8gc206Z3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgeGw6Z3JpZC1jb2xzLTRcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvbWFpbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsICJpbXBvcnQgeyBOYXZMaW5rLCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuaW1wb3J0IFJlbWl4TG9nbyBmcm9tIFwifi9jb21wb25lbnRzL2xvZ29cIjtcblxuY29uc3QgY2xhc3NOYW1lQWN0aXZlUm91dGUgPSAoY3VycmVudFJvdXRlOiBib29sZWFuKTogc3RyaW5nID0+IHtcbiAgaWYgKCFjdXJyZW50Um91dGUpIHtcbiAgICByZXR1cm4gXCJ0ZXh0LWdyYXktNjAwIGJvcmRlciBib3JkZXItd2hpdGUgYmctZ3JheS01MCBjdXJzb3ItcG9pbnRlciBweC0zIHB5LTIuNSBmb250LW5vcm1hbCB0ZXh0LXhzIGxlYWRpbmctMyBzaGFkb3ctbWQgcm91bmRlZFwiO1xuICB9XG5cbiAgcmV0dXJuIFwidGV4dC13aGl0ZSBiZy1pbmRpZ28tNjAwIGN1cnNvci1wb2ludGVyIHB4LTMgcHktMi41IGZvbnQtbm9ybWFsIHRleHQteHMgbGVhZGluZy0zIHNoYWRvdy1tZCByb3VuZGVkXCI7XG59O1xuXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJweS01IGJnLXdoaXRlIHJvdW5kZWQgc2hhZG93LWxnIHB4LTdcIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwci02IHNwYWNlLXgtMyBsZzpwci0xNlwiPlxuICAgICAgICAgIDxSZW1peExvZ28gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXgtYXV0byBoaWRkZW4gc3BhY2UteC0yIG1kOmZsZXhcIj5cbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgdG89XCIvY2hhcmFjdGVyc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZUFjdGl2ZVJvdXRlKHBhdGhuYW1lID09PSBcIi9jaGFyYWN0ZXJzXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENoYXJhY3RlcnNcbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIHRvPVwiL3NwZWxsc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZUFjdGl2ZVJvdXRlKHBhdGhuYW1lID09PSBcIi9zcGVsbHNcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgU3BlbGxzXG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgICB0bz1cIi9ib29rc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZUFjdGl2ZVJvdXRlKHBhdGhuYW1lID09PSBcIi9ib29rc1wiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBCb29rc1xuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwbC0yIHNwYWNlLXgtNSBcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tN2hlNHJ0L3JlbWl4LWhhcnJ5LXBvdHRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZhR2l0aHViXG4gICAgICAgICAgICAgIHNpemU9ezI0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy1ncmF5LTgwMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iLCAiY29uc3QgUmVtaXhMb2dvID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjU5IDE2NVwiXG4gICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwicmVtaXgtcnVuLWxvZ28tdGl0bGVcIlxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgICB3aWR0aD1cIjEwNlwiXG4gICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICA+XG4gICAgICA8dGl0bGUgaWQ9XCJyZW1peC1ydW4tbG9nby10aXRsZVwiPlJlbWl4IExvZ288L3RpdGxlPlxuICAgICAgPHBhdGggZD1cIk0wIDE2MVYxMzZINDUuNTQxNkM1My4xNDg2IDEzNiA1NC44MDAzIDE0MS42MzggNTQuODAwMyAxNDVWMTYxSDBaIE0xMzMuODUgMTI0LjE2QzEzNS4zIDE0Mi43NjIgMTM1LjMgMTUxLjQ4MiAxMzUuMyAxNjFIOTIuMjI4M0M5Mi4yMjgzIDE1OC45MjcgOTIuMjY1MyAxNTcuMDMgOTIuMzAyOCAxNTUuMTA3QzkyLjQxOTUgMTQ5LjEyOCA5Mi41NDExIDE0Mi44OTQgOTEuNTcxNyAxMzAuMzA0QzkwLjI5MDUgMTExLjg3MiA4Mi4zNDczIDEwNy43NzYgNjcuNzQxOSAxMDcuNzc2SDU0LjgwMjFIMFY3NC4yNEg2OS43OTE4Qzg4LjI0MDcgNzQuMjQgOTcuNDY1MSA2OC42MzIgOTcuNDY1MSA1My43ODRDOTcuNDY1MSA0MC43MjggODguMjQwNyAzMi44MTYgNjkuNzkxOCAzMi44MTZIMFYwSDc3LjQ3ODhDMTE5LjI0NSAwIDE0MCAxOS43MTIgMTQwIDUxLjJDMTQwIDc0Ljc1MiAxMjUuMzk1IDkwLjExMiAxMDUuNjY1IDkyLjY3MkMxMjIuMzIgOTYgMTMyLjA1NyAxMDUuNDcyIDEzMy44NSAxMjQuMTZaXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMjI5LjQzIDEyMC41NzZDMjI1LjU5IDEyOS41MzYgMjE4LjQyMiAxMzMuMzc2IDIwNy4xNTggMTMzLjM3NkMxOTQuNjE0IDEzMy4zNzYgMTg0LjM3NCAxMjYuNzIgMTgzLjM1IDExMi42NEgyNjMuNDc4VjEwMS4xMkMyNjMuNDc4IDcwLjE0MzcgMjQzLjI1NCA0NC4wMzE3IDIwNS4xMSA0NC4wMzE3QzE2OS41MjYgNDQuMDMxNyAxNDIuOTAyIDY5Ljg4NzcgMTQyLjkwMiAxMDUuOTg0QzE0Mi45MDIgMTQyLjMzNiAxNjkuMDE0IDE2NC4zNTIgMjA1LjYyMiAxNjQuMzUyQzIzNS44MyAxNjQuMzUyIDI1Ni44MjIgMTQ5Ljc2IDI2Mi43MSAxMjMuNjQ4TDIyOS40MyAxMjAuNTc2Wk0xODMuODYyIDkyLjY3MTdDMTg1LjM5OCA4MS45MTk3IDE5MS4yODYgNzMuNzI3NyAyMDQuNTk4IDczLjcyNzdDMjE2Ljg4NiA3My43Mjc3IDIyMy41NDIgODIuNDMxNyAyMjQuMDU0IDkyLjY3MTdIMTgzLjg2MlpcIiAvPlxuICAgICAgPHBhdGggZD1cIk0zODUuMjU2IDY2LjU1OTdDMzgwLjM5MiA1My4yNDc3IDM2OS44OTYgNDQuMDMxNyAzNDkuNjcyIDQ0LjAzMTdDMzMyLjUyIDQ0LjAzMTcgMzIwLjIzMiA1MS43MTE3IDMxNC4wODggNjQuMjU1N1Y0Ny4xMDM3SDI3Mi42MTZWMTYxLjI4SDMxNC4wODhWMTA1LjIxNkMzMTQuMDg4IDg4LjA2MzggMzE4Ljk1MiA3Ni43OTk3IDMzMi41MiA3Ni43OTk3QzM0NS4wNjQgNzYuNzk5NyAzNDguMTM2IDg0Ljk5MTcgMzQ4LjEzNiAxMDAuNjA4VjE2MS4yOEgzODkuNjA4VjEwNS4yMTZDMzg5LjYwOCA4OC4wNjM4IDM5NC4yMTYgNzYuNzk5NyA0MDguMDQgNzYuNzk5N0M0MjAuNTg0IDc2Ljc5OTcgNDIzLjQgODQuOTkxNyA0MjMuNCAxMDAuNjA4VjE2MS4yOEg0NjQuODcyVjg5LjU5OTdDNDY0Ljg3MiA2NS43OTE3IDQ1NS42NTYgNDQuMDMxNyA0MjQuMTY4IDQ0LjAzMTdDNDA0Ljk2OCA0NC4wMzE3IDM5MS40IDUzLjc1OTcgMzg1LjI1NiA2Ni41NTk3WlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTQ3OC40MzYgNDcuMTA0VjE2MS4yOEg1MTkuOTA4VjQ3LjEwNEg0NzguNDM2Wk00NzguMTggMzYuMzUySDUyMC4xNjRWMEg0NzguMThWMzYuMzUyWlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTY1NC41NCA0Ny4xMDM1SDYxMS43ODhMNTkyLjMzMiA3NC4yMzk1TDU3My4zODggNDcuMTAzNUg1MjcuNTY0TDU2OC43OCAxMDMuMTY4TDUyMy45OCAxNjEuMjhINTY2LjczMkw1ODkuNTE2IDEzMC4zMDRMNjEyLjMgMTYxLjI4SDY1OC4xMjRMNjEzLjA2OCAxMDEuMzc2TDY1NC41NCA0Ny4xMDM1WlwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW1peExvZ287XG4iLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IENoYXJhY3RlckNhcmQsIHsgQ2hhcmFjdGVyUHJvcHMgfSBmcm9tIFwifi9jb21wb25lbnRzL2NoYXJhY3RlckNhcmRcIjtcblxudHlwZSBMb2FkZXJDaGFyYWN0ZXIgPSB7XG4gIGNoYXJhY3RlcnM6IENoYXJhY3RlclByb3BzW107XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwczovL2ZlZGVwZXJpbi1oYXJyeS1wb3R0ZXItYXBpLWVuLmhlcm9rdWFwcC5jb20vY2hhcmFjdGVyc1wiXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBjaGFyYWN0ZXJzOiBhd2FpdCByZXMuanNvbigpLFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoKSB7XG4gIHJldHVybiAoXG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgV2hvb3BzIHRoaXMgcm91dGUgY2hhcmFjdGVycy50c3ggaGF2ZSBhbiBlcnJvciBcdUQ4M0RcdURDQTNcbiAgICA8L2gxPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHsgY2hhcmFjdGVycyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJDaGFyYWN0ZXI+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IChcbiAgICAgICAgPENoYXJhY3RlckNhcmRcbiAgICAgICAgICB7Li4uY2hhcmFjdGVyfVxuICAgICAgICAgIGtleT17YGtleS1mb3ItY2hhcmFjdGVyLSR7Y2hhcmFjdGVyLmlkfWB9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJleHBvcnQgdHlwZSBDaGFyYWN0ZXJQcm9wcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgY2hhcmFjdGVyOiBzdHJpbmc7XG4gIGhvZ3dhcnRzSG91c2U6IHN0cmluZztcbiAgaW50ZXJwcmV0ZWRCeTogc3RyaW5nO1xuICBpbWFnZTogc3RyaW5nO1xuICBuaWNrbmFtZTogc3RyaW5nO1xuICBob2d3YXJ0c1N0dWRlbnQ6IGJvb2xlYW47XG59O1xuXG5jb25zdCBDaGFyYWN0ZXJDYXJkID0gKHtcbiAgY2hhcmFjdGVyLFxuICBob2d3YXJ0c0hvdXNlLFxuICBpbnRlcnByZXRlZEJ5LFxuICBpbWFnZSxcbiAgaG9nd2FydHNTdHVkZW50LFxuICBuaWNrbmFtZSxcbn06IE9taXQ8Q2hhcmFjdGVyUHJvcHMsIFwiaWRcIj4pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy14c1wiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgYm9yZGVyIHJvdW5kZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yIHBob3RvLXdyYXBwZXJcIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIGNsYXNzTmFtZT1cInctMzIgaC0zMiBteC1hdXRvIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICBhbHQ9e2NoYXJhY3Rlcn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bSBsZWFkaW5nLTggdGV4dC1jZW50ZXIgdGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgIHtjaGFyYWN0ZXJ9XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQtZ3JheS00MDBcIj5cbiAgICAgICAgICA8cD57aW50ZXJwcmV0ZWRCeX08L3A+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJteS0zIHRleHQteHNcIj5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0yIHB5LTIgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgSG9nd2FydHMgSG91c2VcbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTIgcHktMlwiPntob2d3YXJ0c0hvdXNlfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtMiBweS0yIGZvbnQtc2VtaWJvbGQgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgIE5pY2tuYW1lXG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0yIHB5LTJcIj57bmlja25hbWV9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC0yIHB5LTIgZm9udC1zZW1pYm9sZCB0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgSG9nd2FydHMgU3R1ZGVudFxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtMiBweS0yXCI+e2hvZ3dhcnRzU3R1ZGVudCA/IFwiWWVzXCIgOiBcIk5vXCJ9PC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlckNhcmQ7XG4iLCAiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBTcGVsbENhcmQsIHsgU3BlbGxQcm9wcyB9IGZyb20gXCJ+L2NvbXBvbmVudHMvc3BlbGxDYXJkXCI7XG5cbnR5cGUgTG9hZGVyU3BlbGxzID0ge1xuICBzcGVsbHM6IFNwZWxsUHJvcHNbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vZmVkZXBlcmluLWhhcnJ5LXBvdHRlci1hcGktZW4uaGVyb2t1YXBwLmNvbS9zcGVsbHNcIlxuICApO1xuXG4gIHJldHVybiB7XG4gICAgc3BlbGxzOiBhd2FpdCByZXMuanNvbigpLFxuICB9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoKSB7XG4gIHJldHVybiAoXG4gICAgPGgxIGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMFwiPlxuICAgICAgV2hvb3BzIHRoaXMgcm91dGUgc3BlbGxzLnRzeCBoYXZlIGFuIGVycm9yIFx1RDgzRFx1RENBM1xuICAgIDwvaDE+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgeyBzcGVsbHMgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyU3BlbGxzPigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtzcGVsbHMubWFwKChzcGVsbCkgPT4gKFxuICAgICAgICA8U3BlbGxDYXJkIHsuLi5zcGVsbH0ga2V5PXtga2V5LWZvci1zcGVsbC0ke3NwZWxsLmlkfWB9IC8+XG4gICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJleHBvcnQgdHlwZSBTcGVsbFByb3BzID0ge1xuICBpZDogbnVtYmVyO1xuICBzcGVsbDogc3RyaW5nO1xuICB1c2U6IHN0cmluZztcbn07XG5cbmNvbnN0IFNwZWxsQ2FyZCA9ICh7IHNwZWxsLCB1c2UgfTogT21pdDxTcGVsbFByb3BzLCBcImlkXCI+KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctd2hpdGUgYm9yZGVyIHJvdW5kZWRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInN0cmV0Y2hlZC1saW5rXCI+e3NwZWxsfTwvcD5cbiAgICAgIDwvaDM+XG4gICAgICA8cD57dXNlfTwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBTcGVsbENhcmQ7XG4iLCAiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBCb29rQ2FyZCwgeyBCb29rUHJvcHMgfSBmcm9tIFwifi9jb21wb25lbnRzL2Jvb2tDYXJkXCI7XG5cbnR5cGUgTG9hZGVyQm9va3MgPSB7XG4gIGJvb2tzOiBCb29rUHJvcHNbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBcImh0dHBzOi8vZmVkZXBlcmluLWhhcnJ5LXBvdHRlci1hcGktZW4uaGVyb2t1YXBwLmNvbS9ib29rc1wiXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBib29rczogYXdhaXQgcmVzLmpzb24oKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KCkge1xuICByZXR1cm4gKFxuICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj5cbiAgICAgIFdob29wcyB0aGlzIHJvdXRlIGJvb2tzLnRzeCBoYXZlIGFuIGVycm9yIFx1RDgzRFx1RENBM1xuICAgIDwvaDE+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgeyBib29rcyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJCb29rcz4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Ym9va3MubWFwKChib29rKSA9PiAoXG4gICAgICAgIDxCb29rQ2FyZCBrZXk9e2BrZXktZm9yLWJvb2stJHtib29rLmlkfWB9IHsuLi5ib29rfSAvPlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG4iLCAiZXhwb3J0IHR5cGUgQm9va1Byb3BzID0ge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICByZWxlYXNlRGF5OiBzdHJpbmc7XG4gIGF1dGhvcjogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xufTtcblxuY29uc3QgU3BlbGxDYXJkID0gKHtcbiAgYXV0aG9yLFxuICBkZXNjcmlwdGlvbixcbiAgcmVsZWFzZURheSxcbiAgdGl0bGUsXG59OiBPbWl0PEJvb2tQcm9wcywgXCJpZFwiPikgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLXdoaXRlIGJvcmRlciByb3VuZGVkXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdHJldGNoZWQtbGlua1wiPnt0aXRsZX08L3A+XG4gICAgICA8L2gzPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC0yIHB5LTRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPkF1dGhvcjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+e2F1dGhvcn08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtMiBweS00XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5SZWxlYXNlIERheTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+e3JlbGVhc2VEYXl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHgtMiBweS00XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1ib2xkIHRleHQtYmxhY2tcIj5EZXNjcmlwdGlvbjwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMiB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgU3BlbGxDYXJkO1xuIiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9ICgpID0+IHJlZGlyZWN0KFwiL2NoYXJhY3RlcnNcIik7XG4iLCAiZXhwb3J0IGRlZmF1bHQgeyd2ZXJzaW9uJzonZDZlMjdlNjknLCdlbnRyeSc6eydtb2R1bGUnOicvYnVpbGQvZW50cnkuY2xpZW50LVNORlFXWFpGLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1FS09IREM0RC5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3Jvb3QtNEtMUEZWMkMuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6ZmFsc2UsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9ib29rcyc6eydpZCc6J3JvdXRlcy9ib29rcycsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidib29rcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9ib29rcy1CTUtUTlhGSy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6dHJ1ZX0sJ3JvdXRlcy9jaGFyYWN0ZXJzJzp7J2lkJzoncm91dGVzL2NoYXJhY3RlcnMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonY2hhcmFjdGVycycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9jaGFyYWN0ZXJzLUZBQ0ZYQkU2LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5Jzp0cnVlfSwncm91dGVzL2luZGV4Jzp7J2lkJzoncm91dGVzL2luZGV4JywncGFyZW50SWQnOidyb290JywncGF0aCc6dW5kZWZpbmVkLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvYnVpbGQvcm91dGVzL2luZGV4LVNQT09VUlZCLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zcGVsbHMnOnsnaWQnOidyb3V0ZXMvc3BlbGxzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3NwZWxscycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zcGVsbHMtUFlLSlBOT0QuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6ZmFsc2UsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOnRydWV9fSwndXJsJzonL2J1aWxkL21hbmlmZXN0LUQ2RTI3RTY5LmpzJ307Il0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLE9BQU8sUUFBUTtBQUluQixXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLG9DQUFvQztBQUFBLE1BQ2pFLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVB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
