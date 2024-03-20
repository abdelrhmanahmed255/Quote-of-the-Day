

var quotesArray = [
    {'author': 'Marilyn Monroe', 
      'quote': `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`
    },
    {'author': 'Oscar Wilde', 
      'quote': `“Be yourself; everyone else is already taken.”`
    },
    {'author': 'Frank Zappa', 
      'quote': '“So many books, so little time.”'
    },
    {'author': 'Albert Einstein', 
      'quote': `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`
    },
    {'author': 'Dr. Seuss', 
      'quote': `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`
    },
    {'author': 'Mae West', 
      'quote': '“You only live once, but if you do it right, once is enough.”'
    },
    {'author': ' Mark Twain', 
      'quote': `“If you tell the truth, you don't have to remember anything.”`
    },
    {'author': 'Jim Rohn', 
      'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
    'author': 'Eleanor Roosevelt',
    'quote': 'The future belongs to those who believe in the beauty of their dreams.'
    },
    {
    'author': 'Albert Einstein',
    'quote': 'Life is like riding a bicycle. To keep your balance, you must keep moving.'
    },
    {
    'author': 'Maya Angelou',
    'quote': 'If you don’t like something, change it. If you can’t change it, change your attitude.'
    },
    {
    'author': 'Audrey Hepburn',
    'quote': 'The most important thing is to enjoy your life—to be happy—it’s all that matters.'
    },
    {
    'author': 'Steve Jobs',
    'quote': 'Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.'
    },
    {
    'author': 'Nelson Mandela',
    'quote': 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
    },
    {
    'author': 'C.S. Lewis',
    'quote': 'You are never too old to set another goal or to dream a new dream.'
    },

  {
      'author': 'مارلين مونرو',
      'quote': 'أنا أنانية وغير متحملة ومترددة قليلاً. أرتكب أخطاء، وأنا خارجة عن السيطرة وفي بعض الأحيان صعبة التعامل معها. ولكن إذا لم تتمكن من التعامل معي في أسوأ حالاتي، فبالتأكيد لا تستحقني في أفضل حالاتي.'
  },
  {
      'author': 'أوسكار وايلد',
      'quote': 'كن نفسك؛ الجميع آخرون بالفعل.'
  },
  {
      'author': 'فرانك زابا',
      'quote': 'كتب كثيرة، ووقت قليل.'
  },
  {
      'author': 'ألبرت أينشتاين',
      'quote': 'شيئان لا حصر لهما: الكون وغباء الإنسان؛ ولست متأكدًا من الكون.'
  },
  {
      'author': 'الدكتور سوس',
      'quote': 'تعرف أنك في حب عندما لا يمكنك النوم لأن الواقع أفضل بكثير من أحلامك.'
  },
  {
      'author': 'مايا أنجلو',
      'quote': 'إذا لم تحب شيئًا، فغيره. وإذا لم تستطع تغييره، فغير موقفك.'
  },
  {
      'author': 'مارك توين',
      'quote': 'إذا كنت تقول الحقيقة، فليس عليك أن تتذكر أي شيء.'
  },
  {
      'author': 'جيم رون',
      'quote': 'انتبه من ما تصبح عليه أثناء السعي وراء ما تريده.'
  },
  {
      'author': 'إلينور روزفلت',
      'quote': 'المستقبل ينتمي لأولئك الذين يؤمنون بجمال أحلامهم.'
  },
  {
      'author': 'ألبرت أينشتاين',
      'quote': 'الحياة مثل ركوب الدراجة. للحفاظ على توازنك، يجب أن تستمر في التحرك.'
  },
  {
      'author': 'أودري هيبورن',
      'quote': 'الشيء الأهم هو الاستمتاع بحياتك - أن تكون سعيدًا - هذا كل ما يهم.'
  },
  {
      'author': 'ستيف جوبز',
      'quote': 'سيملأ عملك جزءًا كبيرًا من حياتك، والطريقة الوحيدة لتكون راضيًا حقًا هي القيام بما تعتقد أنه عمل عظيم.'
  },
  {
      'author': 'نيلسون مانديلا',
      'quote': 'أعظم مجد في الحياة ليس في أننا لا نسقط أبدًا، ولكن في أننا نرتفع في كل مرة نسقط فيها.'
  },
  {
      'author': 'سي. إس. لويس',
      'quote': 'أنت لست أبدًا كبيرًا جدًا لتحديد هدف آخر أو لحلم حلمًا جديدًا.'
  },
  {
      'author': 'هيلين كيلر',
      'quote': 'القليل من الفكر يتحول إلى عمل مقنع.'
  },
  {
      'author': 'ملكة إليزابيث الثانية',
      'quote': 'لا أقلّل من أي شيء بسبب النظرة. إن الحقيقة الكاملة تعطي صورة أوضح.'
  }
];

var usedRandomNumbers = [];

function dynamicQuote() {
    
for (var i = 0; i<quotesArray.length; i++) {

      
        var randomNumber = Math.floor(Math.random() * quotesArray.length);
        
        
        if (!usedRandomNumbers.includes(randomNumber)) {
           
            usedRandomNumbers.push(randomNumber);

            document.getElementById('quoteP').innerHTML = quotesArray[randomNumber].quote;
            document.getElementById('quoteA').innerHTML = quotesArray[randomNumber].author;

            break;
        }
    }
    // console.log(usedRandomNumbers);
if (usedRandomNumbers.length === quotesArray.length) 
    { 
         usedRandomNumbers = [];
    }     


}

