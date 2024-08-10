"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromptBuilder = void 0;
class PromptBuilder {
    constructor() {
        this.prompt = "";
    }
    addBackground(background) {
        this.prompt += `Background: ${background}\n`;
        return this;
    }
    addContext(context) {
        this.prompt += `Context: ${context}\n`;
        return this;
    }
    addInstructions(instructions) {
        this.prompt += `Instructions: ${instructions}\n`;
        return this;
    }
    addExamples(examples) {
        this.prompt += `Examples: ${examples}\n`;
        return this;
    }
    addUserInput(userInput) {
        this.prompt += `${userInput}\n`;
        return this;
    }
    build() {
        return this.prompt.trim();
    }
}
exports.PromptBuilder = PromptBuilder;
