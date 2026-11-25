import { createElement } from "react";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { parse } from "parse5";
import { notFound } from "next/navigation";

const cityPrefix = "best-whatsapp-marketing-crm-in-";
const root = process.cwd();

function inventory(directory = root, segments = []) {
  const results = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === "index.html") results.push(segments.join("/"));
    if (
      entry.isDirectory() &&
      !entry.name.startsWith(".") &&
      !entry.name.startsWith(cityPrefix) &&
      !["app", "node_modules", "public", "assets", "uploads"].includes(entry.name)
    ) {
      results.push(...inventory(join(directory, entry.name), [...segments, entry.name]));
    }
  }
  return results;
}

const routes = new Set(inventory());
export const dynamicParams = false;

export function generateStaticParams() {
  return Array.from(routes, (route) => ({ slug: route ? route.split("/") : [] }));
}

async function documentFor(params) {
  const route = ((await params).slug ?? []).join("/");
  if (!routes.has(route)) notFound();
  const document = parse(readFileSync(join(root, route, "index.html"), "utf8"));
  const html = document.childNodes.find((node) => node.tagName === "html");
  return {
    head: html.childNodes.find((node) => node.tagName === "head").childNodes,
    body: html.childNodes.find((node) => node.tagName === "body").childNodes,
  };
}

const attributeNames = {
  class: "className", for: "htmlFor", tabindex: "tabIndex",
  autocomplete: "autoComplete", maxlength: "maxLength", minlength: "minLength",
  readonly: "readOnly", crossorigin: "crossOrigin", srcset: "srcSet",
  colspan: "colSpan", rowspan: "rowSpan", fetchpriority: "fetchPriority",
  "http-equiv": "httpEquiv", viewBox: "viewBox", "xlink:href": "xlinkHref",
};
const booleanAttributes = new Set(["async", "defer", "required", "disabled", "hidden", "multiple", "readOnly", "controls", "loop", "muted", "open"]);
const voidElements = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
const camelCase = (name) => name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());

function renderNode(node, key) {
  if (node.nodeName === "#text") return node.value;
  if (!node.tagName) return null;
  const props = { key };
  for (const attribute of node.attrs) {
    const { name, value } = attribute;
    if (name.startsWith("on")) continue;
    if (name === "href" && value.startsWith(`/${cityPrefix}`)) return null;
    const prop = attributeNames[name] ?? (
      node.namespaceURI.endsWith("/svg") && !/^(data|aria)-/.test(name) ? camelCase(name) : name
    );
    if (name === "style") {
      props.style = Object.fromEntries(value.split(";").flatMap((declaration) => {
        const colon = declaration.indexOf(":");
        if (colon < 1) return [];
        const property = declaration.slice(0, colon).trim();
        return [[property.startsWith("--") ? property : camelCase(property), declaration.slice(colon + 1).trim()]];
      }));
    } else if (["input", "textarea", "select"].includes(node.tagName) && name === "value") {
      props.defaultValue = value;
    } else if (name === "checked") {
      props.defaultChecked = true;
    } else {
      props[prop] = booleanAttributes.has(prop) ? true : value;
    }
  }
  if (props.className?.split(/\s+/).some((className) => className === "card" || className.endsWith("-card"))) {
    props.className += " webping-card-enter motion-reduce:animate-none";
  }
  if (voidElements.has(node.tagName)) return createElement(node.tagName, props);
  return createElement(node.tagName, props, ...node.childNodes.map(renderNode));
}

export default async function Page({ params }) {
  const { head, body } = await documentFor(params);
  return <>
    {head.filter((node) => !node.attrs?.some(({ name, value }) => name === "name" && value === "viewport")).map(renderNode)}
    {body.map(renderNode)}
  </>;
}
