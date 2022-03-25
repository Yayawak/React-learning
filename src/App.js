import './App.css';
import Box from './Box';
import Grid from './Grid';
import Notification from './Notification';

function App() {
    return (
        <section className='app-section'>
            <div className='app-container'>
                <h2>Dashboard</h2>
                <Notification title='hello' description='click to be pro scammer!'
                    level='warning'/>
                <Grid columns={3}>
                    <Box title='ออเดอร์ต่อวัน'>                        <ul>
                            <li>3 กันยายน = 1,582 orders</li>
                            <li>2 กันยายน = 1,358 orders</li>
                            <li>1 กันยายน = 2,024 orders</li>
                        </ul>
                    </Box>
                    
                </Grid>
            </div>
        </section>
    );
}

export default App;
