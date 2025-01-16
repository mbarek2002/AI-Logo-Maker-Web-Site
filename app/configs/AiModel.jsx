const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const AIDesignIdea = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Based on Logo of type Modern Mascot  Generate a text prompt to create Logo for Logo title/Brand name : Indian Spice  with decription: Indian Restaurant  and refering to prompt: A vibrant logo featuring , animated character with a playful expression .The character is dressed in a classic uniform ,complete with a distinctive accessory that adds personality .  In one hand , they hold a signature item that represents the brand , while the other elements of the design -such as small decorative touches or natural accents -enhance the overall look . the background consists of a blod , circular design with subtle accents to highlights the character . Below , the brand name is displayed in bold , stylized lettering , with a slight curve and complementary decorative lines .The overall style is fun welcoming , and full of character  . Give me 4/5 Suggestion of logo idea (each idea with maximum 4-5 words), Result in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"logo_ideas\": [\n    {\n      \"id\": 1,\n      \"idea\": \"Chef character with spice\"\n     },\n     {\n      \"id\": 2,\n      \"idea\": \"Smiling waiter with curry\"\n    },\n    {\n      \"id\": 3,\n        \"idea\": \"Animated Maharaja with biryani\"\n    },\n     {\n       \"id\": 4,\n      \"idea\":\"Friendly elephant with naan\"\n    },\n     {\n       \"id\":5,\n        \"idea\":\"Smiling tiger with spices\"\n     }\n  ]\n}\n```\n"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
