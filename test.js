const OpenAIAPIHelper = require('openai-api-helper').default;

async function main() {
    const apiKey = 'YOUR-OPENAI-AI-KEY';
    const model = 'GPT_MODEL';
    const prompt = 'YOUR_PROMPT';

    const openai = new OpenAIAPIHelper(apiKey);

    try {
        const response = await openai.call(model, prompt, 0.8,1);
        console.log('Response from OpenAI:', response);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();