import SideBar from '../cmps/SideBar.jsx';
import emailService from '../services/emailService.js';

export default function EmailDetails() {

    //get email through match params
    return (
        <section className="email-details-page">
            <SideBar></SideBar>
            <section className="email-details">
                <div className="email-header">
                    <h1>Subject is here</h1>
                    <div className="flex space-between">
                        <p>From: Seneca</p>
                        <div>
                            <p>Wednesday 22/04/2020</p>
                            {/* <button title="Star" onClick={() => {
                                emailService.toggleAtt(email.id, 'isStarred')
                                    .then(() => {
                                        console.log('star toggled!')
                                        eventBus.emit('emails-changed', null)
                                    });
                            }} className="star-btn">
                                <img height="15" src={starImgSrc} />
                            </button> */}
                        </div>
                    </div>
                </div>
                <p className="email-details-body">
                    Body here
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis cum in voluptatem porro,
                    voluptatum maiores
                    quisquam autem sapiente alias earum reprehenderit exercitationem minus. Voluptatum repellendus
                    odit, ea explicabo atque velit!
                 </p>
            </section>
        </section>
    )
}