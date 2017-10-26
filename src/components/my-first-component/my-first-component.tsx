import { Component, Event, EventEmitter, State } from '@stencil/core';

@Component({
    tag: 'my-first-component',
    styleUrl: 'my-first-component.scss'
})
export class MyFirstComponent {

    public list: Array<any> = [
        {
            name: 'Udemy',
            description: 'Udemy is an online learning platform where anyone can create and upload courses. There are over 50,000 courses on the platform covering all trending topics for web developers. ', 
            url: 'https://codingthesmartway.com/udemy',
            imageUrl: '/assets/udemy.jpg'
        },
        {
            name: 'Treehouse',
            description: 'Treehouse is focusing mainly on web design & coding. Here you can choose from 1,000s of hours of content from JavaScript to Python to iOS.',
            url: 'https://codingthesmartway.com/treehouse',
            imageUrl: '/assets/treehouse.png'
        },
        {
            name: 'Coursera',
            description: 'Coursera offers online courses taught by actual college professors from Stanford, University of Michigan, Yale University and many more. Here you can earn your master`s degree fully online',
            url: 'https://codingthesmartway.com/coursera',
            imageUrl: '/assets/coursera.png'
        },
        {
            name: 'Pluralsight',
            description: 'Pluralsight offers thousands of courses authored by leading experts. Every course contains in-depth content that goes beond the fundamentals and teaches you practical skills you can apply immediately.',
            url: 'https://codingthesmartway.com/pluralsight',
            imageUrl: '/assets/pluralsight.png'
        }
    ];

    @State() toggle: boolean = false;

    @Event() onToggle: EventEmitter;

    toggleComponent(): void {
        this.toggle = !this.toggle;
        this.onToggle.emit({visible: this.toggle})
    }

    render() {
        return (
            <div>
                <div class="jumbotron">
                    <center>
                        <h1 class="display-3">Welcome!</h1>
                        <p class="lead">This is a Stencil sample application - Demonstrating the power of pure web components!</p>
                        <button class="btn btn-primary" onClick={() => this.toggleComponent()}>Learning Resources for Web Developers</button>
                    </center>
                </div>

                

                <div class={ this.toggle ? 'active' : 'inactive'}>
                    <div class="row">
                    {
                        this.list.map(entry => 
                            <div class="col-lg-3 col-md-6 col-sd-12">
                            <div class="card">
                                <a href={ entry.url } target="_blank"><img class="card-img-top" src={ entry.imageUrl }/></a>
                                <div class="card-body">
                                    <h4 class="card-title">{ entry.name }</h4>
                                    <p class="card-text">{ entry.description }</p>
                                    <a href={ entry.url } class="btn btn-success" target="_blank">Go to { entry.name }</a>
                                </div>
                            </div>
                            </div>
                        )
                    }
                    </div>
                </div>
            </div>
        );
    }
}