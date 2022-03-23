// import styles from './Notification.module.css'
import styled from 'styled-components';

export default function Notification(props) {
    return (
        <Box level={props.level}>
            <Title level={props.level}>{props.title}</Title>
            <p>{props.description}</p>
            <p><a>close notification</a></p>
        </Box>
    )
}

function getLevelColor(level) {
    if(level === 'danger') return 'red';
    else if (level === 'warning') return 'orange';
    return '#333333';
}
const Box = styled.div`
    background-color: rgba(255, 255, 255, 0.829);
    border: 2px solid ${props => getLevelColor(props.level)};
    padding: 8px 16px;
    margin-bottom:24px;
`;

const Title = styled.h3`
    color: ${props => getLevelColor(props.level)};
`;
