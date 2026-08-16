import { getCollection } from "astro:content";

export async function getPublishedProjects() {
  const projects = await getCollection("projects", ({ data }) => import.meta.env.DEV || !data.draft);
  return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
