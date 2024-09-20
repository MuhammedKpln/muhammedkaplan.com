import { BOOKMARKS_COLLECTION, DATABASE_ID, db } from "@appwrite/client";
import "jsr:@supabase/functions-js/edge-runtime.d.ts";

Deno.serve(async (req) => {
  const bookmarks = await db.listDocuments(DATABASE_ID, BOOKMARKS_COLLECTION);

  return new Response(JSON.stringify(bookmarks), {
    headers: { "Content-Type": "application/json" },
  });
});
