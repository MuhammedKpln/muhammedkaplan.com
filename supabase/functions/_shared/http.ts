export const errorResponse = (error: string) => {
  return new Response(
    JSON.stringify({
      error,
    }),
    {
      status: 400,
    }
  );
};

export const successResponse = (response: unknown) => {
  return new Response(JSON.stringify(response), {
    headers: { "Content-Type": "application/json" },
  });
};
