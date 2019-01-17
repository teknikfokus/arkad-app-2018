const initialState = {
  aboutUs:
    'An awesome fair for almost all students in the E-house',
  openingHours: [
    { date: '12 Februrary', time: '10:00-16:00' },
    { date: '13 Februrary', time: '10:00-16:00' }
  ],
  aboutArkadTeam:
    'Teknikfokus consist of the Project Group and Hosts. Around 100 hosts works together with the project group.',

  arkadTeam: [
    {
      title: 'Project group',
      data: [
        {
          key: '0',
          name: 'Johan Vikstrand',
          role: 'Project Manager',
          image: require('../../resources/img/johan.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/christian-håkansson-762223b4'
        },
        {
          key: '1',
          name: 'Jonathan Frisk',
          role: 'Project Manager',
          image: require('../../resources/img/jonathan.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/simon-lage-holmqvist/'
        },
        {
          key: '2',
          name: 'Elin Hanstorp',
          role: 'Head of IT',
          image: require('../../resources/img/elin.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/elinhanstorp/'
        },
        {
          key: '3',
          name: 'Keiwan Mosaddegh',
          role: 'Business Manager',
          image: require('../../resources/img/keiwan.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/axel-adelgren-4a15a1161'
        },
        {
          key: '4',
          name: 'Olivia Wiaczek',
          role: 'Business Manager',
          image: require('../../resources/img/olivia.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/louise-pettersson-2b2296153'
        },
        {
          key: '5',
          name: 'Måns Lindeberg',
          role: 'Head of Logistics',
          image: require('../../resources/img/mans.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/nicolas-munke-cilano/'
        },
        {
          key: '6',
          name: 'Ceclilia Huang',
          role: 'Head of Marketing',
          image: require('../../resources/img/cecilia.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/elinbranzell'
        },
        {
          key: '7',
          name: 'Björn Johnsson',
          role: 'Event Manager',
          image: require('../../resources/img/bjorn.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/erik-hagman-ba8120158/'
        },
        {
          key: '8',
          name: 'Sanna Nordberg',
          role: 'Head of Recruitment',
          image: require('../../resources/img/sanna.jpg'),
          linkedInUrl: 'https://www.linkedin.com/in/andreas-mattsson-76127915a'
        }
      ]
    }
  ],
  theApp:
  'This application was devloped based on the ARKAD app 2018 that was developed by Daniel Tovesson, Fredrik Siemund, Gustav Lilja and John Helbrink',
  faq: {
    forStudents: [
      {
        key: '0',
        name: 'Before the fair',
        list: [
          {
            key: '0',
            question: 'Can I get involved in ARKAD 2018 now?',
            answer: 'Unfortunately it is too late to get involved now.'
          },
          {
            key: '1',
            question: 'Do I have to be prepared and bring CV or something similar to the fair?',
            answer:
              'ARKAD is for everyone and you do not have to prepare anything special. However, to get more out of the fair it is always good to know what you are looking for, which companies you are interested in or maybe some questions you want answers to. And if you don’t know any of this, ARKAD is the perfect place to find that out!'
          },
          {
            key: '2',
            question: 'What is Student Session, and how can I apply?',
            answer:
              'Student sessions are a great way to establish contact with a diverse range of companies. Generally, a session consists of a 20-25 minute one-on-one talk with a representative of a company. The topics can range from internships, trainee programs, summer jobs, thesis projects, other forms of employment and much more. It all depends on what the company is looking for and what they are offering. Applications are open until October 19th.'
          },
          {
            key: '3',
            question: 'Where are the Student Sessions taking place?',
            answer:
              'They will be in the E-building. If you are going to have a student session you will receive an email with more detailed information.'
          }
        ]
      },
      {
        key: '1',
        name: 'Events',
        list: [
          {
            key: '0',
            question: 'What events are there, and when are they?',
            answer:
              'You find all the events under “Events” in the menu on the website or in the app'
          },
          {
            key: '1',
            question: 'How do I sign up for the events?',
            answer: 'You can sign up in the app or on the website under “Events”'
          },
          {
            key: '2',
            question: 'How do I know if I have signed up for an event?',
            answer: 'You will get a confirmation sent to the email you used when you registered.'
          },
          {
            key: '3',
            question:
              'I have signed up for an event but I will not be able to attend it, what do I do?',
            answer:
              'Send an email to event.arkad@tlth.se and inform that you will not be able to make it to the event, then your spot goes to someone on the waiting list.'
          }
        ]
      },
      {
        key: '2',
        name: 'During the fair',
        list: [
          {
            key: '0',
            question: 'What else than networking with companies can ARKAD do for me?',
            answer:
              'ARKAD offers something called the Career Room.  The Career Room is a preparatory, inspiring opportunity for individual career coaching. You can ask any working life-related questions. Some examples are questions about job interviews, how to sell yourself and how to negotiate your salary. It’s completely up to you what the visit will be about. In addition to the career coaching, you get a professional CV photo. A visit takes about 15 minutes and can be booked outside the room or on the website. '
          },
          {
            key: '1',
            question:
              'How do I know which companies are interested in me, or which companies I should look for?',
            answer:
              'In the app you can see all the companies and use filters to help you find what you are looking for.'
          },
          {
            key: '2',
            question: 'Which companies will be at ARKAD?',
            answer:
              'You can find all the companies who will attend ARKAD at arkadtlth.se/companies or in the app.'
          },
          {
            key: '3',
            question: 'During what time is the fair open?',
            answer: 'Wednesday 14/11: 10.00-16.00\nThursday 15/11: 10.00 - 15.00'
          },
          {
            key: '4',
            question: 'During what times is the Info Desk open?',
            answer:
              'Tuesday 13/11: 15.00-18.00\nWednesday 14/11: 8.00-16.00\nThursday 15/11: 9.30-15.30'
          },
          {
            key: '5',
            question: 'Who gets to use the wardrobe?',
            answer:
              'The wardrobe is available for all Hosts and company representatives. The wardrobes are located in Kårhuset, Matteannexet and in Studiecentrum. These are open during the days, but we don’t take responsibility for your personal belongings.'
          },
          {
            key: '6',
            question: 'Where is ARKAD?',
            answer:
              'ARKAD is this year taking place in four houses, Matteannexet, Studiecentrum, Kårhuset and the E-building.'
          },
          {
            key: '7',
            question: 'Where is the Info Desk?',
            answer: 'There is one Info Desk in every house where the fair takes place.'
          },
          {
            key: '8',
            question: 'Can I apply for Student Sessions now?',
            answer: 'No, the application closed the 19th October.'
          }
        ]
      },
      {
        key: '3',
        name: 'Banquet',
        list: [
          {
            key: '0',
            question: 'Who gets to go to the Banquet?',
            answer:
              'Representatives from the companies and students involved in ARKAD gets invited to the Banquet.'
          },
          {
            key: '1',
            question: 'Where is the Banquet?',
            answer:
              'The Banquet is at Sparbanken Skåne Arena. The address is:\nStattenavägen 25\n222 28 Lund.'
          },
          {
            key: '2',
            question:
              'Will I as a student have the opportunity to meet and converse with company representatives during the Banquet?',
            answer:
              'Yes. You will be seated next to a company representative during the dinner, and during the mingle and the after party you have time to talk to the companies as well.'
          },
          {
            key: '3',
            question: 'What is a drink voucher?',
            answer:
              'A drink voucher is a voucher you can exchange for a drink. One voucher gives an alcohol free drink, two vouchers a beer/cider/glass of wine and three vouchers a drink or a shot.'
          },
          {
            key: '4',
            question: 'What is the dress code?',
            answer: 'Semi formal (mörk kostym)'
          }
        ]
      },
      {
        key: '4',
        name: 'Other',
        list: [
          {
            key: '0',
            question: 'How many companies are coming to ARKAD?',
            answer:
              'About 190 companies plus startups and other associations. If you want to know which companies are coming go to arkadtlth.se/companies.'
          }
        ]
      }
    ],
    forCompanies: [
      {
        key: '0',
        name: 'Before the fair',
        list: [
          {
            key: '0',
            question: 'What is included in the Exhibition-package?',
            answer:
              ' - An exhibitor booth of 3x2 meters with a maximum height of 2.3 meters\n- Exposure through our website and mobile applications\n- Access to a Career Fair Host\n- Access to lounge, wardrobe and information desk\n- Breakfast, coffee and refreshments during both days of the fair\n- Lunch tickets to four (4) representatives per day\n- Two (2) tickets to the ARKAD Banquet\n- Two (2) parking tickets per day\n- Access to Wi-fi and electrical outlets\n- Low tables and chairs\n- Free shuttle service in Lund'
          },
          {
            key: '1',
            question:
              'Can we get extra supplies to our exhibitor stand area when we are at the fair?',
            answer: 'We can not guarantee extra supplies beyond what you already have ordered.'
          },
          {
            key: '2',
            question: 'At what times can we mount and prepare our exhibitor stand?',
            answer:
              'Wednesday 14/11 between 8.00 and 9.30 am if you are standing in Kårhuset. If you are in one of the other buildings you have the possibility to do it on Tuesday 13/11 15.00-18.00, or on Wednesday between 8.00 and 9.30 am.'
          },
          {
            key: '3',
            question: 'Can we apply for Student Sessions now?',
            answer: 'No, the last day of the application has already past.'
          },
          {
            key: '4',
            question: 'What is the delivery address?',
            answer:
              'Kårhuset, ARKAD\nSölvegatan 22B\n223 62 Lund\nReference: Cecilia Nordenö\nTelephone: 0763-415256'
          },
          {
            key: '5',
            question: 'At what times is the goods reception open?',
            answer: 'Friday 9/11: 13.00-17.00\nMonday 12/11: 8.00-17.00\nTuesday 13/11: 8.00-17.00'
          },
          {
            key: '6',
            question: 'Why do we have to inform about our representatives?',
            answer:
              'We have to know the names of the representatives who want to have access to the wi-fi and of those who want to go to the Banquet. If some of your representatives only attend the fair during one day, we still need you to fill in their names.'
          },
          {
            key: '7',
            question: 'Who do I contact if I want to know our placement or have other questions?',
            answer:
              'Your Career Fair Host will have all the answers you need. Your Career Fair Host will contact you before the fair.'
          },
          {
            key: '8',
            question: 'How does the shuttle service work?',
            answer:
              'Before 24/10 you can order shuttle service in the application. If you want to order Shuttle service after that, send an email to bilbokning.arkad@tlth.se. During the fair, you can book shuttle service at the info-desk in Matteannexet, but we can not guarantee that it’s always available. We offer to drive or pick up company representatives within Lund for free. We can also pick up or drop off at the airport in Malmö to an extra cost of 200 SEK, one way. The cars leave from the parking lot behind Matteannexet and they have signs which read “Shuttle Service” on them. We do not offer shuttle service to the Banquet.'
          }
        ]
      },
      {
        key: '1',
        name: 'During the fair',
        list: [
          {
            key: '0',
            question: 'Where can we park our car?',
            answer:
              'There will be several parking lots around campus, see the map for the exact positions. If you need extra parking tickets you can buy them at the Info Desks at the fair, the price is 25 SEK. You can also use the machines at the parking.'
          },
          {
            key: '1',
            question: 'During what times is the Info Desk open?',
            answer:
              'Tuesday 13/11: 15.00-18.00\nWednesday 14/11: 8.00-16.00\nThursday 15/11: 9.30-15.30'
          },
          {
            key: '2',
            question: 'Where is the closest lounge?',
            answer:
              'There are lounges in Matteannexet, Studiecentrum and in the E-building. Please see the map for the exact position of the lounges.'
          },
          {
            key: '3',
            question: 'Who do I contact if I have questions during the fair?',
            answer: 'Your Career Fair Host or the Info Desks.'
          },
          {
            key: '4',
            question:
              'Where do we get the envelope with parking tickets, Banquet tickets, wi-fi code etc?',
            answer: 'You get them at the Info desk or from your Career Fair Host.'
          },
          {
            key: '5',
            question: 'Can we buy extra lunch tickets?',
            answer:
              'There are 75 extra lunch tickets, you can buy them at the info-desk but when they are out we can not offer lunch to more people.'
          },
          {
            key: '6',
            question: 'Where is the lunch?',
            answer:
              'The lunch is served at Moroten och Piskan (MoP), a restaurant located on the second floor in Kårhuset. The seating however, will be divided between MoP and Cornelis which is located on the first floor in Kårhuset.'
          },
          {
            key: '7',
            question: 'Where can we get lunch if we don’t have lunch tickets?',
            answer:
              'There are a few lunch-places around campus, for salads you have Grönt & Gott, for pizza or falafel you have Gott & Nära, both of them situated close to Helsingkronatornet. If you want a sandwich or other cold lunches all the houses on campus have their own café where you can buy cheap and nice lunches.'
          },
          {
            key: '8',
            question:
              'Is it ok to have competitions or live demonstrations in our exhibitor stand?',
            answer:
              'Yes, however please keep in mind that you may only use your assigned space and to follow safety precautions.'
          }
        ]
      },
      {
        key: '2',
        name: 'The Banquet',
        list: [
          {
            key: '0',
            question: 'Where is the Banquet?',
            answer:
              'The Banquet is at Sparbanken Skåne Arena. The address is:\nStattenavägen 25\n222 28 Lund.\nParking is available if you would like to go there by car.'
          },
          {
            key: '1',
            question: 'Can we get extra tickets to the Banquet?',
            answer: 'The time for extra tickets has unfortunately expired.'
          },
          {
            key: '2',
            question: 'We have tickets to the Banquet that will not be used, what do we do?',
            answer: 'You can hand these in at the info desks.'
          },
          {
            key: '3',
            question: 'What is a drink voucher?',
            answer:
              'A drink voucher is a voucher you can exchange for a drink. One voucher gives a non-alcoholic drink, two vouchers a beer/cider/glass of wine and three vouchers a drink or a shot.'
          },
          { key: '4', question: 'What is the dress code?', answer: 'Semi formal (mörk kostym)' },
          {
            key: '5',
            question:
              'Will I as exhibitor representative be placed next to the students whose education is strongly connected to my corporate work at the Banquet?',
            answer:
              'We will place students and the exhibitor representatives next to each other so that they make the best of each other’s company. So the student’s education combined with the focus of area of the exhibitor will be taken into account at the placement. This to the extent possible.'
          },
          {
            key: '6',
            question:
              'Will there be an opportunity to meet and converse with students during the Banquet?',
            answer:
              'The Banquet is a chance for the exhibitor representatives to meet ambitious students in a relaxed environment. There will be opportunities for conversation during the mingle, the dinner and after party, which will offer both dance floors and lounge area.'
          }
        ]
      },
      {
        key: '3',
        name: 'Other',
        list: [
          {
            key: '0',
            question: 'What educations are there on LTH?',
            answer:
              'LTH offers a lot of different engineering and architecture educations. For a list of all educations follow the link below http://www.lth.se/utbildning/ .'
          },
          {
            key: '1',
            question: 'When can we send back goods after the fair?',
            answer: 'Thursday 15/11: 15.00-17.00\nFriday 16/11: 8.00-13.00'
          }
        ]
      }
    ]
  }
}

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default aboutReducer
