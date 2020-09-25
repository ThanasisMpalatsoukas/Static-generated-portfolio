import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const HeaderData = ({info, icon}) => {
    return (
      <div class="flex-initial text-gray ml-4">
        <div className="flex" style={{height:'100%'}}>
          <div className="mb-0 mr-2" style={{alignSelf:'center'}}>
            {info}
          </div>
          <div style={{alignSelf:'center'}}>
            <FontAwesomeIcon icon={icon} />
          </div>
        </div>
      </div>
    )
}
