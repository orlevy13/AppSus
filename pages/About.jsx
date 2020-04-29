import eventBus from '../services/eventBusService.js';

export default function About() {
    eventBus.emit('set-page', { app: 'about' });
    return (
        <React.Fragment>
            <div className="about">

                <h1>{`<{  Or_Levy_`}</h1>
                <h1>&&</h1>
                <h1>{`        _Michael_Michaeli  }>`}</h1>
                <img src="./assets/img/about.jpg" />
            </div>
        </React.Fragment>
    )
}