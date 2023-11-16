const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/chat-bison-001";
var API_KEY = null;

const client = new DiscussServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});


async function main(query) {
  let first = query;
  let messages = [{ content: first }];

  const result = await client.generateMessage({
    model: MODEL_NAME,
    prompt: { messages },
  });

//   console.log("User:\n\n", first, "\n\n")
//   console.log("Palm:\n\n", result[0].candidates[0].content, "\n\n");

//   let second = "Oh, where do those live?"

  messages.push({ content: result[0].candidates[0].content });
  messages.push({ content: second });
  return messages[1].content;

//   const secondResult = await client.generateMessage({
//     model: MODEL_NAME,
//     prompt: { messages },
//   });

//   console.log("User:\n\n", second, "\n\n")
//   console.log("Palm:\n\n", secondResult[0].candidates[0].content, "\n\n");
}

function PalmHelper(API_key,query){
    API_KEY = API_key;
    return main(query);
}

module.exports = PalmHelper;