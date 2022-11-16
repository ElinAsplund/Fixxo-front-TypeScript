import React from 'react'
import { IExternalLinkIcon } from '../models/sectionModel'

const ExternalLinkIcon: React.FC <IExternalLinkIcon> = ({link, icon}) => {
  return (
    <a href={link} target="_blank"><i className={icon}></i></a>
  )
}

export default ExternalLinkIcon