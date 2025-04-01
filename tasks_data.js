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

let task7 =
{
  description: `Вариант 7. Media `,
  task1:
  {

    header: tempText.headerTask1,
    text: `Media is a way we receive news, ideas, and entertainment. It includes newspapers, television, radio, and online platforms. Media helps people stay informed about local and global events. On July 20, 1969, millions of people around the world watched the first moon landing live on television. It was a historic moment shared through media. In November 1989, news reports showed the fall of the Berlin Wall, helping people understand its importance. Today, many people read news online or watch videos. If someone spends 3 hours a day using media, that adds up to over 1,000 hours a year! Media is everywhere—in our homes, schools, and even on our phones. It is important to use media wisely. Reading different sources and thinking carefully about what we see helps us understand the world better. Media is a powerful tool that can educate, connect, and inspire people across the globe.`
  },
  task2:
  {
    header: tempText.headerTask2,
    header2: tempText.headerTask22,
    tapescripts: ['Hello! It’s the electronic assistant of the Independent Polling Company.',
      'We kindly ask you to take part in our survey.',
      'We need to find out how people feel about social media.',
      'Please answer six questions.',
      'The survey is anonymous – you don’t have to give your name.',
      'So, let’s get started.'],
    interviewer: ['Electronic assistant: How often do you use social media?', 
    'Electronic assistant: What do you usually do on social media?',
    'Electronic assistant: How do you protect your privacy when using social media?',
    'Electronic assistant: Do you follow any educational or informative pages? Why or why not?',
    'Electronic assistant: In your opinion, what is the biggest benefit of social media today?',
    'Electronic assistant: Do you think social media affects the way people communicate in real life? How?',
    'Electronic assistant: This is the end of the survey. Thank you very much for your cooperation.']
  },
  task3:
  {
    header: 'Task 3. You are going to give a talk about news. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences).',
    text: `Remember to say:<br> 
• what sources of news you know; <br>
• if you trust the news you read or watch, and why;<br>
• whether you think it’s important for young people to follow the news, and why; <br>
• what your attitude to discussing news with others is.<br>`
,
    text2: tempText.task3Text2
  },
  materials: tempText.materials
}


let task8 =
{
  description: `Вариант 8. Gadgets`,
  task1:
  {

    header: tempText.headerTask1,
    text: `Gadgets are electronic tools that make life easier or more fun. Some common gadgets include smartphones, tablets, headphones, smartwatches, and e-readers. These devices are used for communication, learning, work, and entertainment. The first mobile phone call was made on April 3, 1973, by Martin Cooper. Since then, gadgets have changed a lot. In 2007, the first iPhone was released, and it quickly became a popular device around the world. Many people use gadgets every day. If someone spends 4 hours a day using gadgets, that’s over 1,400 hours a year! While gadgets are useful, it’s important to take breaks and rest your eyes. Gadgets help with learning, too. Students can use tablets to read books, watch science videos, or practice math online. Some schools even give students digital devices. Gadgets are a big part of modern life. When used responsibly, they can enhance how we live and learn.`
  },
  task2:
  {
    header: tempText.headerTask2,
    header2: tempText.headerTask22,
    tapescripts: ['Electronic assistant: Hello! It’s the electronic assistant of the Independent Polling Company.',
      'We kindly ask you to take part in our survey.',
      'We need to find out how people feel about using gadgets.',
      'Please answer six questions.',
      'The survey is anonymous – you don’t have to give your name.',
      'So, let’s get started.'],
    interviewer: [
    'Electronic assistant: Do you think people are too dependent on gadgets today? Why or why not?', 
    'Electronic assistant: Have you ever had problems because a gadget stopped working? What happened?',
    'Electronic assistant: What gadget do you find the most useful, and why?',
    'Electronic assistant: Do you think children should have access to gadgets? At what age?',
    'Electronic assistant: Is it difficult for you to take a break from gadgets? Why?',
    'Electronic assistant: In your opinion, how will gadgets change in the future?',
    'Electronic assistant: This is the end of the survey. Thank you very much for your cooperation.']
  },
  task3:
  {
    header: 'Task 3. You are going to give a talk about gadgets. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences). ',
    text: `Remember to say:<br> 
• what gadgets you use most often and why;<br>
• how gadgets help people in their daily lives;<br>
• whether people rely too much on gadgets nowadays, and why;<br>
• what your attitude to using gadgets at school is.`
,
    text2: tempText.task3Text2
  },
  materials: tempText.materials
}

let task9 =
{
  description: `Вариант 9. Sports`,
  task1:
  {

    header: tempText.headerTask1,
    text: `Sports are a great way to stay healthy, active, and strong. They help improve your fitness, boost your mood, and reduce stress. Playing sports also supports better sleep and stronger concentration in school. Doctors recommend at least 60 minutes of physical activity every day for children and teenagers. That adds up to 420 minutes a week, or 1,800 minutes a month! Even short sessions of running, swimming, or playing football can make a big difference. Sports also help build muscles, improve balance, and make your heart stronger. People who play sports regularly have more energy and feel more confident. Team sports like basketball or volleyball teach cooperation and discipline, while individual sports like tennis or cycling improve focus and self-control. You don’t have to be the best—what matters is that you move. When you stay active, your body and mind both become healthier and happier.`
  },
  task2:
  {
    header: tempText.headerTask2,
    header2: tempText.headerTask22,
    tapescripts: ['Electronic assistant: Hello! It’s the electronic assistant of the Independent Polling Company.',
      'We kindly ask you to take part in our survey.',
      'We need to find out how people feel about extreme sports.',
      'Please answer six questions.',
      'The survey is anonymous – you don’t have to give your name.',
      'So, let’s get started.'],
    interviewer: [
    'Electronic assistant: Do you agree that extreme sports are too dangerous? Why?', 
    'Electronic assistant: What are some examples of extreme sports do you know?',
    'Electronic assistant: Do you think doing extreme sports requires any special traits of character? Which ones?',
'Electronic assistant: What do you think makes extreme sports attractive to some people?',
'Electronic assistant: What safety measures do you think are essential for someone participating in extreme sports?',
'Electronic assistant: Should extreme sports be banned for safety reasons? Why or why not?',
'Electronic assistant: This is the end of the survey. Thank you very much for your cooperation.'
]
  },
  task3:
  {
    header: 'Task 3. You are going to give a talk about sports. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences). ',
    text: `Remember to say:<br> 
• what kinds of sports you enjoy watching or doing, and why;<br>
• how often you do sports or physical activities;<br>
• whether it’s better to do sports alone or with others, and why;<br>
• what your attitude to sports competitions at school is.<br>`
,
    text2: tempText.task3Text2
  },
  materials: tempText.materials
}


let task10 =
{
  description: `Вариант 10. Sports`,
  task1:
  {

    header: tempText.headerTask1,
    text: `Education is one of the most valuable things in life. It helps people become more intelligent, confident, and independent. Through education, we learn how to read, write, solve problems, and think critically. A good education teaches more than just facts. It helps people understand the world, respect others, and make smart decisions. It also builds important life skills like communication, creativity, and discipline. Education opens doors to better jobs, new ideas, and exciting opportunities. It gives people the power to improve their lives and help their communities. It also teaches us to be curious, ask questions, and never stop learning. Whether you learn in a classroom, at home, or through books and experiences, education helps you grow as a person. It shapes your future and gives you the tools to reach your goals. Education is not just important—it’s the foundation for a better life.`
  },
  task2:
  {
    header: tempText.headerTask2,
    header2: tempText.headerTask22,
    tapescripts: [
      'Electronic assistant: Hello! It’s the electronic assistant of the Independent Polling Company.',
      'We kindly ask you to take part in our survey.',
      'We need to find out how people feel about education.',
      'Please answer six questions.',
      'The survey is anonymous – you don’t have to give your name.',
      'So, let’s get started.'],
    interviewer: [
      'Electronic assistant: When do you usually feel most motivated to study?',
      'Electronic assistant: Where do you prefer to study—at home, in a library, or somewhere else? Why?',      
      'Electronic assistant: Are school uniforms a good idea in your opinion?',       
      'Electronic assistant: Should students be allowed to use smartphones during lessons?',      
      'Electronic assistant: Do you agree that education plays a key role in a person’s life? Why?',      
      'Electronic assistant: What skills do you think schools should teach more of nowadays?',      
      'Electronic assistant: This is the end of the survey. Thank you very much for your cooperation.'
      
]
  },
  task3:
  {
    header: 'Task 3. You are going to give a talk about education. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences).',
    text: `Remember to say:<br> 
•	what subjects you enjoy studying at school, and why;<br>
•	what helps you study more effectively;<br>
•	whether it is better to study alone or with others, and why;<br>
•	what your attitude to online learning is.`,
    text2: tempText.task3Text2
  },
  materials: tempText.materials
}


let task11 =
{
  description: `Вариант 11. Career`,
  task1:
  {

    header: tempText.headerTask1,
    text: `A career is more than just a job—it’s the path you choose for your working life. People build their careers based on their interests, skills, and goals. Some choose to become architects, engineers, or pharmacists. A good career can offer many benefits. Some jobs come with perks like flexible hours, free lunches, or health insurance. Others offer bonuses for good performance or promotions to higher positions with more responsibility and better pay. However, not every career path is easy. Sometimes, companies reduce staff, and a person may be made redundant. It can be disappointing, but it’s also a chance to learn new skills or change direction. Choosing the right career takes time and effort. When you follow your passion, work hard, and stay motivated, your career can be exciting, rewarding, and full of opportunities.`
  },
  task2:
  {
    header: tempText.headerTask2,
    header2: tempText.headerTask22,
    tapescripts: [
      'Electronic assistant: Hello! It’s the electronic assistant of the Independent Polling Company.',
      'We kindly ask you to take part in our survey.',
      'We need to find out how people feel about career choice.',
      'Please answer six questions.',
      'The survey is anonymous – you don’t have to give your name.',
      'So, let’s get started.'],
    interviewer: [
      'Electronic assistant: Do you think it is important to choose a career that you enjoy? Why or why not?',
      'Electronic assistant: What are some popular career choices among young people today?',      
      'Electronic assistant: Who or what influences people the most when choosing a career path?',      
      'Electronic assistant: How can schools help students prepare for future careers?',      
      'Electronic assistant: Do you agree that job satisfaction is more important than a high salary? Why?',      
      'Electronic assistant: Are part-time jobs useful for teenagers? Why or why not?',      
      'Electronic assistant: This is the end of the survey. Thank you very much for your cooperation.'          
]
  },
  task3:
  {
    header: 'Task 3. You are going to give a talk about career path. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences). ',
    text: `Remember to say:<br> 
•	what career you would like to choose in the future, and why;<br>
•	what skills or qualities are important for that career;<br>
•	if you would like to follow in your parents’ footsteps or choose a different path, and why;<br>
•	what your attitude to changing careers later in life is.<br>
`,
    text2: tempText.task3Text2
  },
  materials: tempText.materials
}


let task12 =
{
  description: `Вариант 12. Leisure activities`,
  task1:
  {

    header: tempText.headerTask1,
    text: `Hobbies and leisure activities are a great way to enjoy your free time. People often spend 1 to 3 hours a day on hobbies, which adds up to over 700 hours a year! That time can help improve your mood, reduce stress, and boost creativity. Some popular hobbies include photography, painting, cooking, and learning new languages. Others enjoy more active pastimes like swimming, cycling, or dancing. These activities don’t just pass time—they also teach useful skills and help improve concentration and patience. Group hobbies like playing in a band or joining a sports team help people make friends and feel more connected. Even solo hobbies, like reading or gardening, bring peace and satisfaction. It’s important to choose hobbies that make you feel happy and motivated. When you enjoy what you do in your free time, it makes life more balanced, interesting, and full of positive energy.`
  },
  task2:
  {
    header: tempText.headerTask2,
    header2: tempText.headerTask22,
    tapescripts: [
      'Electronic assistant: Hello! It’s the electronic assistant of the Independent Polling Company.',
      'We kindly ask you to take part in our survey.',
      'We need to find out how people feel about leisure activities.',
      'Please answer six questions.',
      'The survey is anonymous – you don’t have to give your name.',
      'So, let’s get started.'],
    interviewer: [
      'Electronic assistant: Are hobbies a good way to reduce stress? Why?',
      'Electronic assistant: How do you usually spend your weekends?',      
      'Electronic assistant: Do you prefer indoor or outdoor leisure activities? Why?',       
      'Electronic assistant: How has technology changed the way people spend their free time?',      
      'Electronic assistant: Do you think leisure activities are important for mental health? Why?',      
      'Electronic assistant: Does the place where you live affect your choice of leisure activities?',      
      'Electronic assistant: This is the end of the survey. Thank you very much for your cooperation.'
      
]
  },
  task3:
  {
    header: 'Task 3. You are going to give a talk about hobbies. You will have to start in 1.5 minutes and speak for not more than 2 minutes (10–12 sentences).',
    text: `Remember to say:<br> 
•	why having a hobby is important;<br>
•	how hobbies can help reduce stress or improve mental health;<br>
•	whether expensive hobbies are better or more enjoyable than simple ones;<br>
•	what your attitude is to people who have no hobbies at all.`,
    text2: tempText.task3Text2
  },
  materials: tempText.materials
}
//let currentTask=task1;
allTasks = [task1, task2,task3,task4,task5,task6,task7,task8, task9,task10,task11,task12]