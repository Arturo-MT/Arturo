import React from 'react'
import { FormattedMessage } from 'react-intl'
import ContactForm from './Subcomponents/ContactForm'
import ContactLinks from './Subcomponents/ContactLinks'

function Contact () {
  return (
    <div id="contact" className="mt-24">
        <h2 className="divideH2 my-8 text-3xl text-white font-bold text-center relative">
          <FormattedMessage id="contact-header" defaultMessage="" />
        </h2>
        <div className="contact-container mx-auto max-w-5xl grid grid-cols-2 justify-between">
          <ContactForm />
          <ContactLinks />
        </div>
    </div>
  )
}

export default Contact
