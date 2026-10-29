// Steady Bear journey: why each part of the app exists.
// Shared by index.html (reading + listening) and record.html (recording).
window.JOURNEY = [
  {
    key: 'welcome', emoji: '\uD83D\uDC3B', title: 'Why Steady Bear exists',
    zh_title: '为什么有这个小熊', zh_summary: '开始：这个应用想帮他做什么——把脑子里的事放到一个可靠的地方。',
    why: [
      'An anxious, ADHD brain does two expensive things at once: it tries to hold every open task in memory, and it keeps checking whether something has been forgotten. Both drain the energy you need for the actual work.',
      'Steady Bear is built to take over that holding and checking. If everything lives somewhere you trust, your head can stop running laps around it.',
      'ADHD researcher Russell Barkley puts it simply: put the information where the work happens instead of relying on memory. A phone that is always in your pocket is that place.'
    ],
    how: [
      'Each chapter covers one tool: what it is for, and the smallest way to use it. Read one a day, or all of them now. There is no wrong pace.',
      'You don\u2019t need every tool. Keep the ones that help and ignore the rest.'
    ],
    tryIt: null
  },
  {
    key: 'capture', emoji: '\u2795', title: 'Get it out of your head',
    zh_title: '把念头写下来', zh_summary: '随手记录：任何念头几秒钟就记下，不用整理，脑子就能放下它。',
    why: [
      'Unfinished things keep tapping you on the shoulder. Psychologists Masicampo and Baumeister found that making a concrete plan for an unfinished goal reduced those intrusive thoughts, even before the goal was done.',
      'Writing it down is the first half of that. The thought has a home, so your brain can let go of guarding it.'
    ],
    how: [
      'Tap the orange + from any screen. Type it or tap Speak. Save. Done in under ten seconds.',
      'Don\u2019t sort, don\u2019t polish, don\u2019t decide. Half a sentence is enough. The only rule is speed.'
    ],
    tryIt: { label: 'Capture something now', act: 'capture' }
  },
  {
    key: 'inbox', emoji: '\uD83D\uDCE5', title: 'Capture now, decide later',
    zh_title: '先记下，再决定', zh_summary: '收件箱：记下的事情先放着，有空的时候再一次性分类。',
    why: [
      'Deciding is work. If every capture forced a decision, you\u2019d stop capturing. Keeping the two apart makes capture effortless and decisions calmer.',
      'Sorting in one sitting also beats sorting in fragments: you see everything together, so it\u2019s easier to tell what actually matters.'
    ],
    how: [
      'Once or twice a day, open Inbox and give each item one tap: Task, Today, Worry, Keep as note, or Delete.',
      'Delete is a good answer. Plenty of thoughts only needed to be written down once.'
    ],
    tryIt: { label: 'Open the inbox', act: 'go', v: 'inbox' }
  },
  {
    key: 'three', emoji: '\u2B50', title: 'Just three things',
    zh_title: '每天只选三件事', zh_summary: '今天的三件事：每天只挑三件最重要的事，其他的可以安心地等。',
    why: [
      'A long to-do list feels like a verdict: whatever you do, most of it stays undone. That feeling feeds both anxiety and the ADHD freeze.',
      'Three is small enough to finish and big enough to matter. When the three are done, the day counts as a good day, whatever else is still on the list.'
    ],
    how: [
      'Each morning, star up to three tasks. Pick the ones that would make you think \u201ctoday went well\u201d tonight.',
      'Everything else is still safely written down. It\u2019s waiting, not forgotten.'
    ],
    tryIt: { label: 'Pick today\u2019s three', act: 'go', v: 'tasks' }
  },
  {
    key: 'checkin', emoji: '\uD83C\uDF21\uFE0F', title: 'Ten seconds of noticing',
    zh_title: '十秒钟的自我观察', zh_summary: '每日签到：记录心情、焦虑、专注和睡眠，慢慢看出规律。',
    why: [
      'Putting a feeling into words tends to turn its volume down. Brain-imaging studies of \u201caffect labeling\u201d found that naming an emotion calms the brain\u2019s alarm response a little.',
      'Over weeks the numbers show patterns no single day can: how sleep shapes focus, which days run anxious, whether a change is helping. That\u2019s also useful to bring to your prescriber.'
    ],
    how: [
      'Once a day, tap four numbers. The note is optional. The first number that comes to mind is the right one.'
    ],
    tryIt: { label: 'Check in now', act: 'checkin' }
  },
  {
    key: 'meds', emoji: '\uD83D\uDC8A', title: 'A log, not a judge',
    zh_title: '用药记录', zh_summary: '只是记录吃药的时间，不给任何用药建议；防止忘记或多吃。',
    why: [
      '\u201cDid I already take it?\u201d is one of the most common ADHD questions. One tap ends the guessing and makes a double dose much less likely.',
      'The app only records what your prescriber set. It never suggests a change. Decisions about medication stay between you and your prescriber.',
      'This section is always private: never shared and never sent to any AI.'
    ],
    how: [
      'Tap Log dose when you take it. Forgot to log? Use \u201cTook it earlier?\u201d with the real time.',
      'Now and then, tap a dose to note focus, appetite and sleep. Those notes make prescriber visits more useful.'
    ],
    tryIt: { label: 'Open medication', act: 'go', v: 'meds' }
  },
  {
    key: 'breathe', emoji: '\uD83C\uDF0A', title: 'A longer breath out',
    zh_title: '4-7-8 呼吸', zh_summary: '慢慢吸气、屏住、更慢地呼气，让身体从紧张里慢下来。',
    why: [
      'Anxiety lives in the body as much as in thoughts. Slow breathing with a longer exhale is one of the most reliable ways to nudge the body from alert toward rest.',
      'To be honest about the evidence: the exact 4-7-8 count isn\u2019t specially proven. The slow pace and the long exhale do the work, and the counting gives a racing mind something to hold.'
    ],
    how: [
      'In through your nose for 4, hold for 7, out through your mouth for 8. Follow the circle.',
      'If holding for 7 feels like too much, use Easy mode. A minute is enough to notice a difference.'
    ],
    tryIt: { label: 'Breathe now', act: 'go', v: 'calm' }
  },
  {
    key: 'worry', emoji: '\uD83D\uDDC2\uFE0F', title: 'Worries get an appointment',
    zh_title: '给担心安排时间', zh_summary: '担心的事先停放起来，到固定的时间再处理：变成一个行动，或者放下。',
    why: [
      'Trying not to worry rarely works. Postponing it often does. In studies of \u201cworry postponement,\u201d people who parked worries for a set time later in the day worried less overall.',
      'A parked worry isn\u2019t ignored. It\u2019s scheduled, which is why your brain will agree to put it down for now.'
    ],
    how: [
      'When a worry shows up, capture it, then sort it as Worry. Later, open Calm and give each one an answer: make it a task, or let it go.',
      'If a worry has no next step you can take, letting it go is the honest choice, not a failure.'
    ],
    tryIt: { label: 'See parked worries', act: 'go', v: 'calm' }
  },
  {
    key: 'ahead', emoji: '\uD83E\uDDED', title: 'What comes next',
    zh_title: '接下来会有什么', zh_summary: '之后会加入：下班收尾、专注计时、日记、梦境日记和自定义日常。',
    why: [
      'Next comes a five-minute shutdown ritual at the end of the workday, so you can stop thinking about work because you know every loop is written down.',
      'After that: focus sessions and a start-small button for stuck tasks, a journal and dream journal, and routines you design yourself.',
      'Each one will get its own chapter here when it arrives, with the same question answered first: why is this worth doing?'
    ],
    how: [
      'For now, use whichever tools from the earlier chapters felt helpful. That\u2019s the whole assignment.'
    ],
    tryIt: null
  }
];
