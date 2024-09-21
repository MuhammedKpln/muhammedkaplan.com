import { Client, Databases } from "@appwrite/sdk";

export const DATABASE_ID = "66edda210010c9cbdace";
export const BOOKMARKS_COLLECTION = "66edda25001a2d091a50";

export const client: Client = new Client();
export const db = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(Deno.env.get("APPWRITE_PROJECT_ID")!)
  .setKey(Deno.env.get("APPWRITE_API_KEY")!);
