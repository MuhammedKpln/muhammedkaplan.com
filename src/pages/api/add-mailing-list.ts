import type { APIRoute } from "astro";
import { z } from "astro/zod";
import { MailingList, db } from "astro:db";

const validator = z.object({
  email: z.string().email(),
});

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");

  try {
    const valid = await validator.parseAsync({ email });

    try {
      await db.insert(MailingList).values({
        email: valid.email,
      });
    } catch (error) {
      return new Response(
        JSON.stringify({
          error: "Already exists",
        }),
        { status: 400 }
      );
    }
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Required fields",
      }),
      { status: 400 }
    );
  }

  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: "Success!",
    }),
    { status: 200 }
  );
};
