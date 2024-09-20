import { Slugify } from "@officialrajdeepsingh/slugify";
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { BOOKMARKS_COLLECTION, DATABASE_ID, db } from "../_shared/appwrite.ts";
import { errorResponse, successResponse } from "../_shared/http.ts";

interface IRequest {
  title: string;
  description: string;
}

Deno.serve(async (req) => {
  const request = (await req.json()) as IRequest;

  if (!request.title || !request.description) {
    return errorResponse("Title or description is required");
  }

  const documentID = Slugify(request.title);

  return db
    .createDocument(DATABASE_ID, BOOKMARKS_COLLECTION, documentID, {
      description: request.description,
      title: request.title,
      created_at: new Date().toISOString(),
    })
    .then((r) => {
      return successResponse(r);
    })
    .catch((err) => {
      return errorResponse(err.message);
    });
});
