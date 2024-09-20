import { Slugify } from "@officialrajdeepsingh/slugify";
import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { BOOKMARKS_COLLECTION, DATABASE_ID, db } from "../_shared/appwrite.ts";

interface IRequest {
  title: string;
  description: string;
}

Deno.serve(async (req) => {
  const request = (await req.json()) as IRequest;

  console.log(request);

  if (!request.title || !request.description) {
    return new Response(null, {
      status: 400,
    });
  }

  const documentID = Slugify(request.title);

  return db
    .createDocument(DATABASE_ID, BOOKMARKS_COLLECTION, documentID, {
      description: request.description,
      title: request.title,
      created_at: new Date().toISOString(),
    })
    .then((r) => {
      return new Response(JSON.stringify(r), {
        headers: { "Content-Type": "application/json" },
      });
    })
    .catch((err) => {
      return new Response(
        JSON.stringify({
          error: err.message,
        }),
        {
          headers: { "Content-Type": "application/json" },
          status: 400,
        }
      );
    });
});
