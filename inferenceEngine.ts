export async function parallelInference(
  prompt: string
) {

  return {
    openai: "Response from OpenAI",
    claude: "Response from Claude",
    deepseek: "Response from DeepSeek",
    gemini: "Response from Gemini"
  };

}
