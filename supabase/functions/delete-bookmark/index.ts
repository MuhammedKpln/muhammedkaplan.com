import { BOOKMARKS_COLLECTION, DATABASE_ID, db } from "@appwrite/client";
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { errorResponse, successResponse } from "../_shared/http.ts";

Deno.serve(async (req) => {
  const { document_id } = await req.json();

  if (!document_id) {
    return errorResponse("Document ID is required");
  }

  return db
    .deleteDocument(DATABASE_ID, BOOKMARKS_COLLECTION, document_id)
    .then((r) => successResponse({}))
    .catch((err) => errorResponse(err));
});
