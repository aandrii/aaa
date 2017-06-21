import React from 'react';


import './LoginPage.less';



const LoginPage = React.createClass({
    render() {
        return (
            <div className='LoginPage'>  

                <div className="LoginPageBanner"> 

                    <div className='LoginPageText'> 
                        <h1>Hello Reactf</h1>
                        <p>Duis ex velit nisi proident commodo pariatur laborum qui occaecat consequat non culpa.</p>                        
                    </div>

                    <img
                        src='/img/bac.jpg'
                        className='LoginPageImage'
                    />
                        
                </div>
            </div>
        );
    }
});

export default LoginPage;