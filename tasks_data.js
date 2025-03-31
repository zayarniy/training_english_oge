const tempText={
  task3Text2:"<strong>You have to talk continuously.</strong>",
  materials: 'tasks/ОГЭ Тренажер 12 вариантов.pdf',
  headerTask1: 'Task 1. You are going to read the text aloud. You have 1.5 minutes to read the text silently, and then be ready to read it aloud. Remember that you will not have more than 2 minutes for reading aloud.',
  headerTask2: 'Task 2. You are going to take part in a telephone survey. You have to answer six questions. Give full answers to the questions. Remember that you have 40 seconds to answer each question.',
  headerTask22: 'Task 2. Electronic assistant',  
}

let task =
{
  description: ``,
  task1:
  {

    header: tempText.headerTask1,
    text: ``
  },
  task2:
  {
    header: tempText.headerTask2,
    header2: tempText.headerTask22,
    tapescripts: ['',
      ''],
    interviewer: ["", '', '', '', '', '', '']
  },
  task3:
  {
    header: '',
    text: `<br> 
        • <br>
        • <br>
        • <br>
        • <br>`,
    text2: tempText.task3Text2
  },
  materials: tempText.materials
}

let task1 =
{
  description: `Вариант 1. School`,
  task1:
  {

    header: tempText.headerTask1,
    text: `School life can be quite interesting and sometimes a bit challenging. Many students consider wearing a uniform to be just a part of their everyday schedule. Uniforms are designed to create a sense of equality and community, allowing students to focus more on their studies rather than fashion. However, not everyone agrees with this approach. Some students feel that uniforms stop them from expressing their personality. The relationship between teachers and teenagers is another important aspect of school life. Teachers are there to guide and support, helping students understand complex subjects while encouraging personal growth. The best teacher-pupil relationships are based on mutual respect and understanding. However, misunderstandings can occur. Teenagers might sometimes feel that teachers do not appreciate their unique perspectives or the challenges they face outside of school. Open communication can help bridge this gap, allowing teachers to see students as individuals with their own stories.`
  },
  task2:
  {
    header: 'Task 2. You are going to take part in a telephone survey. You have to answer six questions. Give full answers to the questions. Remember that you have 40 seconds to answer each question. ',
    header2: 'Tapescript for Task 2 ',
    tapescripts: ['Electronic assistant: Hello! It’s the electronic assistant of the Independent Polling Company.',
      'We kindly ask you to take part in our survey.','We need to find out how people feel about school. Please answer six questions.',
    'The survey is anonymous – you don’t have to give your name. So, let’s get started.'],
    interviewer: ['Electronic assistant: How can you make new friends at school?', 
      'Electronic assistant: How do you feel when someone is not nice to you in class?',
      'Electronic assistant: What can you say to help a friend who’s just failed an exam?',
      'Electronic assistant: Have you ever quarreled with your friends at school? Why?',
      'Electronic assistant: Is it important to have friends at school? Why?',
      'Electronic assistant: How do you keep in touch with your school friends when you are absent?',
      'Electronic assistant: This is the end of the survey. Thank you very much for your cooperation.']
  },
  task3:
  {
    header: 'Task 3. You are going to give a talk about school problems. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences).',
    text: `Remember to say:<br> 
        • what kind of school problems you have faced<br>
        •	how you cope with school problems<br>
        •	if it’s difficult to solve school issues on your own<br>
        •	how teenagers can support each other when someone is struggling with schoolwork<br>`,
    text2: tempText.task3Text2
  },
  materials:tempText.materials 
}


let task2 =
{
  description: `Вариант 2. Life in the city and in the country`,
  task1:
  {

    header: tempText.headerTask1,
    text: `Living in a city has perks, but so does life in a village. In a village, you wake up to birds tweeting instead of traffic, find peace, green spaces, and friendly neighbours. People know each other well, making it feel like a big family. However, some conveniences found in cities, like public transport and shops, may be missed. City life offers endless opportunities with concerts, museum exhibitions, and new restaurants. You can experience different cultures all in one place. But it can feel fast-paced, crowded, and noisy, making it hard to find a quiet spot to relax. Choosing between a city and a village depends on what you value more: the excitement of city life or the calmness of village living. Each has unique charm and potential challenges.`
  },
  task2:
  {
    header: tempText.headerTask2,
    header2: tempText.headerTask22,
    tapescripts: ['Electronic assistant: Hello! It’s the electronic assistant of the Independent Polling Company.',
      'We kindly ask you to take part in our survey.',
      'We need to find out how people feel about living in cities or towns.',
      'Please answer six questions. ',
      'The survey is anonymous – you don’t have to give your name.',
      'So, let’s get started.'],
    interviewer: ['Electronic assistant: Where is your hometown located?', 
      'Electronic assistant: How long have you been living in your city, town or village?',
      'Electronic assistant: What is it famous for?',
      'Electronic assistant: When was it founded?',
      'Electronic assistant: What is your favourite place? Why?',
      'Electronic assistant: What would you like to improve in your hometown to make it a better place to live?',
      'Electronic assistant: This is the end of the survey. Thank you very much for your cooperation.']
  },
  task3:
  {
    header: 'Task 3. You are going to give a talk about different places of living. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences).',
    text: `Remember to say:<br> 
        •	Whether you live in the country or in the city;<br>
        •	What the disadvantages of living in the city and in the country are;<br>
        •	What the advantages of living in the city and in the country are;<br>
        •	What your attitude to moving to another city is.<br>`,
    text2: tempText.task3Text2
  },
  materials:tempText.materials 
}




let task3 =
{
  description: `Вариант 3. Природа: флора и фауна. Проблемы экологии. Защита окружающей среды. Климат, погода. Стихийные бедствия`,
  task1:
  {

    header: tempText.headerTask1,
    text: `Natural disasters are serious events that can cause a lot of damage and suffering. There are different types of natural disasters. One common type is earthquakes. They happen when the ground shakes, and they can destroy buildings and roads. Another type is floods, which occur when there is too much rain, and water covers land. Hurricanes are strong storms with heavy winds and rain. They can cause a lot of destruction in coastal areas. Wildfires are also dangerous; they can spread quickly in dry areas and burn forests and homes. Lastly, there are tornadoes, which are very strong winds that can destroy everything in their path.  Natural disasters remind us to respect nature and its power. It is important to be prepared for these events and to have a plan to stay safe.`,

  },
  task2:
  {
    header: tempText.headerTask2,
    header2: tempText.headerTask22,
    tapescripts: ['Hello! It’s the electronic assistant of the Independent Polling Company. We kindly ask you to take part in our survey.',
      'We need to find out how people feel about weather conditions in our region. Please answer six questions. The survey is anonymous – you don’t have to give your name. So, let’s get started'],
    interviewer: ["Electronic assistant: What's the weather usually like in your hometown?", 'Electronic assistant: Does the weather affect your mood?', 'Electronic assistant: How do rainy days make you feel?', 'Electronic assistant: What’s your favourite season of the year? Why?', 'Electronic assistant: Do you prefer hot or cold weather? Why?', 'Electronic assistant: Have you experienced any extreme weather conditions?', 'Electronic assistant: This is the end of the survey. Thank you very much for your cooperation.']
  },
  task3:
  {
    header: 'Task 3. You are going to give a talk about environmental problems. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences). ',
    text: `Remember to say:<br> 
        • if you have seen any problems in your city related to the environment, what they are; <br>
        • why it is important to protect nature; <br>
        • what simple actions you can take to help the environment; <br>
        • what your attitude to environmental education at school is.<br>`,
    text2: tempText.task3Text2
  },
  materials: tempText.materials
}


let task4 =
{
  description: `Вариант 4. Family relationships`,
  task1:
  {

    header: tempText.headerTask1,
    text: `A conflict for many people is a negative situation, when people tend to argue, hurt each other or even fight. Sometimes conflicts become extreemely acute and trigger bulling or other negative social effects. Unwanted words or actions not always turn to strong disagreement. Conflicts as a form of communication is a part of everyday experience in case both sides respectfully express their views. Conflicts can be positive if the participants learn how to deal with them. Conflicts aquire essential competences to navigate everyday setbacks. Children in the middle school can have a challenging period as they can take impulsive decisions and their emotions are intense. But they gain knowledge and experience if we are positive and this will give them a tool kit of interpersonal and social skills.`,

  },
  task2:
  {
    header: 'Task 2. Teenagers’ relationships with other people.',
    header2: tempText.text2,
    tapescripts: ['Hello! It’s the electronic assistant of the Independent Polling Company. We kindly ask you to take part in our survey.',
      'We need to find out how people feel about weather conditions in our region. Please answer six questions. The survey is anonymous – you don’t have to give your name. So, let’s get started'],
    interviewer: ["How much time a day do you spend with your family?", 'Is it important to build good relationships with teachers?', 'Do you have conflicts with peers? Why?', 'Do you have conflicts with peers? Why?', 'What is the main reason for conflicts in your opinion?', 'What can young people do to avoid conflicts with parents?', 'What would you recommend to your friends to improve the relationship with their classmates?']
  },
  task3:
  {
    header: 'You are going to give a talk about family traditions. You will have to start in 1,5 minutes and speak for not more than 2 minutes (10-12 sentences).',
    text: `Remember to say:<br> 
    -	what family traditions you have in your family;<br>
    -	who you get along better in your family;<br>
    -	if your family traditions are extraverted or intraverted;<br>
    -	if you would like your own family in future be different. How? Why?`,
    text2: "<strong>You have to talk continuously.</strong>"
  },
  materials: tempText.materials
}


let task5 =
{
  description: `Вариант 5. Household chores `,
  task1:
  {

    header: tempText.headerTask1,
    text: `Household chores are essential tasks that help keep a home clean and comfortable. While some people enjoy them, others find them monotonous or tiring. Still, everyone should help out. Common chores include washing dishes, vacuuming, doing laundry, and taking out the trash. More challenging jobs—like cleaning the refrigerator or scrubbing the bathtub—are done weekly or monthly. Children as young as 7 can set the table or feed pets. Teenagers, from 13 to 18, often mow the lawn, cook meals, or walk the dog. Chores teach responsibility and independence. In a family of four, if each person does chores for 30 minutes a day, that adds up to 2 hours daily, or 14 hours a week. That’s a lot of help! Though chores may seem inconvenient, they are a normal part of life. When everyone works together, the house stays clean—and life runs more smoothly.`,

  },
  task2:
  {
    header: 'Task 2. Teenagers’ relationships with other people.',
    header2: tempText.text2,
    tapescripts: ['Hello! It’s the electronic assistant of the Independent Polling Company. We kindly ask you to take part in our survey.',
      'We need to find out how people feel about maintaining a large house.','Please answer six questions.','The survey is anonymous – you don’t have to give your name.','So, let’s get started.'],
    interviewer: ['Electronic assistant: Do you live in a house or a flat?','Electronic assistant: What do you think about sales and discounts? Are they helpful?','Electronic assistant: Have you ever made a shopping list before going to the store?',
      'Electronic assistant: Do advertisements influence your shopping decisions? How?','Electronic assistant: What is the last present you bought for someone else?','Electronic assistant: How do you think shopping habits will change in the future?',
      'Electronic assistant: This is the end of the survey. Thank you very much for your cooperation.'
    ]
  },
  task3:
  {
    header: 'You are going to give a talk about family traditions. You will have to start in 1,5 minutes and speak for not more than 2 minutes (10-12 sentences).',
    text: `Remember to say:<br>         
    •	what household chores you usually do at home;<br>         
    •	whether you think it’s important to help your family with chores, and why;<br>         
    •	what chores are the easiest and what are the most difficult for you;<br>         
    •	what your attitude to doing chores is.`,
    text2: tempText.task3Text2
  },
  materials: tempText.materials
}

let task6 =
{
  description: `Вариант 6. Shopping`,
  task1:
  {

    header: tempText.headerTask1,
    text: `Shopping is an everyday activity that most people do, whether they enjoy it or not. We shop for food, clothes, gifts, and many other things. Some prefer supermarkets, while others enjoy boutiques or online stores. A typical shopping list might include vegetables, toothpaste, bread, and soap. Some items, like furniture or electronics, are bought less often and can be quite expensive. Smart shoppers compare prices, look for discounts, and check product quality before buying. Many people shop once or twice a week. For example, if someone spends 45 minutes shopping three times a week, that’s over 2 hours spent in stores. Over a year, it adds up to more than 100 hours! Shopping also helps improve skills like budgeting and decision-making. Though it can be exhausting, it’s also a way to learn responsibility. Whether you shop quickly or take your time, shopping is part of modern life.`
  },
  task2:
  {
    header: tempText.headerTask2,
    header2: tempText.headerTask22,
    tapescripts: ['Hello! It’s the electronic assistant of the Independent Polling Company. We kindly ask you to take part in our survey.',
      'We need to find out how people feel about shopping.','Please answer six questions.','The survey is anonymous – you don’t have to give your name.','So, let’s get started.'],
    interviewer: ['Electronic assistant: Do you prefer shopping alone or with someone else? Why?', 
    'Electronic assistant: What do you think about sales and discounts? Are they helpful?',
    'Electronic assistant: Have you ever made a shopping list before going to the store?',
    'Electronic assistant: Do advertisements influence your shopping decisions? How?',
    'Electronic assistant: What is the last present you bought for someone else?',
    'Electronic assistant: How do you think shopping habits will change in the future?',
    'Electronic assistant: This is the end of the survey. Thank you very much for your cooperation.']
  },
  task3:
  {
    header: 'Task 3. You are going to give a talk about shopping. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences).',
    text: `Remember to say:<br> 
    -	what types of shops do you know;<br>
    -	how often do you go shopping with your family and what do you usually buy;<br>
    -	whether you prefer online or offline shopping;<br>
    -	what your attitude to shopping is`,
    text2: tempText.task3Text2
  },
  materials: tempText.materials
}


//let currentTask=task1;
allTasks = [task1, task2,task3,task4,task5,task6]