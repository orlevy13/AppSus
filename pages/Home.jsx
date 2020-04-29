import eventBus from '../services/eventBusService.js';

export default function Home() {
    eventBus.emit('set-page', { app: 'home' });
    return (
        <h1>im the Home</h1>
    )
}