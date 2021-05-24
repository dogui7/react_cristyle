import React from 'react';

function User(props){
    return(
        <React.Fragment>
            <tr>
                <td><strong>{props.id}</strong></td>
                <th><strong>{props.firstName}</strong></th>
                <th><strong>{props.lastName}</strong></th>
                <td><strong>{props.email}</strong></td>
            </tr>          
        </React.Fragment>
    )
}
export default User;