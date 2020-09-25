import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab);

export const Profile = ({profile}) => {
    return (
        <div className="bg-white border border-gray-400 ml-5" style={{
            height:'auto',
            width:'100%',
          }}>
            <div className="flex justify-center" style={{width:'100%'}}>
              <img className="mt-2 pt-4 pl-4 pr-4" src={profile} alt="My profile." />
            </div>
            <div className="ml-4">
              <h4 className="mb-0 text-lg">Sakis bal</h4>
              <h5 className="text-gray-700 mb-1">Software developer</h5>
              <p className="text-gray-600 text-xs pr-5">
              I am a freelancer and software engineer student studying at the technical institute of Thessaly located in Larissa.
              </p>
              <a href="https://github.com/ThanasisMpalatsoukas" rel="noreferrer" target="_blank" alt="My github."><FontAwesomeIcon icon={["fab", "github"]} className="text-4xl mb-4" /></a>
              <a href="https://web.facebook.com/sakis.mpalatsoukas.5/" rel="noreferrer" target="_blank" alt="My facebook."><FontAwesomeIcon icon={["fab", "facebook"]} className="text-4xl mb-4 ml-3" /></a>
            </div>

          </div>
    )
}