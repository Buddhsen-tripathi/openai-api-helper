import OpenAIAPIHelper from 'openai-api-helper';

const apiKey = 'YOUR_OPENAI_API_KEY';
const openai = new OpenAIAPIHelper(apiKey);

async function test() {
    const model = 'GPT_MODEL';
    const prompt = 'YOUR_PROMPT';
    
    try {
        const response = await openai.call(model, prompt, 0.7, 1);
        console.log('Response from OpenAI:', response);
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
    }
}

test();