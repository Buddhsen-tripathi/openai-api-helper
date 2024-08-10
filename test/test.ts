import OpenAIAPIHelper, { PromptBuilder } from 'openai-api-helper';

const apiKey = 'YOUR_OPENAI_API_KEY';
const openai = new OpenAIAPIHelper(apiKey);
const promptBuilder = new PromptBuilder();

async function test() {
    const model = 'GPT_MODEL';
    const prompt = promptBuilder
                   .addBackground('ADD-BACKGROUND')
                   .addContext('ADD-CONTEXT')
                   .addInstructions('ADD-EXAMPLES')
                   .addExamples('ADD-EXAMPLES')
                   .addUserInput('ADD-USER-INPUT')
                   .build()
    
    try {
        const response = await openai.call(model, prompt, 0.7, 1);
        console.log('Response from OpenAI:', response);
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
    }
}

test();