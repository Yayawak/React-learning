import { useState } from 'react';
import BoxInput from './BoxInput';
import BoxOutput from './BoxOutput';
import styled from 'styled-components';
function App() {
    const [ bmi, setBmi ] = useState(null);
    return (
        <AppSection>
            <AppContainer>
                <h2>เว็พแอพคำนวณ BMI</h2>
                <BoxInput onCalculateBmi={setBmi} />
                <BoxOutput bmi={bmi} />
            </AppContainer>
        </AppSection>
        
    );
}

const AppSection = styled.section`
    padding: 20px;
`;

const AppContainer = styled.section`
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
`;

export default App;
