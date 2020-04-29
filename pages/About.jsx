import eventBus from '../services/eventBusService.js';

export default function About() {
    eventBus.emit('set-page', { app: 'about' });
    return (
        <h1>im the about</h1>
    )
}