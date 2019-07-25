export class UserForm {
    constructor(public parent: Element) {
    }

    eventsMap(): { [key: string]: () => void } {
        return {
            'click:button': this.onButtonClick
        }
    }

    onButtonClick(): void {
        console.log('hi');
    }

    template(): string {
        return `
            <div>
                <h1>   
                    User
                </h1>   
                <input type="text">
                <button>Click Me</button>
            </div>   
        `;
    }

    render(): void {
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();

        this.parent.append(templateElement.content);
    }
}
