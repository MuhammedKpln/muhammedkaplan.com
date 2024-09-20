import { Client, Databases } from "@appwrite/sdk";

export const DATABASE_ID = "66edda210010c9cbdace";
export const BOOKMARKS_COLLECTION = "66edda25001a2d091a50";

export const client: Client = new Client();
export const db = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66edd9e5001de168906c")
  .setKey(
    "standard_7b8299de088c45a65da0e0a582ae5310d151ed6417a5c37cbd0146ef8c7383a66dc359ceb9986f64bdc3d4ddc0973f39fe00c42c527deb6163a761ed0d4a6f7800f58b46d90523640cc5d35edb15e8e567dbfef2d07975d5e654bae296e38cd13f02e2683115193caa2243cf1248fff896eb8e9ce97fd43f9d2b42b8cda7b4d8"
  );
