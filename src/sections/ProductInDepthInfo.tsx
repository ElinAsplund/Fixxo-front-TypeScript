import React from 'react'

const ProductInDepthInfo: React.FC = () => {
    return (
        <section className="product-in-depth-info">
            <div className="container">
                <div className="product-top-menu">
                    <div className="header-holder btn-no-corners">
                        <button className='more-info-btn'>
                            Description
                            <div className="red-underline"></div>
                        </button>
                        <button className='more-info-btn d-none d-sm-block'>
                            Additional
                            <div className="red-underline"></div>
                        </button>
                        <button className='more-info-btn'>
                            Shopping & Returns
                            <div className="red-underline"></div>
                        </button>
                        <button className='more-info-btn'>
                            Reviews
                            <div className="red-underline"></div>
                        </button>
                    </div>
                </div>
                <div className="text-holder" id="description-Text">
                    <p>Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard.</p>
                    <ul>
                        <li>Village did removed enjoyed explain nor ham saw calling talking.</li>
                        <li>Securing as informed declared or margaret.</li>
                        <li>Joy horrible moreover man feelings own shy.</li>
                    </ul>
                    <p>On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem.</p>
                </div>
            </div>
        </section>
    )
}

export default ProductInDepthInfo