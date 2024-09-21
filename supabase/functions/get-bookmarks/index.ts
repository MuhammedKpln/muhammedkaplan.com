import { BOOKMARKS_COLLECTION, DATABASE_ID, db } from "@appwrite/client";
import { Query } from "@appwrite/sdk";
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { successResponse } from "../_shared/http.ts";

Deno.serve(async (req) => {
  const { limit } = await req.json();
  const queries: string[] = [];

  if (limit) {
    queries.push(Query.limit(parseInt(limit)));
  }

  const bookmarks = await db.listDocuments(
    DATABASE_ID,
    BOOKMARKS_COLLECTION,
    queries
  );

  return successResponse(bookmarks);
});
