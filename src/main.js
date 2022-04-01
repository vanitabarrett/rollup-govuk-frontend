import './index.scss'

import { Accordion, CharacterCount } from 'govuk-frontend'

var $accordion = document.querySelector('[data-module="govuk-accordion"]');
new Accordion($accordion).init();

var $characterCount = document.querySelector('[data-module="govuk-character-count"]')
new CharacterCount($characterCount).init()
