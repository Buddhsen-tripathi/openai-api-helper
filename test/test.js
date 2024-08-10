const { PromptBuilder } = require('openai-api-helper');

const OpenAIAPIHelper = require('openai-api-helper').default;

async function main() {
    const apiKey = 'YOUR-OPENAI-AI-KEY';
    const model = 'GPT_MODEL';

    const promptBuilder = new PromptBuilder();
    
    promptBuilder.addBackground('ADD-BACKGROUND');
    promptBuilder.addContext('ADD-CONTEXT');
    promptBuilder.addInstructions('ADD-INSTRUCTIONS');
    promptBuilder.addExamples('ADD-EXAMPLES')
    promptBuilder.addUserInput('USER-PROMPT');
    
    const prompt = promptBuilder.build();  //builds the prompt and returns complete prompt

    const openai = new OpenAIAPIHelper(apiKey);

    try {
        const response = await openai.call(model, prompt, 0.8,1);
        console.log('Response from OpenAI:', response);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();