export async function POST(
  request: Request
) {

  const body =
    await request.json();

  return Response.json({

    success: true,
    prompt: body.prompt,

    models: [
      "OpenAI",
      "Claude",
      "DeepSeek",
      "Gemini"
    ]

  });

}
