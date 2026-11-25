import { notFound } from "next/navigation";
import { routes } from "../site-pages/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(routes).map((route) => ({
    slug: route ? route.split("/") : [],
  }));
}

export default async function Page({ params }) {
  const route = ((await params).slug ?? []).join("/");
  if (!Object.hasOwn(routes, route)) notFound();
  const { default: SitePage } = await routes[route]();
  return <SitePage />;
}
