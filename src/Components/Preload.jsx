import React from 'react';

function Preload(props) {
    return (
        <div>
            <div id="loader-wrapper">
                <div id="loader">
                    <div className="cssload-spinner">
                        <div className="cssload-ball cssload-ball-1"></div>
                        <div className="cssload-ball cssload-ball-2"></div>
                        <div className="cssload-ball cssload-ball-3"></div>
                        <div className="cssload-ball cssload-ball-4"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Preload;