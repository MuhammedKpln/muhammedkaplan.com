import { BOOKMARKS_COLLECTION, DATABASE_ID, db } from "@appwrite/client";
import { Query } from "@appwrite/sdk";
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { successResponse } from "../_shared/http.ts";

Deno.serve(async (req) => {
  const queries: string[] = [];

  if (req.bodyUsed) {
    const { limit } = await req.json();

    if (limit) {
      queries.push(Query.limit(parseInt(limit)));
    }
  }

  const bookmarks = await db.listDocuments(
    DATABASE_ID,
    BOOKMARKS_COLLECTION,
    queries
  );

  return successResponse(bookmarks);
});
