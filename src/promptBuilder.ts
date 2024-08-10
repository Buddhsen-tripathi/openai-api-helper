export class PromptBuilder {
    private prompt: string;

    constructor() {
        this.prompt = "";
    }

    addBackground(background: string): PromptBuilder {
        this.prompt += `Background: ${background}\n`;
        return this;
    }

    addContext(context: string): PromptBuilder {
        this.prompt += `Context: ${context}\n`;
        return this;
    }

    addInstructions(instructions:string): PromptBuilder {
        this.prompt += `Instructions: ${instructions}\n`;
        return this;
    }

    addExamples(examples: string): PromptBuilder {
        this.prompt += `Examples: ${examples}\n`;
        return this;
    }

    addUserInput(userInput: string): PromptBuilder {
        this.prompt += `${userInput}\n`;
        return this;
    }

    build(): string {
        return this.prompt.trim();
    }
}