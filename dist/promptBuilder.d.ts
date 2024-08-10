export declare class PromptBuilder {
    private prompt;
    constructor();
    addBackground(background: string): PromptBuilder;
    addContext(context: string): PromptBuilder;
    addInstructions(instructions: string): PromptBuilder;
    addExamples(examples: string): PromptBuilder;
    addUserInput(userInput: string): PromptBuilder;
    build(): string;
}
