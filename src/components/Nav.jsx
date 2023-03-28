import React from 'react';
import {Link} from 'react-router-dom';

function Nav()
{
    return(
        <div>
                <Link to="/">Home page</Link><br/>
                <Link to="/about">About page</Link><br/>
                 {/* <Link to="*"> error page</Link> */}
                 <Link to ="/get">Show Data</Link><br/>
                 <Link to="/post">Create Data</Link><br/>
                 <Link to="/delete">Delete Data</Link>

                
                {/* <a href="user">User</a>   d/f b/w <a></a> and <link></link> tag is use of link tag
                  page not refreshed but use of anchor tag page is refereshed. */}
               
        </div>
    )
}

export default Nav;