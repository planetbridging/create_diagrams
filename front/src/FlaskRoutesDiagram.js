import React, { Component } from 'react';

class FlaskRoutesDiagram extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lines: []
        };
    }

    handleInputChange = (event) => {
        const text = event.target.value;
        const lines = text.split('\n'); // Splitting the text by newline character
        
        for(var l in lines){
            var row = lines[l];
            if(row.includes(":") && row.includes("/")){
                console.log(row);
            }
        }
        
        this.setState({ lines });
    }

    render(){
        return  <div>
            <textarea 
                onChange={this.handleInputChange} 
                placeholder="Type here..."
                rows="10"
                cols="50"
            />
            <div>
                <strong>Lines:</strong>
                <pre>{JSON.stringify(this.state.lines, null, 2)}</pre>
            </div>
    </div>
    }

    renderExample() {
        const { routes } = this.state;
        const boxWidth = 200;
        const boxHeight = 50;
        const gap = 30;

        return (
            <svg width="100%" height={routes.length * (boxHeight + gap)} style={{ border: "1px solid black" }}>
                {routes.map((route, index) => (
                    <React.Fragment key={index}>
                        <rect 
                            x="50" 
                            y={index * (boxHeight + gap)} 
                            width={boxWidth} 
                            height={boxHeight} 
                            fill="lightblue" 
                            stroke="black" />
                        <text 
                            x="55" 
                            y={index * (boxHeight + gap) + 25} 
                            fill="black">
                            {route.name}
                        </text>
                        {index < routes.length - 1 && (
                            <line 
                                x1="50" 
                                y1={(index + 1) * (boxHeight + gap)} 
                                x2="50" 
                                y2={(index * (boxHeight + gap)) + boxHeight} 
                                stroke="black" />
                        )}
                    </React.Fragment>
                ))}
            </svg>
        );
    }
}

export default FlaskRoutesDiagram;
