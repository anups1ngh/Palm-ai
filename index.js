const { DiscussServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/chat-bison-001";

class PaLM{
    constructor(){
        this.messages = [];
        this.API_KEY = '';
    }
    setAPIKey(API_key){
        this.API_KEY = API_key;
    }
    async askAI(query) {
        const client = new DiscussServiceClient({
            authClient: new GoogleAuth().fromAPIKey(this.API_KEY),
        });
        let messages = [...this.messages, { content: query }];

        const result = await client.generateMessage({
            model: MODEL_NAME,
            prompt: { messages },
        });
        this.messages.push({ content: result[0].candidates[0].content});
        return result[0].candidates[0].content;
    }
}

module.exports = new PaLM;