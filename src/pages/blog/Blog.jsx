import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col lg={6}>
                        <h2>Tell us the differences between uncontrolled and controlled components.</h2>
                        <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally. They use a ref to access the DOM element's current value and update the state accordingly.</p>
                    </Col>
                    <Col lg={6}>
                        <h2>How to validate React props using PropTypes</h2>
                        <p>propTypes is used to verify the input type for props in react. If you try to put any other type, then it will give you warning in console. For example, if you set name should be string, but you pass something else like number then it will give you warning in console and also the result might get different. After you define patterns in for propTypes you should set default values for props as well.</p>
                    </Col>
                    <Col lg={6}>
                        <h2>Tell us the difference between nodejs and express js.</h2>
                        <p>
                            it’s not about major, they both have different purpose.

                            nodeJS is the core technology which works like engine.

                            expressJS on the other hand is the wrapper, expressJS provides a framework which can be used on top of nodeJS to provide you rich web functionality.

                            Think of nodeJS as an engine, now if you have the engine, you can develop a car structure around it and make it work. You would have to put wheels, implement braking system and what not.

                            expressJS is a pre-built car, which you can start using right away (if you know how to drive that is).

                        </p>
                    </Col>
                    <Col lg={6}>
                        <h2>What is a custom hook, and why will you create a custom hook?</h2>
                        <p>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.

                            That’s it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function. If that function calls other hooks, like useEffect, useState, or maybe another custom hook, then your function is itself a hook, and, by convention, should be given a name that starts with “use” to make it clear that it is a hook.</p>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default Blog;