import React from 'react';
// import './styles.css';

export default ({black})=>{
    return(
        <header className={black ?"black" : ''}>
            <div className="header--logo">
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo"/> */}
                <img src="https://minermaq.com.br/wp-content/uploads/2019/08/topo-site.jpg" alt="logo"/>
            </div>
            {/* <div className="header--user">
                <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"  alt="logo"/>
            </div> */}
        </header>
    )
}